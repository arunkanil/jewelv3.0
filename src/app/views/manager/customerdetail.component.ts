import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ModalDirective } from "ngx-bootstrap/modal";
import { ToastrService } from "ngx-toastr";
import { DataService } from "../../data.service";
import { FormBuilder, Validators } from "@angular/forms";
import { dateConverter } from "../../constants/columnMetadata";

@Component({
  templateUrl: "customerdetail.component.html",
})
export class ManagerCustomerDetailComponent implements OnInit {
  constructor(
    public dataservice: DataService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}
  @ViewChild("myModal") public myModal: ModalDirective;
  @ViewChild("saleModal") public saleModal: ModalDirective;
  @ViewChild("deleteModal") public deleteModal: ModalDirective;
  @ViewChild("commentModal") public commentModal: ModalDirective;

  id: any;
  loading = true;
  details: any = [];
  btnLoading = false;
  dateConverter = dateConverter;
  users: any = [];
  kpcallers: any = [];
  agentForm = this.fb.group({
    agent: ["", Validators.required],
  });
  saleForm = this.fb.group({
    CustomerStatus: ["", Validators.required],
    isSaleClosed: true,
    sale_closed_by:["", Validators.required],
    sale_remarks: ["", Validators.required],
    sale_closed_date: new Date().toISOString(),
  });
  commentForm = this.fb.group({
    RemarksText: ["", Validators.required],
    // event_date_time: ["", Validators.required],
  });

  ngOnInit(): void {
    this.getLists();
    this.activatedRouter.params.subscribe((params) => {
      this.id = params["id"];
    });
    this.dataservice
      .getSingleCustomer(this.id)
      .valueChanges.subscribe((result: any) => {
        console.log("getSingleCustomer", result.data.customer);
        this.details = result.data.customer;
        this.loading = false;
      });
  }
  getLists() {
    this.loading = true;
    this.dataservice
      .getUsers("FIELD_AGENT")
      .valueChanges.subscribe((result: any) => {
        console.log("FIELD_AGENT", result.data.users);
        this.users = result.data.users;
      });
    this.dataservice
      .getUsers("KP_CALLER")
      .valueChanges.subscribe((result: any) => {
        console.log("KP_CALLER", result.data.users);
        this.kpcallers = result.data.users;
      });
  }
  FormSubmit() {
    let resp = {};
    console.log(this.agentForm.value);
    this.dataservice
      .SetFieldAgent(this.agentForm.value.agent, this.details.id)
      .subscribe((result: any) => {
        resp = result.data;
        console.log("response", result);
        if (result.data.updateUser) {
          this.toastr.success("Field Agent assigned successfully!");
          this.myModal.hide();
        } else {
          this.toastr.error("Failed. Please check the fields!");
        }
      });
  }
  CommentSubmit() {
    let resp = {};
    console.log(this.commentForm.value);
    this.dataservice
      .AddCustomerComment(this.details.id, this.commentForm.value)
      .subscribe((result: any) => {
        resp = result.data;
        console.log("response", result);
        if (result.data.updateCustomer) {
          this.toastr.success("Comment added successfully!");
          this.commentModal.hide();
        } else {
          this.toastr.error("Failed. Please check the fields!");
        }
      });
  }
  deleteAgent() {
    let resp = {};
    this.dataservice.DeleteAgent(this.id).subscribe((result: any) => {
      resp = result.data;
      console.log("response", result);
      if (result.data.deleteTeleCallerContact) {
        this.toastr.success("Agent deleted successfully!");
        this.router.navigate(["/order/order_processing"]);
        this.deleteModal.hide();
      } else {
        this.toastr.error("Failed. Please check again!");
      }
    });
  }
  closeCustomer() {
    let resp = {};
    console.log(this.saleForm.value);
    this.dataservice
      .Updatecustomer(this.details.id, this.saleForm.value)
      .subscribe((result: any) => {
        resp = result.data;
        console.log("response", result);
        if (result.data.updateCustomer) {
          this.toastr.success("Sale closed successfully!");
          this.saleModal.hide();
        } else {
          this.toastr.error("Failed. Please check the fields!");
        }
      });
  }
}
