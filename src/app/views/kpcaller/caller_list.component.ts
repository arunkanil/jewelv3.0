import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { DataService } from "../../data.service";
import {
  customersColumn,
  DNFcustomersColumn,
} from "../../constants/columnMetadata";
import { filter } from "rxjs/operators";

@Component({
  templateUrl: "caller_list.component.html",
})
export class ButtonsComponent {
  rowSelection: string;
  constructor(
    public dataservice: DataService,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.columnDefs = [...customersColumn];
    this.rowSelection = "single";
  }

  filterForm = this.fb.group({
    year: [new Date().getFullYear(), Validators.required],
  });

  loading = true;
  btnLoading = false;
  title = "Verification";
  orders: any = {};
  columnDefs = [];

  rowData: any = [];
  January: any = [];
  February: any = [];
  March: any = [];
  April: any = [];
  May: any = [];
  June: any = [];
  July: any = [];
  August: any = [];
  September: any = [];
  October: any = [];
  November: any = [];
  December: any = [];

  selectedYear: any = new Date().getFullYear();
  years: any = [];
  private gridApi;
  private gridColumnApi;
  filter: any = {};

  ngOnInit(): void {
    this.loading = true;
    if (this.router.url === "/kpcaller/verification") {
      this.filter = {
        is_verified: false,
      };
      this.title = "Verification";
    } else if (this.router.url === "/kpcaller/assigned") {
      this.filter = {
        kp_id: localStorage.getItem("uid"),
      };
      this.title = "Assigned";
    } else {
      this.filter = {
        MarriageDate_null: true,
      };
      this.title = "Date Not Fixed";
      this.columnDefs = [...DNFcustomersColumn];
    }
    this.getLists(this.filter);
    console.log(this.router);
    let max = new Date().getFullYear() + 10;
    var min = max - 20;
    for (var i = max; i >= min; i--) {
      this.years.push({ year: i });
    }
    console.log(this.selectedYear);
  }
  getLists(filter) {
    this.dataservice
      .getCustomersFilter(filter)
      .valueChanges.subscribe((result: any) => {
        console.log("getCustomersFilter", result.data.customers);
        this.rowData = result.data.customers;
        this.filterBasedOnMonths();
      });
  }
  filterBasedOnMonths() {
    this.January = this.rowData.filter(
      (item) => new Date(item.MarriageDate).getMonth() == 0
    );
    this.February = this.rowData.filter(
      (item) => new Date(item.MarriageDate).getMonth() == 1
    );
    this.March = this.rowData.filter(
      (item) => new Date(item.MarriageDate).getMonth() == 2
    );
    this.April = this.rowData.filter(
      (item) => new Date(item.MarriageDate).getMonth() == 3
    );
    this.May = this.rowData.filter(
      (item) => new Date(item.MarriageDate).getMonth() == 4
    );
    this.June = this.rowData.filter(
      (item) => new Date(item.MarriageDate).getMonth() == 5
    );
    this.July = this.rowData.filter(
      (item) => new Date(item.MarriageDate).getMonth() == 6
    );
    this.August = this.rowData.filter(
      (item) => new Date(item.MarriageDate).getMonth() == 7
    );
    this.September = this.rowData.filter(
      (item) => new Date(item.MarriageDate).getMonth() == 8
    );
    this.October = this.rowData.filter(
      (item) => new Date(item.MarriageDate).getMonth() == 9
    );
    this.November = this.rowData.filter(
      (item) => new Date(item.MarriageDate).getMonth() == 10
    );
    this.December = this.rowData.filter(
      (item) => new Date(item.MarriageDate).getMonth() == 11
    );
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  onSelectionChanged(event) {
    var selectedRows = this.gridApi.getSelectedRows();
    console.log(selectedRows,event);
    this.router.navigate(
      ["/kpcaller/kp_customer_details", selectedRows[0].id, this.router.url],
      {
        state: { data: selectedRows },
      }
    );
  }
  filterSubmit() {
    this.filter = {
      ...this.filter,
      MarriageDate_gte: this.filterForm.value.year + "-01" + "-01",
      MarriageDate_lte: this.filterForm.value.year + "-12" + "-31",
    };
    console.log(this.filterForm.value, this.filter);
    this.getLists(this.filter);
  }
}
