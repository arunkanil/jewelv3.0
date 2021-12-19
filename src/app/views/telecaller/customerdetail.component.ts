import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { ModalDirective } from "ngx-bootstrap/modal";
import { DataService } from "../../data.service";
import { FormBuilder, Validators } from "@angular/forms";
import { dateConverter } from "../../constants/columnMetadata";

@Component({
  templateUrl: "customerdetail.component.html",
})
export class CustomerDetailComponent implements OnInit {
  constructor(
    public dataservice: DataService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}
  @ViewChild("myModal") public myModal: ModalDirective;
  @ViewChild("deleteModal") public deleteModal: ModalDirective;
  @ViewChild("commentModal") public commentModal: ModalDirective;

  id: any;
  loading = true;
  details: any = [];
  dateConverter = dateConverter;
  btnLoading = false;
  groups: any = [];
  maplink: any = "";
  // agentForm = this.fb.group({
  //   name: ["", Validators.required],
  //   email: ["", Validators.required],
  //   phone1: ["", Validators.required],
  //   phone2: ["", Validators.required],
  //   phone3: ["", Validators.required],
  //   group: ["", Validators.required],
  // });
  commentForm = this.fb.group({
    RemarksText: ["", Validators.required],
    // event_date_time: ["", Validators.required],
  });

  ngOnInit(): void {
    this.getLists();
  }
  getLists() {
    this.loading = true;
    this.dataservice.getGroups().valueChanges.subscribe((result: any) => {
      console.log("getGroups", result.data.groups);
      this.groups = result.data.groups;
    });

    this.activatedRouter.params.subscribe((params) => {
      this.id = params["id"];
    });
    this.dataservice
      .getSingleCustomer(this.id)
      .valueChanges.subscribe((result: any) => {
        console.log("getSingleCustomer", result.data.customer);
        this.details = result.data.customer;
        this.maplink =
          "https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=" +
          result.data?.customer?.Address?.GeoLocation?.Latitude?.toString() +
          "," +" "+
          result.data?.customer?.Address?.GeoLocation?.Longitude?.toString() +
          "&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";
        console.log(this.maplink);
        // this.agentForm = this.fb.group({
        //   name: [this.details.Name, Validators.required],
        //   email: [this.details.Email, Validators.required],
        //   phone1: [this.details.Contact_Number_1, Validators.required],
        //   phone2: [this.details.Contact_Number_2, Validators.required],
        //   phone3: [this.details.Contact_Number_3, Validators.required],
        //   group: [this.details.group.Name, Validators.required],
        // });
        this.loading = false;
      });
  }
  // FormSubmit() {
  //   let resp = {};
  //   console.log(this.agentForm.value);
  //   this.dataservice
  //     .EditAgent(this.details.id, this.agentForm.value)
  //     .subscribe((result: any) => {
  //       resp = result.data;
  //       console.log("response", result);
  //       if (result.data.updateTeleCallerContact) {
  //         this.toastr.success("Agent edited successfully!");
  //         this.myModal.hide();
  //       } else {
  //         this.toastr.error("Failed. Please check the fields!");
  //       }
  //     });
  // }
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
          this.getLists();
        } else {
          this.toastr.error("Failed. Please check the fields!");
        }
      });
  }
  // deleteAgent() {
  //   let resp = {};
  //   this.dataservice.DeleteAgent(this.id).subscribe((result: any) => {
  //     resp = result.data;
  //     console.log("response", result);
  //     if (result.data.deleteTeleCallerContact) {
  //       this.toastr.success("Agent deleted successfully!");
  //       this.router.navigate(["/telecaller/agents"]);
  //       this.deleteModal.hide();
  //     } else {
  //       this.toastr.error("Failed. Please check again!");
  //     }
  //   });
  // }
}
