import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ModalDirective } from "ngx-bootstrap/modal";
import { DataService } from "../../data.service";
import { FormBuilder, Validators } from "@angular/forms";
import { dateConverter } from "../../constants/columnMetadata";

@Component({
  templateUrl: "customerdetail.component.html",
})
export class KPCustomerDetailComponent implements OnInit {
  constructor(
    public dataservice: DataService,
    private activatedRouter: ActivatedRoute,
    private fb: FormBuilder
  ) {}
  @ViewChild("commentModal") public commentModal: ModalDirective;

  id: any;
  from: boolean = false;
  loading = true;
  details: any = [];
  btnLoading = false;
  dateConverter = dateConverter;
  groups: any = [];
  commentForm = this.fb.group({
    RemarksText: ["", Validators.required],
    // event_date_time: ["", Validators.required],
    is_verified: [false],
  });

  ngOnInit(): void {
    this.getLists();
    this.activatedRouter.params.subscribe((params) => {
      this.id = params["id"];
      if(params["from"] === "/kpcaller/verification"){
        this.from = true;
      }
    });
    this.dataservice.getSingleCustomer(this.id).valueChanges.subscribe((result: any) => {
      console.log("getSingleCustomer", result.data.customer);
      this.details = result.data.customer;
      this.loading = false;
    });
    console.log(this.from);
  }
  getLists() {
    this.loading = true;
    this.dataservice.getGroups().valueChanges.subscribe((result: any) => {
      console.log("getGroups", result.data.groups);
      this.groups = result.data.groups;
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
          alert("Comment added successfully!");
          this.commentModal.hide();
        } else {
          alert("Failed. Please check the fields!");
        }
      });
  }
}
