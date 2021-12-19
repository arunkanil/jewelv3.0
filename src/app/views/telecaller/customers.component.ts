import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { ModalDirective } from "ngx-bootstrap/modal";
import { DataService } from "../../data.service";
import { FormBuilder, Validators } from "@angular/forms";
import { customersColumn, Months } from "../../constants/columnMetadata";

@Component({
  templateUrl: "customers.component.html",
})
export class CustomersComponent {
  rowSelection: string;
  constructor(
    public dataservice: DataService,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.columnDefs = [...customersColumn];
    this.Months = [...Months];
    this.rowSelection = "single";
  }

  @ViewChild("myModal") public myModal: ModalDirective;
  customerForm = this.fb.group({
    NameOfBride: ["", Validators.required],
    NameOfFather: ["", Validators.required],
    NameOfMother: ["", Validators.required],
    MarriageDate: ["", Validators.required],
    Contact_Number_1: ["", Validators.required],
    Contact_Number_2: ["", Validators.required],
    MarriageMonth: ["", Validators.required],
    tele_caller_contact: ["", Validators.required],
    HouseName: ["", Validators.required],
    Landmark: ["", Validators.required],
    locality: ["", Validators.required],
    Post_office: ["", Validators.required],
    Latitude: [""],
    Longitude: [""],
    GoogleMapURL: [""],
    GoogleMapPlusCode: [""],
  });
  loading = true;
  btnLoading = false;
  orders: any = {};
  columnDefs = [];
  Months;
  rowData: any = [];
  agents: any = [];
  localities: any = [];
  postoffices: any = [];
  private gridApi;
  private gridColumnApi;

  ngOnInit(): void {
    this.getLists();
  }
  getLists() {
    let filter = {
      added_by_user: localStorage.getItem("uid"),
    };
    this.loading = true;
    this.dataservice
      .getCustomersFilter(filter)
      .valueChanges.subscribe((result: any) => {
        console.log("getCustomers", result.data.customers);
        this.rowData = result.data.customers;
        this.loading = false;
      });
    this.dataservice.getLocalities().valueChanges.subscribe((result: any) => {
      console.log("getLocalities", result.data.localities);
      this.localities = result.data.localities;
    });
    this.dataservice.getPostOffices().valueChanges.subscribe((result: any) => {
      console.log("getPostOffices", result.data.postOffices);
      this.postoffices = result.data.postOffices;
    });
    this.dataservice.getAgents().valueChanges.subscribe((result: any) => {
      console.log("getAgents", result.data.teleCallerContacts);
      this.agents = result.data.teleCallerContacts;
    });
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  onSelectionChanged(event) {
    var selectedRows = this.gridApi.getSelectedRows();
    console.log(selectedRows);
    this.router.navigate(["/telecaller/customer_details", selectedRows[0].id], {
      state: { data: selectedRows },
    });
  }
  FormSubmit() {
    let resp = {};
    console.log(this.customerForm.value);
    this.dataservice
      .Addcustomer(this.customerForm.value)
      .subscribe((result: any) => {
        resp = result.data;
        console.log("response", result);
        if (result.data.createCustomer) {
          this.toastr.success("customer added successfully!");
          this.getLists();
          this.myModal.hide();
        } else {
          this.toastr.error("Failed. Please check the fields!");
        }
      });
  }
}
