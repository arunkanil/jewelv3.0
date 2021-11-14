(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-manager-manager-module"],{

/***/ "5Q6f":
/*!*************************************************!*\
  !*** ./src/app/views/manager/manager.module.ts ***!
  \*************************************************/
/*! exports provided: ManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerModule", function() { return ManagerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-angular */ "YFAK");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "Osdn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _verified_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./verified.component */ "Sx+e");
/* harmony import */ var _manager_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manager-routing.module */ "SOEm");
/* harmony import */ var _customers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customers.component */ "MPuI");
/* harmony import */ var _customerdetail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customerdetail.component */ "F9w6");
/* harmony import */ var _enquiries_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./enquiries.component */ "EIdz");
/* harmony import */ var _enquirydetails_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./enquirydetails.component */ "bmwW");

// Angular







// import { TypographyComponent } from './typography.component';
// Theme Routing





let ManagerModule = class ManagerModule {
};
ManagerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _manager_routing_module__WEBPACK_IMPORTED_MODULE_8__["ManagerRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridModule"].withComponents([]),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(),
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ],
        declarations: [
            _verified_component__WEBPACK_IMPORTED_MODULE_7__["VerifiedListComponent"],
            _customers_component__WEBPACK_IMPORTED_MODULE_9__["ManagerCustomerComponent"],
            _customerdetail_component__WEBPACK_IMPORTED_MODULE_10__["ManagerCustomerDetailComponent"],
            _enquiries_component__WEBPACK_IMPORTED_MODULE_11__["EnquiriesComponent"],
            _enquirydetails_component__WEBPACK_IMPORTED_MODULE_12__["EnquiryDetailComponent"]
        ]
    })
], ManagerModule);



/***/ }),

/***/ "ALhq":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/manager/enquirydetails.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div\r\n    bsModal\r\n    #deleteModal=\"bs-modal\"\r\n    class=\"modal fade\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n    aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\"\r\n  >\r\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body text-center\">\r\n          Do you want to delete this enquiry?\r\n        </div>\r\n        <div class=\"modal-footer justify-content-around\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"deleteModal.hide()\"\r\n          >\r\n            No! Cancel.\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteEnquiry()\">\r\n            Yes! Delete.\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div\r\n      class=\"card-header\"\r\n      style=\"display: flex; justify-content: space-between\"\r\n    >\r\n      <h2>Enquiry Details</h2>\r\n      <span>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-primary\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"myModal.show()\"\r\n        >\r\n          New Customer\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-danger\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"deleteModal.show()\"\r\n        >\r\n          Delete\r\n        </button></span\r\n      >\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <table class=\"table table-striped\">\r\n            <tbody>\r\n              <tr>\r\n                <td>ID</td>\r\n                <td>{{ details.id }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Name</td>\r\n                <td>{{ details.Name }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Phone Number</td>\r\n                <td>\r\n                  <h4>{{ details.PhoneNumber }}</h4>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>House Name</td>\r\n                <td>{{ details.HouseName }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Landmark</td>\r\n                <td>{{ details.Landmark }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>PostOffice Number</td>\r\n                <td>{{ details.PostOfficeNumber }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Is this a wedding purchase</td>\r\n                <td>\r\n                  <h4>\r\n                    <span class=\"badge badge-warning\">{{\r\n                      details.isWeddingPurchase\r\n                    }}</span>\r\n                  </h4>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Marriage Date</td>\r\n                <td>\r\n                  <h4>{{ details.MarriageDate }}</h4>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Quantity of gold</td>\r\n                <td>\r\n                  <h4>{{ details.QtyOfGold }}</h4>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>No cost EMI needed?</td>\r\n                <td>\r\n                  <h4>\r\n                    <span class=\"badge badge-warning\">{{\r\n                      details.OptNoCostEMI\r\n                    }}</span>\r\n                  </h4>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div\r\n      bsModal\r\n      #myModal=\"bs-modal\"\r\n      class=\"modal fade\"\r\n      tabindex=\"-1\"\r\n      role=\"dialog\"\r\n      aria-labelledby=\"myModalLabel\"\r\n      aria-hidden=\"true\"\r\n    >\r\n      <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Add as customer</h4>\r\n            <button\r\n              type=\"button\"\r\n              class=\"close\"\r\n              (click)=\"myModal.hide()\"\r\n              aria-label=\"Close\"\r\n            >\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <form [formGroup]=\"customerForm\" (ngSubmit)=\"FormSubmit()\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"name\">Name of Bride</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"NameOfBride\" name=\"NameOfBride\"\r\n                      formControlName=\"NameOfBride\" placeholder=\"Enter bride's name\" />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"name\">Name of Father</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"NameOfFather\" name=\"NameOfFather\"\r\n                      formControlName=\"NameOfFather\" placeholder=\"Enter father's name\" />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"name\">Name of Mother</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"NameOfMother\" name=\"NameOfMother\"\r\n                      formControlName=\"NameOfMother\" placeholder=\"Enter mother's name\" />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"name\">Contact number 1</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"Contact_Number_1\" name=\"Contact_Number_1\"\r\n                      formControlName=\"Contact_Number_1\" placeholder=\"Enter primary contact number\" />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"name\">Contact number 2</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"Contact_Number_2\" name=\"Contact_Number_2\"\r\n                      formControlName=\"Contact_Number_2\" placeholder=\"Enter secondary contact number\" />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"Post_office\">Post office</label>\r\n                    <!-- <input type=\"text\" class=\"form-control\" id=\"locality\" name=\"locality\" formControlName=\"locality\"\r\n                      placeholder=\"Enter locality\" /> -->\r\n                    <select class=\"form-control\" id=\"Post_office\" required ngModel name=\"Post_office\"\r\n                      formControlName=\"Post_office\">\r\n                      <option value=\"\" disabled selected hidden>Choose...</option>\r\n                      <option *ngFor=\"let item of postoffices\" value=\"{{ item.id }}\">\r\n                        {{ item.Name }}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"name\">Latitude</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"Latitude\" name=\"Latitude\"\r\n                      formControlName=\"Latitude\" placeholder=\"Enter Latitude\" />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"name\">Longitude</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"Longitude\" name=\"Longitude\"\r\n                      formControlName=\"Longitude\" placeholder=\"Enter Longitude\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"email\">Marriage date</label>\r\n                    <input type=\"date\" class=\"form-control\" id=\"MarriageDate\" name=\"MarriageDate\"\r\n                      formControlName=\"MarriageDate\" />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"group\">Marriage month</label>\r\n                    <select class=\"form-control\" id=\"MarriageMonth\" required ngModel name=\"MarriageMonth\"\r\n                      formControlName=\"MarriageMonth\">\r\n                      <option value=\"\" disabled selected hidden>Choose...</option>\r\n                      <option *ngFor=\"let item of Months\" value=\"{{ item.id }}\">\r\n                        {{ item.Name }}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"group\">Agent</label>\r\n                    <select class=\"form-control\" id=\"tele_caller_contact\" required ngModel name=\"tele_caller_contact\"\r\n                      formControlName=\"tele_caller_contact\">\r\n                      <option value=\"\" disabled selected hidden>Choose...</option>\r\n                      <option *ngFor=\"let item of agents\" value=\"{{ item.id }}\">\r\n                        {{ item.Name }}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"name\">House Name</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"HouseName\" name=\"HouseName\" formControlName=\"HouseName\"\r\n                      placeholder=\"Enter House Name\" />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"name\">Landmark</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"Landmark\" name=\"Landmark\" formControlName=\"Landmark\"\r\n                      placeholder=\"Enter Landmark\" />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"locality\">Name of locality</label>\r\n                    <!-- <input type=\"text\" class=\"form-control\" id=\"locality\" name=\"locality\" formControlName=\"locality\"\r\n                      placeholder=\"Enter locality\" /> -->\r\n                    <select class=\"form-control\" id=\"locality\" required ngModel name=\"locality\"\r\n                      formControlName=\"locality\">\r\n                      <option value=\"\" disabled selected hidden>Choose...</option>\r\n                      <option *ngFor=\"let item of localities\" value=\"{{ item.id }}\">\r\n                        {{ item.Name }}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"name\">Map Plus code</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"GoogleMapPlusCode\" name=\"GoogleMapPlusCode\"\r\n                      formControlName=\"GoogleMapPlusCode\" placeholder=\"Enter Google Map PlusCode\" />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"name\">Google Map URL</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"GoogleMapURL\" name=\"GoogleMapURL\"\r\n                      formControlName=\"GoogleMapURL\" placeholder=\"Enter Google Map URL\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n  \r\n  \r\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"myModal.hide()\">\r\n                Close\r\n              </button>\r\n              <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !customerForm.valid\">\r\n                <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n                Save changes\r\n              </button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <!-- /.modal-content -->\r\n      </div>\r\n      <!-- /.modal-dialog -->\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "EIdz":
/*!******************************************************!*\
  !*** ./src/app/views/manager/enquiries.component.ts ***!
  \******************************************************/
/*! exports provided: EnquiriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiriesComponent", function() { return EnquiriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_enquiries_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./enquiries.component.html */ "m6yf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");









let EnquiriesComponent = class EnquiriesComponent {
    constructor(dataservice, router, fb, toastr) {
        this.dataservice = dataservice;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.customerForm = this.fb.group({
            NameOfBride: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            NameOfFather: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            NameOfMother: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            MarriageDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Contact_Number_1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Contact_Number_2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            MarriageMonth: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            tele_caller_contact: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            HouseName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Landmark: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            locality: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
        this.loading = true;
        this.btnLoading = false;
        this.orders = {};
        this.columnDefs = [];
        this.rowData = [];
        this.agents = [];
        this.localities = [];
        this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["enquiriesColumn"]];
        this.Months = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["Months"]];
        this.rowSelection = "single";
    }
    ngOnInit() {
        this.getLists();
    }
    getLists() {
        this.loading = true;
        this.dataservice.getEnquiries().valueChanges.subscribe((result) => {
            console.log("getEnquiries", result.data.customerEnquiries);
            this.rowData = result.data.customerEnquiries;
        });
        this.dataservice.getLocalities().valueChanges.subscribe((result) => {
            console.log("getLocalities", result.data.localities);
            this.localities = result.data.localities;
        });
        this.dataservice.getAgents().valueChanges.subscribe((result) => {
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
        this.router.navigate(["/manager/enquiry_details", selectedRows[0].id], {
            state: { data: selectedRows },
        });
    }
    FormSubmit() {
        let resp = {};
        console.log(this.customerForm.value);
        this.dataservice.Addcustomer(this.customerForm.value).subscribe((result) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.createCustomer) {
                this.toastr.success("customer added successfully!");
                this.getLists();
                this.myModal.hide();
            }
            else {
                this.toastr.error("Failed. Please check the fields!");
            }
        });
    }
};
EnquiriesComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
EnquiriesComponent.propDecorators = {
    myModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["myModal",] }]
};
EnquiriesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_enquiries_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
], EnquiriesComponent);



/***/ }),

/***/ "F9w6":
/*!***********************************************************!*\
  !*** ./src/app/views/manager/customerdetail.component.ts ***!
  \***********************************************************/
/*! exports provided: ManagerCustomerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerCustomerDetailComponent", function() { return ManagerCustomerDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_customerdetail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./customerdetail.component.html */ "d7Xv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");









let ManagerCustomerDetailComponent = class ManagerCustomerDetailComponent {
    constructor(dataservice, activatedRouter, router, fb, toastr) {
        this.dataservice = dataservice;
        this.activatedRouter = activatedRouter;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.loading = true;
        this.details = [];
        this.btnLoading = false;
        this.dateConverter = _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["dateConverter"];
        this.users = [];
        this.kpcallers = [];
        this.agentForm = this.fb.group({
            agent: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
        this.saleForm = this.fb.group({
            CustomerStatus: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            isSaleClosed: true,
            sale_closed_by: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            sale_remarks: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            sale_closed_date: new Date().toISOString(),
        });
        this.commentForm = this.fb.group({
            RemarksText: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
    }
    ngOnInit() {
        this.getLists();
        this.activatedRouter.params.subscribe((params) => {
            this.id = params["id"];
        });
        this.dataservice
            .getSingleCustomer(this.id)
            .valueChanges.subscribe((result) => {
            console.log("getSingleCustomer", result.data.customer);
            this.details = result.data.customer;
            this.loading = false;
        });
    }
    getLists() {
        this.loading = true;
        this.dataservice
            .getUsers("FIELD_AGENT")
            .valueChanges.subscribe((result) => {
            console.log("FIELD_AGENT", result.data.users);
            this.users = result.data.users;
        });
        this.dataservice
            .getUsers("KP_CALLER")
            .valueChanges.subscribe((result) => {
            console.log("KP_CALLER", result.data.users);
            this.kpcallers = result.data.users;
        });
    }
    FormSubmit() {
        let resp = {};
        console.log(this.agentForm.value);
        this.dataservice
            .SetFieldAgent(this.agentForm.value.agent, this.details.id)
            .subscribe((result) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.updateUser) {
                this.toastr.success("Field Agent assigned successfully!");
                this.myModal.hide();
            }
            else {
                this.toastr.error("Failed. Please check the fields!");
            }
        });
    }
    CommentSubmit() {
        let resp = {};
        console.log(this.commentForm.value);
        this.dataservice
            .AddCustomerComment(this.details.id, this.commentForm.value)
            .subscribe((result) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.updateCustomer) {
                this.toastr.success("Comment added successfully!");
                this.commentModal.hide();
            }
            else {
                this.toastr.error("Failed. Please check the fields!");
            }
        });
    }
    deleteAgent() {
        let resp = {};
        this.dataservice.DeleteAgent(this.id).subscribe((result) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.deleteTeleCallerContact) {
                this.toastr.success("Agent deleted successfully!");
                this.router.navigate(["/order/order_processing"]);
                this.deleteModal.hide();
            }
            else {
                this.toastr.error("Failed. Please check again!");
            }
        });
    }
    closeCustomer() {
        let resp = {};
        console.log(this.saleForm.value);
        this.dataservice
            .Updatecustomer(this.details.id, this.saleForm.value)
            .subscribe((result) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.updateCustomer) {
                this.toastr.success("Sale closed successfully!");
                this.saleModal.hide();
            }
            else {
                this.toastr.error("Failed. Please check the fields!");
            }
        });
    }
};
ManagerCustomerDetailComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
ManagerCustomerDetailComponent.propDecorators = {
    myModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["myModal",] }],
    saleModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["saleModal",] }],
    deleteModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["deleteModal",] }],
    commentModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["commentModal",] }]
};
ManagerCustomerDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_customerdetail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], ManagerCustomerDetailComponent);



/***/ }),

/***/ "MPuI":
/*!******************************************************!*\
  !*** ./src/app/views/manager/customers.component.ts ***!
  \******************************************************/
/*! exports provided: ManagerCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerCustomerComponent", function() { return ManagerCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_customers_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./customers.component.html */ "iva1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");









let ManagerCustomerComponent = class ManagerCustomerComponent {
    constructor(dataservice, router, fb, toastr) {
        this.dataservice = dataservice;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.customerForm = this.fb.group({
            NameOfBride: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            NameOfFather: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            NameOfMother: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            MarriageDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Contact_Number_1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Contact_Number_2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            MarriageMonth: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            tele_caller_contact: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            HouseName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Landmark: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            locality: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
        this.loading = true;
        this.btnLoading = false;
        this.orders = {};
        this.columnDefs = [];
        this.rowData = [];
        this.agents = [];
        this.localities = [];
        this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["customerColumnsWithKpCaller"]];
        this.Months = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["Months"]];
        this.rowSelection = "single";
    }
    ngOnInit() {
        this.getLists();
    }
    getLists() {
        this.loading = true;
        this.dataservice.getCustomers().valueChanges.subscribe((result) => {
            console.log("getCustomers", result.data.customers);
            this.rowData = result.data.customers;
        });
        this.dataservice.getLocalities().valueChanges.subscribe((result) => {
            console.log("getLocalities", result.data.localities);
            this.localities = result.data.localities;
        });
        this.dataservice.getAgents().valueChanges.subscribe((result) => {
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
        this.router.navigate(["/manager/customer_details", selectedRows[0].id], {
            state: { data: selectedRows },
        });
    }
    FormSubmit() {
        let resp = {};
        console.log(this.customerForm.value);
        this.dataservice.Addcustomer(this.customerForm.value).subscribe((result) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.createCustomer) {
                this.toastr.success("customer added successfully!");
                this.getLists();
                this.myModal.hide();
            }
            else {
                this.toastr.error("Failed. Please check the fields!");
            }
        });
    }
};
ManagerCustomerComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
ManagerCustomerComponent.propDecorators = {
    myModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["myModal",] }]
};
ManagerCustomerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_customers_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], ManagerCustomerComponent);



/***/ }),

/***/ "Osdn":
/*!********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/carousel/fesm2015/ngx-bootstrap-carousel.js ***!
  \********************************************************************************/
/*! exports provided: CarouselComponent, CarouselConfig, CarouselModule, SlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselConfig", function() { return CarouselConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return SlideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "hpHm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



function CarouselComponent_ol_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_ol_1_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const i_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.selectSlide(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", slide_r4.active === true);
} }
function CarouselComponent_ol_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ol_1_li_1_Template, 1, 2, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.indicatorsSlides());
} }
function CarouselComponent_a_4_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarouselComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.previousSlide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_a_4_span_2_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r1.activeSlide === 0 && ctx_r1.noWrap);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isBs4);
} }
function CarouselComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.nextSlide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r2.isLast(ctx_r2.activeSlide) && ctx_r2.noWrap);
} }
const _c0 = function (a0) { return { "display": a0 }; };
const _c1 = ["*"];
class CarouselConfig {
    constructor() {
        /* Default interval of auto changing of slides */
        this.interval = 5000;
        /* Is loop of auto changing of slides can be paused */
        this.noPause = false;
        /* Is slides can wrap from the last to the first slide */
        this.noWrap = false;
        /* Show carousel-indicators */
        this.showIndicators = true;
        /* Slides can be paused on focus */
        this.pauseOnFocus = false;
        /* If `true` - carousel indicators indicate slides chunks works ONLY if singleSlideOffset = FALSE */
        this.indicatorsByChunk = false;
        /* If value more then 1 — carousel works in multilist mode */
        this.itemsPerSlide = 1;
        /* If `true` — carousel shifts by one element. By default carousel shifts by number
            of visible elements (itemsPerSlide field) */
        this.singleSlideOffset = false;
    }
}
CarouselConfig.ɵfac = function CarouselConfig_Factory(t) { return new (t || CarouselConfig)(); };
/** @nocollapse */ CarouselConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function CarouselConfig_Factory() { return new CarouselConfig(); }, token: CarouselConfig, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns the index of the last element in the array where predicate is true, and -1
 * otherwise.
 * @template T
 * @param {?} array The source array to search in
 * @param {?} predicate find calls predicate once for each element of the array, in descending
 * order, until it finds one where predicate returns true. If such an element is found,
 * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
 * @return {?}
 */
function findLastIndex(array, predicate) {
    /** @type {?} */
    let l = array.length;
    while (l--) {
        if (predicate(array[l], l, array)) {
            return l;
        }
    }
    return -1;
}
/**
 * @template T
 * @param {?} array
 * @param {?} size
 * @return {?}
 */
function chunkByNumber(array, size) {
    /** @type {?} */
    const out = [];
    /** @type {?} */
    const n = Math.ceil((array.length) / size);
    /** @type {?} */
    let i = 0;
    while (i < n) {
        /** @type {?} */
        const chunk = array.splice(0, (i === n - 1) && size < array.length ? array.length : size);
        out.push(chunk);
        i++;
    }
    return out;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const Direction = {
    UNKNOWN: 0,
    NEXT: 1,
    PREV: 2,
};
Direction[Direction.UNKNOWN] = 'UNKNOWN';
Direction[Direction.NEXT] = 'NEXT';
Direction[Direction.PREV] = 'PREV';
/**
 * Base element to create carousel
 */
class CarouselComponent {
    /**
     * @param {?} config
     * @param {?} ngZone
     */
    constructor(config, ngZone) {
        this.ngZone = ngZone;
        /* If `true` - carousel indicators indicate slides chunks
             works ONLY if singleSlideOffset = FALSE */
        this.indicatorsByChunk = false;
        /* If value more then 1 — carousel works in multilist mode */
        this.itemsPerSlide = 1;
        /* If `true` — carousel shifts by one element. By default carousel shifts by number
             of visible elements (itemsPerSlide field) */
        this.singleSlideOffset = false;
        /**
         * Turn on/off animation. Animation doesn't work for multilist carousel
         */
        this.isAnimated = false;
        /**
         * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
         */
        this.activeSlideChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        /**
         * Will be emitted when active slides has been changed in multilist mode
         */
        this.slideRangeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /* Index to start display slides from it */
        this.startFromIndex = 0;
        this._slides = new ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["LinkedList"]();
        this._currentVisibleSlidesIndex = 0;
        this.destroyed = false;
        this.getActive = (/**
         * @param {?} slide
         * @return {?}
         */
        (slide) => slide.active);
        this.makeSlidesConsistent = (/**
         * @param {?} slides
         * @return {?}
         */
        (slides) => {
            slides.forEach((/**
             * @param {?} slide
             * @param {?} index
             * @return {?}
             */
            (slide, index) => slide.item.order = index));
        });
        Object.assign(this, config);
    }
    /**
     * Index of currently displayed slide(started for 0)
     * @param {?} index
     * @return {?}
     */
    set activeSlide(index) {
        if (this.multilist) {
            return;
        }
        if (this._slides.length && index !== this._currentActiveSlide) {
            this._select(index);
        }
    }
    /**
     * @return {?}
     */
    get activeSlide() {
        return this._currentActiveSlide;
    }
    /**
     * Delay of item cycling in milliseconds. If false, carousel won't cycle
     * automatically.
     * @return {?}
     */
    get interval() {
        return this._interval;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set interval(value) {
        this._interval = value;
        this.restartTimer();
    }
    /**
     * @return {?}
     */
    get slides() {
        return this._slides.toArray();
    }
    /**
     * @return {?}
     */
    get isBs4() {
        return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.singleSlideOffset) {
                this.indicatorsByChunk = false;
            }
            if (this.multilist) {
                this._chunkedSlides = chunkByNumber(this.mapSlidesAndIndexes(), this.itemsPerSlide);
                this.selectInitialSlides();
            }
        }), 0);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed = true;
    }
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param {?} slide
     * @return {?}
     */
    addSlide(slide) {
        this._slides.add(slide);
        if (this.multilist && this._slides.length <= this.itemsPerSlide) {
            slide.active = true;
        }
        if (!this.multilist && this.isAnimated) {
            slide.isAnimated = true;
        }
        if (!this.multilist && this._slides.length === 1) {
            this._currentActiveSlide = undefined;
            this.activeSlide = 0;
            this.play();
        }
        if (this.multilist && this._slides.length > this.itemsPerSlide) {
            this.play();
        }
    }
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param {?} slide
     * @return {?}
     */
    removeSlide(slide) {
        /** @type {?} */
        const remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            /** @type {?} */
            let nextSlideIndex = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is
                // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                // middle of collection, index of next slide is same to removed
                nextSlideIndex = !this.isLast(remIndex)
                    ? remIndex
                    : this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout((/**
             * @return {?}
             */
            () => {
                this._select(nextSlideIndex);
            }), 0);
        }
        else {
            this._slides.remove(remIndex);
            /** @type {?} */
            const currentSlideIndex = this.getCurrentSlideIndex();
            setTimeout((/**
             * @return {?}
             */
            () => {
                // after removing, need to actualize index of current active slide
                this._currentActiveSlide = currentSlideIndex;
                this.activeSlideChange.emit(this._currentActiveSlide);
            }), 0);
        }
    }
    /**
     * @param {?=} force
     * @return {?}
     */
    nextSlideFromInterval(force = false) {
        this.move(Direction.NEXT, force);
    }
    /**
     * Rolling to next slide
     * @param {?=} force
     * @return {?}
     */
    nextSlide(force = false) {
        if (this.isPlaying) {
            this.restartTimer();
        }
        this.move(Direction.NEXT, force);
    }
    /**
     * Rolling to previous slide
     * @param {?=} force
     * @return {?}
     */
    previousSlide(force = false) {
        if (this.isPlaying) {
            this.restartTimer();
        }
        this.move(Direction.PREV, force);
    }
    /**
     * @return {?}
     */
    getFirstVisibleIndex() {
        return this.slides.findIndex(this.getActive);
    }
    /**
     * @return {?}
     */
    getLastVisibleIndex() {
        return findLastIndex(this.slides, this.getActive);
    }
    /**
     * @param {?} direction
     * @param {?=} force
     * @return {?}
     */
    move(direction, force = false) {
        /** @type {?} */
        const firstVisibleIndex = this.getFirstVisibleIndex();
        /** @type {?} */
        const lastVisibleIndex = this.getLastVisibleIndex();
        if (this.noWrap) {
            if (direction === Direction.NEXT &&
                this.isLast(lastVisibleIndex) ||
                direction === Direction.PREV &&
                    firstVisibleIndex === 0) {
                return;
            }
        }
        if (!this.multilist) {
            this.activeSlide = this.findNextSlideIndex(direction, force);
        }
        else {
            this.moveMultilist(direction);
        }
    }
    /**
     * Swith slides by enter, space and arrows keys
     * \@internal
     * @param {?} event
     * @return {?}
     */
    keydownPress(event) {
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 13 || event.key === 'Enter' || event.keyCode === 32 || event.key === 'Space') {
            this.nextSlide();
            event.preventDefault();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 37 || event.key === 'LeftArrow') {
            this.previousSlide();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 39 || event.key === 'RightArrow') {
            this.nextSlide();
            return;
        }
    }
    /**
     * Play on mouse leave
     * \@internal
     * @return {?}
     */
    onMouseLeave() {
        if (!this.pauseOnFocus) {
            this.play();
        }
    }
    /**
     * Play on mouse up
     * \@internal
     * @return {?}
     */
    onMouseUp() {
        if (!this.pauseOnFocus) {
            this.play();
        }
    }
    /**
     * When slides on focus autoplay is stopped(optional)
     * \@internal
     * @return {?}
     */
    pauseFocusIn() {
        if (this.pauseOnFocus) {
            this.isPlaying = false;
            this.resetTimer();
        }
    }
    /**
     * When slides out of focus autoplay is started
     * \@internal
     * @return {?}
     */
    pauseFocusOut() {
        this.play();
    }
    /**
     * Rolling to specified slide
     * @param {?} index
     * @return {?}
     */
    selectSlide(index) {
        if (this.isPlaying) {
            this.restartTimer();
        }
        if (!this.multilist) {
            this.activeSlide = this.indicatorsByChunk ? index * this.itemsPerSlide : index;
        }
        else {
            this.selectSlideRange(this.indicatorsByChunk ? index * this.itemsPerSlide : index);
        }
    }
    /**
     * Starts a auto changing of slides
     * @return {?}
     */
    play() {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    }
    /**
     * Stops a auto changing of slides
     * @return {?}
     */
    pause() {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    }
    /**
     * Finds and returns index of currently displayed slide
     * @return {?}
     */
    getCurrentSlideIndex() {
        return this._slides.findIndex(this.getActive);
    }
    /**
     * Defines, whether the specified index is last in collection
     * @param {?} index
     * @return {?}
     */
    isLast(index) {
        return index + 1 >= this._slides.length;
    }
    /**
     * Defines, whether the specified index is first in collection
     * @param {?} index
     * @return {?}
     */
    isFirst(index) {
        return index === 0;
    }
    /**
     * @return {?}
     */
    indicatorsSlides() {
        return this.slides.filter((/**
         * @param {?} slide
         * @param {?} index
         * @return {?}
         */
        (slide, index) => !this.indicatorsByChunk || index % this.itemsPerSlide === 0));
    }
    /**
     * @private
     * @return {?}
     */
    selectInitialSlides() {
        /** @type {?} */
        const startIndex = this.startFromIndex <= this._slides.length
            ? this.startFromIndex
            : 0;
        this.hideSlides();
        if (this.singleSlideOffset) {
            this._slidesWithIndexes = this.mapSlidesAndIndexes();
            if (this._slides.length - startIndex < this.itemsPerSlide) {
                /** @type {?} */
                const slidesToAppend = this._slidesWithIndexes.slice(0, startIndex);
                this._slidesWithIndexes = [
                    ...this._slidesWithIndexes,
                    ...slidesToAppend
                ]
                    .slice(slidesToAppend.length)
                    .slice(0, this.itemsPerSlide);
            }
            else {
                this._slidesWithIndexes = this._slidesWithIndexes.slice(startIndex, startIndex + this.itemsPerSlide);
            }
            this._slidesWithIndexes.forEach((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.item.active = true));
            this.makeSlidesConsistent(this._slidesWithIndexes);
        }
        else {
            this.selectRangeByNestedIndex(startIndex);
        }
        this.slideRangeChange.emit(this.getVisibleIndexes());
    }
    /**
     * Defines next slide index, depending of direction
     * @private
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    findNextSlideIndex(direction, force) {
        /** @type {?} */
        let nextSlideIndex = 0;
        if (!force &&
            (this.isLast(this.activeSlide) &&
                direction !== Direction.PREV &&
                this.noWrap)) {
            return undefined;
        }
        switch (direction) {
            case Direction.NEXT:
                // if this is last slide, not force, looping is disabled
                // and need to going forward - select current slide, as a next
                nextSlideIndex = !this.isLast(this._currentActiveSlide)
                    ? this._currentActiveSlide + 1
                    : !force && this.noWrap ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                // if this is first slide, not force, looping is disabled
                // and need to going backward - select current slide, as a next
                nextSlideIndex =
                    this._currentActiveSlide > 0
                        ? this._currentActiveSlide - 1
                        : !force && this.noWrap
                            ? this._currentActiveSlide
                            : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    }
    /**
     * @private
     * @return {?}
     */
    mapSlidesAndIndexes() {
        return this.slides
            .slice()
            .map((/**
         * @param {?} slide
         * @param {?} index
         * @return {?}
         */
        (slide, index) => {
            return {
                index,
                item: slide
            };
        }));
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    selectSlideRange(index) {
        if (this.isIndexInRange(index)) {
            return;
        }
        this.hideSlides();
        if (!this.singleSlideOffset) {
            this.selectRangeByNestedIndex(index);
        }
        else {
            /** @type {?} */
            const startIndex = this.isIndexOnTheEdges(index)
                ? index
                : index - this.itemsPerSlide + 1;
            /** @type {?} */
            const endIndex = this.isIndexOnTheEdges(index)
                ? index + this.itemsPerSlide
                : index + 1;
            this._slidesWithIndexes = this.mapSlidesAndIndexes().slice(startIndex, endIndex);
            this.makeSlidesConsistent(this._slidesWithIndexes);
            this._slidesWithIndexes.forEach((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.item.active = true));
        }
        this.slideRangeChange.emit(this.getVisibleIndexes());
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    selectRangeByNestedIndex(index) {
        /** @type {?} */
        const selectedRange = this._chunkedSlides
            .map((/**
         * @param {?} slidesList
         * @param {?} i
         * @return {?}
         */
        (slidesList, i) => {
            return {
                index: i,
                list: slidesList
            };
        }))
            .find((/**
         * @param {?} slidesList
         * @return {?}
         */
        (slidesList) => {
            return slidesList.list.find((/**
             * @param {?} slide
             * @return {?}
             */
            slide => slide.index === index)) !== undefined;
        }));
        this._currentVisibleSlidesIndex = selectedRange.index;
        this._chunkedSlides[selectedRange.index].forEach((/**
         * @param {?} slide
         * @return {?}
         */
        (slide) => {
            slide.item.active = true;
        }));
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    isIndexOnTheEdges(index) {
        return (index + 1 - this.itemsPerSlide <= 0 ||
            index + this.itemsPerSlide <= this._slides.length);
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    isIndexInRange(index) {
        if (this.singleSlideOffset) {
            /** @type {?} */
            const visibleIndexes = this._slidesWithIndexes.map((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.index));
            return visibleIndexes.indexOf(index) >= 0;
        }
        return (index <= this.getLastVisibleIndex() &&
            index >= this.getFirstVisibleIndex());
    }
    /**
     * @private
     * @return {?}
     */
    hideSlides() {
        this.slides.forEach((/**
         * @param {?} slide
         * @return {?}
         */
        (slide) => slide.active = false));
    }
    /**
     * @private
     * @return {?}
     */
    isVisibleSlideListLast() {
        return this._currentVisibleSlidesIndex === this._chunkedSlides.length - 1;
    }
    /**
     * @private
     * @return {?}
     */
    isVisibleSlideListFirst() {
        return this._currentVisibleSlidesIndex === 0;
    }
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    moveSliderByOneItem(direction) {
        /** @type {?} */
        let firstVisibleIndex;
        /** @type {?} */
        let lastVisibleIndex;
        /** @type {?} */
        let indexToHide;
        /** @type {?} */
        let indexToShow;
        if (this.noWrap) {
            firstVisibleIndex = this.getFirstVisibleIndex();
            lastVisibleIndex = this.getLastVisibleIndex();
            indexToHide = direction === Direction.NEXT
                ? firstVisibleIndex
                : lastVisibleIndex;
            indexToShow = direction !== Direction.NEXT
                ? firstVisibleIndex - 1
                : !this.isLast(lastVisibleIndex)
                    ? lastVisibleIndex + 1 : 0;
            this._slides.get(indexToHide).active = false;
            this._slides.get(indexToShow).active = true;
            /** @type {?} */
            const slidesToReorder = this.mapSlidesAndIndexes().filter((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.item.active));
            this.makeSlidesConsistent(slidesToReorder);
            this.slideRangeChange.emit(this.getVisibleIndexes());
        }
        else {
            /** @type {?} */
            let displayedIndex;
            firstVisibleIndex = this._slidesWithIndexes[0].index;
            lastVisibleIndex = this._slidesWithIndexes[this._slidesWithIndexes.length - 1].index;
            if (direction === Direction.NEXT) {
                this._slidesWithIndexes.shift();
                displayedIndex = this.isLast(lastVisibleIndex)
                    ? 0
                    : lastVisibleIndex + 1;
                this._slidesWithIndexes.push({
                    index: displayedIndex,
                    item: this._slides.get(displayedIndex)
                });
            }
            else {
                this._slidesWithIndexes.pop();
                displayedIndex = this.isFirst(firstVisibleIndex)
                    ? this._slides.length - 1
                    : firstVisibleIndex - 1;
                this._slidesWithIndexes = [{
                        index: displayedIndex,
                        item: this._slides.get(displayedIndex)
                    }, ...this._slidesWithIndexes];
            }
            this.hideSlides();
            this._slidesWithIndexes.forEach((/**
             * @param {?} slide
             * @return {?}
             */
            slide => slide.item.active = true));
            this.makeSlidesConsistent(this._slidesWithIndexes);
            this.slideRangeChange.emit(this._slidesWithIndexes.map((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.index)));
        }
    }
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    moveMultilist(direction) {
        if (this.singleSlideOffset) {
            this.moveSliderByOneItem(direction);
        }
        else {
            this.hideSlides();
            if (this.noWrap) {
                this._currentVisibleSlidesIndex = direction === Direction.NEXT
                    ? this._currentVisibleSlidesIndex + 1
                    : this._currentVisibleSlidesIndex - 1;
            }
            else {
                if (direction === Direction.NEXT) {
                    this._currentVisibleSlidesIndex = this.isVisibleSlideListLast()
                        ? 0
                        : this._currentVisibleSlidesIndex + 1;
                }
                else {
                    this._currentVisibleSlidesIndex = this.isVisibleSlideListFirst()
                        ? this._chunkedSlides.length - 1
                        : this._currentVisibleSlidesIndex - 1;
                }
            }
            this._chunkedSlides[this._currentVisibleSlidesIndex].forEach((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.item.active = true));
            this.slideRangeChange.emit(this.getVisibleIndexes());
        }
    }
    /**
     * @private
     * @return {?}
     */
    getVisibleIndexes() {
        if (!this.singleSlideOffset) {
            return this._chunkedSlides[this._currentVisibleSlidesIndex]
                .map((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.index));
        }
        else {
            return this._slidesWithIndexes.map((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.index));
        }
    }
    /**
     * Sets a slide, which specified through index, as active
     * @private
     * @param {?} index
     * @return {?}
     */
    _select(index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        if (!this.multilist) {
            /** @type {?} */
            const currentSlide = this._slides.get(this._currentActiveSlide);
            if (currentSlide) {
                currentSlide.active = false;
            }
        }
        /** @type {?} */
        const nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            this.activeSlideChange.emit(index);
        }
    }
    /**
     * Starts loop of auto changing of slides
     * @private
     * @return {?}
     */
    restartTimer() {
        this.resetTimer();
        /** @type {?} */
        const interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                return setInterval((/**
                 * @return {?}
                 */
                () => {
                    /** @type {?} */
                    const nInterval = +this.interval;
                    this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (this.isPlaying &&
                            !isNaN(this.interval) &&
                            nInterval > 0 &&
                            this.slides.length) {
                            this.nextSlideFromInterval();
                        }
                        else {
                            this.pause();
                        }
                    }));
                }), interval);
            }));
        }
    }
    /**
     * @return {?}
     */
    get multilist() {
        return this.itemsPerSlide > 1;
    }
    /**
     * Stops loop of auto changing of slides
     * @private
     * @return {?}
     */
    resetTimer() {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CarouselConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["carousel"]], inputs: { indicatorsByChunk: "indicatorsByChunk", itemsPerSlide: "itemsPerSlide", singleSlideOffset: "singleSlideOffset", isAnimated: "isAnimated", startFromIndex: "startFromIndex", activeSlide: "activeSlide", interval: "interval", noWrap: "noWrap", noPause: "noPause", showIndicators: "showIndicators", pauseOnFocus: "pauseOnFocus" }, outputs: { activeSlideChange: "activeSlideChange", slideRangeChange: "slideRangeChange" }, ngContentSelectors: _c1, decls: 6, vars: 6, consts: [["tabindex", "0", 1, "carousel", "slide", 3, "mouseenter", "mouseleave", "mouseup", "keydown", "focusin", "focusout"], ["class", "carousel-indicators", 4, "ngIf"], [1, "carousel-inner", 3, "ngStyle"], ["class", "left carousel-control carousel-control-prev", "tabindex", "0", "role", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "right carousel-control carousel-control-next", "tabindex", "0", "role", "button", 3, "disabled", "click", 4, "ngIf"], [1, "carousel-indicators"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["tabindex", "0", "role", "button", 1, "left", "carousel-control", "carousel-control-prev", 3, "click"], ["aria-hidden", "true", 1, "icon-prev", "carousel-control-prev-icon"], ["class", "sr-only", 4, "ngIf"], [1, "sr-only"], ["tabindex", "0", "role", "button", 1, "right", "carousel-control", "carousel-control-next", 3, "click"], ["aria-hidden", "true", 1, "icon-next", "carousel-control-next-icon"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function CarouselComponent_Template_div_mouseenter_0_listener() { return ctx.pause(); })("mouseleave", function CarouselComponent_Template_div_mouseleave_0_listener() { return ctx.onMouseLeave(); })("mouseup", function CarouselComponent_Template_div_mouseup_0_listener() { return ctx.onMouseUp(); })("keydown", function CarouselComponent_Template_div_keydown_0_listener($event) { return ctx.keydownPress($event); })("focusin", function CarouselComponent_Template_div_focusin_0_listener() { return ctx.pauseFocusIn(); })("focusout", function CarouselComponent_Template_div_focusout_0_listener() { return ctx.pauseFocusOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ol_1_Template, 2, 1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarouselComponent_a_4_Template, 3, 3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarouselComponent_a_5_Template, 4, 2, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showIndicators && ctx.slides.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.multilist ? "flex" : "block"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slides.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slides.length > 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2 });
/** @nocollapse */
CarouselComponent.ctorParameters = () => [
    { type: CarouselConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
CarouselComponent.propDecorators = {
    noWrap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    noPause: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showIndicators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pauseOnFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    indicatorsByChunk: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    itemsPerSlide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    singleSlideOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isAnimated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    activeSlideChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    slideRangeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    activeSlide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    startFromIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    interval: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'carousel',
                template: "<div (mouseenter)=\"pause()\"\n     (mouseleave)=\"onMouseLeave()\"\n     (mouseup)=\"onMouseUp()\"\n     (keydown)=\"keydownPress($event)\"\n     (focusin)=\"pauseFocusIn()\"\n     (focusout)=\"pauseFocusOut()\"\n     class=\"carousel slide\" tabindex=\"0\">\n  <ol class=\"carousel-indicators\" *ngIf=\"showIndicators && slides.length > 1\">\n    <li *ngFor=\"let slide of indicatorsSlides(); let i = index;\"\n        [class.active]=\"slide.active === true\"\n        (click)=\"selectSlide(i)\">\n    </li>\n  </ol>\n  <div class=\"carousel-inner\" [ngStyle]=\"{'display': multilist ? 'flex' : 'block'}\">\n    <ng-content></ng-content>\n  </div>\n  <a class=\"left carousel-control carousel-control-prev\"\n     [class.disabled]=\"activeSlide === 0 && noWrap\"\n     (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\"\n      tabindex=\"0\" role=\"button\">\n    <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control carousel-control-next\"\n     [class.disabled]=\"isLast(activeSlide) && noWrap\"\n     (click)=\"nextSlide()\" *ngIf=\"slides.length > 1\"\n     tabindex=\"0\" role=\"button\">\n    <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"
            }]
    }], function () { return [{ type: CarouselConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { indicatorsByChunk: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemsPerSlide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], singleSlideOffset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeSlideChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], slideRangeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], startFromIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeSlide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], interval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], noWrap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], noPause: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showIndicators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pauseOnFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SlideComponent {
    /**
     * @param {?} carousel
     */
    constructor(carousel) {
        this.itemWidth = '100%';
        this.order = 0;
        /**
         * Wraps element by appropriate CSS classes
         */
        this.addClass = true;
        this.carousel = carousel;
    }
    /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    ngOnInit() {
        this.carousel.addSlide(this);
        this.itemWidth = `${100 / this.carousel.itemsPerSlide}%`;
    }
    /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    ngOnDestroy() {
        this.carousel.removeSlide(this);
    }
}
SlideComponent.ɵfac = function SlideComponent_Factory(t) { return new (t || SlideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CarouselComponent)); };
SlideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SlideComponent, selectors: [["slide"]], hostVars: 13, hostBindings: function SlideComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", !ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.itemWidth)("order", ctx.order);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("item", ctx.addClass)("carousel-item", ctx.addClass)("active", ctx.active)("carousel-animation", ctx.isAnimated);
    } }, inputs: { active: "active" }, ngContentSelectors: _c1, decls: 2, vars: 2, consts: [[1, "item"]], template: function SlideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.active);
    } }, styles: [".carousel-animation[_nghost-%COMP%] {\n       transition: opacity 0.6s ease, visibility 0.6s ease;\n       float: left;\n    }\n    .carousel-animation.active[_nghost-%COMP%] {\n      opacity: 1;\n      visibility: visible;\n    }\n    .carousel-animation[_nghost-%COMP%]:not(.active) {\n      display: block;\n      position: absolute;\n      opacity: 0;\n      visibility: hidden;\n    }"] });
/** @nocollapse */
SlideComponent.ctorParameters = () => [
    { type: CarouselComponent }
];
SlideComponent.propDecorators = {
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    itemWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width',] }],
    order: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.order',] }],
    isAnimated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.carousel-animation',] }],
    addClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.item',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.carousel-item',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'slide',
                template: `
    <div [class.active]="active" class="item">
      <ng-content></ng-content>
    </div>
  `,
                host: {
                    '[attr.aria-hidden]': '!active'
                },
                styles: [`
    :host.carousel-animation {
       transition: opacity 0.6s ease, visibility 0.6s ease;
       float: left;
    }
    :host.carousel-animation.active {
      opacity: 1;
      visibility: visible;
    }
    :host.carousel-animation:not(.active) {
      display: block;
      position: absolute;
      opacity: 0;
      visibility: hidden;
    }
  `]
            }]
    }], function () { return [{ type: CarouselComponent }]; }, { itemWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width']
        }], order: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.order']
        }], addClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.item']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.carousel-item']
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.active']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.carousel-animation']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CarouselModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: CarouselModule, providers: [] };
    }
}
CarouselModule.ɵfac = function CarouselModule_Factory(t) { return new (t || CarouselModule)(); };
CarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CarouselModule });
CarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CarouselModule, { declarations: function () { return [SlideComponent, CarouselComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [SlideComponent, CarouselComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [SlideComponent, CarouselComponent],
                exports: [SlideComponent, CarouselComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-carousel.js.map

/***/ }),

/***/ "SOEm":
/*!*********************************************************!*\
  !*** ./src/app/views/manager/manager-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ManagerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerRoutingModule", function() { return ManagerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _login_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/auth.guard */ "nl+3");
/* harmony import */ var _customerdetail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customerdetail.component */ "F9w6");
/* harmony import */ var _customers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customers.component */ "MPuI");
/* harmony import */ var _enquiries_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enquiries.component */ "EIdz");
/* harmony import */ var _enquirydetails_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enquirydetails.component */ "bmwW");
/* harmony import */ var _verified_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./verified.component */ "Sx+e");









const routes = [
    {
        path: '',
        // data: {
        //   title: 'Theme'
        // },
        children: [
            {
                path: '',
                redirectTo: 'manager'
            },
            {
                path: 'verified_list',
                canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                component: _verified_component__WEBPACK_IMPORTED_MODULE_8__["VerifiedListComponent"],
                data: {
                    roles: 'MANAGER',
                    title: 'Verified List'
                }
            },
            {
                path: 'customers',
                canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                component: _customers_component__WEBPACK_IMPORTED_MODULE_5__["ManagerCustomerComponent"],
                data: {
                    roles: 'MANAGER',
                    title: 'Customers'
                }
            },
            {
                path: 'agents',
                canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                component: _verified_component__WEBPACK_IMPORTED_MODULE_8__["VerifiedListComponent"],
                data: {
                    roles: 'MANAGER',
                    title: 'Agents List'
                }
            },
            {
                path: 'enquiries',
                canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                component: _enquiries_component__WEBPACK_IMPORTED_MODULE_6__["EnquiriesComponent"],
                data: {
                    roles: 'MANAGER',
                    title: 'Enquiries'
                }
            },
            {
                path: 'customer_details/:id',
                canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                component: _customerdetail_component__WEBPACK_IMPORTED_MODULE_4__["ManagerCustomerDetailComponent"],
                data: {
                    roles: 'MANAGER',
                    title: 'Customer Details'
                }
            },
            {
                path: 'enquiry_details/:id',
                canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                component: _enquirydetails_component__WEBPACK_IMPORTED_MODULE_7__["EnquiryDetailComponent"],
                data: {
                    roles: 'MANAGER',
                    title: 'Enquiry Details'
                }
            },
        ]
    }
];
let ManagerRoutingModule = class ManagerRoutingModule {
};
ManagerRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ManagerRoutingModule);



/***/ }),

/***/ "Sx+e":
/*!*****************************************************!*\
  !*** ./src/app/views/manager/verified.component.ts ***!
  \*****************************************************/
/*! exports provided: VerifiedListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifiedListComponent", function() { return VerifiedListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_verified_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./verified.component.html */ "cVY+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");









let VerifiedListComponent = class VerifiedListComponent {
    constructor(dataservice, route, router, fb, toastr) {
        this.dataservice = dataservice;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.callerForm = this.fb.group({
            id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
        });
        this.loading = true;
        this.label = "";
        this.btnLoading = false;
        this.orders = {};
        this.columnDefs = [];
        this.rowData = [];
        this.users = [];
        this.btnDisabled = true;
        this.routerData = {};
        if (this.route.snapshot.data.title === "Agents List") {
            this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_6__["AgentsColumn"]];
        }
        else {
            this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_6__["customersColumn"]];
        }
        this.rowSelection = "multiple";
    }
    ngOnInit() {
        this.getLists();
        this.routerData = this.route.snapshot.data;
        console.log(this.route.snapshot.data);
    }
    getLists() {
        this.loading = true;
        let filter = {
            is_verified: true,
            kp_caller_assigned_null: true,
        };
        if (this.route.snapshot.data.title === "Agents List") {
            this.dataservice.getAgents().valueChanges.subscribe((result) => {
                console.log("getAgents", result.data.teleCallerContacts);
                this.rowData = result.data.teleCallerContacts;
            });
            this.dataservice
                .getUsers("TELE_CALLER")
                .valueChanges.subscribe((result) => {
                console.log("getUsers", result.data.users);
                this.users = result.data.users;
                this.label = "Tele ";
            });
        }
        else {
            this.dataservice
                .getCustomersFilter(filter)
                .valueChanges.subscribe((result) => {
                console.log("getCustomersFilter", result.data.customers);
                this.rowData = result.data.customers;
            });
            this.dataservice
                .getUsers("KP_CALLER")
                .valueChanges.subscribe((result) => {
                console.log("getUsers", result.data.users);
                this.users = result.data.users;
                this.label = "KP ";
            });
        }
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    onSelectionChanged(event) {
        this.selectedRows = this.gridApi.getSelectedRows();
        if (this.selectedRows.length > 0) {
            this.btnDisabled = false;
        }
        else {
            this.btnDisabled = true;
        }
        console.log(this.selectedRows);
        // this.router.navigate(
        //   ["/kpcaller/kp_customer_details", selectedRows[0].id],
        //   {
        //     state: { data: selectedRows },
        //   }
        // );
    }
    FormSubmit() {
        let resp = {};
        console.log(this.callerForm.value, Array.from(this.selectedRows, (x) => x.id));
        if (this.route.snapshot.data.title === "Agents List") {
            this.dataservice
                .SetTeleCaller(this.callerForm.value.id, Array.from(this.selectedRows, (x) => x.id))
                .subscribe((result) => {
                resp = result.data;
                console.log("response", result);
                if (result.data.updateUser) {
                    this.toastr.success("Assigned successfully!");
                    this.getLists();
                    this.myModal.hide();
                }
                else {
                    this.toastr.error("Failed. Please check the fields!");
                }
            });
        }
        else {
            this.dataservice
                .SetKpCaller(this.callerForm.value.id, Array.from(this.selectedRows, (x) => x.id))
                .subscribe((result) => {
                resp = result.data;
                console.log("response", result);
                if (result.data.updateUser) {
                    this.toastr.success("Assigned successfully!");
                    this.getLists();
                    this.myModal.hide();
                }
                else {
                    this.toastr.error("Failed. Please check the fields!");
                }
            });
        }
    }
};
VerifiedListComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
VerifiedListComponent.propDecorators = {
    myModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["myModal",] }]
};
VerifiedListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_verified_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
], VerifiedListComponent);



/***/ }),

/***/ "bmwW":
/*!***********************************************************!*\
  !*** ./src/app/views/manager/enquirydetails.component.ts ***!
  \***********************************************************/
/*! exports provided: EnquiryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiryDetailComponent", function() { return EnquiryDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_enquirydetails_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./enquirydetails.component.html */ "ALhq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");









let EnquiryDetailComponent = class EnquiryDetailComponent {
    constructor(dataservice, activatedRouter, router, fb, toastr) {
        this.dataservice = dataservice;
        this.activatedRouter = activatedRouter;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.dateConverter = _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["dateConverter"];
        this.loading = true;
        this.details = [];
        this.btnLoading = false;
        this.groups = [];
        this.localities = [];
        this.postoffices = [];
        this.agents = [];
        this.customerForm = this.fb.group({
            NameOfBride: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            NameOfFather: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            NameOfMother: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            MarriageDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Contact_Number_1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Contact_Number_2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            MarriageMonth: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            tele_caller_contact: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            HouseName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Landmark: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            locality: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Post_office: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Latitude: [""],
            Longitude: [""],
            GoogleMapURL: [""],
            GoogleMapPlusCode: [""],
        });
        this.commentForm = this.fb.group({
            RemarksText: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
        this.Months = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["Months"]];
    }
    ngOnInit() {
        this.getLists();
        this.activatedRouter.params.subscribe((params) => {
            this.id = params["id"];
        });
        this.dataservice
            .getSingleEnquiry(this.id)
            .valueChanges.subscribe((result) => {
            console.log("getSingleAgent", result.data.customerEnquiry);
            this.details = result.data.customerEnquiry;
            this.customerForm = this.fb.group({
                NameOfBride: [this.details.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                NameOfFather: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                NameOfMother: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                MarriageDate: [this.details.MarriageDate, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Contact_Number_1: [this.details.PhoneNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Contact_Number_2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                MarriageMonth: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                tele_caller_contact: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                HouseName: [this.details.HouseName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Landmark: [this.details.Landmark, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                locality: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Post_office: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Latitude: [""],
                Longitude: [""],
                GoogleMapURL: [""],
                GoogleMapPlusCode: [""],
            });
            this.loading = false;
        });
    }
    getLists() {
        this.loading = true;
        this.dataservice.getLocalities().valueChanges.subscribe((result) => {
            console.log("getLocalities", result.data.localities);
            this.localities = result.data.localities;
        });
        this.dataservice.getPostOffices().valueChanges.subscribe((result) => {
            console.log("getPostOffices", result.data.postOffices);
            this.postoffices = result.data.postOffices;
        });
        this.dataservice.getAgents().valueChanges.subscribe((result) => {
            console.log("getAgents", result.data.teleCallerContacts);
            this.agents = result.data.teleCallerContacts;
        });
    }
    // dateConverter(date) {
    //   return new Date(date);
    // }
    FormSubmit() {
        let resp = {};
        console.log(this.customerForm.value);
        this.dataservice
            .Addcustomer(this.customerForm.value)
            .subscribe((result) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.createCustomer) {
                this.toastr.success("Customer added successfully!");
                this.getLists();
                this.myModal.hide();
            }
            else {
                this.toastr.error("Failed. Please check the fields!");
            }
        });
    }
    customerSubmit() {
        let resp = {};
        console.log(this.customerForm.value);
        this.dataservice
            .Addcustomer(this.customerForm.value)
            .subscribe((result) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.createCustomer) {
                this.toastr.success("customer added successfully!");
                this.getLists();
                this.customerModal.hide();
            }
            else {
                this.toastr.error("Failed. Please check the fields!");
            }
        });
    }
    deleteEnquiry() {
        let resp = {};
        this.dataservice.DeleteEnquiry(this.id).subscribe((result) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.deleteCustomerEnquiry) {
                this.toastr.success("Enquiry deleted successfully!");
                this.router.navigate(["/manager/enquiries"]);
                this.deleteModal.hide();
            }
            else {
                this.toastr.error("Failed. Please check again!");
            }
        });
    }
};
EnquiryDetailComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
EnquiryDetailComponent.propDecorators = {
    myModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["myModal",] }],
    customerModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["customerModal",] }],
    deleteModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["deleteModal",] }],
    commentModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["commentModal",] }]
};
EnquiryDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_enquirydetails_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
], EnquiryDetailComponent);



/***/ }),

/***/ "cVY+":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/manager/verified.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n      <h2>{{routerData.title}}</h2>\r\n      <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" [disabled]=\"btnDisabled\"\r\n        (click)=\"myModal.show()\">\r\n        Assign to caller\r\n      </button>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <ag-grid-angular #agGrid style=\"width: 100%; height: 500px\" id=\"myGrid\" class=\"ag-theme-alpine\"\r\n            [columnDefs]=\"columnDefs\" [rowData]=\"rowData\" [rowSelection]=\"rowSelection\"\r\n            (gridReady)=\"onGridReady($event)\" (selectionChanged)=\"onSelectionChanged($event)\" animateRows=\"true\">\r\n          </ag-grid-angular>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div bsModal #myModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n      aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Assign to {{label}} Caller</h4>\r\n            <button type=\"button\" class=\"close\" (click)=\"myModal.hide()\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <form [formGroup]=\"callerForm\" (ngSubmit)=\"FormSubmit()\">\r\n              <div class=\"form-group\">\r\n                <label for=\"id\">{{label}} Caller</label>\r\n                <select class=\"form-control\" id=\"id\" required ngModel name=\"group\" formControlName=\"id\">\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of users\" value=\"{{ item.id }}\">\r\n                    {{ item.username }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"myModal.hide()\">\r\n                Close\r\n              </button>\r\n              <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !callerForm.valid\">\r\n                <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\"\r\n                  aria-hidden=\"true\"></span>\r\n                Save changes\r\n              </button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <!-- /.modal-content -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "d7Xv":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/manager/customerdetail.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div\r\n    bsModal\r\n    #saleModal=\"bs-modal\"\r\n    class=\"modal fade\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n    aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\"\r\n  >\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Close Sale</h4>\r\n          <button\r\n            type=\"button\"\r\n            class=\"close\"\r\n            (click)=\"saleModal.hide()\"\r\n            aria-label=\"Close\"\r\n          >\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form [formGroup]=\"saleForm\" (ngSubmit)=\"closeCustomer()\">\r\n            <div class=\"form-group\">\r\n              <label for=\"group\">Status</label>\r\n              <select\r\n                class=\"form-control\"\r\n                id=\"CustomerStatus\"\r\n                required\r\n                ngModel\r\n                name=\"CustomerStatus\"\r\n                formControlName=\"CustomerStatus\"\r\n              >\r\n                <option value=\"\" disabled selected hidden>Choose...</option>\r\n                <option value=\"Sale successful\">Sale successful</option>\r\n                <option value=\"Other Purchase\">Other Purchase</option>\r\n                <option value=\"Plan dropped\">Plan dropped</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"group\">Closed by</label>\r\n              <select\r\n                class=\"form-control\"\r\n                id=\"sale_closed_by\"\r\n                required\r\n                ngModel\r\n                name=\"sale_closed_by\"\r\n                formControlName=\"sale_closed_by\"\r\n              >\r\n                <option value=\"\" disabled selected hidden>Choose...</option>\r\n                <option *ngFor=\"let item of kpcallers\" value=\"{{ item.id }}\">\r\n                  {{ item.username }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"sale_remarks\">Sale remarks</label>\r\n              <textarea\r\n                class=\"form-control\"\r\n                maxlength=\"250\"\r\n                id=\"sale_remarks\"\r\n                name=\"sale_remarks\"\r\n                formControlName=\"sale_remarks\"\r\n                placeholder=\"Enter remarks\"\r\n              ></textarea>\r\n            </div>\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-secondary\"\r\n              (click)=\"saleModal.hide()\"\r\n            >\r\n              Close\r\n            </button>\r\n            <button\r\n              type=\"submit\"\r\n              class=\"btn btn-primary ml-2\"\r\n              [disabled]=\"btnLoading || !saleForm.valid\"\r\n            >\r\n              <span\r\n                *ngIf=\"btnLoading\"\r\n                class=\"spinner-border spinner-border-sm\"\r\n                role=\"status\"\r\n                aria-hidden=\"true\"\r\n              ></span>\r\n              Save changes\r\n            </button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n  </div>\r\n  <div\r\n    bsModal\r\n    #deleteModal=\"bs-modal\"\r\n    class=\"modal fade\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n    aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\"\r\n  >\r\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body text-center\">\r\n          Do you want to delete this agent?\r\n        </div>\r\n        <div class=\"modal-footer justify-content-around\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"deleteModal.hide()\"\r\n          >\r\n            No! Cancel.\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteAgent()\">\r\n            Yes! Delete.\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div\r\n      class=\"card-header\"\r\n      style=\"display: flex; justify-content: space-between\"\r\n    >\r\n      <h2>Customer Details</h2>\r\n      <span>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-primary\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"myModal.show()\"\r\n        >\r\n          Assign to field agent\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-danger\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"saleModal.show()\"\r\n        >\r\n          Close Sale\r\n        </button>\r\n      </span>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"row\">\r\n            <div style=\"display: flex; justify-content: space-between\">\r\n              <h4>Basic details</h4>\r\n            </div>\r\n            <table class=\"table table-striped\">\r\n              <tbody>\r\n                <tr>\r\n                  <td>ID</td>\r\n                  <td>{{ details?.id }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Name Of Bride</td>\r\n                  <td>{{ details?.NameOfBride }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Name Of Father</td>\r\n                  <td>{{ details?.NameOfFather }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Name Of Mother</td>\r\n                  <td>{{ details?.NameOfMother }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Marriage Date</td>\r\n                  <td>{{ details?.MarriageDate }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Marriage Month</td>\r\n                  <td>{{ details?.MarriageMonth }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Contact number 1</td>\r\n                  <td>{{ details?.Contact_Number_1 }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Contact number 2</td>\r\n                  <td>{{ details?.Contact_Number_2 }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Agent</td>\r\n                  <td>\r\n                    <span class=\"badge badge-warning\">{{\r\n                      details.tele_caller_contact?.Name\r\n                    }}</span>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>KP Caller</td>\r\n                  <td>\r\n                    <span class=\"badge badge-primary\">{{\r\n                      details.kp_caller_assigned?.username\r\n                    }}</span>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>House Name</td>\r\n                  <td>{{ details.Address?.HouseName }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Landmark</td>\r\n                  <td>{{ details.Address?.Landmark }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Locality</td>\r\n                  <td>{{ details.Address?.locality?.Name }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Latitude</td>\r\n                  <td>{{ details.Address?.GeoLocation?.Latitude }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Longitude</td>\r\n                  <td>{{ details.Address?.GeoLocation?.Longitude }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Plus code</td>\r\n                  <td>{{ details.Address?.GeoLocation?.GoogleMapPlusCode }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Map URL</td>\r\n                  <td>\r\n                    <a\r\n                      href=\"https://www.google.com/maps/search/?api=1&query={{\r\n                        details.Address?.GeoLocation?.Latitude\r\n                      }}%2C{{ details.Address?.GeoLocation?.Longitude }}\"\r\n                      target=\"_blank\"\r\n                      >Click here to view location</a\r\n                    >\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div style=\"display: flex; justify-content: space-between\">\r\n              <h4>Field Report</h4>\r\n            </div>\r\n            <table *ngIf=\"details.FieldReport\" class=\"table table-striped\">\r\n              <tbody>\r\n                <tr>\r\n                  <td>Financial category</td>\r\n                  <td>{{ details.FieldReport?.FinancialBackground }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Quantity of intended purchase</td>\r\n                  <td>{{ details.FieldReport?.QtyOfGold }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Suitable set</td>\r\n                  <td>{{ details.FieldReport?.PreferredWeddingSet }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Whether planning to exchange after marriage?</td>\r\n                  <td>\r\n                    {{\r\n                      details.FieldReport?.PlanningForReplacementAfterWedding\r\n                    }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Quantity of old gold for exchange</td>\r\n                  <td>{{ details.FieldReport?.OldGoldExchangeQty }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>No cost emi needed?</td>\r\n                  <td>{{ details.FieldReport?.NoCostEmiRequired }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>EMI tenure</td>\r\n                  <td>\r\n                    <span class=\"badge badge-warning\">{{\r\n                      details.FieldReport?.EmiTenure\r\n                    }}</span>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Number of repayments</td>\r\n                  <td>\r\n                    <span class=\"badge badge-primary\">{{\r\n                      details.FieldReport?.EmiIntervals\r\n                    }}</span>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Token advance</td>\r\n                  <td>{{ details.FieldReport?.TokenAdvance }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Rate advance</td>\r\n                  <td>{{ details.FieldReport?.RateAdvance }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Whether approached by other jewelleries?</td>\r\n                  <td>{{ details.FieldReport?.EnquiriesFromOthers }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Advance paid to other jewellery</td>\r\n                  <td>\r\n                    {{ details.FieldReport?.AdvancePaidToOtherJewellery }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Whether received any fresh leads?</td>\r\n                  <td>{{ details.FieldReport?.NumberOfNewMarriageAddress }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Captured location</td>\r\n                  <td>\r\n                    <a\r\n                      href=\"https://www.google.com/maps/search/?api=1&query={{\r\n                        details.FieldReport?.location?.Latitude\r\n                      }}%2C{{ details.FieldReport?.location?.Longitude }}\"\r\n                      target=\"_blank\"\r\n                      >Click here to view location</a\r\n                    >\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <carousel [interval]=\"2000\">\r\n              <slide *ngFor=\"let item of details.FieldReport?.images\">\r\n                <img\r\n                  src=\"https://jewel-core.telemarketing.untanglepro.com{{\r\n                    item.url\r\n                  }}\"\r\n                  alt=\"First slide\"\r\n                  style=\"display: block; width: 100%\"\r\n                />\r\n                <!-- <div class=\"carousel-caption d-none d-md-block\">\r\n                                <h3>First slide label</h3>\r\n                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n                              </div> -->\r\n              </slide>\r\n            </carousel>\r\n          </div>\r\n\r\n          <div *ngIf=\"!details.FieldReport\" class=\"card\">\r\n            <div class=\"card-body text-center\">No field report found</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <div *ngIf=\"details.isSaleClosed\">\r\n            <div style=\"display: flex; justify-content: space-between\">\r\n              <h4 class=\"text-danger\">Sale Closed</h4>\r\n            </div>\r\n            <div class=\"card\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">\r\n                  Customer status : {{ details.CustomerStatus }}\r\n                </h5>\r\n                <p class=\"card-text\">\r\n                  Closed on : {{ details.sale_closed_date }}\r\n                </p>\r\n                <p class=\"card-text\">Remarks : {{ details.sale_remarks }}</p>\r\n                Closed by :\r\n                <span class=\"badge badge-primary\">{{\r\n                  details.sale_closed_by.username\r\n                }}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div style=\"display: flex; justify-content: space-between\">\r\n            <h4>Remarks</h4>\r\n          </div>\r\n          <div class=\"card\" *ngFor=\"let item of details.TelecallerRemarks\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">\r\n                {{ dateConverter(item.CallHistory?.event_date_time) }}\r\n              </h5>\r\n              <p class=\"card-text\">{{ item.RemarksText }}</p>\r\n              <span class=\"badge badge-primary\">{{\r\n                item.CallHistory.users_permissions_user?.username\r\n              }}</span>\r\n            </div>\r\n          </div>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-primary\"\r\n            data-toggle=\"modal\"\r\n            (click)=\"commentModal.show()\"\r\n          >\r\n            Add Comment\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div\r\n      bsModal\r\n      #myModal=\"bs-modal\"\r\n      class=\"modal fade\"\r\n      tabindex=\"-1\"\r\n      role=\"dialog\"\r\n      aria-labelledby=\"myModalLabel\"\r\n      aria-hidden=\"true\"\r\n    >\r\n      <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Assign to field Agent</h4>\r\n            <button\r\n              type=\"button\"\r\n              class=\"close\"\r\n              (click)=\"myModal.hide()\"\r\n              aria-label=\"Close\"\r\n            >\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <form [formGroup]=\"agentForm\" (ngSubmit)=\"FormSubmit()\">\r\n              <div class=\"form-group\">\r\n                <label for=\"group\">Field agent</label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"agent\"\r\n                  required\r\n                  ngModel\r\n                  name=\"agent\"\r\n                  formControlName=\"agent\"\r\n                >\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of users\" value=\"{{ item.id }}\">\r\n                    {{ item.username }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-secondary\"\r\n                (click)=\"myModal.hide()\"\r\n              >\r\n                Close\r\n              </button>\r\n              <button\r\n                type=\"submit\"\r\n                class=\"btn btn-primary ml-2\"\r\n                [disabled]=\"btnLoading || !agentForm.valid\"\r\n              >\r\n                <span\r\n                  *ngIf=\"btnLoading\"\r\n                  class=\"spinner-border spinner-border-sm\"\r\n                  role=\"status\"\r\n                  aria-hidden=\"true\"\r\n                ></span>\r\n                Save changes\r\n              </button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <!-- /.modal-content -->\r\n      </div>\r\n      <!-- /.modal-dialog -->\r\n    </div>\r\n    <div\r\n      bsModal\r\n      #commentModal=\"bs-modal\"\r\n      class=\"modal fade\"\r\n      tabindex=\"-1\"\r\n      role=\"dialog\"\r\n      aria-labelledby=\"myModalLabel\"\r\n      aria-hidden=\"true\"\r\n    >\r\n      <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Add Comment</h4>\r\n            <button\r\n              type=\"button\"\r\n              class=\"close\"\r\n              (click)=\"commentModal.hide()\"\r\n              aria-label=\"Close\"\r\n            >\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <form [formGroup]=\"commentForm\" (ngSubmit)=\"CommentSubmit()\">\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">Remarks</label>\r\n                <textarea\r\n                  class=\"form-control\"\r\n                  maxlength=\"250\"\r\n                  id=\"RemarksText\"\r\n                  name=\"RemarksText\"\r\n                  formControlName=\"RemarksText\"\r\n                  placeholder=\"Enter remarks\"\r\n                ></textarea>\r\n              </div>\r\n              <!-- <div class=\"form-group\">\r\n                                <label for=\"email\">Date</label>\r\n                                <input type=\"datetime-local\" class=\"form-control\" id=\"event_date_time\"\r\n                                    name=\"event_date_time\" formControlName=\"event_date_time\" />\r\n                            </div> -->\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-secondary\"\r\n                (click)=\"commentModal.hide()\"\r\n              >\r\n                Close\r\n              </button>\r\n              <button\r\n                type=\"submit\"\r\n                class=\"btn btn-primary ml-2\"\r\n                [disabled]=\"btnLoading || !commentForm.valid\"\r\n              >\r\n                <span\r\n                  *ngIf=\"btnLoading\"\r\n                  class=\"spinner-border spinner-border-sm\"\r\n                  role=\"status\"\r\n                  aria-hidden=\"true\"\r\n                ></span>\r\n                Save changes\r\n              </button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <!-- /.modal-content -->\r\n      </div>\r\n      <!-- /.modal-dialog -->\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "iva1":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/manager/customers.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n      <h2>Customers</h2>\r\n      <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"myModal.show()\">\r\n        New\r\n      </button>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <ag-grid-angular #agGrid style=\"width: 100%; height: 500px\" id=\"myGrid\" class=\"ag-theme-alpine\"\r\n            [columnDefs]=\"columnDefs\" [rowData]=\"rowData\" [rowSelection]=\"rowSelection\"\r\n            (gridReady)=\"onGridReady($event)\" (selectionChanged)=\"onSelectionChanged($event)\" animateRows=\"true\">\r\n          </ag-grid-angular>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div bsModal #myModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Add New Customer</h4>\r\n          <button type=\"button\" class=\"close\" (click)=\"myModal.hide()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form [formGroup]=\"customerForm\" (ngSubmit)=\"FormSubmit()\">\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Name of Bride</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"NameOfBride\" name=\"NameOfBride\" formControlName=\"NameOfBride\"\r\n                placeholder=\"Enter bride's name\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Name of Father</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"NameOfFather\" name=\"NameOfFather\"\r\n                formControlName=\"NameOfFather\" placeholder=\"Enter father's name\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Name of Mother</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"NameOfMother\" name=\"NameOfMother\"\r\n                formControlName=\"NameOfMother\" placeholder=\"Enter mother's name\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Contact number 1</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"Contact_Number_1\" name=\"Contact_Number_1\"\r\n                formControlName=\"Contact_Number_1\" placeholder=\"Enter primary contact number\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Contact number 2</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"Contact_Number_2\" name=\"Contact_Number_2\"\r\n                formControlName=\"Contact_Number_2\" placeholder=\"Enter secondary contact number\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">Marriage date</label>\r\n              <input type=\"date\" class=\"form-control\" id=\"MarriageDate\" name=\"MarriageDate\"\r\n                formControlName=\"MarriageDate\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"group\">Marriage month</label>\r\n              <select class=\"form-control\" id=\"MarriageMonth\" required ngModel name=\"MarriageMonth\" formControlName=\"MarriageMonth\">\r\n                <option value=\"\" disabled selected hidden>Choose...</option>\r\n                <option *ngFor=\"let item of Months\" value=\"{{ item.id }}\">\r\n                  {{ item.Name }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"group\">Agent</label>\r\n              <select class=\"form-control\" id=\"tele_caller_contact\" required ngModel name=\"tele_caller_contact\" formControlName=\"tele_caller_contact\">\r\n                <option value=\"\" disabled selected hidden>Choose...</option>\r\n                <option *ngFor=\"let item of agents\" value=\"{{ item.id }}\">\r\n                  {{ item.Name }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">House Name</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"HouseName\" name=\"HouseName\"\r\n                formControlName=\"HouseName\" placeholder=\"Enter House Name\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Landmark</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"Landmark\" name=\"Landmark\"\r\n                formControlName=\"Landmark\" placeholder=\"Enter Landmark\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"locality\">Name of locality</label>\r\n              <!-- <input type=\"text\" class=\"form-control\" id=\"locality\" name=\"locality\" formControlName=\"locality\"\r\n                placeholder=\"Enter locality\" /> -->\r\n                <select class=\"form-control\" id=\"locality\" required ngModel name=\"locality\" formControlName=\"locality\">\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of localities\" value=\"{{ item.id }}\">\r\n                    {{ item.Name }}\r\n                  </option>\r\n                </select>\r\n            </div>\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"myModal.hide()\">\r\n              Close\r\n            </button>\r\n            <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !customerForm.valid\">\r\n              <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n              Save changes\r\n            </button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n  <!-- /.modal -->\r\n</div>");

/***/ }),

/***/ "m6yf":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/manager/enquiries.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n        <h2>Enquiries</h2>\r\n        <!-- <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"myModal.show()\">\r\n          New\r\n        </button> -->\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <ag-grid-angular #agGrid style=\"width: 100%; height: 500px\" id=\"myGrid\" class=\"ag-theme-alpine\"\r\n              [columnDefs]=\"columnDefs\" [rowData]=\"rowData\" [rowSelection]=\"rowSelection\"\r\n              (gridReady)=\"onGridReady($event)\" (selectionChanged)=\"onSelectionChanged($event)\" animateRows=\"true\">\r\n            </ag-grid-angular>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div bsModal #myModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n      aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Add New Customer</h4>\r\n            <button type=\"button\" class=\"close\" (click)=\"myModal.hide()\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <form [formGroup]=\"customerForm\" (ngSubmit)=\"FormSubmit()\">\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">Name of Bride</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"NameOfBride\" name=\"NameOfBride\" formControlName=\"NameOfBride\"\r\n                  placeholder=\"Enter bride's name\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">Name of Father</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"NameOfFather\" name=\"NameOfFather\"\r\n                  formControlName=\"NameOfFather\" placeholder=\"Enter father's name\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">Name of Mother</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"NameOfMother\" name=\"NameOfMother\"\r\n                  formControlName=\"NameOfMother\" placeholder=\"Enter mother's name\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">Contact number 1</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"Contact_Number_1\" name=\"Contact_Number_1\"\r\n                  formControlName=\"Contact_Number_1\" placeholder=\"Enter primary contact number\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">Contact number 2</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"Contact_Number_2\" name=\"Contact_Number_2\"\r\n                  formControlName=\"Contact_Number_2\" placeholder=\"Enter secondary contact number\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"email\">Marriage date</label>\r\n                <input type=\"date\" class=\"form-control\" id=\"MarriageDate\" name=\"MarriageDate\"\r\n                  formControlName=\"MarriageDate\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"group\">Marriage month</label>\r\n                <select class=\"form-control\" id=\"MarriageMonth\" required ngModel name=\"MarriageMonth\" formControlName=\"MarriageMonth\">\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of Months\" value=\"{{ item.id }}\">\r\n                    {{ item.Name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"group\">Agent</label>\r\n                <select class=\"form-control\" id=\"tele_caller_contact\" required ngModel name=\"tele_caller_contact\" formControlName=\"tele_caller_contact\">\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of agents\" value=\"{{ item.id }}\">\r\n                    {{ item.Name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">House Name</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"HouseName\" name=\"HouseName\"\r\n                  formControlName=\"HouseName\" placeholder=\"Enter House Name\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">Landmark</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"Landmark\" name=\"Landmark\"\r\n                  formControlName=\"Landmark\" placeholder=\"Enter Landmark\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"locality\">Name of locality</label>\r\n                <!-- <input type=\"text\" class=\"form-control\" id=\"locality\" name=\"locality\" formControlName=\"locality\"\r\n                  placeholder=\"Enter locality\" /> -->\r\n                  <select class=\"form-control\" id=\"locality\" required ngModel name=\"locality\" formControlName=\"locality\">\r\n                    <option value=\"\" disabled selected hidden>Choose...</option>\r\n                    <option *ngFor=\"let item of localities\" value=\"{{ item.id }}\">\r\n                      {{ item.Name }}\r\n                    </option>\r\n                  </select>\r\n              </div>\r\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"myModal.hide()\">\r\n                Close\r\n              </button>\r\n              <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !customerForm.valid\">\r\n                <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n                Save changes\r\n              </button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <!-- /.modal-content -->\r\n      </div>\r\n      <!-- /.modal-dialog -->\r\n    </div>\r\n    <!-- /.modal -->\r\n  </div>");

/***/ })

}]);
//# sourceMappingURL=views-manager-manager-module-es2015.js.map