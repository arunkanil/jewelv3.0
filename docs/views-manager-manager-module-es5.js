(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-manager-manager-module"], {
    /***/
    "5Q6f": function Q6f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManagerModule", function () {
        return ManagerModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ag-grid-angular */
      "YFAK");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/carousel */
      "Osdn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _verified_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./verified.component */
      "Sx+e");
      /* harmony import */


      var _manager_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./manager-routing.module */
      "SOEm");
      /* harmony import */


      var _customers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./customers.component */
      "MPuI");
      /* harmony import */


      var _customerdetail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./customerdetail.component */
      "F9w6");
      /* harmony import */


      var _enquiries_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./enquiries.component */
      "EIdz");
      /* harmony import */


      var _enquirydetails_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./enquirydetails.component */
      "bmwW"); // Angular
      // import { TypographyComponent } from './typography.component';
      // Theme Routing


      var ManagerModule = function ManagerModule() {
        _classCallCheck(this, ManagerModule);
      };

      ManagerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _manager_routing_module__WEBPACK_IMPORTED_MODULE_8__["ManagerRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridModule"].withComponents([]), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(), ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        declarations: [_verified_component__WEBPACK_IMPORTED_MODULE_7__["VerifiedListComponent"], _customers_component__WEBPACK_IMPORTED_MODULE_9__["ManagerCustomerComponent"], _customerdetail_component__WEBPACK_IMPORTED_MODULE_10__["ManagerCustomerDetailComponent"], _enquiries_component__WEBPACK_IMPORTED_MODULE_11__["EnquiriesComponent"], _enquirydetails_component__WEBPACK_IMPORTED_MODULE_12__["EnquiryDetailComponent"]]
      })], ManagerModule);
      /***/
    },

    /***/
    "ALhq": function ALhq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div\r\n    bsModal\r\n    #deleteModal=\"bs-modal\"\r\n    class=\"modal fade\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n    aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\"\r\n  >\r\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body text-center\">\r\n          Do you want to delete this enquiry?\r\n        </div>\r\n        <div class=\"modal-footer justify-content-around\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"deleteModal.hide()\"\r\n          >\r\n            No! Cancel.\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteEnquiry()\">\r\n            Yes! Delete.\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div\r\n      class=\"card-header\"\r\n      style=\"display: flex; justify-content: space-between\"\r\n    >\r\n      <h2>Enquiry Details</h2>\r\n      <span>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-primary\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"myModal.show()\"\r\n        >\r\n          New Customer\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-danger\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"deleteModal.show()\"\r\n        >\r\n          Delete\r\n        </button></span\r\n      >\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <table class=\"table table-striped\">\r\n            <tbody>\r\n              <tr>\r\n                <td>ID</td>\r\n                <td>{{ details.id }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Name</td>\r\n                <td>{{ details.Name }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Phone Number</td>\r\n                <td>\r\n                  <h4>{{ details.PhoneNumber }}</h4>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>House Name</td>\r\n                <td>{{ details.HouseName }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Landmark</td>\r\n                <td>{{ details.Landmark }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>PostOffice Number</td>\r\n                <td>{{ details.PostOfficeNumber }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Is this a wedding purchase</td>\r\n                <td>\r\n                  <h4>\r\n                    <span class=\"badge badge-warning\">{{\r\n                      details.isWeddingPurchase\r\n                    }}</span>\r\n                  </h4>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Marriage Date</td>\r\n                <td>\r\n                  <h4>{{ details.MarriageDate }}</h4>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Quantity of gold</td>\r\n                <td>\r\n                  <h4>{{ details.QtyOfGold }}</h4>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>No cost EMI needed?</td>\r\n                <td>\r\n                  <h4>\r\n                    <span class=\"badge badge-warning\">{{\r\n                      details.OptNoCostEMI\r\n                    }}</span>\r\n                  </h4>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div\r\n      bsModal\r\n      #myModal=\"bs-modal\"\r\n      class=\"modal fade\"\r\n      tabindex=\"-1\"\r\n      role=\"dialog\"\r\n      aria-labelledby=\"myModalLabel\"\r\n      aria-hidden=\"true\"\r\n    >\r\n      <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Add as customer</h4>\r\n            <button\r\n              type=\"button\"\r\n              class=\"close\"\r\n              (click)=\"myModal.hide()\"\r\n              aria-label=\"Close\"\r\n            >\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <form [formGroup]=\"customerForm\" (ngSubmit)=\"FormSubmit()\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"name\">Name of Bride</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"NameOfBride\" name=\"NameOfBride\"\r\n                      formControlName=\"NameOfBride\" placeholder=\"Enter bride's name\" />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"name\">Name of Father</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"NameOfFather\" name=\"NameOfFather\"\r\n                      formControlName=\"NameOfFather\" placeholder=\"Enter father's name\" />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"name\">Name of Mother</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"NameOfMother\" name=\"NameOfMother\"\r\n                      formControlName=\"NameOfMother\" placeholder=\"Enter mother's name\" />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"name\">Contact number 1</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"Contact_Number_1\" name=\"Contact_Number_1\"\r\n                      formControlName=\"Contact_Number_1\" placeholder=\"Enter primary contact number\" />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"name\">Contact number 2</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"Contact_Number_2\" name=\"Contact_Number_2\"\r\n                      formControlName=\"Contact_Number_2\" placeholder=\"Enter secondary contact number\" />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"Post_office\">Post office</label>\r\n                    <!-- <input type=\"text\" class=\"form-control\" id=\"locality\" name=\"locality\" formControlName=\"locality\"\r\n                      placeholder=\"Enter locality\" /> -->\r\n                    <select class=\"form-control\" id=\"Post_office\" required ngModel name=\"Post_office\"\r\n                      formControlName=\"Post_office\">\r\n                      <option value=\"\" disabled selected hidden>Choose...</option>\r\n                      <option *ngFor=\"let item of postoffices\" value=\"{{ item.id }}\">\r\n                        {{ item.Name }}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"name\">Latitude</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"Latitude\" name=\"Latitude\"\r\n                      formControlName=\"Latitude\" placeholder=\"Enter Latitude\" />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"name\">Longitude</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"Longitude\" name=\"Longitude\"\r\n                      formControlName=\"Longitude\" placeholder=\"Enter Longitude\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"email\">Marriage date</label>\r\n                    <input type=\"date\" class=\"form-control\" id=\"MarriageDate\" name=\"MarriageDate\"\r\n                      formControlName=\"MarriageDate\" />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"group\">Marriage month</label>\r\n                    <select class=\"form-control\" id=\"MarriageMonth\" required ngModel name=\"MarriageMonth\"\r\n                      formControlName=\"MarriageMonth\">\r\n                      <option value=\"\" disabled selected hidden>Choose...</option>\r\n                      <option *ngFor=\"let item of Months\" value=\"{{ item.id }}\">\r\n                        {{ item.Name }}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"group\">Agent</label>\r\n                    <select class=\"form-control\" id=\"tele_caller_contact\" required ngModel name=\"tele_caller_contact\"\r\n                      formControlName=\"tele_caller_contact\">\r\n                      <option value=\"\" disabled selected hidden>Choose...</option>\r\n                      <option *ngFor=\"let item of agents\" value=\"{{ item.id }}\">\r\n                        {{ item.Name }}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"name\">House Name</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"HouseName\" name=\"HouseName\" formControlName=\"HouseName\"\r\n                      placeholder=\"Enter House Name\" />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"name\">Landmark</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"Landmark\" name=\"Landmark\" formControlName=\"Landmark\"\r\n                      placeholder=\"Enter Landmark\" />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"locality\">Name of locality</label>\r\n                    <!-- <input type=\"text\" class=\"form-control\" id=\"locality\" name=\"locality\" formControlName=\"locality\"\r\n                      placeholder=\"Enter locality\" /> -->\r\n                    <select class=\"form-control\" id=\"locality\" required ngModel name=\"locality\"\r\n                      formControlName=\"locality\">\r\n                      <option value=\"\" disabled selected hidden>Choose...</option>\r\n                      <option *ngFor=\"let item of localities\" value=\"{{ item.id }}\">\r\n                        {{ item.Name }}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"name\">Map Plus code</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"GoogleMapPlusCode\" name=\"GoogleMapPlusCode\"\r\n                      formControlName=\"GoogleMapPlusCode\" placeholder=\"Enter Google Map PlusCode\" />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"name\">Google Map URL</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"GoogleMapURL\" name=\"GoogleMapURL\"\r\n                      formControlName=\"GoogleMapURL\" placeholder=\"Enter Google Map URL\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n  \r\n  \r\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"myModal.hide()\">\r\n                Close\r\n              </button>\r\n              <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !customerForm.valid\">\r\n                <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n                Save changes\r\n              </button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <!-- /.modal-content -->\r\n      </div>\r\n      <!-- /.modal-dialog -->\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "EIdz": function EIdz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnquiriesComponent", function () {
        return EnquiriesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_enquiries_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./enquiries.component.html */
      "m6yf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../data.service */
      "R7Hv");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../constants/columnMetadata */
      "7nfi");

      var EnquiriesComponent = /*#__PURE__*/function () {
        function EnquiriesComponent(dataservice, router, fb, toastr) {
          _classCallCheck(this, EnquiriesComponent);

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
            locality: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
          });
          this.loading = true;
          this.btnLoading = false;
          this.orders = {};
          this.columnDefs = [];
          this.rowData = [];
          this.agents = [];
          this.localities = [];
          this.columnDefs = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["enquiriesColumn"]);
          this.Months = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["Months"]);
          this.rowSelection = "single";
        }

        _createClass(EnquiriesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getLists();
          }
        }, {
          key: "getLists",
          value: function getLists() {
            var _this = this;

            this.loading = true;
            this.dataservice.getEnquiries().valueChanges.subscribe(function (result) {
              console.log("getEnquiries", result.data.customerEnquiries);
              _this.rowData = result.data.customerEnquiries;
            });
            this.dataservice.getLocalities().valueChanges.subscribe(function (result) {
              console.log("getLocalities", result.data.localities);
              _this.localities = result.data.localities;
            });
            this.dataservice.getAgents().valueChanges.subscribe(function (result) {
              console.log("getAgents", result.data.teleCallerContacts);
              _this.agents = result.data.teleCallerContacts;
            });
          }
        }, {
          key: "onGridReady",
          value: function onGridReady(params) {
            this.gridApi = params.api;
            this.gridColumnApi = params.columnApi;
          }
        }, {
          key: "onSelectionChanged",
          value: function onSelectionChanged(event) {
            var selectedRows = this.gridApi.getSelectedRows();
            console.log(selectedRows);
            this.router.navigate(["/manager/enquiry_details", selectedRows[0].id], {
              state: {
                data: selectedRows
              }
            });
          }
        }, {
          key: "FormSubmit",
          value: function FormSubmit() {
            var _this2 = this;

            var resp = {};
            console.log(this.customerForm.value);
            this.dataservice.Addcustomer(this.customerForm.value).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.createCustomer) {
                _this2.toastr.success("customer added successfully!");

                _this2.getLists();

                _this2.myModal.hide();
              } else {
                _this2.toastr.error("Failed. Please check the fields!");
              }
            });
          }
        }]);

        return EnquiriesComponent;
      }();

      EnquiriesComponent.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      };

      EnquiriesComponent.propDecorators = {
        myModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["myModal"]
        }]
      };
      EnquiriesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_enquiries_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])], EnquiriesComponent);
      /***/
    },

    /***/
    "F9w6": function F9w6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManagerCustomerDetailComponent", function () {
        return ManagerCustomerDetailComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_customerdetail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./customerdetail.component.html */
      "d7Xv");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../data.service */
      "R7Hv");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../constants/columnMetadata */
      "7nfi");

      var ManagerCustomerDetailComponent = /*#__PURE__*/function () {
        function ManagerCustomerDetailComponent(dataservice, activatedRouter, router, fb, toastr) {
          _classCallCheck(this, ManagerCustomerDetailComponent);

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
            agent: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
          });
          this.saleForm = this.fb.group({
            CustomerStatus: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            isSaleClosed: true,
            sale_closed_by: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            sale_remarks: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            sale_closed_date: new Date().toISOString()
          });
          this.commentForm = this.fb.group({
            RemarksText: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
          });
        }

        _createClass(ManagerCustomerDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.getLists();
            this.activatedRouter.params.subscribe(function (params) {
              _this3.id = params["id"];
            });
            this.dataservice.getSingleCustomer(this.id).valueChanges.subscribe(function (result) {
              console.log("getSingleCustomer", result.data.customer);
              _this3.details = result.data.customer;
              _this3.loading = false;
            });
          }
        }, {
          key: "getLists",
          value: function getLists() {
            var _this4 = this;

            this.loading = true;
            this.dataservice.getUsers("FIELD_AGENT").valueChanges.subscribe(function (result) {
              console.log("FIELD_AGENT", result.data.users);
              _this4.users = result.data.users;
            });
            this.dataservice.getUsers("KP_CALLER").valueChanges.subscribe(function (result) {
              console.log("KP_CALLER", result.data.users);
              _this4.kpcallers = result.data.users;
            });
          }
        }, {
          key: "FormSubmit",
          value: function FormSubmit() {
            var _this5 = this;

            var resp = {};
            console.log(this.agentForm.value);
            this.dataservice.SetFieldAgent(this.agentForm.value.agent, this.details.id).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.updateUser) {
                _this5.toastr.success("Field Agent assigned successfully!");

                _this5.myModal.hide();
              } else {
                _this5.toastr.error("Failed. Please check the fields!");
              }
            });
          }
        }, {
          key: "CommentSubmit",
          value: function CommentSubmit() {
            var _this6 = this;

            var resp = {};
            console.log(this.commentForm.value);
            this.dataservice.AddCustomerComment(this.details.id, this.commentForm.value).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.updateCustomer) {
                _this6.toastr.success("Comment added successfully!");

                _this6.commentModal.hide();
              } else {
                _this6.toastr.error("Failed. Please check the fields!");
              }
            });
          }
        }, {
          key: "deleteAgent",
          value: function deleteAgent() {
            var _this7 = this;

            var resp = {};
            this.dataservice.DeleteAgent(this.id).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.deleteTeleCallerContact) {
                _this7.toastr.success("Agent deleted successfully!");

                _this7.router.navigate(["/order/order_processing"]);

                _this7.deleteModal.hide();
              } else {
                _this7.toastr.error("Failed. Please check again!");
              }
            });
          }
        }, {
          key: "closeCustomer",
          value: function closeCustomer() {
            var _this8 = this;

            var resp = {};
            console.log(this.saleForm.value);
            this.dataservice.Updatecustomer(this.details.id, this.saleForm.value).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.updateCustomer) {
                _this8.toastr.success("Sale closed successfully!");

                _this8.saleModal.hide();
              } else {
                _this8.toastr.error("Failed. Please check the fields!");
              }
            });
          }
        }]);

        return ManagerCustomerDetailComponent;
      }();

      ManagerCustomerDetailComponent.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }];
      };

      ManagerCustomerDetailComponent.propDecorators = {
        myModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["myModal"]
        }],
        saleModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["saleModal"]
        }],
        deleteModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["deleteModal"]
        }],
        commentModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["commentModal"]
        }]
      };
      ManagerCustomerDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_customerdetail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])], ManagerCustomerDetailComponent);
      /***/
    },

    /***/
    "MPuI": function MPuI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManagerCustomerComponent", function () {
        return ManagerCustomerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_customers_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./customers.component.html */
      "iva1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../data.service */
      "R7Hv");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../constants/columnMetadata */
      "7nfi");

      var ManagerCustomerComponent = /*#__PURE__*/function () {
        function ManagerCustomerComponent(dataservice, router, fb, toastr) {
          _classCallCheck(this, ManagerCustomerComponent);

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
            locality: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
          });
          this.loading = true;
          this.btnLoading = false;
          this.orders = {};
          this.columnDefs = [];
          this.rowData = [];
          this.agents = [];
          this.localities = [];
          this.columnDefs = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["customerColumnsWithKpCaller"]);
          this.Months = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["Months"]);
          this.rowSelection = "single";
        }

        _createClass(ManagerCustomerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getLists();
          }
        }, {
          key: "getLists",
          value: function getLists() {
            var _this9 = this;

            this.loading = true;
            this.dataservice.getCustomers().valueChanges.subscribe(function (result) {
              console.log("getCustomers", result.data.customers);
              _this9.rowData = result.data.customers;
            });
            this.dataservice.getLocalities().valueChanges.subscribe(function (result) {
              console.log("getLocalities", result.data.localities);
              _this9.localities = result.data.localities;
            });
            this.dataservice.getAgents().valueChanges.subscribe(function (result) {
              console.log("getAgents", result.data.teleCallerContacts);
              _this9.agents = result.data.teleCallerContacts;
            });
          }
        }, {
          key: "onGridReady",
          value: function onGridReady(params) {
            this.gridApi = params.api;
            this.gridColumnApi = params.columnApi;
          }
        }, {
          key: "onSelectionChanged",
          value: function onSelectionChanged(event) {
            var selectedRows = this.gridApi.getSelectedRows();
            console.log(selectedRows);
            this.router.navigate(["/manager/customer_details", selectedRows[0].id], {
              state: {
                data: selectedRows
              }
            });
          }
        }, {
          key: "FormSubmit",
          value: function FormSubmit() {
            var _this10 = this;

            var resp = {};
            console.log(this.customerForm.value);
            this.dataservice.Addcustomer(this.customerForm.value).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.createCustomer) {
                _this10.toastr.success("customer added successfully!");

                _this10.getLists();

                _this10.myModal.hide();
              } else {
                _this10.toastr.error("Failed. Please check the fields!");
              }
            });
          }
        }]);

        return ManagerCustomerComponent;
      }();

      ManagerCustomerComponent.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }];
      };

      ManagerCustomerComponent.propDecorators = {
        myModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["myModal"]
        }]
      };
      ManagerCustomerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_customers_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])], ManagerCustomerComponent);
      /***/
    },

    /***/
    "Osdn": function Osdn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
        return CarouselComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarouselConfig", function () {
        return CarouselConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarouselModule", function () {
        return CarouselModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlideComponent", function () {
        return SlideComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/utils */
      "hpHm");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      function CarouselComponent_ol_1_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_ol_1_li_1_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var i_r5 = ctx.index;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r6.selectSlide(i_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var slide_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", slide_r4.active === true);
        }
      }

      function CarouselComponent_ol_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ol_1_li_1_Template, 1, 2, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.indicatorsSlides());
        }
      }

      function CarouselComponent_a_4_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CarouselComponent_a_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_a_4_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.previousSlide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_a_4_span_2_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r1.activeSlide === 0 && ctx_r1.noWrap);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isBs4);
        }
      }

      function CarouselComponent_a_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_a_5_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.nextSlide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r2.isLast(ctx_r2.activeSlide) && ctx_r2.noWrap);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "display": a0
        };
      };

      var _c1 = ["*"];

      var CarouselConfig = function CarouselConfig() {
        _classCallCheck(this, CarouselConfig);

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
      };

      CarouselConfig.ɵfac = function CarouselConfig_Factory(t) {
        return new (t || CarouselConfig)();
      };
      /** @nocollapse */


      CarouselConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function CarouselConfig_Factory() {
          return new CarouselConfig();
        },
        token: CarouselConfig,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

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
        var l = array.length;

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
        var out = [];
        /** @type {?} */

        var n = Math.ceil(array.length / size);
        /** @type {?} */

        var i = 0;

        while (i < n) {
          /** @type {?} */
          var chunk = array.splice(0, i === n - 1 && size < array.length ? array.length : size);
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


      var Direction = {
        UNKNOWN: 0,
        NEXT: 1,
        PREV: 2
      };
      Direction[Direction.UNKNOWN] = 'UNKNOWN';
      Direction[Direction.NEXT] = 'NEXT';
      Direction[Direction.PREV] = 'PREV';
      /**
       * Base element to create carousel
       */

      var CarouselComponent = /*#__PURE__*/function () {
        /**
         * @param {?} config
         * @param {?} ngZone
         */
        function CarouselComponent(config, ngZone) {
          _classCallCheck(this, CarouselComponent);

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

          this.getActive =
          /**
          * @param {?} slide
          * @return {?}
          */
          function (slide) {
            return slide.active;
          };

          this.makeSlidesConsistent =
          /**
          * @param {?} slides
          * @return {?}
          */
          function (slides) {
            slides.forEach(
            /**
            * @param {?} slide
            * @param {?} index
            * @return {?}
            */
            function (slide, index) {
              return slide.item.order = index;
            });
          };

          Object.assign(this, config);
        }
        /**
         * Index of currently displayed slide(started for 0)
         * @param {?} index
         * @return {?}
         */


        _createClass(CarouselComponent, [{
          key: "activeSlide",
          get:
          /**
           * @return {?}
           */
          function get() {
            return this._currentActiveSlide;
          }
          /**
           * Delay of item cycling in milliseconds. If false, carousel won't cycle
           * automatically.
           * @return {?}
           */
          ,
          set: function set(index) {
            if (this.multilist) {
              return;
            }

            if (this._slides.length && index !== this._currentActiveSlide) {
              this._select(index);
            }
          }
        }, {
          key: "interval",
          get: function get() {
            return this._interval;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._interval = value;
            this.restartTimer();
          }
          /**
           * @return {?}
           */

        }, {
          key: "slides",
          get: function get() {
            return this._slides.toArray();
          }
          /**
           * @return {?}
           */

        }, {
          key: "isBs4",
          get: function get() {
            return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this11 = this;

            setTimeout(
            /**
            * @return {?}
            */
            function () {
              if (_this11.singleSlideOffset) {
                _this11.indicatorsByChunk = false;
              }

              if (_this11.multilist) {
                _this11._chunkedSlides = chunkByNumber(_this11.mapSlidesAndIndexes(), _this11.itemsPerSlide);

                _this11.selectInitialSlides();
              }
            }, 0);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed = true;
          }
          /**
           * Adds new slide. If this slide is first in collection - set it as active
           * and starts auto changing
           * @param {?} slide
           * @return {?}
           */

        }, {
          key: "addSlide",
          value: function addSlide(slide) {
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

        }, {
          key: "removeSlide",
          value: function removeSlide(slide) {
            var _this12 = this;

            /** @type {?} */
            var remIndex = this._slides.indexOf(slide);

            if (this._currentActiveSlide === remIndex) {
              // removing of active slide

              /** @type {?} */
              var nextSlideIndex = void 0;

              if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is
                // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                // middle of collection, index of next slide is same to removed
                nextSlideIndex = !this.isLast(remIndex) ? remIndex : this.noWrap ? remIndex - 1 : 0;
              }

              this._slides.remove(remIndex); // prevents exception with changing some value after checking


              setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this12._select(nextSlideIndex);
              }, 0);
            } else {
              this._slides.remove(remIndex);
              /** @type {?} */


              var currentSlideIndex = this.getCurrentSlideIndex();
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                // after removing, need to actualize index of current active slide
                _this12._currentActiveSlide = currentSlideIndex;

                _this12.activeSlideChange.emit(_this12._currentActiveSlide);
              }, 0);
            }
          }
          /**
           * @param {?=} force
           * @return {?}
           */

        }, {
          key: "nextSlideFromInterval",
          value: function nextSlideFromInterval() {
            var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.move(Direction.NEXT, force);
          }
          /**
           * Rolling to next slide
           * @param {?=} force
           * @return {?}
           */

        }, {
          key: "nextSlide",
          value: function nextSlide() {
            var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

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

        }, {
          key: "previousSlide",
          value: function previousSlide() {
            var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (this.isPlaying) {
              this.restartTimer();
            }

            this.move(Direction.PREV, force);
          }
          /**
           * @return {?}
           */

        }, {
          key: "getFirstVisibleIndex",
          value: function getFirstVisibleIndex() {
            return this.slides.findIndex(this.getActive);
          }
          /**
           * @return {?}
           */

        }, {
          key: "getLastVisibleIndex",
          value: function getLastVisibleIndex() {
            return findLastIndex(this.slides, this.getActive);
          }
          /**
           * @param {?} direction
           * @param {?=} force
           * @return {?}
           */

        }, {
          key: "move",
          value: function move(direction) {
            var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            /** @type {?} */
            var firstVisibleIndex = this.getFirstVisibleIndex();
            /** @type {?} */

            var lastVisibleIndex = this.getLastVisibleIndex();

            if (this.noWrap) {
              if (direction === Direction.NEXT && this.isLast(lastVisibleIndex) || direction === Direction.PREV && firstVisibleIndex === 0) {
                return;
              }
            }

            if (!this.multilist) {
              this.activeSlide = this.findNextSlideIndex(direction, force);
            } else {
              this.moveMultilist(direction);
            }
          }
          /**
           * Swith slides by enter, space and arrows keys
           * \@internal
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "keydownPress",
          value: function keydownPress(event) {
            // tslint:disable-next-line:deprecation
            if (event.keyCode === 13 || event.key === 'Enter' || event.keyCode === 32 || event.key === 'Space') {
              this.nextSlide();
              event.preventDefault();
              return;
            } // tslint:disable-next-line:deprecation


            if (event.keyCode === 37 || event.key === 'LeftArrow') {
              this.previousSlide();
              return;
            } // tslint:disable-next-line:deprecation


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

        }, {
          key: "onMouseLeave",
          value: function onMouseLeave() {
            if (!this.pauseOnFocus) {
              this.play();
            }
          }
          /**
           * Play on mouse up
           * \@internal
           * @return {?}
           */

        }, {
          key: "onMouseUp",
          value: function onMouseUp() {
            if (!this.pauseOnFocus) {
              this.play();
            }
          }
          /**
           * When slides on focus autoplay is stopped(optional)
           * \@internal
           * @return {?}
           */

        }, {
          key: "pauseFocusIn",
          value: function pauseFocusIn() {
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

        }, {
          key: "pauseFocusOut",
          value: function pauseFocusOut() {
            this.play();
          }
          /**
           * Rolling to specified slide
           * @param {?} index
           * @return {?}
           */

        }, {
          key: "selectSlide",
          value: function selectSlide(index) {
            if (this.isPlaying) {
              this.restartTimer();
            }

            if (!this.multilist) {
              this.activeSlide = this.indicatorsByChunk ? index * this.itemsPerSlide : index;
            } else {
              this.selectSlideRange(this.indicatorsByChunk ? index * this.itemsPerSlide : index);
            }
          }
          /**
           * Starts a auto changing of slides
           * @return {?}
           */

        }, {
          key: "play",
          value: function play() {
            if (!this.isPlaying) {
              this.isPlaying = true;
              this.restartTimer();
            }
          }
          /**
           * Stops a auto changing of slides
           * @return {?}
           */

        }, {
          key: "pause",
          value: function pause() {
            if (!this.noPause) {
              this.isPlaying = false;
              this.resetTimer();
            }
          }
          /**
           * Finds and returns index of currently displayed slide
           * @return {?}
           */

        }, {
          key: "getCurrentSlideIndex",
          value: function getCurrentSlideIndex() {
            return this._slides.findIndex(this.getActive);
          }
          /**
           * Defines, whether the specified index is last in collection
           * @param {?} index
           * @return {?}
           */

        }, {
          key: "isLast",
          value: function isLast(index) {
            return index + 1 >= this._slides.length;
          }
          /**
           * Defines, whether the specified index is first in collection
           * @param {?} index
           * @return {?}
           */

        }, {
          key: "isFirst",
          value: function isFirst(index) {
            return index === 0;
          }
          /**
           * @return {?}
           */

        }, {
          key: "indicatorsSlides",
          value: function indicatorsSlides() {
            var _this13 = this;

            return this.slides.filter(
            /**
            * @param {?} slide
            * @param {?} index
            * @return {?}
            */
            function (slide, index) {
              return !_this13.indicatorsByChunk || index % _this13.itemsPerSlide === 0;
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "selectInitialSlides",
          value: function selectInitialSlides() {
            /** @type {?} */
            var startIndex = this.startFromIndex <= this._slides.length ? this.startFromIndex : 0;
            this.hideSlides();

            if (this.singleSlideOffset) {
              this._slidesWithIndexes = this.mapSlidesAndIndexes();

              if (this._slides.length - startIndex < this.itemsPerSlide) {
                /** @type {?} */
                var slidesToAppend = this._slidesWithIndexes.slice(0, startIndex);

                this._slidesWithIndexes = [].concat(_toConsumableArray(this._slidesWithIndexes), _toConsumableArray(slidesToAppend)).slice(slidesToAppend.length).slice(0, this.itemsPerSlide);
              } else {
                this._slidesWithIndexes = this._slidesWithIndexes.slice(startIndex, startIndex + this.itemsPerSlide);
              }

              this._slidesWithIndexes.forEach(
              /**
              * @param {?} slide
              * @return {?}
              */
              function (slide) {
                return slide.item.active = true;
              });

              this.makeSlidesConsistent(this._slidesWithIndexes);
            } else {
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

        }, {
          key: "findNextSlideIndex",
          value: function findNextSlideIndex(direction, force) {
            /** @type {?} */
            var nextSlideIndex = 0;

            if (!force && this.isLast(this.activeSlide) && direction !== Direction.PREV && this.noWrap) {
              return undefined;
            }

            switch (direction) {
              case Direction.NEXT:
                // if this is last slide, not force, looping is disabled
                // and need to going forward - select current slide, as a next
                nextSlideIndex = !this.isLast(this._currentActiveSlide) ? this._currentActiveSlide + 1 : !force && this.noWrap ? this._currentActiveSlide : 0;
                break;

              case Direction.PREV:
                // if this is first slide, not force, looping is disabled
                // and need to going backward - select current slide, as a next
                nextSlideIndex = this._currentActiveSlide > 0 ? this._currentActiveSlide - 1 : !force && this.noWrap ? this._currentActiveSlide : this._slides.length - 1;
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

        }, {
          key: "mapSlidesAndIndexes",
          value: function mapSlidesAndIndexes() {
            return this.slides.slice().map(
            /**
            * @param {?} slide
            * @param {?} index
            * @return {?}
            */
            function (slide, index) {
              return {
                index: index,
                item: slide
              };
            });
          }
          /**
           * @private
           * @param {?} index
           * @return {?}
           */

        }, {
          key: "selectSlideRange",
          value: function selectSlideRange(index) {
            if (this.isIndexInRange(index)) {
              return;
            }

            this.hideSlides();

            if (!this.singleSlideOffset) {
              this.selectRangeByNestedIndex(index);
            } else {
              /** @type {?} */
              var startIndex = this.isIndexOnTheEdges(index) ? index : index - this.itemsPerSlide + 1;
              /** @type {?} */

              var endIndex = this.isIndexOnTheEdges(index) ? index + this.itemsPerSlide : index + 1;
              this._slidesWithIndexes = this.mapSlidesAndIndexes().slice(startIndex, endIndex);
              this.makeSlidesConsistent(this._slidesWithIndexes);

              this._slidesWithIndexes.forEach(
              /**
              * @param {?} slide
              * @return {?}
              */
              function (slide) {
                return slide.item.active = true;
              });
            }

            this.slideRangeChange.emit(this.getVisibleIndexes());
          }
          /**
           * @private
           * @param {?} index
           * @return {?}
           */

        }, {
          key: "selectRangeByNestedIndex",
          value: function selectRangeByNestedIndex(index) {
            /** @type {?} */
            var selectedRange = this._chunkedSlides.map(
            /**
            * @param {?} slidesList
            * @param {?} i
            * @return {?}
            */
            function (slidesList, i) {
              return {
                index: i,
                list: slidesList
              };
            }).find(
            /**
            * @param {?} slidesList
            * @return {?}
            */
            function (slidesList) {
              return slidesList.list.find(
              /**
              * @param {?} slide
              * @return {?}
              */
              function (slide) {
                return slide.index === index;
              }) !== undefined;
            });

            this._currentVisibleSlidesIndex = selectedRange.index;

            this._chunkedSlides[selectedRange.index].forEach(
            /**
            * @param {?} slide
            * @return {?}
            */
            function (slide) {
              slide.item.active = true;
            });
          }
          /**
           * @private
           * @param {?} index
           * @return {?}
           */

        }, {
          key: "isIndexOnTheEdges",
          value: function isIndexOnTheEdges(index) {
            return index + 1 - this.itemsPerSlide <= 0 || index + this.itemsPerSlide <= this._slides.length;
          }
          /**
           * @private
           * @param {?} index
           * @return {?}
           */

        }, {
          key: "isIndexInRange",
          value: function isIndexInRange(index) {
            if (this.singleSlideOffset) {
              /** @type {?} */
              var visibleIndexes = this._slidesWithIndexes.map(
              /**
              * @param {?} slide
              * @return {?}
              */
              function (slide) {
                return slide.index;
              });

              return visibleIndexes.indexOf(index) >= 0;
            }

            return index <= this.getLastVisibleIndex() && index >= this.getFirstVisibleIndex();
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "hideSlides",
          value: function hideSlides() {
            this.slides.forEach(
            /**
            * @param {?} slide
            * @return {?}
            */
            function (slide) {
              return slide.active = false;
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "isVisibleSlideListLast",
          value: function isVisibleSlideListLast() {
            return this._currentVisibleSlidesIndex === this._chunkedSlides.length - 1;
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "isVisibleSlideListFirst",
          value: function isVisibleSlideListFirst() {
            return this._currentVisibleSlidesIndex === 0;
          }
          /**
           * @private
           * @param {?} direction
           * @return {?}
           */

        }, {
          key: "moveSliderByOneItem",
          value: function moveSliderByOneItem(direction) {
            /** @type {?} */
            var firstVisibleIndex;
            /** @type {?} */

            var lastVisibleIndex;
            /** @type {?} */

            var indexToHide;
            /** @type {?} */

            var indexToShow;

            if (this.noWrap) {
              firstVisibleIndex = this.getFirstVisibleIndex();
              lastVisibleIndex = this.getLastVisibleIndex();
              indexToHide = direction === Direction.NEXT ? firstVisibleIndex : lastVisibleIndex;
              indexToShow = direction !== Direction.NEXT ? firstVisibleIndex - 1 : !this.isLast(lastVisibleIndex) ? lastVisibleIndex + 1 : 0;
              this._slides.get(indexToHide).active = false;
              this._slides.get(indexToShow).active = true;
              /** @type {?} */

              var slidesToReorder = this.mapSlidesAndIndexes().filter(
              /**
              * @param {?} slide
              * @return {?}
              */
              function (slide) {
                return slide.item.active;
              });
              this.makeSlidesConsistent(slidesToReorder);
              this.slideRangeChange.emit(this.getVisibleIndexes());
            } else {
              /** @type {?} */
              var displayedIndex;
              firstVisibleIndex = this._slidesWithIndexes[0].index;
              lastVisibleIndex = this._slidesWithIndexes[this._slidesWithIndexes.length - 1].index;

              if (direction === Direction.NEXT) {
                this._slidesWithIndexes.shift();

                displayedIndex = this.isLast(lastVisibleIndex) ? 0 : lastVisibleIndex + 1;

                this._slidesWithIndexes.push({
                  index: displayedIndex,
                  item: this._slides.get(displayedIndex)
                });
              } else {
                this._slidesWithIndexes.pop();

                displayedIndex = this.isFirst(firstVisibleIndex) ? this._slides.length - 1 : firstVisibleIndex - 1;
                this._slidesWithIndexes = [{
                  index: displayedIndex,
                  item: this._slides.get(displayedIndex)
                }].concat(_toConsumableArray(this._slidesWithIndexes));
              }

              this.hideSlides();

              this._slidesWithIndexes.forEach(
              /**
              * @param {?} slide
              * @return {?}
              */
              function (slide) {
                return slide.item.active = true;
              });

              this.makeSlidesConsistent(this._slidesWithIndexes);
              this.slideRangeChange.emit(this._slidesWithIndexes.map(
              /**
              * @param {?} slide
              * @return {?}
              */
              function (slide) {
                return slide.index;
              }));
            }
          }
          /**
           * @private
           * @param {?} direction
           * @return {?}
           */

        }, {
          key: "moveMultilist",
          value: function moveMultilist(direction) {
            if (this.singleSlideOffset) {
              this.moveSliderByOneItem(direction);
            } else {
              this.hideSlides();

              if (this.noWrap) {
                this._currentVisibleSlidesIndex = direction === Direction.NEXT ? this._currentVisibleSlidesIndex + 1 : this._currentVisibleSlidesIndex - 1;
              } else {
                if (direction === Direction.NEXT) {
                  this._currentVisibleSlidesIndex = this.isVisibleSlideListLast() ? 0 : this._currentVisibleSlidesIndex + 1;
                } else {
                  this._currentVisibleSlidesIndex = this.isVisibleSlideListFirst() ? this._chunkedSlides.length - 1 : this._currentVisibleSlidesIndex - 1;
                }
              }

              this._chunkedSlides[this._currentVisibleSlidesIndex].forEach(
              /**
              * @param {?} slide
              * @return {?}
              */
              function (slide) {
                return slide.item.active = true;
              });

              this.slideRangeChange.emit(this.getVisibleIndexes());
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "getVisibleIndexes",
          value: function getVisibleIndexes() {
            if (!this.singleSlideOffset) {
              return this._chunkedSlides[this._currentVisibleSlidesIndex].map(
              /**
              * @param {?} slide
              * @return {?}
              */
              function (slide) {
                return slide.index;
              });
            } else {
              return this._slidesWithIndexes.map(
              /**
              * @param {?} slide
              * @return {?}
              */
              function (slide) {
                return slide.index;
              });
            }
          }
          /**
           * Sets a slide, which specified through index, as active
           * @private
           * @param {?} index
           * @return {?}
           */

        }, {
          key: "_select",
          value: function _select(index) {
            if (isNaN(index)) {
              this.pause();
              return;
            }

            if (!this.multilist) {
              /** @type {?} */
              var currentSlide = this._slides.get(this._currentActiveSlide);

              if (currentSlide) {
                currentSlide.active = false;
              }
            }
            /** @type {?} */


            var nextSlide = this._slides.get(index);

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

        }, {
          key: "restartTimer",
          value: function restartTimer() {
            var _this14 = this;

            this.resetTimer();
            /** @type {?} */

            var interval = +this.interval;

            if (!isNaN(interval) && interval > 0) {
              this.currentInterval = this.ngZone.runOutsideAngular(
              /**
              * @return {?}
              */
              function () {
                return setInterval(
                /**
                * @return {?}
                */
                function () {
                  /** @type {?} */
                  var nInterval = +_this14.interval;

                  _this14.ngZone.run(
                  /**
                  * @return {?}
                  */
                  function () {
                    if (_this14.isPlaying && !isNaN(_this14.interval) && nInterval > 0 && _this14.slides.length) {
                      _this14.nextSlideFromInterval();
                    } else {
                      _this14.pause();
                    }
                  });
                }, interval);
              });
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "multilist",
          get: function get() {
            return this.itemsPerSlide > 1;
          }
          /**
           * Stops loop of auto changing of slides
           * @private
           * @return {?}
           */

        }, {
          key: "resetTimer",
          value: function resetTimer() {
            if (this.currentInterval) {
              clearInterval(this.currentInterval);
              this.currentInterval = void 0;
            }
          }
        }]);

        return CarouselComponent;
      }();

      CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
        return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CarouselConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CarouselComponent,
        selectors: [["carousel"]],
        inputs: {
          indicatorsByChunk: "indicatorsByChunk",
          itemsPerSlide: "itemsPerSlide",
          singleSlideOffset: "singleSlideOffset",
          isAnimated: "isAnimated",
          startFromIndex: "startFromIndex",
          activeSlide: "activeSlide",
          interval: "interval",
          noWrap: "noWrap",
          noPause: "noPause",
          showIndicators: "showIndicators",
          pauseOnFocus: "pauseOnFocus"
        },
        outputs: {
          activeSlideChange: "activeSlideChange",
          slideRangeChange: "slideRangeChange"
        },
        ngContentSelectors: _c1,
        decls: 6,
        vars: 6,
        consts: [["tabindex", "0", 1, "carousel", "slide", 3, "mouseenter", "mouseleave", "mouseup", "keydown", "focusin", "focusout"], ["class", "carousel-indicators", 4, "ngIf"], [1, "carousel-inner", 3, "ngStyle"], ["class", "left carousel-control carousel-control-prev", "tabindex", "0", "role", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "right carousel-control carousel-control-next", "tabindex", "0", "role", "button", 3, "disabled", "click", 4, "ngIf"], [1, "carousel-indicators"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["tabindex", "0", "role", "button", 1, "left", "carousel-control", "carousel-control-prev", 3, "click"], ["aria-hidden", "true", 1, "icon-prev", "carousel-control-prev-icon"], ["class", "sr-only", 4, "ngIf"], [1, "sr-only"], ["tabindex", "0", "role", "button", 1, "right", "carousel-control", "carousel-control-next", 3, "click"], ["aria-hidden", "true", 1, "icon-next", "carousel-control-next-icon"]],
        template: function CarouselComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function CarouselComponent_Template_div_mouseenter_0_listener() {
              return ctx.pause();
            })("mouseleave", function CarouselComponent_Template_div_mouseleave_0_listener() {
              return ctx.onMouseLeave();
            })("mouseup", function CarouselComponent_Template_div_mouseup_0_listener() {
              return ctx.onMouseUp();
            })("keydown", function CarouselComponent_Template_div_keydown_0_listener($event) {
              return ctx.keydownPress($event);
            })("focusin", function CarouselComponent_Template_div_focusin_0_listener() {
              return ctx.pauseFocusIn();
            })("focusout", function CarouselComponent_Template_div_focusout_0_listener() {
              return ctx.pauseFocusOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ol_1_Template, 2, 1, "ol", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarouselComponent_a_4_Template, 3, 3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarouselComponent_a_5_Template, 4, 2, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showIndicators && ctx.slides.length > 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.multilist ? "flex" : "block"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slides.length > 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slides.length > 1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        encapsulation: 2
      });
      /** @nocollapse */

      CarouselComponent.ctorParameters = function () {
        return [{
          type: CarouselConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      CarouselComponent.propDecorators = {
        noWrap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        noPause: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showIndicators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pauseOnFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        indicatorsByChunk: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        itemsPerSlide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        singleSlideOffset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isAnimated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        activeSlideChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        slideRangeChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        activeSlide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        startFromIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        interval: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'carousel',
            template: "<div (mouseenter)=\"pause()\"\n     (mouseleave)=\"onMouseLeave()\"\n     (mouseup)=\"onMouseUp()\"\n     (keydown)=\"keydownPress($event)\"\n     (focusin)=\"pauseFocusIn()\"\n     (focusout)=\"pauseFocusOut()\"\n     class=\"carousel slide\" tabindex=\"0\">\n  <ol class=\"carousel-indicators\" *ngIf=\"showIndicators && slides.length > 1\">\n    <li *ngFor=\"let slide of indicatorsSlides(); let i = index;\"\n        [class.active]=\"slide.active === true\"\n        (click)=\"selectSlide(i)\">\n    </li>\n  </ol>\n  <div class=\"carousel-inner\" [ngStyle]=\"{'display': multilist ? 'flex' : 'block'}\">\n    <ng-content></ng-content>\n  </div>\n  <a class=\"left carousel-control carousel-control-prev\"\n     [class.disabled]=\"activeSlide === 0 && noWrap\"\n     (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\"\n      tabindex=\"0\" role=\"button\">\n    <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control carousel-control-next\"\n     [class.disabled]=\"isLast(activeSlide) && noWrap\"\n     (click)=\"nextSlide()\" *ngIf=\"slides.length > 1\"\n     tabindex=\"0\" role=\"button\">\n    <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"
          }]
        }], function () {
          return [{
            type: CarouselConfig
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          indicatorsByChunk: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          itemsPerSlide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          singleSlideOffset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          activeSlideChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          slideRangeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          startFromIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          activeSlide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          interval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          noWrap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          noPause: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showIndicators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pauseOnFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var SlideComponent = /*#__PURE__*/function () {
        /**
         * @param {?} carousel
         */
        function SlideComponent(carousel) {
          _classCallCheck(this, SlideComponent);

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


        _createClass(SlideComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.carousel.addSlide(this);
            this.itemWidth = "".concat(100 / this.carousel.itemsPerSlide, "%");
          }
          /**
           * Fires changes in container collection after removing of this slide instance
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.carousel.removeSlide(this);
          }
        }]);

        return SlideComponent;
      }();

      SlideComponent.ɵfac = function SlideComponent_Factory(t) {
        return new (t || SlideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CarouselComponent));
      };

      SlideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SlideComponent,
        selectors: [["slide"]],
        hostVars: 13,
        hostBindings: function SlideComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", !ctx.active);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.itemWidth)("order", ctx.order);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("item", ctx.addClass)("carousel-item", ctx.addClass)("active", ctx.active)("carousel-animation", ctx.isAnimated);
          }
        },
        inputs: {
          active: "active"
        },
        ngContentSelectors: _c1,
        decls: 2,
        vars: 2,
        consts: [[1, "item"]],
        template: function SlideComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.active);
          }
        },
        styles: [".carousel-animation[_nghost-%COMP%] {\n       transition: opacity 0.6s ease, visibility 0.6s ease;\n       float: left;\n    }\n    .carousel-animation.active[_nghost-%COMP%] {\n      opacity: 1;\n      visibility: visible;\n    }\n    .carousel-animation[_nghost-%COMP%]:not(.active) {\n      display: block;\n      position: absolute;\n      opacity: 0;\n      visibility: hidden;\n    }"]
      });
      /** @nocollapse */

      SlideComponent.ctorParameters = function () {
        return [{
          type: CarouselComponent
        }];
      };

      SlideComponent.propDecorators = {
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.active']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        itemWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.width']
        }],
        order: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.order']
        }],
        isAnimated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.carousel-animation']
        }],
        addClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.item']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.carousel-item']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'slide',
            template: "\n    <div [class.active]=\"active\" class=\"item\">\n      <ng-content></ng-content>\n    </div>\n  ",
            host: {
              '[attr.aria-hidden]': '!active'
            },
            styles: ["\n    :host.carousel-animation {\n       transition: opacity 0.6s ease, visibility 0.6s ease;\n       float: left;\n    }\n    :host.carousel-animation.active {\n      opacity: 1;\n      visibility: visible;\n    }\n    :host.carousel-animation:not(.active) {\n      display: block;\n      position: absolute;\n      opacity: 0;\n      visibility: hidden;\n    }\n  "]
          }]
        }], function () {
          return [{
            type: CarouselComponent
          }];
        }, {
          itemWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width']
          }],
          order: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.order']
          }],
          addClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.item']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.carousel-item']
          }],
          active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.active']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.carousel-animation']
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var CarouselModule = /*#__PURE__*/function () {
        function CarouselModule() {
          _classCallCheck(this, CarouselModule);
        }

        _createClass(CarouselModule, null, [{
          key: "forRoot",
          value:
          /**
           * @return {?}
           */
          function forRoot() {
            return {
              ngModule: CarouselModule,
              providers: []
            };
          }
        }]);

        return CarouselModule;
      }();

      CarouselModule.ɵfac = function CarouselModule_Factory(t) {
        return new (t || CarouselModule)();
      };

      CarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CarouselModule
      });
      CarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CarouselModule, {
          declarations: function declarations() {
            return [SlideComponent, CarouselComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
          },
          exports: function exports() {
            return [SlideComponent, CarouselComponent];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: [SlideComponent, CarouselComponent],
            exports: [SlideComponent, CarouselComponent]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-bootstrap-carousel.js.map

      /***/

    },

    /***/
    "SOEm": function SOEm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManagerRoutingModule", function () {
        return ManagerRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _login_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../login/auth.guard */
      "nl+3");
      /* harmony import */


      var _customerdetail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./customerdetail.component */
      "F9w6");
      /* harmony import */


      var _customers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./customers.component */
      "MPuI");
      /* harmony import */


      var _enquiries_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./enquiries.component */
      "EIdz");
      /* harmony import */


      var _enquirydetails_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./enquirydetails.component */
      "bmwW");
      /* harmony import */


      var _verified_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./verified.component */
      "Sx+e");

      var routes = [{
        path: '',
        // data: {
        //   title: 'Theme'
        // },
        children: [{
          path: '',
          redirectTo: 'manager'
        }, {
          path: 'verified_list',
          canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
          component: _verified_component__WEBPACK_IMPORTED_MODULE_8__["VerifiedListComponent"],
          data: {
            roles: 'MANAGER',
            title: 'Verified List'
          }
        }, {
          path: 'customers',
          canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
          component: _customers_component__WEBPACK_IMPORTED_MODULE_5__["ManagerCustomerComponent"],
          data: {
            roles: 'MANAGER',
            title: 'Customers'
          }
        }, {
          path: 'agents',
          canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
          component: _verified_component__WEBPACK_IMPORTED_MODULE_8__["VerifiedListComponent"],
          data: {
            roles: 'MANAGER',
            title: 'Agents List'
          }
        }, {
          path: 'enquiries',
          canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
          component: _enquiries_component__WEBPACK_IMPORTED_MODULE_6__["EnquiriesComponent"],
          data: {
            roles: 'MANAGER',
            title: 'Enquiries'
          }
        }, {
          path: 'customer_details/:id',
          canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
          component: _customerdetail_component__WEBPACK_IMPORTED_MODULE_4__["ManagerCustomerDetailComponent"],
          data: {
            roles: 'MANAGER',
            title: 'Customer Details'
          }
        }, {
          path: 'enquiry_details/:id',
          canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
          component: _enquirydetails_component__WEBPACK_IMPORTED_MODULE_7__["EnquiryDetailComponent"],
          data: {
            roles: 'MANAGER',
            title: 'Enquiry Details'
          }
        }]
      }];

      var ManagerRoutingModule = function ManagerRoutingModule() {
        _classCallCheck(this, ManagerRoutingModule);
      };

      ManagerRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ManagerRoutingModule);
      /***/
    },

    /***/
    "Sx+e": function SxE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifiedListComponent", function () {
        return VerifiedListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_verified_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./verified.component.html */
      "cVY+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../data.service */
      "R7Hv");
      /* harmony import */


      var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../constants/columnMetadata */
      "7nfi");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");

      var VerifiedListComponent = /*#__PURE__*/function () {
        function VerifiedListComponent(dataservice, route, router, fb, toastr) {
          _classCallCheck(this, VerifiedListComponent);

          this.dataservice = dataservice;
          this.route = route;
          this.router = router;
          this.fb = fb;
          this.toastr = toastr;
          this.callerForm = this.fb.group({
            id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]
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
            this.columnDefs = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_6__["AgentsColumn"]);
          } else {
            this.columnDefs = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_6__["customersColumn"]);
          }

          this.rowSelection = "multiple";
        }

        _createClass(VerifiedListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getLists();
            this.routerData = this.route.snapshot.data;
            console.log(this.route.snapshot.data);
          }
        }, {
          key: "getLists",
          value: function getLists() {
            var _this15 = this;

            this.loading = true;
            var filter = {
              is_verified: true,
              kp_caller_assigned_null: true
            };

            if (this.route.snapshot.data.title === "Agents List") {
              this.dataservice.getAgents().valueChanges.subscribe(function (result) {
                console.log("getAgents", result.data.teleCallerContacts);
                _this15.rowData = result.data.teleCallerContacts;
              });
              this.dataservice.getUsers("TELE_CALLER").valueChanges.subscribe(function (result) {
                console.log("getUsers", result.data.users);
                _this15.users = result.data.users;
                _this15.label = "Tele ";
              });
            } else {
              this.dataservice.getCustomersFilter(filter).valueChanges.subscribe(function (result) {
                console.log("getCustomersFilter", result.data.customers);
                _this15.rowData = result.data.customers;
              });
              this.dataservice.getUsers("KP_CALLER").valueChanges.subscribe(function (result) {
                console.log("getUsers", result.data.users);
                _this15.users = result.data.users;
                _this15.label = "KP ";
              });
            }
          }
        }, {
          key: "onGridReady",
          value: function onGridReady(params) {
            this.gridApi = params.api;
            this.gridColumnApi = params.columnApi;
          }
        }, {
          key: "onSelectionChanged",
          value: function onSelectionChanged(event) {
            this.selectedRows = this.gridApi.getSelectedRows();

            if (this.selectedRows.length > 0) {
              this.btnDisabled = false;
            } else {
              this.btnDisabled = true;
            }

            console.log(this.selectedRows); // this.router.navigate(
            //   ["/kpcaller/kp_customer_details", selectedRows[0].id],
            //   {
            //     state: { data: selectedRows },
            //   }
            // );
          }
        }, {
          key: "FormSubmit",
          value: function FormSubmit() {
            var _this16 = this;

            var resp = {};
            console.log(this.callerForm.value, Array.from(this.selectedRows, function (x) {
              return x.id;
            }));

            if (this.route.snapshot.data.title === "Agents List") {
              this.dataservice.SetTeleCaller(this.callerForm.value.id, Array.from(this.selectedRows, function (x) {
                return x.id;
              })).subscribe(function (result) {
                resp = result.data;
                console.log("response", result);

                if (result.data.updateUser) {
                  _this16.toastr.success("Assigned successfully!");

                  _this16.getLists();

                  _this16.myModal.hide();
                } else {
                  _this16.toastr.error("Failed. Please check the fields!");
                }
              });
            } else {
              this.dataservice.SetKpCaller(this.callerForm.value.id, Array.from(this.selectedRows, function (x) {
                return x.id;
              })).subscribe(function (result) {
                resp = result.data;
                console.log("response", result);

                if (result.data.updateUser) {
                  _this16.toastr.success("Assigned successfully!");

                  _this16.getLists();

                  _this16.myModal.hide();
                } else {
                  _this16.toastr.error("Failed. Please check the fields!");
                }
              });
            }
          }
        }]);

        return VerifiedListComponent;
      }();

      VerifiedListComponent.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      };

      VerifiedListComponent.propDecorators = {
        myModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["myModal"]
        }]
      };
      VerifiedListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_verified_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])], VerifiedListComponent);
      /***/
    },

    /***/
    "bmwW": function bmwW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnquiryDetailComponent", function () {
        return EnquiryDetailComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_enquirydetails_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./enquirydetails.component.html */
      "ALhq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../data.service */
      "R7Hv");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../constants/columnMetadata */
      "7nfi");

      var EnquiryDetailComponent = /*#__PURE__*/function () {
        function EnquiryDetailComponent(dataservice, activatedRouter, router, fb, toastr) {
          _classCallCheck(this, EnquiryDetailComponent);

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
            GoogleMapPlusCode: [""]
          });
          this.commentForm = this.fb.group({
            RemarksText: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
          });
          this.Months = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["Months"]);
        }

        _createClass(EnquiryDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            this.getLists();
            this.activatedRouter.params.subscribe(function (params) {
              _this17.id = params["id"];
            });
            this.dataservice.getSingleEnquiry(this.id).valueChanges.subscribe(function (result) {
              console.log("getSingleAgent", result.data.customerEnquiry);
              _this17.details = result.data.customerEnquiry;
              _this17.customerForm = _this17.fb.group({
                NameOfBride: [_this17.details.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                NameOfFather: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                NameOfMother: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                MarriageDate: [_this17.details.MarriageDate, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Contact_Number_1: [_this17.details.PhoneNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Contact_Number_2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                MarriageMonth: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                tele_caller_contact: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                HouseName: [_this17.details.HouseName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Landmark: [_this17.details.Landmark, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                locality: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Post_office: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Latitude: [""],
                Longitude: [""],
                GoogleMapURL: [""],
                GoogleMapPlusCode: [""]
              });
              _this17.loading = false;
            });
          }
        }, {
          key: "getLists",
          value: function getLists() {
            var _this18 = this;

            this.loading = true;
            this.dataservice.getLocalities().valueChanges.subscribe(function (result) {
              console.log("getLocalities", result.data.localities);
              _this18.localities = result.data.localities;
            });
            this.dataservice.getPostOffices().valueChanges.subscribe(function (result) {
              console.log("getPostOffices", result.data.postOffices);
              _this18.postoffices = result.data.postOffices;
            });
            this.dataservice.getAgents().valueChanges.subscribe(function (result) {
              console.log("getAgents", result.data.teleCallerContacts);
              _this18.agents = result.data.teleCallerContacts;
            });
          } // dateConverter(date) {
          //   return new Date(date);
          // }

        }, {
          key: "FormSubmit",
          value: function FormSubmit() {
            var _this19 = this;

            var resp = {};
            console.log(this.customerForm.value);
            this.dataservice.Addcustomer(this.customerForm.value).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.createCustomer) {
                _this19.toastr.success("Customer added successfully!");

                _this19.getLists();

                _this19.myModal.hide();
              } else {
                _this19.toastr.error("Failed. Please check the fields!");
              }
            });
          }
        }, {
          key: "customerSubmit",
          value: function customerSubmit() {
            var _this20 = this;

            var resp = {};
            console.log(this.customerForm.value);
            this.dataservice.Addcustomer(this.customerForm.value).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.createCustomer) {
                _this20.toastr.success("customer added successfully!");

                _this20.getLists();

                _this20.customerModal.hide();
              } else {
                _this20.toastr.error("Failed. Please check the fields!");
              }
            });
          }
        }, {
          key: "deleteEnquiry",
          value: function deleteEnquiry() {
            var _this21 = this;

            var resp = {};
            this.dataservice.DeleteEnquiry(this.id).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.deleteCustomerEnquiry) {
                _this21.toastr.success("Enquiry deleted successfully!");

                _this21.router.navigate(["/manager/enquiries"]);

                _this21.deleteModal.hide();
              } else {
                _this21.toastr.error("Failed. Please check again!");
              }
            });
          }
        }]);

        return EnquiryDetailComponent;
      }();

      EnquiryDetailComponent.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      };

      EnquiryDetailComponent.propDecorators = {
        myModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["myModal"]
        }],
        customerModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["customerModal"]
        }],
        deleteModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["deleteModal"]
        }],
        commentModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["commentModal"]
        }]
      };
      EnquiryDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_enquirydetails_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])], EnquiryDetailComponent);
      /***/
    },

    /***/
    "cVY+": function cVY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n      <h2>{{routerData.title}}</h2>\r\n      <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" [disabled]=\"btnDisabled\"\r\n        (click)=\"myModal.show()\">\r\n        Assign to caller\r\n      </button>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <ag-grid-angular #agGrid style=\"width: 100%; height: 500px\" id=\"myGrid\" class=\"ag-theme-alpine\"\r\n            [columnDefs]=\"columnDefs\" [rowData]=\"rowData\" [rowSelection]=\"rowSelection\"\r\n            (gridReady)=\"onGridReady($event)\" (selectionChanged)=\"onSelectionChanged($event)\" animateRows=\"true\">\r\n          </ag-grid-angular>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div bsModal #myModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n      aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Assign to {{label}} Caller</h4>\r\n            <button type=\"button\" class=\"close\" (click)=\"myModal.hide()\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <form [formGroup]=\"callerForm\" (ngSubmit)=\"FormSubmit()\">\r\n              <div class=\"form-group\">\r\n                <label for=\"id\">{{label}} Caller</label>\r\n                <select class=\"form-control\" id=\"id\" required ngModel name=\"group\" formControlName=\"id\">\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of users\" value=\"{{ item.id }}\">\r\n                    {{ item.username }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"myModal.hide()\">\r\n                Close\r\n              </button>\r\n              <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !callerForm.valid\">\r\n                <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\"\r\n                  aria-hidden=\"true\"></span>\r\n                Save changes\r\n              </button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <!-- /.modal-content -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "d7Xv": function d7Xv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div\r\n    bsModal\r\n    #saleModal=\"bs-modal\"\r\n    class=\"modal fade\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n    aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\"\r\n  >\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Close Sale</h4>\r\n          <button\r\n            type=\"button\"\r\n            class=\"close\"\r\n            (click)=\"saleModal.hide()\"\r\n            aria-label=\"Close\"\r\n          >\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form [formGroup]=\"saleForm\" (ngSubmit)=\"closeCustomer()\">\r\n            <div class=\"form-group\">\r\n              <label for=\"group\">Status</label>\r\n              <select\r\n                class=\"form-control\"\r\n                id=\"CustomerStatus\"\r\n                required\r\n                ngModel\r\n                name=\"CustomerStatus\"\r\n                formControlName=\"CustomerStatus\"\r\n              >\r\n                <option value=\"\" disabled selected hidden>Choose...</option>\r\n                <option value=\"Sale successful\">Sale successful</option>\r\n                <option value=\"Other Purchase\">Other Purchase</option>\r\n                <option value=\"Plan dropped\">Plan dropped</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"group\">Closed by</label>\r\n              <select\r\n                class=\"form-control\"\r\n                id=\"sale_closed_by\"\r\n                required\r\n                ngModel\r\n                name=\"sale_closed_by\"\r\n                formControlName=\"sale_closed_by\"\r\n              >\r\n                <option value=\"\" disabled selected hidden>Choose...</option>\r\n                <option *ngFor=\"let item of kpcallers\" value=\"{{ item.id }}\">\r\n                  {{ item.username }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"sale_remarks\">Sale remarks</label>\r\n              <textarea\r\n                class=\"form-control\"\r\n                maxlength=\"250\"\r\n                id=\"sale_remarks\"\r\n                name=\"sale_remarks\"\r\n                formControlName=\"sale_remarks\"\r\n                placeholder=\"Enter remarks\"\r\n              ></textarea>\r\n            </div>\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-secondary\"\r\n              (click)=\"saleModal.hide()\"\r\n            >\r\n              Close\r\n            </button>\r\n            <button\r\n              type=\"submit\"\r\n              class=\"btn btn-primary ml-2\"\r\n              [disabled]=\"btnLoading || !saleForm.valid\"\r\n            >\r\n              <span\r\n                *ngIf=\"btnLoading\"\r\n                class=\"spinner-border spinner-border-sm\"\r\n                role=\"status\"\r\n                aria-hidden=\"true\"\r\n              ></span>\r\n              Save changes\r\n            </button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n  </div>\r\n  <div\r\n    bsModal\r\n    #deleteModal=\"bs-modal\"\r\n    class=\"modal fade\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n    aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\"\r\n  >\r\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body text-center\">\r\n          Do you want to delete this agent?\r\n        </div>\r\n        <div class=\"modal-footer justify-content-around\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"deleteModal.hide()\"\r\n          >\r\n            No! Cancel.\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteAgent()\">\r\n            Yes! Delete.\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div\r\n      class=\"card-header\"\r\n      style=\"display: flex; justify-content: space-between\"\r\n    >\r\n      <h2>Customer Details</h2>\r\n      <span>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-primary\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"myModal.show()\"\r\n        >\r\n          Assign to field agent\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-danger\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"saleModal.show()\"\r\n        >\r\n          Close Sale\r\n        </button>\r\n      </span>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"row\">\r\n            <div style=\"display: flex; justify-content: space-between\">\r\n              <h4>Basic details</h4>\r\n            </div>\r\n            <table class=\"table table-striped\">\r\n              <tbody>\r\n                <tr>\r\n                  <td>ID</td>\r\n                  <td>{{ details?.id }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Name Of Bride</td>\r\n                  <td>{{ details?.NameOfBride }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Name Of Father</td>\r\n                  <td>{{ details?.NameOfFather }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Name Of Mother</td>\r\n                  <td>{{ details?.NameOfMother }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Marriage Date</td>\r\n                  <td>{{ details?.MarriageDate }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Marriage Month</td>\r\n                  <td>{{ details?.MarriageMonth }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Contact number 1</td>\r\n                  <td>{{ details?.Contact_Number_1 }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Contact number 2</td>\r\n                  <td>{{ details?.Contact_Number_2 }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Agent</td>\r\n                  <td>\r\n                    <span class=\"badge badge-warning\">{{\r\n                      details.tele_caller_contact?.Name\r\n                    }}</span>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>KP Caller</td>\r\n                  <td>\r\n                    <span class=\"badge badge-primary\">{{\r\n                      details.kp_caller_assigned?.username\r\n                    }}</span>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>House Name</td>\r\n                  <td>{{ details.Address?.HouseName }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Landmark</td>\r\n                  <td>{{ details.Address?.Landmark }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Locality</td>\r\n                  <td>{{ details.Address?.locality?.Name }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Latitude</td>\r\n                  <td>{{ details.Address?.GeoLocation?.Latitude }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Longitude</td>\r\n                  <td>{{ details.Address?.GeoLocation?.Longitude }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Plus code</td>\r\n                  <td>{{ details.Address?.GeoLocation?.GoogleMapPlusCode }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Map URL</td>\r\n                  <td>\r\n                    <a\r\n                      href=\"https://www.google.com/maps/search/?api=1&query={{\r\n                        details.Address?.GeoLocation?.Latitude\r\n                      }}%2C{{ details.Address?.GeoLocation?.Longitude }}\"\r\n                      target=\"_blank\"\r\n                      >Click here to view location</a\r\n                    >\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div style=\"display: flex; justify-content: space-between\">\r\n              <h4>Field Report</h4>\r\n            </div>\r\n            <table *ngIf=\"details.FieldReport\" class=\"table table-striped\">\r\n              <tbody>\r\n                <tr>\r\n                  <td>Financial category</td>\r\n                  <td>{{ details.FieldReport?.FinancialBackground }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Quantity of intended purchase</td>\r\n                  <td>{{ details.FieldReport?.QtyOfGold }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Suitable set</td>\r\n                  <td>{{ details.FieldReport?.PreferredWeddingSet }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Whether planning to exchange after marriage?</td>\r\n                  <td>\r\n                    {{\r\n                      details.FieldReport?.PlanningForReplacementAfterWedding\r\n                    }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Quantity of old gold for exchange</td>\r\n                  <td>{{ details.FieldReport?.OldGoldExchangeQty }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>No cost emi needed?</td>\r\n                  <td>{{ details.FieldReport?.NoCostEmiRequired }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>EMI tenure</td>\r\n                  <td>\r\n                    <span class=\"badge badge-warning\">{{\r\n                      details.FieldReport?.EmiTenure\r\n                    }}</span>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Number of repayments</td>\r\n                  <td>\r\n                    <span class=\"badge badge-primary\">{{\r\n                      details.FieldReport?.EmiIntervals\r\n                    }}</span>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Token advance</td>\r\n                  <td>{{ details.FieldReport?.TokenAdvance }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Rate advance</td>\r\n                  <td>{{ details.FieldReport?.RateAdvance }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Whether approached by other jewelleries?</td>\r\n                  <td>{{ details.FieldReport?.EnquiriesFromOthers }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Advance paid to other jewellery</td>\r\n                  <td>\r\n                    {{ details.FieldReport?.AdvancePaidToOtherJewellery }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Whether received any fresh leads?</td>\r\n                  <td>{{ details.FieldReport?.NumberOfNewMarriageAddress }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Captured location</td>\r\n                  <td>\r\n                    <a\r\n                      href=\"https://www.google.com/maps/search/?api=1&query={{\r\n                        details.FieldReport?.location?.Latitude\r\n                      }}%2C{{ details.FieldReport?.location?.Longitude }}\"\r\n                      target=\"_blank\"\r\n                      >Click here to view location</a\r\n                    >\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <carousel [interval]=\"2000\">\r\n              <slide *ngFor=\"let item of details.FieldReport?.images\">\r\n                <img\r\n                  src=\"https://jewel-core.telemarketing.untanglepro.com{{\r\n                    item.url\r\n                  }}\"\r\n                  alt=\"First slide\"\r\n                  style=\"display: block; width: 100%\"\r\n                />\r\n                <!-- <div class=\"carousel-caption d-none d-md-block\">\r\n                                <h3>First slide label</h3>\r\n                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n                              </div> -->\r\n              </slide>\r\n            </carousel>\r\n          </div>\r\n\r\n          <div *ngIf=\"!details.FieldReport\" class=\"card\">\r\n            <div class=\"card-body text-center\">No field report found</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <div *ngIf=\"details.isSaleClosed\">\r\n            <div style=\"display: flex; justify-content: space-between\">\r\n              <h4 class=\"text-danger\">Sale Closed</h4>\r\n            </div>\r\n            <div class=\"card\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">\r\n                  Customer status : {{ details.CustomerStatus }}\r\n                </h5>\r\n                <p class=\"card-text\">\r\n                  Closed on : {{ details.sale_closed_date }}\r\n                </p>\r\n                <p class=\"card-text\">Remarks : {{ details.sale_remarks }}</p>\r\n                Closed by :\r\n                <span class=\"badge badge-primary\">{{\r\n                  details.sale_closed_by.username\r\n                }}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div style=\"display: flex; justify-content: space-between\">\r\n            <h4>Remarks</h4>\r\n          </div>\r\n          <div class=\"card\" *ngFor=\"let item of details.TelecallerRemarks\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">\r\n                {{ dateConverter(item.CallHistory?.event_date_time) }}\r\n              </h5>\r\n              <p class=\"card-text\">{{ item.RemarksText }}</p>\r\n              <span class=\"badge badge-primary\">{{\r\n                item.CallHistory.users_permissions_user?.username\r\n              }}</span>\r\n            </div>\r\n          </div>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-primary\"\r\n            data-toggle=\"modal\"\r\n            (click)=\"commentModal.show()\"\r\n          >\r\n            Add Comment\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div\r\n      bsModal\r\n      #myModal=\"bs-modal\"\r\n      class=\"modal fade\"\r\n      tabindex=\"-1\"\r\n      role=\"dialog\"\r\n      aria-labelledby=\"myModalLabel\"\r\n      aria-hidden=\"true\"\r\n    >\r\n      <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Assign to field Agent</h4>\r\n            <button\r\n              type=\"button\"\r\n              class=\"close\"\r\n              (click)=\"myModal.hide()\"\r\n              aria-label=\"Close\"\r\n            >\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <form [formGroup]=\"agentForm\" (ngSubmit)=\"FormSubmit()\">\r\n              <div class=\"form-group\">\r\n                <label for=\"group\">Field agent</label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"agent\"\r\n                  required\r\n                  ngModel\r\n                  name=\"agent\"\r\n                  formControlName=\"agent\"\r\n                >\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of users\" value=\"{{ item.id }}\">\r\n                    {{ item.username }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-secondary\"\r\n                (click)=\"myModal.hide()\"\r\n              >\r\n                Close\r\n              </button>\r\n              <button\r\n                type=\"submit\"\r\n                class=\"btn btn-primary ml-2\"\r\n                [disabled]=\"btnLoading || !agentForm.valid\"\r\n              >\r\n                <span\r\n                  *ngIf=\"btnLoading\"\r\n                  class=\"spinner-border spinner-border-sm\"\r\n                  role=\"status\"\r\n                  aria-hidden=\"true\"\r\n                ></span>\r\n                Save changes\r\n              </button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <!-- /.modal-content -->\r\n      </div>\r\n      <!-- /.modal-dialog -->\r\n    </div>\r\n    <div\r\n      bsModal\r\n      #commentModal=\"bs-modal\"\r\n      class=\"modal fade\"\r\n      tabindex=\"-1\"\r\n      role=\"dialog\"\r\n      aria-labelledby=\"myModalLabel\"\r\n      aria-hidden=\"true\"\r\n    >\r\n      <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Add Comment</h4>\r\n            <button\r\n              type=\"button\"\r\n              class=\"close\"\r\n              (click)=\"commentModal.hide()\"\r\n              aria-label=\"Close\"\r\n            >\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <form [formGroup]=\"commentForm\" (ngSubmit)=\"CommentSubmit()\">\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">Remarks</label>\r\n                <textarea\r\n                  class=\"form-control\"\r\n                  maxlength=\"250\"\r\n                  id=\"RemarksText\"\r\n                  name=\"RemarksText\"\r\n                  formControlName=\"RemarksText\"\r\n                  placeholder=\"Enter remarks\"\r\n                ></textarea>\r\n              </div>\r\n              <!-- <div class=\"form-group\">\r\n                                <label for=\"email\">Date</label>\r\n                                <input type=\"datetime-local\" class=\"form-control\" id=\"event_date_time\"\r\n                                    name=\"event_date_time\" formControlName=\"event_date_time\" />\r\n                            </div> -->\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-secondary\"\r\n                (click)=\"commentModal.hide()\"\r\n              >\r\n                Close\r\n              </button>\r\n              <button\r\n                type=\"submit\"\r\n                class=\"btn btn-primary ml-2\"\r\n                [disabled]=\"btnLoading || !commentForm.valid\"\r\n              >\r\n                <span\r\n                  *ngIf=\"btnLoading\"\r\n                  class=\"spinner-border spinner-border-sm\"\r\n                  role=\"status\"\r\n                  aria-hidden=\"true\"\r\n                ></span>\r\n                Save changes\r\n              </button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <!-- /.modal-content -->\r\n      </div>\r\n      <!-- /.modal-dialog -->\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "iva1": function iva1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n      <h2>Customers</h2>\r\n      <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"myModal.show()\">\r\n        New\r\n      </button>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <ag-grid-angular #agGrid style=\"width: 100%; height: 500px\" id=\"myGrid\" class=\"ag-theme-alpine\"\r\n            [columnDefs]=\"columnDefs\" [rowData]=\"rowData\" [rowSelection]=\"rowSelection\"\r\n            (gridReady)=\"onGridReady($event)\" (selectionChanged)=\"onSelectionChanged($event)\" animateRows=\"true\">\r\n          </ag-grid-angular>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div bsModal #myModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Add New Customer</h4>\r\n          <button type=\"button\" class=\"close\" (click)=\"myModal.hide()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form [formGroup]=\"customerForm\" (ngSubmit)=\"FormSubmit()\">\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Name of Bride</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"NameOfBride\" name=\"NameOfBride\" formControlName=\"NameOfBride\"\r\n                placeholder=\"Enter bride's name\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Name of Father</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"NameOfFather\" name=\"NameOfFather\"\r\n                formControlName=\"NameOfFather\" placeholder=\"Enter father's name\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Name of Mother</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"NameOfMother\" name=\"NameOfMother\"\r\n                formControlName=\"NameOfMother\" placeholder=\"Enter mother's name\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Contact number 1</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"Contact_Number_1\" name=\"Contact_Number_1\"\r\n                formControlName=\"Contact_Number_1\" placeholder=\"Enter primary contact number\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Contact number 2</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"Contact_Number_2\" name=\"Contact_Number_2\"\r\n                formControlName=\"Contact_Number_2\" placeholder=\"Enter secondary contact number\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">Marriage date</label>\r\n              <input type=\"date\" class=\"form-control\" id=\"MarriageDate\" name=\"MarriageDate\"\r\n                formControlName=\"MarriageDate\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"group\">Marriage month</label>\r\n              <select class=\"form-control\" id=\"MarriageMonth\" required ngModel name=\"MarriageMonth\" formControlName=\"MarriageMonth\">\r\n                <option value=\"\" disabled selected hidden>Choose...</option>\r\n                <option *ngFor=\"let item of Months\" value=\"{{ item.id }}\">\r\n                  {{ item.Name }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"group\">Agent</label>\r\n              <select class=\"form-control\" id=\"tele_caller_contact\" required ngModel name=\"tele_caller_contact\" formControlName=\"tele_caller_contact\">\r\n                <option value=\"\" disabled selected hidden>Choose...</option>\r\n                <option *ngFor=\"let item of agents\" value=\"{{ item.id }}\">\r\n                  {{ item.Name }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">House Name</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"HouseName\" name=\"HouseName\"\r\n                formControlName=\"HouseName\" placeholder=\"Enter House Name\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Landmark</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"Landmark\" name=\"Landmark\"\r\n                formControlName=\"Landmark\" placeholder=\"Enter Landmark\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"locality\">Name of locality</label>\r\n              <!-- <input type=\"text\" class=\"form-control\" id=\"locality\" name=\"locality\" formControlName=\"locality\"\r\n                placeholder=\"Enter locality\" /> -->\r\n                <select class=\"form-control\" id=\"locality\" required ngModel name=\"locality\" formControlName=\"locality\">\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of localities\" value=\"{{ item.id }}\">\r\n                    {{ item.Name }}\r\n                  </option>\r\n                </select>\r\n            </div>\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"myModal.hide()\">\r\n              Close\r\n            </button>\r\n            <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !customerForm.valid\">\r\n              <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n              Save changes\r\n            </button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n  <!-- /.modal -->\r\n</div>";
      /***/
    },

    /***/
    "m6yf": function m6yf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n        <h2>Enquiries</h2>\r\n        <!-- <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"myModal.show()\">\r\n          New\r\n        </button> -->\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <ag-grid-angular #agGrid style=\"width: 100%; height: 500px\" id=\"myGrid\" class=\"ag-theme-alpine\"\r\n              [columnDefs]=\"columnDefs\" [rowData]=\"rowData\" [rowSelection]=\"rowSelection\"\r\n              (gridReady)=\"onGridReady($event)\" (selectionChanged)=\"onSelectionChanged($event)\" animateRows=\"true\">\r\n            </ag-grid-angular>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div bsModal #myModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n      aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Add New Customer</h4>\r\n            <button type=\"button\" class=\"close\" (click)=\"myModal.hide()\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <form [formGroup]=\"customerForm\" (ngSubmit)=\"FormSubmit()\">\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">Name of Bride</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"NameOfBride\" name=\"NameOfBride\" formControlName=\"NameOfBride\"\r\n                  placeholder=\"Enter bride's name\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">Name of Father</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"NameOfFather\" name=\"NameOfFather\"\r\n                  formControlName=\"NameOfFather\" placeholder=\"Enter father's name\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">Name of Mother</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"NameOfMother\" name=\"NameOfMother\"\r\n                  formControlName=\"NameOfMother\" placeholder=\"Enter mother's name\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">Contact number 1</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"Contact_Number_1\" name=\"Contact_Number_1\"\r\n                  formControlName=\"Contact_Number_1\" placeholder=\"Enter primary contact number\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">Contact number 2</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"Contact_Number_2\" name=\"Contact_Number_2\"\r\n                  formControlName=\"Contact_Number_2\" placeholder=\"Enter secondary contact number\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"email\">Marriage date</label>\r\n                <input type=\"date\" class=\"form-control\" id=\"MarriageDate\" name=\"MarriageDate\"\r\n                  formControlName=\"MarriageDate\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"group\">Marriage month</label>\r\n                <select class=\"form-control\" id=\"MarriageMonth\" required ngModel name=\"MarriageMonth\" formControlName=\"MarriageMonth\">\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of Months\" value=\"{{ item.id }}\">\r\n                    {{ item.Name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"group\">Agent</label>\r\n                <select class=\"form-control\" id=\"tele_caller_contact\" required ngModel name=\"tele_caller_contact\" formControlName=\"tele_caller_contact\">\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of agents\" value=\"{{ item.id }}\">\r\n                    {{ item.Name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">House Name</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"HouseName\" name=\"HouseName\"\r\n                  formControlName=\"HouseName\" placeholder=\"Enter House Name\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">Landmark</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"Landmark\" name=\"Landmark\"\r\n                  formControlName=\"Landmark\" placeholder=\"Enter Landmark\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"locality\">Name of locality</label>\r\n                <!-- <input type=\"text\" class=\"form-control\" id=\"locality\" name=\"locality\" formControlName=\"locality\"\r\n                  placeholder=\"Enter locality\" /> -->\r\n                  <select class=\"form-control\" id=\"locality\" required ngModel name=\"locality\" formControlName=\"locality\">\r\n                    <option value=\"\" disabled selected hidden>Choose...</option>\r\n                    <option *ngFor=\"let item of localities\" value=\"{{ item.id }}\">\r\n                      {{ item.Name }}\r\n                    </option>\r\n                  </select>\r\n              </div>\r\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"myModal.hide()\">\r\n                Close\r\n              </button>\r\n              <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !customerForm.valid\">\r\n                <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n                Save changes\r\n              </button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <!-- /.modal-content -->\r\n      </div>\r\n      <!-- /.modal-dialog -->\r\n    </div>\r\n    <!-- /.modal -->\r\n  </div>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-manager-manager-module-es5.js.map