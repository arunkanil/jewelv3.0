import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ModalDirective } from "ngx-bootstrap/modal";
import { DataService } from "../../data.service";
import { FormBuilder, Validators } from "@angular/forms";
import { Months, dateConverter } from "../../constants/columnMetadata";

@Component({
  templateUrl: "agentdetail.component.html",
})
export class AgentDetailComponent implements OnInit {
  constructor(
    public dataservice: DataService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.Months = [...Months];
  }
  @ViewChild("myModal") public myModal: ModalDirective;
  @ViewChild("customerModal") public customerModal: ModalDirective;
  @ViewChild("deleteModal") public deleteModal: ModalDirective;
  @ViewChild("commentModal") public commentModal: ModalDirective;

  id: any;
  Months;
  dateConverter = dateConverter;
  loading = true;
  details: any = [];
  btnLoading = false;
  agents: any = [];
  groups: any = [];
  localities: any = [];
  postoffices: any = [];
  agentForm = this.fb.group({
    name: ["", Validators.required],
    email: [""],
    phone1: ["", Validators.required],
    phone2: [""],
    phone3: [""],
    group: [""],
  });
  customerForm;
  commentForm = this.fb.group({
    RemarksText: ["", Validators.required],
    // event_date_time: ["", Validators.required],
  });

  ngOnInit(): void {
    this.getLists();
    // this.activatedRouter.params.subscribe((params) => {
    //   this.id = params["id"];
    // });
  }
  getLists() {
    this.dataservice
      .getfilteredAgents(
        localStorage.getItem("uid"),
        "last_called_date_time:asc"
      )
      .valueChanges.subscribe((result: any) => {
        console.log("getSingleAgent", result.data.teleCallerContacts);
        this.details = result.data.teleCallerContacts[0];
        this.agentForm = this.fb.group({
          name: [this.details.Name, Validators.required],
          email: [this.details.Email],
          phone1: [this.details.Contact_Number_1, Validators.required],
          phone2: [this.details.Contact_Number_2],
          phone3: [this.details.Contact_Number_3],
          group: [this.details.group.Name],
        });
        this.customerForm = this.fb.group({
          NameOfBride: ["", Validators.required],
          NameOfFather: ["",],
          NameOfMother: ["",],
          MarriageDate: ["",],
          Contact_Number_1: ["", Validators.required],
          Contact_Number_2: ["",],
          MarriageMonth: ["", Validators.required],
          tele_caller_contact: [this.details.id],
          HouseName: ["",],
          Landmark: ["",],
          locality: ["",],
          Post_office: ["", Validators.required],
          Latitude: [""],
          Longitude: [""],
          GoogleMapURL: [""],
          GoogleMapPlusCode: [""],
        }); 
        this.loading = false;
      });
    this.dataservice.getGroups().valueChanges.subscribe((result: any) => {
      console.log("getGroups", result.data.groups);
      this.groups = result.data.groups;
    });
    this.dataservice.getLocalities().valueChanges.subscribe((result: any) => {
      console.log("getLocalities", result.data.localities);
      this.localities = result.data.localities;
    });
    this.dataservice.getAgents().valueChanges.subscribe((result: any) => {
      console.log("getAgents", result.data.teleCallerContacts);
      this.agents = result.data.teleCallerContacts;
    });
    this.dataservice.getPostOffices().valueChanges.subscribe((result: any) => {
      console.log("getPostOffices", result.data.postOffices);
      this.postoffices = result.data.postOffices;
    });
  }
  // dateConverter(date) {
  //   return new Date(date);
  // }
  FormSubmit() {
    let resp = {};
    console.log(this.agentForm.value);
    this.dataservice
      .EditAgent(this.details.id, this.agentForm.value)
      .subscribe((result: any) => {
        resp = result.data;
        console.log("response", result);
        if (result.data.updateTeleCallerContact) {
          this.toastr.success("Agent edited successfully!");
          this.myModal.hide();
          this.getLists();
        } else {
          this.toastr.error("Failed. Please check the fields!");
        }
      });
  }
  customerSubmit() {
    let resp = {};
    console.log(this.customerForm.value);
    this.dataservice
      .Addcustomer(this.customerForm.value)
      .subscribe((result: any) => {
        resp = result.data;
        console.log("response", result);
        if (result.data.createCustomer) {
          this.toastr.success("customer added successfully!");
          this.customerModal.hide();
          this.getLists();
        } else {
          this.toastr.error("Failed. Please check the fields!");
        }
      });
  }

  CommentSubmit() {
    let resp = {};
    console.log(this.commentForm.value);
    this.dataservice
      .AddComment(this.details.id, this.commentForm.value)
      .subscribe((result: any) => {
        resp = result.data;
        console.log("response", result);
        if (result.data.updateTeleCallerContact) {
          this.toastr.success("Comment added successfully!");
          this.commentModal.hide();
          this.getLists();
          // window.location.reload();
        } else {
          this.toastr.error("Failed. Please check the fields!");
        }
      });
  }
  deleteAgent() {
    let resp = {};
    this.dataservice.DeleteAgent(this.details.id).subscribe((result: any) => {
      resp = result.data;
      console.log("response", result);
      if (result.data.deleteTeleCallerContact) {
        this.toastr.success("Agent deleted successfully!");
        this.router.navigate(["/telecaller/agents"]);
        this.deleteModal.hide();
      } else {
        this.toastr.error("Failed. Please check again!");
      }
    });
  }
}
