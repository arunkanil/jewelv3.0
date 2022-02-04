(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-kpcaller-kpcaller-module"],{

/***/ "/oiM":
/*!***************************************************!*\
  !*** ./src/app/views/kpcaller/kpcaller.module.ts ***!
  \***************************************************/
/*! exports provided: KpCallerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KpCallerModule", function() { return KpCallerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _caller_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./caller_list.component */ "K6r/");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var _kpcaller_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kpcaller-routing.module */ "0JAA");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ag-grid-angular */ "YFAK");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _customerdetail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customerdetail.component */ "N1zO");





// Dropdowns Component


// Buttons Routing

// Angular



let KpCallerModule = class KpCallerModule {
};
KpCallerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([]),
            _kpcaller_routing_module__WEBPACK_IMPORTED_MODULE_7__["KpCallerRoutingModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ],
        declarations: [
            _caller_list_component__WEBPACK_IMPORTED_MODULE_4__["ButtonsComponent"],
            _customerdetail_component__WEBPACK_IMPORTED_MODULE_10__["KPCustomerDetailComponent"]
        ]
    })
], KpCallerModule);



/***/ }),

/***/ "0JAA":
/*!***********************************************************!*\
  !*** ./src/app/views/kpcaller/kpcaller-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: KpCallerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KpCallerRoutingModule", function() { return KpCallerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _caller_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./caller_list.component */ "K6r/");
/* harmony import */ var _customerdetail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customerdetail.component */ "N1zO");
/* harmony import */ var _login_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/auth.guard */ "nl+3");






const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'kpcaller'
            },
            {
                path: 'verification',
                canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                component: _caller_list_component__WEBPACK_IMPORTED_MODULE_3__["ButtonsComponent"],
                data: {
                    roles: 'KP_CALLER',
                    title: 'Profile'
                }
            },
            {
                path: 'assigned',
                canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                component: _caller_list_component__WEBPACK_IMPORTED_MODULE_3__["ButtonsComponent"],
                data: {
                    roles: 'KP_CALLER',
                    title: 'Assigned List'
                }
            },
            {
                path: 'dnf',
                canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                component: _caller_list_component__WEBPACK_IMPORTED_MODULE_3__["ButtonsComponent"],
                data: {
                    roles: 'KP_CALLER',
                    title: 'DNF'
                }
            },
            {
                path: 'kp_customer_details/:id/:from',
                canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                component: _customerdetail_component__WEBPACK_IMPORTED_MODULE_4__["KPCustomerDetailComponent"],
                data: {
                    roles: 'KP_CALLER',
                    title: 'Customer Details'
                }
            },
        ]
    }
];
let KpCallerRoutingModule = class KpCallerRoutingModule {
};
KpCallerRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], KpCallerRoutingModule);



/***/ }),

/***/ "K6r/":
/*!*********************************************************!*\
  !*** ./src/app/views/kpcaller/caller_list.component.ts ***!
  \*********************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_caller_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./caller_list.component.html */ "z2NA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");








let ButtonsComponent = class ButtonsComponent {
    constructor(dataservice, router, fb, toastr) {
        this.dataservice = dataservice;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.filterForm = this.fb.group({
            year: [new Date().getFullYear(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.loading = true;
        this.btnLoading = false;
        this.title = "Verification";
        this.orders = {};
        this.columnDefs = [];
        this.rowData = [];
        this.January = [];
        this.February = [];
        this.March = [];
        this.April = [];
        this.May = [];
        this.June = [];
        this.July = [];
        this.August = [];
        this.September = [];
        this.October = [];
        this.November = [];
        this.December = [];
        this.selectedYear = new Date().getFullYear();
        this.years = [];
        this.filter = {};
        this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["customersColumn"]];
        this.rowSelection = "single";
    }
    ngOnInit() {
        this.loading = true;
        if (this.router.url === "/kpcaller/verification") {
            this.filter = {
                is_verified: false,
                condition: "last_called_time:asc"
            };
            this.title = "Verification";
        }
        else if (this.router.url === "/kpcaller/assigned") {
            this.filter = {
                MarriageDateOR_null: false,
                MarriageMonthOR_null: false,
                kp_id: localStorage.getItem("uid"),
                condition: "last_called_time:asc"
            };
            this.title = "Assigned";
        }
        else {
            this.filter = {
                MarriageDate_null: true,
                MarriageMonth_null: true,
                kp_id: localStorage.getItem("uid"),
                condition: "last_called_time:asc"
            };
            this.title = "Date Not Fixed";
            this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["DNFcustomersColumn"]];
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
            .valueChanges.subscribe((result) => {
            console.log("getCustomersFilter", result.data.customers);
            this.rowData = result.data.customers;
            this.filterBasedOnMonths();
        });
    }
    filterBasedOnMonths() {
        this.January = this.rowData.filter((item) => {
            new Date(item.MarriageDate).getMonth() == 0 || item.MarriageMonth == 0;
            console.log(new Date(item.MarriageDate).getMonth());
        });
        this.February = this.rowData.filter((item) => new Date(item.MarriageDate).getMonth() == 1 || item.MarriageMonth == 1);
        this.March = this.rowData.filter((item) => new Date(item.MarriageDate).getMonth() == 2 || item.MarriageMonth == 2);
        this.April = this.rowData.filter((item) => new Date(item.MarriageDate).getMonth() == 3 || item.MarriageMonth == 3);
        this.May = this.rowData.filter((item) => new Date(item.MarriageDate).getMonth() == 4 || item.MarriageMonth == 4);
        this.June = this.rowData.filter((item) => new Date(item.MarriageDate).getMonth() == 5 || item.MarriageMonth == 5);
        this.July = this.rowData.filter((item) => new Date(item.MarriageDate).getMonth() == 6 || item.MarriageMonth == 6);
        this.August = this.rowData.filter((item) => new Date(item.MarriageDate).getMonth() == 7 || item.MarriageMonth == 7);
        this.September = this.rowData.filter((item) => new Date(item.MarriageDate).getMonth() == 8 || item.MarriageMonth == 8);
        this.October = this.rowData.filter((item) => new Date(item.MarriageDate).getMonth() == 9 || item.MarriageMonth == 9);
        this.November = this.rowData.filter((item) => new Date(item.MarriageDate).getMonth() == 10 || item.MarriageMonth == 10);
        this.December = this.rowData.filter((item) => new Date(item.MarriageDate).getMonth() == 11 || item.MarriageMonth == 11);
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    onRowClicked(event) {
        console.log("row", event.data);
        this.router.navigate(["/kpcaller/kp_customer_details", event.data.id, this.router.url], {
            state: { data: event.data },
        });
    }
    onSelectionChanged(event) {
        var selectedRows = this.gridApi.getSelectedRows();
        console.log(selectedRows, event);
        // this.router.navigate(
        //   ["/kpcaller/kp_customer_details", selectedRows[0].id, this.router.url],
        //   {
        //     state: { data: selectedRows },
        //   }
        // );
    }
    filterSubmit() {
        this.filter = Object.assign(Object.assign({}, this.filter), { MarriageDate_gte: this.filterForm.value.year + "-01" + "-01", MarriageDate_lte: this.filterForm.value.year + "-12" + "-31" });
        console.log(this.filterForm.value, this.filter);
        this.getLists(this.filter);
    }
};
ButtonsComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
ButtonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_caller_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], ButtonsComponent);



/***/ }),

/***/ "N1zO":
/*!************************************************************!*\
  !*** ./src/app/views/kpcaller/customerdetail.component.ts ***!
  \************************************************************/
/*! exports provided: KPCustomerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KPCustomerDetailComponent", function() { return KPCustomerDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_customerdetail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./customerdetail.component.html */ "svF1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");









let KPCustomerDetailComponent = class KPCustomerDetailComponent {
    constructor(dataservice, activatedRouter, fb, toastr) {
        this.dataservice = dataservice;
        this.activatedRouter = activatedRouter;
        this.fb = fb;
        this.toastr = toastr;
        this.from = false;
        this.loading = true;
        this.details = [];
        this.btnLoading = false;
        this.dateConverter = _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["dateConverter"];
        this.groups = [];
        this.commentForm = this.fb.group({
            RemarksText: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            // event_date_time: ["", Validators.required],
            is_verified: [false],
        });
    }
    ngOnInit() {
        this.getLists();
    }
    getLists() {
        this.loading = true;
        this.activatedRouter.params.subscribe((params) => {
            this.id = params["id"];
            if (params["from"] === "/kpcaller/verification") {
                this.from = true;
            }
        });
        this.dataservice.getSingleCustomer(this.id).valueChanges.subscribe((result) => {
            console.log("getSingleCustomer", result.data.customer);
            this.details = result.data.customer;
            this.loading = false;
        });
        console.log(this.from);
        this.dataservice.getGroups().valueChanges.subscribe((result) => {
            console.log("getGroups", result.data.groups);
            this.groups = result.data.groups;
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
                this.getLists();
            }
            else {
                this.toastr.error("Failed. Please check the fields!");
            }
        });
    }
};
KPCustomerDetailComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
KPCustomerDetailComponent.propDecorators = {
    commentModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["commentModal",] }]
};
KPCustomerDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_customerdetail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], KPCustomerDetailComponent);



/***/ }),

/***/ "svF1":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/kpcaller/customerdetail.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n            <h2>Customer Details</h2>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <div class=\"row\">\r\n                        <table class=\"table table-striped\">\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>ID</td>\r\n                                    <td>{{details?.id}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Name Of Bride</td>\r\n                                    <td>{{details?.NameOfBride}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Name Of Father</td>\r\n                                    <td>{{details?.NameOfFather}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Name Of Mother</td>\r\n                                    <td>{{ details?.NameOfMother }}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Marriage Date</td>\r\n                                    <td>{{ details?.MarriageDate }}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Marriage Month</td>\r\n                                    <td>{{ details?.MarriageMonth }}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Contact number 1</td>\r\n                                    <td>{{ details?.Contact_Number_1 }}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Contact number 2</td>\r\n                                    <td>{{ details?.Contact_Number_2 }}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Agent</td>\r\n                                    <td>\r\n                                        <span class=\"badge badge-warning\">{{ details.tele_caller_contact?.Name }}</span>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>House Name</td>\r\n                                    <td>{{ details.Address?.HouseName }}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Landmark</td>\r\n                                    <td>{{ details.Address?.Landmark }}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Locality</td>\r\n                                    <td>{{ details.Address?.locality?.Name }}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Map URL</td>\r\n                                    <td>\r\n                                      <a href=\"{{ details.Address.GeoLocation.GoogleMapURL }}\" target=\"_blank\">Click here to view\r\n                                        location</a>\r\n                                    </td>\r\n                                  </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div style=\"display: flex; justify-content: space-between\">\r\n                            <h4>Field Report</h4>\r\n                        </div>\r\n                        <table *ngIf=\"details.FieldReport\" class=\"table table-striped\">\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>Financial category</td>\r\n                                    <td>{{details.FieldReport?.FinancialBackground}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Quantity of intended purchase</td>\r\n                                    <td>{{details.FieldReport?.QtyOfGold}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Suitable set</td>\r\n                                    <td>{{details.FieldReport?.PreferredWeddingSet}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Whether planning to exchange after marriage?</td>\r\n                                    <td>{{ details.FieldReport?.PlanningForReplacementAfterWedding }}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Quantity of old gold for exchange</td>\r\n                                    <td>{{ details.FieldReport?.OldGoldExchangeQty }}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>No cost emi needed?</td>\r\n                                    <td>{{ details.FieldReport?.NoCostEmiRequired }}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>EMI tenure</td>\r\n                                    <td>\r\n                                        <span class=\"badge badge-warning\">{{ details.FieldReport?.EmiTenure }}</span>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Number of repayments</td>\r\n                                    <td>\r\n                                        <span class=\"badge badge-primary\">{{ details.FieldReport?.EmiIntervals\r\n                                            }}</span>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Token advance</td>\r\n                                    <td>{{ details.FieldReport?.TokenAdvance }}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Rate advance</td>\r\n                                    <td>{{ details.FieldReport?.RateAdvance }}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Whether approached by other jewelleries?</td>\r\n                                    <td>{{ details.FieldReport?.EnquiriesFromOthers }}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Advance paid to other jewellery</td>\r\n                                    <td>{{ details.FieldReport?.AdvancePaidToOtherJewellery }}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Whether received any fresh leads?</td>\r\n                                    <td>{{ details.FieldReport?.NumberOfNewMarriageAddress }}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                    <div *ngIf=\"!details.FieldReport\" class=\"card\">\r\n                        <div class=\"card-body text-center\">\r\n                            No field report found\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <div class=\"card\" *ngFor=\"let item of details.TelecallerRemarks\">\r\n                        <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">{{dateConverter(item.CallHistory?.event_date_time)}}</h5>\r\n                            <p class=\"card-text\">{{item.RemarksText}}</p>\r\n                            <span\r\n                                class=\"badge badge-primary\">{{item.CallHistory.users_permissions_user?.username}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"commentModal.show()\">\r\n                        Add Comment\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div bsModal #commentModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\r\n            aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <h4 class=\"modal-title\">Add Comment</h4>\r\n                        <button type=\"button\" class=\"close\" (click)=\"commentModal.hide()\" aria-label=\"Close\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <form [formGroup]=\"commentForm\" (ngSubmit)=\"CommentSubmit()\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"name\">Remarks</label>\r\n                                <textarea class=\"form-control\" maxlength=\"250\" id=\"RemarksText\" name=\"RemarksText\"\r\n                                    formControlName=\"RemarksText\" placeholder=\"Enter remarks\"></textarea>\r\n                            </div>\r\n                            <!-- <div class=\"form-group\">\r\n                                <label for=\"email\">Date</label>\r\n                                <input type=\"datetime-local\" class=\"form-control\" id=\"event_date_time\"\r\n                                    name=\"event_date_time\" formControlName=\"event_date_time\" />\r\n                            </div> -->\r\n                            <div *ngIf=\"from\" class=\"form-group\">\r\n                                <!-- <input type=\"checkbox\" class=\"form-control\" id=\"is_verified\" name=\"is_verified\"\r\n                                    formControlName=\"is_verified\" />\r\n                                <label for=\"is_verified\">Verification</label> -->\r\n                                <div class=\"checkbox\">\r\n                                    <label>\r\n                                        <input type=\"checkbox\" value=\"true\" id=\"is_verified\" name=\"is_verified\"\r\n                                            formControlName=\"is_verified\">\r\n                                        Customer Verified\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"commentModal.hide()\">\r\n                                Close\r\n                            </button>\r\n                            <button type=\"submit\" class=\"btn btn-primary ml-2\"\r\n                                [disabled]=\"btnLoading || !commentForm.valid\">\r\n                                <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\"\r\n                                    aria-hidden=\"true\"></span>\r\n                                Save changes\r\n                            </button>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n                <!-- /.modal-content -->\r\n            </div>\r\n            <!-- /.modal-dialog -->\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "z2NA":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/kpcaller/caller_list.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div\r\n      class=\"card-header\"\r\n      style=\"display: flex; justify-content: space-between\"\r\n    >\r\n      <h2>{{ title }} List</h2>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <form\r\n        *ngIf=\"router.url == '/kpcaller/assigned'\"\r\n        [formGroup]=\"filterForm\"\r\n        class=\"form-inline\"\r\n        (ngSubmit)=\"filterSubmit()\"\r\n      >\r\n        <div class=\"form-group\">\r\n          <label class=\"visually-hidden\" for=\"year\">Year</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"year\"\r\n            name=\"year\"\r\n            formControlName=\"year\"\r\n          >\r\n            <option *ngFor=\"let item of years\" value=\"{{ item.year }}\">\r\n              {{ item.year }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"ml-3 form-group\">\r\n          <button type=\"submit\" class=\"btn btn-primary\">Filter</button>\r\n        </div>\r\n      </form>\r\n      <div *ngIf=\"router.url != '/kpcaller/assigned'\" class=\"row\">\r\n        <div class=\"col-12\">\r\n          <ag-grid-angular\r\n            #agGrid\r\n            style=\"width: 100%; height: 500px\"\r\n            id=\"myGrid\"\r\n            class=\"ag-theme-alpine\"\r\n            [columnDefs]=\"columnDefs\"\r\n            [rowData]=\"rowData\"\r\n            [rowSelection]=\"rowSelection\"\r\n            (gridReady)=\"onGridReady($event)\"\r\n            (rowClicked)=\"onRowClicked($event)\"\r\n            (selectionChanged)=\"onSelectionChanged($event)\"\r\n            animateRows=\"true\"\r\n          >\r\n          </ag-grid-angular>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <tabset *ngIf=\"router.url == '/kpcaller/assigned'\">\r\n            <tab heading=\"All\">\r\n              <ag-grid-angular\r\n                #agGrid\r\n                style=\"width: 100%; height: 500px\"\r\n                id=\"myGrid\"\r\n                class=\"ag-theme-alpine\"\r\n                [columnDefs]=\"columnDefs\"\r\n                [rowData]=\"rowData\"\r\n                [rowSelection]=\"rowSelection\"\r\n                (gridReady)=\"onGridReady($event)\"\r\n                (rowClicked)=\"onRowClicked($event)\"\r\n                (selectionChanged)=\"onSelectionChanged($event)\"\r\n                animateRows=\"true\"\r\n              >\r\n              </ag-grid-angular>\r\n            </tab>\r\n            <tab heading=\"January\">\r\n              <ag-grid-angular\r\n                #agGrid1\r\n                style=\"width: 100%; height: 500px\"\r\n                id=\"myGrid1\"\r\n                class=\"ag-theme-alpine\"\r\n                [columnDefs]=\"columnDefs\"\r\n                [rowData]=\"January\"\r\n                [rowSelection]=\"rowSelection\"\r\n                (gridReady)=\"onGridReady($event)\"\r\n                (rowClicked)=\"onRowClicked($event)\"\r\n                (selectionChanged)=\"onSelectionChanged($event)\"\r\n                animateRows=\"true\"\r\n              >\r\n              </ag-grid-angular>\r\n            </tab>\r\n            <tab heading=\"February\">\r\n              <ag-grid-angular\r\n                #agGrid2\r\n                style=\"width: 100%; height: 500px\"\r\n                id=\"myGrid2\"\r\n                class=\"ag-theme-alpine\"\r\n                [columnDefs]=\"columnDefs\"\r\n                [rowData]=\"February\"\r\n                [rowSelection]=\"rowSelection\"\r\n                (gridReady)=\"onGridReady($event)\"\r\n                (rowClicked)=\"onRowClicked($event)\"\r\n                (selectionChanged)=\"onSelectionChanged($event)\"\r\n                animateRows=\"true\"\r\n              >\r\n              </ag-grid-angular>\r\n            </tab>\r\n            <tab heading=\"March\">\r\n              <ag-grid-angular\r\n                #agGrid3\r\n                style=\"width: 100%; height: 500px\"\r\n                id=\"myGrid3\"\r\n                class=\"ag-theme-alpine\"\r\n                [columnDefs]=\"columnDefs\"\r\n                [rowData]=\"March\"\r\n                [rowSelection]=\"rowSelection\"\r\n                (gridReady)=\"onGridReady($event)\"\r\n                (rowClicked)=\"onRowClicked($event)\"\r\n                (selectionChanged)=\"onSelectionChanged($event)\"\r\n                animateRows=\"true\"\r\n              >\r\n              </ag-grid-angular>\r\n            </tab>\r\n            <tab heading=\"April\">\r\n              <ag-grid-angular\r\n                #agGrid4\r\n                style=\"width: 100%; height: 500px\"\r\n                id=\"myGrid4\"\r\n                class=\"ag-theme-alpine\"\r\n                [columnDefs]=\"columnDefs\"\r\n                [rowData]=\"April\"\r\n                [rowSelection]=\"rowSelection\"\r\n                (gridReady)=\"onGridReady($event)\"\r\n                (rowClicked)=\"onRowClicked($event)\"\r\n                (selectionChanged)=\"onSelectionChanged($event)\"\r\n                animateRows=\"true\"\r\n              >\r\n              </ag-grid-angular>\r\n            </tab>\r\n            <tab heading=\"May\">\r\n              <ag-grid-angular\r\n                #agGrid5\r\n                style=\"width: 100%; height: 500px\"\r\n                id=\"myGrid5\"\r\n                class=\"ag-theme-alpine\"\r\n                [columnDefs]=\"columnDefs\"\r\n                [rowData]=\"May\"\r\n                [rowSelection]=\"rowSelection\"\r\n                (gridReady)=\"onGridReady($event)\"\r\n                (rowClicked)=\"onRowClicked($event)\"\r\n                (selectionChanged)=\"onSelectionChanged($event)\"\r\n                animateRows=\"true\"\r\n              >\r\n              </ag-grid-angular>\r\n            </tab>\r\n            <tab heading=\"June\">\r\n              <ag-grid-angular\r\n                #agGrid6\r\n                style=\"width: 100%; height: 500px\"\r\n                id=\"myGrid6\"\r\n                class=\"ag-theme-alpine\"\r\n                [columnDefs]=\"columnDefs\"\r\n                [rowData]=\"June\"\r\n                [rowSelection]=\"rowSelection\"\r\n                (gridReady)=\"onGridReady($event)\"\r\n                (rowClicked)=\"onRowClicked($event)\"\r\n                (selectionChanged)=\"onSelectionChanged($event)\"\r\n                animateRows=\"true\"\r\n              >\r\n              </ag-grid-angular>\r\n            </tab>\r\n            <tab heading=\"July\">\r\n              <ag-grid-angular\r\n                #agGrid7\r\n                style=\"width: 100%; height: 500px\"\r\n                id=\"myGrid7\"\r\n                class=\"ag-theme-alpine\"\r\n                [columnDefs]=\"columnDefs\"\r\n                [rowData]=\"July\"\r\n                [rowSelection]=\"rowSelection\"\r\n                (gridReady)=\"onGridReady($event)\"\r\n                (rowClicked)=\"onRowClicked($event)\"\r\n                (selectionChanged)=\"onSelectionChanged($event)\"\r\n                animateRows=\"true\"\r\n              >\r\n              </ag-grid-angular>\r\n            </tab>\r\n            <tab heading=\"August\">\r\n              <ag-grid-angular\r\n                #agGrid8\r\n                style=\"width: 100%; height: 500px\"\r\n                id=\"myGrid8\"\r\n                class=\"ag-theme-alpine\"\r\n                [columnDefs]=\"columnDefs\"\r\n                [rowData]=\"August\"\r\n                [rowSelection]=\"rowSelection\"\r\n                (gridReady)=\"onGridReady($event)\"\r\n                (rowClicked)=\"onRowClicked($event)\"\r\n                (selectionChanged)=\"onSelectionChanged($event)\"\r\n                animateRows=\"true\"\r\n              >\r\n              </ag-grid-angular>\r\n            </tab>\r\n            <tab heading=\"September\">\r\n              <ag-grid-angular\r\n                #agGrid9\r\n                style=\"width: 100%; height: 500px\"\r\n                id=\"myGrid9\"\r\n                class=\"ag-theme-alpine\"\r\n                [columnDefs]=\"columnDefs\"\r\n                [rowData]=\"September\"\r\n                [rowSelection]=\"rowSelection\"\r\n                (gridReady)=\"onGridReady($event)\"\r\n                (rowClicked)=\"onRowClicked($event)\"\r\n                (selectionChanged)=\"onSelectionChanged($event)\"\r\n                animateRows=\"true\"\r\n              >\r\n              </ag-grid-angular>\r\n            </tab>\r\n            <tab heading=\"October\">\r\n              <ag-grid-angular\r\n                #agGrid10\r\n                style=\"width: 100%; height: 500px\"\r\n                id=\"myGrid10\"\r\n                class=\"ag-theme-alpine\"\r\n                [columnDefs]=\"columnDefs\"\r\n                [rowData]=\"October\"\r\n                [rowSelection]=\"rowSelection\"\r\n                (gridReady)=\"onGridReady($event)\"\r\n                (rowClicked)=\"onRowClicked($event)\"\r\n                (selectionChanged)=\"onSelectionChanged($event)\"\r\n                animateRows=\"true\"\r\n              >\r\n              </ag-grid-angular>\r\n            </tab>\r\n            <tab heading=\"November\">\r\n              <ag-grid-angular\r\n                #agGrid11\r\n                style=\"width: 100%; height: 500px\"\r\n                id=\"myGrid11\"\r\n                class=\"ag-theme-alpine\"\r\n                [columnDefs]=\"columnDefs\"\r\n                [rowData]=\"November\"\r\n                [rowSelection]=\"rowSelection\"\r\n                (gridReady)=\"onGridReady($event)\"\r\n                (rowClicked)=\"onRowClicked($event)\"\r\n                (selectionChanged)=\"onSelectionChanged($event)\"\r\n                animateRows=\"true\"\r\n              >\r\n              </ag-grid-angular>\r\n            </tab>\r\n            <tab heading=\"December\">\r\n              <ag-grid-angular\r\n                #agGrid12\r\n                style=\"width: 100%; height: 500px\"\r\n                id=\"myGrid12\"\r\n                class=\"ag-theme-alpine\"\r\n                [columnDefs]=\"columnDefs\"\r\n                [rowData]=\"December\"\r\n                [rowSelection]=\"rowSelection\"\r\n                (gridReady)=\"onGridReady($event)\"\r\n                (rowClicked)=\"onRowClicked($event)\"\r\n                (selectionChanged)=\"onSelectionChanged($event)\"\r\n                animateRows=\"true\"\r\n              >\r\n              </ag-grid-angular>\r\n            </tab>\r\n          </tabset>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ })

}]);
//# sourceMappingURL=views-kpcaller-kpcaller-module-es2015.js.map