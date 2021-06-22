(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! F:\Projects\jewelv2.0\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1BUF":
    /*!*******************************************************!*\
      !*** ./src/app/views/login/authentication.service.ts ***!
      \*******************************************************/

    /*! exports provided: AuthenticationService */

    /***/
    function BUF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");

      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(http) {
          _classCallCheck(this, AuthenticationService);

          this.http = http;
          this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem("currentUser")));
          this.currentUser = this.currentUserSubject.asObservable();
        }

        _createClass(AuthenticationService, [{
          key: "currentUserValue",
          get: function get() {
            console.log("curentuser", this.currentUserSubject);
            return this.currentUserSubject.value;
          }
        }, {
          key: "login",
          value: function login(data) {
            var _this = this;

            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "auth/local/"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
              // login successful if there's a jwt token in the response
              console.log(user);

              if (user.jwt) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem("token", user.jwt);
                localStorage.setItem("username", user.user.username);
                localStorage.setItem("uid", user.user.id);
                localStorage.setItem("user_type", user.user.UserType);
                localStorage.setItem("email", user.user.email); // localStorage.setItem('name', user.data.user_data.name);
                // localStorage.setItem('phone_number', user.data.user_data.phone_number);
                // localStorage.setItem('shop_name', user.data.shops_details[0]?.shop_name);
                // localStorage.setItem('shop_id', user.data.shops_details[0]?.shop);

                localStorage.setItem("currentUser", JSON.stringify(user));

                _this.currentUserSubject.next(user);
              }

              return user;
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            // remove user from local storage to log user out
            localStorage.removeItem("currentUser");
            localStorage.removeItem("token");
            this.currentUserSubject.next(null);
          }
        }]);

        return AuthenticationService;
      }();

      AuthenticationService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AuthenticationService);
      /***/
    },

    /***/
    "4KHl":
    /*!***********************************!*\
      !*** ./src/app/graphql.module.ts ***!
      \***********************************/

    /*! exports provided: createApollo, GraphQLModule */

    /***/
    function KHl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createApollo", function () {
        return createApollo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GraphQLModule", function () {
        return GraphQLModule;
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


      var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! apollo-angular */
      "nbgS");
      /* harmony import */


      var _apollo_client_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @apollo/client/core */
      "ALmS");
      /* harmony import */


      var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @apollo/client/link/context */
      "MWEN");
      /* harmony import */


      var apollo_angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! apollo-angular/http */
      "F/12");

      var uri = "https://jewel-core.telemarketing.untanglepro.com/graphql"; // <-- add the URL of the GraphQL server here

      function createApollo(httpLink) {
        var basic = Object(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_4__["setContext"])(function (operation, context) {
          return {
            headers: {
              Accept: "charset=utf-8"
            }
          };
        }); // Get the authentication token from local storage if it exists

        var token = localStorage.getItem("token");
        var auth = Object(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_4__["setContext"])(function (operation, context) {
          return {
            headers: {
              Authorization: "Bearer ".concat(token)
            }
          };
        });
        return {
          link: _apollo_client_core__WEBPACK_IMPORTED_MODULE_3__["ApolloLink"].from([basic, auth, httpLink.create({
            uri: uri
          })]),
          cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"]()
        };
      }

      var GraphQLModule = function GraphQLModule() {
        _classCallCheck(this, GraphQLModule);
      };

      GraphQLModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [{
          provide: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["APOLLO_OPTIONS"],
          useFactory: createApollo,
          deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpLink"]]
        }]
      })], GraphQLModule);
      /***/
    },

    /***/
    "8gg5":
    /*!**********************************************!*\
      !*** ./src/app/views/error/404.component.ts ***!
      \**********************************************/

    /*! exports provided: P404Component */

    /***/
    function gg5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "P404Component", function () {
        return P404Component;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_404_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./404.component.html */
      "nAJl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var P404Component = function P404Component() {
        _classCallCheck(this, P404Component);
      };

      P404Component.ctorParameters = function () {
        return [];
      };

      P404Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_404_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], P404Component);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var environment = {
        production: false,
        apiUrl: "https://jewel-core.telemarketing.untanglepro.com/"
      };
      /***/
    },

    /***/
    "DodC":
    /*!****************************************************!*\
      !*** ./src/app/containers/default-layout/index.ts ***!
      \****************************************************/

    /*! exports provided: DefaultLayoutComponent */

    /***/
    function DodC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _default_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./default-layout.component */
      "JPqG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function () {
        return _default_layout_component__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"];
      });
      /***/

    },

    /***/
    "G/4p":
    /*!*************************************!*\
      !*** ./src/app/containers/index.ts ***!
      \*************************************/

    /*! exports provided: DefaultLayoutComponent */

    /***/
    function G4p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _default_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./default-layout */
      "DodC");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function () {
        return _default_layout__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"];
      });
      /***/

    },

    /***/
    "JPqG":
    /*!***********************************************************************!*\
      !*** ./src/app/containers/default-layout/default-layout.component.ts ***!
      \***********************************************************************/

    /*! exports provided: DefaultLayoutComponent */

    /***/
    function JPqG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function () {
        return DefaultLayoutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./default-layout.component.html */
      "lm8q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _views_login_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../views/login/authentication.service */
      "1BUF");
      /* harmony import */


      var _nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../_nav */
      "c2Qq");

      var DefaultLayoutComponent = /*#__PURE__*/function () {
        function DefaultLayoutComponent(router, authenticationService) {
          var _this2 = this;

          _classCallCheck(this, DefaultLayoutComponent);

          this.router = router;
          this.authenticationService = authenticationService;
          this.sidebarMinimized = false;
          this.userName = localStorage.getItem("username");
          this.navItems = _nav__WEBPACK_IMPORTED_MODULE_5__["navItems"].filter(function (item) {
            return item.role == localStorage.getItem("user_type") || item.role == "";
          });
          this.authenticationService.currentUser.subscribe(function (x) {
            return _this2.currentUser = x;
          });
          console.log("constructor", this.currentUser.user.UserType);
        }

        _createClass(DefaultLayoutComponent, [{
          key: "toggleMinimize",
          value: function toggleMinimize(e) {
            var _a;

            this.sidebarMinimized = e;
            console.log((_a = this.currentUser.user) === null || _a === void 0 ? void 0 : _a.UserType);
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authenticationService.logout();
            this.router.navigate(["/login"]);
          }
        }]);

        return DefaultLayoutComponent;
      }();

      DefaultLayoutComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _views_login_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
        }];
      };

      DefaultLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-dashboard",
        template: _raw_loader_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _views_login_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])], DefaultLayoutComponent);
      /***/
    },

    /***/
    "Lrxh":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/500.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function Lrxh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">500</h1>\n          <h4 class=\"pt-3\">Houston, we have a problem!</h4>\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n          </div>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-append\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "QB/w":
    /*!************************************************!*\
      !*** ./src/app/views/login/login.component.ts ***!
      \************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function QBW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "nSew");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../data.service */
      "R7Hv");
      /* harmony import */


      var _authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./authentication.service */
      "1BUF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(dataservice, route, router, authenticationService) {
          _classCallCheck(this, LoginComponent);

          this.dataservice = dataservice;
          this.route = route;
          this.router = router;
          this.authenticationService = authenticationService;
          this.loginForm = {};
          this.result = {};
          this.error = "";
          this.loading = false;

          if (this.authenticationService.currentUserValue) {
            this.router.navigate(["/"]);
          }
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

            this.loginForm = this.usForm.value;
            console.log(this.loginForm);
            this.loading = true;
            this.authenticationService.login(this.loginForm).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (data) {
              _this3.loading = false;

              _this3.router.navigate([_this3.returnUrl]);

              alert(data.message);
            }, function (error) {
              _this3.error = error;
              _this3.loading = false;
              console.log(error);
              alert(error.error.message);
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
        }];
      };

      LoginComponent.propDecorators = {
        usForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["usForm"]
        }]
      };
      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-dashboard",
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])], LoginComponent);
      /***/
    },

    /***/
    "R7Hv":
    /*!*********************************!*\
      !*** ./src/app/data.service.ts ***!
      \*********************************/

    /*! exports provided: DataService */

    /***/
    function R7Hv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataService", function () {
        return DataService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! apollo-angular */
      "nbgS");

      var AgentsQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"](_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query AgentsQuery {\n    teleCallerContacts {\n      id\n      Name\n      Contact_Number_1\n      Contact_Number_2\n      Contact_Number_3\n      group {\n        Name\n        Description\n      }\n      Email\n    }\n  }\n"])));
      var AgentsSingleQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"](_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  query ($id: ID!) {\n    teleCallerContact(id: $id) {\n      id\n      Name\n      Email\n      group {\n        Name\n        Description\n      }\n      Contact_Number_1\n      Contact_Number_2\n      Contact_Number_3\n      telecaller_remarks {\n        RemarksText\n        CallHistory {\n          event_date_time\n          users_permissions_user {\n            username\n          }\n        }\n      }\n    }\n  }\n"])));
      var AddAgentMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"](_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  mutation (\n    $name: String!\n    $group: ID!\n    $email: String!\n    $phone1: Long!\n    $phone2: Long!\n    $phone3: Long!\n  ) {\n    createTeleCallerContact(\n      input: {\n        data: {\n          Name: $name\n          Email: $email\n          Contact_Number_1: $phone1\n          Contact_Number_2: $phone2\n          Contact_Number_3: $phone3\n          group: $group\n        }\n      }\n    ) {\n      teleCallerContact {\n        id\n        Name\n        Contact_Number_1\n        Contact_Number_2\n        Contact_Number_3\n        group {\n          Name\n          Description\n        }\n        Email\n      }\n    }\n  }\n"])));
      var GroupsQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"](_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  query GroupsQuery {\n    groups {\n      id\n      Name\n      Description\n    }\n  }\n"])));
      var localitiesQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"](_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  query {\n    localities {\n      id\n      Name\n      post_office {\n        Name\n        id\n        Pincode\n      }\n    }\n  }\n"])));
      var UpdateAgentMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"](_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  mutation (\n    $id: ID!\n    $name: String!\n    $group: ID!\n    $email: String!\n    $phone1: Long!\n    $phone2: Long!\n    $phone3: Long!\n  ) {\n    updateTeleCallerContact(\n      input: {\n        where: { id: $id }\n        data: {\n          Name: $name\n          Email: $email\n          Contact_Number_1: $phone1\n          Contact_Number_2: $phone2\n          Contact_Number_3: $phone3\n          group: $group\n        }\n      }\n    ) {\n      teleCallerContact {\n        id\n        Name\n        Contact_Number_1\n        Contact_Number_2\n        Contact_Number_3\n        group {\n          Name\n          Description\n        }\n        Email\n      }\n    }\n  }\n"])));
      var DeleteAgentMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"](_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  mutation ($id: ID!) {\n    deleteTeleCallerContact(input: { where: { id: $id } }) {\n      teleCallerContact {\n        id\n        Name\n        Contact_Number_1\n        Contact_Number_2\n        Contact_Number_3\n        group {\n          Name\n          Description\n        }\n        Email\n      }\n    }\n  }\n"])));
      var AddCommentMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"](_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  mutation ($id: ID!, $remarks: String!, $date: DateTime!) {\n    updateTeleCallerContact(\n      input: {\n        where: { id: $id }\n        data: {\n          telecaller_remarks: {\n            RemarksText: $remarks\n            CallHistory: { event_date_time: $date }\n          }\n        }\n      }\n    ) {\n      teleCallerContact {\n        id\n        Name\n        Email\n        group {\n          Name\n          Description\n        }\n        Contact_Number_1\n        Contact_Number_2\n        Contact_Number_3\n        telecaller_remarks {\n          RemarksText\n          CallHistory {\n            event_date_time\n            users_permissions_user {\n              username\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
      var CustomersQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"](_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  query {\n    customers {\n      id\n      is_verified\n      NameOfBride\n      NameOfFather\n      NameOfMother\n      MarriageDate\n      MarriageMonth\n      kp_caller_assigned {\n        email\n        username\n      }\n      tele_caller_contact {\n        Name\n        id\n      }\n      created_at\n      FieldReport {\n        id\n        FinancialBackground\n        QtyOfGold\n        PreferredWeddingSet\n        PlanningForReplacementAfterWedding\n        OldGoldExchangeQty\n        NoCostEmiRequired\n        EmiTenure\n        EmiIntervals\n        TokenAdvance\n        RateAdvance\n        EnquiriesFromOthers\n        AdvancePaidToOtherJewellery\n        NumberOfNewMarriageAddress\n      }\n      Address {\n        id\n        HouseName\n        Landmark\n        locality {\n          Name\n        }\n        post_office {\n          Name\n          Pincode\n          district {\n            Name\n          }\n        }\n        GeoLocation {\n          Latitude\n          Longitude\n          GoogleMapURL\n        }\n      }\n    }\n  }\n"])));
      var CustomersFilterQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"](_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  query (\n    $is_verified: Boolean\n    $kp_caller_assigned_null: Boolean\n    $kp_id: ID\n    $MarriageMonth_null: Boolean\n    $MarriageDate_null: Boolean\n  ) {\n    customers(\n      where: {\n        is_verified: $is_verified\n        kp_caller_assigned_null: $kp_caller_assigned_null\n        kp_caller_assigned: $kp_id\n        MarriageDate_null: $MarriageDate_null\n        MarriageMonth_null: $MarriageMonth_null\n      }\n    ) {\n      id\n      is_verified\n      NameOfBride\n      NameOfFather\n      NameOfMother\n      MarriageDate\n      MarriageMonth\n      kp_caller_assigned {\n        email\n        username\n      }\n      tele_caller_contact {\n        Name\n        id\n      }\n      created_at\n      FieldReport {\n        id\n        FinancialBackground\n        QtyOfGold\n        PreferredWeddingSet\n        PlanningForReplacementAfterWedding\n        OldGoldExchangeQty\n        NoCostEmiRequired\n        EmiTenure\n        EmiIntervals\n        TokenAdvance\n        RateAdvance\n        EnquiriesFromOthers\n        AdvancePaidToOtherJewellery\n        NumberOfNewMarriageAddress\n      }\n      Address {\n        id\n        HouseName\n        Landmark\n        locality {\n          Name\n        }\n        post_office {\n          Name\n          Pincode\n          district {\n            Name\n          }\n        }\n        GeoLocation {\n          Latitude\n          Longitude\n          GoogleMapURL\n        }\n      }\n    }\n  }\n"])));
      var CustomerSingleQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"](_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  query ($id: ID!) {\n    customer(id: $id) {\n      id\n      is_verified\n      NameOfBride\n      NameOfFather\n      NameOfMother\n      MarriageDate\n      MarriageMonth\n      tele_caller_contact {\n        Name\n        id\n      }\n      kp_caller_assigned {\n        email\n        username\n      }\n      created_at\n      FieldReport {\n        id\n        FinancialBackground\n        QtyOfGold\n        PreferredWeddingSet\n        PlanningForReplacementAfterWedding\n        OldGoldExchangeQty\n        NoCostEmiRequired\n        EmiTenure\n        EmiIntervals\n        TokenAdvance\n        RateAdvance\n        EnquiriesFromOthers\n        AdvancePaidToOtherJewellery\n        NumberOfNewMarriageAddress\n      }\n      Address {\n        id\n        HouseName\n        Landmark\n        locality {\n          Name\n        }\n        post_office {\n          Name\n          Pincode\n          district {\n            Name\n          }\n        }\n        GeoLocation {\n          Latitude\n          Longitude\n          GoogleMapURL\n        }\n      }\n      TelecallerRemarks {\n        RemarksText\n        CallHistory {\n          event_date_time\n          users_permissions_user {\n            username\n            email\n          }\n        }\n      }\n    }\n  }\n"])));
      var AddCustomerMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"](_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  mutation (\n    $NameOfBride: String!\n    $NameOfFather: String!\n    $NameOfMother: String!\n    $MarriageDate: Date!\n    $MarriageMonth: Int!\n    $tele_caller_contact: ID!\n    $HouseName: String!\n    $Landmark: String!\n    $locality: ID!\n  ) {\n    createCustomer(\n      input: {\n        data: {\n          NameOfBride: $NameOfBride\n          NameOfFather: $NameOfFather\n          NameOfMother: $NameOfMother\n          MarriageDate: $MarriageDate\n          MarriageMonth: $MarriageMonth\n          tele_caller_contact: $tele_caller_contact\n          Address: {\n            HouseName: $HouseName\n            Landmark: $Landmark\n            locality: $locality\n          }\n        }\n      }\n    ) {\n      customer {\n        id\n        NameOfBride\n        NameOfFather\n        NameOfMother\n        MarriageDate\n        MarriageMonth\n        tele_caller_contact {\n          Name\n          id\n        }\n        created_at\n        Address {\n          id\n          HouseName\n          Landmark\n          locality {\n            Name\n          }\n          post_office {\n            Name\n            Pincode\n            district {\n              Name\n            }\n          }\n          GeoLocation {\n            Latitude\n            Longitude\n            GoogleMapURL\n          }\n        }\n      }\n    }\n  }\n"])));
      var AddCustomerCommentMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"](_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  mutation (\n    $id: ID!\n    $remarks: String!\n    $date: DateTime!\n    $is_verified: Boolean\n  ) {\n    updateCustomer(\n      input: {\n        where: { id: $id }\n        data: {\n          TelecallerRemarks: {\n            RemarksText: $remarks\n            CallHistory: { event_date_time: $date }\n          }\n          is_verified: $is_verified\n        }\n      }\n    ) {\n      customer {\n        id\n        is_verified\n        NameOfBride\n        NameOfFather\n        NameOfMother\n        MarriageDate\n        MarriageMonth\n        tele_caller_contact {\n          Name\n          id\n        }\n        created_at\n        Address {\n          id\n          HouseName\n          Landmark\n          locality {\n            Name\n          }\n          post_office {\n            Name\n            Pincode\n            district {\n              Name\n            }\n          }\n          GeoLocation {\n            Latitude\n            Longitude\n            GoogleMapURL\n          }\n        }\n      }\n    }\n  }\n"])));
      var SetKpCallerMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"](_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  mutation ($id: ID!, $cust_id: [ID!]!) {\n    updateUser(input: { where: { id: $id }, data: { kp_customer: $cust_id } }) {\n      user {\n        id\n        kp_customer {\n          id\n          NameOfBride\n          NameOfFather\n        }\n      }\n    }\n  }\n"])));
      var SetFieldAgentMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"](_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  mutation ($id: ID!, $cust_id: [ID!]!) {\n    updateUser(input: { where: { id: $id }, data: { customers: $cust_id } }) {\n      user {\n        id\n        customers {\n          NameOfBride\n          id\n          NameOfFather\n          MarriageDate\n        }\n      }\n    }\n  }\n"])));
      var UsersQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"](_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  query ($type: String!) {\n    users(where: { UserType: $type }) {\n      id\n      username\n      email\n      role {\n        id\n        name\n        type\n      }\n      UserType\n    }\n  }\n"])));

      var DataService = /*#__PURE__*/function () {
        function DataService(http, apollo) {
          _classCallCheck(this, DataService);

          this.http = http;
          this.apollo = apollo;
          this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
          this.params = new URLSearchParams();
        }

        _createClass(DataService, [{
          key: "Login",
          value: function Login(data) {
            var httpOptions1 = {
              observe: "response"
            };
            return this.http.post(this.baseURL + "auth/login/", data, httpOptions1);
          }
        }, {
          key: "getOrders",
          value: function getOrders() {
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Token ".concat(localStorage.getItem("token"))
              }),
              observe: "response"
            };
            return this.http.get(this.baseURL + "order/1/shop/", httpOptions);
          }
        }, {
          key: "getAgents",
          value: function getAgents() {
            return this.apollo.watchQuery({
              query: AgentsQuery
            });
          }
        }, {
          key: "getSingleAgent",
          value: function getSingleAgent(id) {
            return this.apollo.watchQuery({
              query: AgentsSingleQuery,
              variables: {
                id: id
              }
            });
          }
        }, {
          key: "AddAgent",
          value: function AddAgent(agent) {
            return this.apollo.mutate({
              mutation: AddAgentMutation,
              variables: {
                name: agent.name,
                email: agent.email,
                group: agent.group,
                phone1: agent.phone1,
                phone2: agent.phone2,
                phone3: agent.phone3
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "EditAgent",
          value: function EditAgent(id, agent) {
            return this.apollo.mutate({
              mutation: UpdateAgentMutation,
              variables: {
                id: id,
                name: agent.name,
                email: agent.email,
                group: agent.group,
                phone1: agent.phone1,
                phone2: agent.phone2,
                phone3: agent.phone3
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "AddComment",
          value: function AddComment(id, agent) {
            var date = new Date();
            console.log(date.toISOString());
            return this.apollo.mutate({
              mutation: AddCommentMutation,
              variables: {
                id: id,
                remarks: localStorage.getItem("username") + ": " + agent.RemarksText,
                date: new Date().toISOString()
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "DeleteAgent",
          value: function DeleteAgent(id) {
            return this.apollo.mutate({
              mutation: DeleteAgentMutation,
              variables: {
                id: id
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "getGroups",
          value: function getGroups() {
            return this.apollo.watchQuery({
              query: GroupsQuery
            });
          }
        }, {
          key: "getLocalities",
          value: function getLocalities() {
            return this.apollo.watchQuery({
              query: localitiesQuery
            });
          }
        }, {
          key: "getCustomers",
          value: function getCustomers() {
            return this.apollo.watchQuery({
              query: CustomersQuery
            });
          }
        }, {
          key: "getUsers",
          value: function getUsers(type) {
            return this.apollo.watchQuery({
              query: UsersQuery,
              variables: {
                type: type
              }
            });
          }
        }, {
          key: "getCustomersFilter",
          value: function getCustomersFilter(verified) {
            return this.apollo.watchQuery({
              query: CustomersFilterQuery,
              variables: verified
            });
          }
        }, {
          key: "getSingleCustomer",
          value: function getSingleCustomer(id) {
            return this.apollo.watchQuery({
              query: CustomerSingleQuery,
              variables: {
                id: id
              }
            });
          }
        }, {
          key: "Addcustomer",
          value: function Addcustomer(Customer) {
            return this.apollo.mutate({
              mutation: AddCustomerMutation,
              variables: {
                NameOfBride: Customer.NameOfBride,
                NameOfFather: Customer.NameOfFather,
                NameOfMother: Customer.NameOfMother,
                MarriageDate: Customer.MarriageDate,
                MarriageMonth: parseInt(Customer.MarriageMonth),
                tele_caller_contact: Customer.tele_caller_contact,
                HouseName: Customer.HouseName,
                Landmark: Customer.Landmark,
                locality: Customer.locality
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "AddCustomerComment",
          value: function AddCustomerComment(id, agent) {
            return this.apollo.mutate({
              mutation: AddCustomerCommentMutation,
              variables: {
                id: id,
                remarks: localStorage.getItem("username") + ": " + agent.RemarksText,
                date: new Date().toISOString(),
                is_verified: agent.is_verified
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "SetKpCaller",
          value: function SetKpCaller(id, cust_id) {
            return this.apollo.mutate({
              mutation: SetKpCallerMutation,
              variables: {
                id: id,
                cust_id: cust_id
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "SetFieldAgent",
          value: function SetFieldAgent(id, cust_id) {
            return this.apollo.mutate({
              mutation: SetFieldAgentMutation,
              variables: {
                id: id,
                cust_id: cust_id
              },
              errorPolicy: "all"
            });
          }
        }]);

        return DataService;
      }();

      DataService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"]
        }];
      };

      DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"]])], DataService);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @coreui/icons-angular */
      "rVqu");
      /* harmony import */


      var _coreui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @coreui/icons */
      "t17N");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router, iconSet) {
          _classCallCheck(this, AppComponent);

          this.router = router;
          this.iconSet = iconSet; // iconSet singleton

          iconSet.icons = Object.assign({}, _coreui_icons__WEBPACK_IMPORTED_MODULE_4__["freeSet"]);
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.router.events.subscribe(function (evt) {
              if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
              }

              window.scrollTo(0, 0);
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line
        selector: 'body',
        template: '<router-outlet></router-outlet>',
        providers: [_coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]])], AppComponent);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ag-grid-angular */
      "YFAK");
      /* harmony import */


      var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @coreui/icons-angular */
      "rVqu");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./containers */
      "G/4p");
      /* harmony import */


      var _views_error_404_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./views/error/404.component */
      "8gg5");
      /* harmony import */


      var _views_error_500_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./views/error/500.component */
      "dxhq");
      /* harmony import */


      var _views_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./views/login/login.component */
      "QB/w");
      /* harmony import */


      var _coreui_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @coreui/angular */
      "Iluq");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./app.routing */
      "beVS");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var _graphql_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./graphql.module */
      "4KHl"); // import { BrowserModule } from '@angular/platform-browser';
      // import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
      // import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
      // const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
      //   suppressScrollX: true
      // };
      // Import containers
      // const APP_CONTAINERS = [
      //   DefaultLayoutComponent
      // ];
      // Import routing module
      // Import 3rd party components
      // import { TabsModule } from 'ngx-bootstrap/tabs';


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [// BrowserModule,
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__["AgGridModule"].withComponents([]), _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _app_routing__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppAsideModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppBreadcrumbModule"].forRoot(), _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppFooterModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppHeaderModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppSidebarModule"], // PerfectScrollbarModule,
        ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__["BsDropdownModule"].forRoot(), // TabsModule.forRoot(),
        // IconModule,
        _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_7__["IconSetModule"].forRoot(), _graphql_module__WEBPACK_IMPORTED_MODULE_16__["GraphQLModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], // ...APP_CONTAINERS,
        _views_error_404_component__WEBPACK_IMPORTED_MODULE_10__["P404Component"], _views_error_500_component__WEBPACK_IMPORTED_MODULE_11__["P500Component"], _views_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _containers__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutComponent"]],
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
        }, _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_7__["IconSetService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "beVS":
    /*!********************************!*\
      !*** ./src/app/app.routing.ts ***!
      \********************************/

    /*! exports provided: routes, AppRoutingModule */

    /***/
    function beVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./containers */
      "G/4p");
      /* harmony import */


      var _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./views/error/404.component */
      "8gg5");
      /* harmony import */


      var _views_error_500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./views/error/500.component */
      "dxhq");
      /* harmony import */


      var _views_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./views/login/login.component */
      "QB/w");
      /* harmony import */


      var _views_login_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./views/login/auth.guard */
      "nl+3"); // Import Containers


      var routes = [{
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: '404',
        component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__["P404Component"],
        data: {
          title: 'Page 404'
        }
      }, {
        path: '500',
        component: _views_error_500_component__WEBPACK_IMPORTED_MODULE_5__["P500Component"],
        data: {
          title: 'Page 500'
        }
      }, {
        path: 'login',
        component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        data: {
          title: 'Login Page'
        }
      }, {
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutComponent"],
        data: {
          title: 'Home'
        },
        canActivate: [_views_login_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        children: [{
          path: 'telecaller',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-telecaller-telecaller-module */
            [__webpack_require__.e("default~views-kpcaller-kpcaller-module~views-manager-manager-module~views-telecaller-telecaller-module"), __webpack_require__.e("views-telecaller-telecaller-module")]).then(__webpack_require__.bind(null,
            /*! ./views/telecaller/telecaller.module */
            "ZTOn")).then(function (m) {
              return m.TelecallerModule;
            });
          }
        }, {
          path: 'manager',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-manager-manager-module */
            [__webpack_require__.e("default~views-kpcaller-kpcaller-module~views-manager-manager-module~views-telecaller-telecaller-module"), __webpack_require__.e("views-manager-manager-module")]).then(__webpack_require__.bind(null,
            /*! ./views/manager/manager.module */
            "5Q6f")).then(function (m) {
              return m.ManagerModule;
            });
          }
        }, {
          path: 'kpcaller',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-kpcaller-kpcaller-module */
            [__webpack_require__.e("default~views-kpcaller-kpcaller-module~views-manager-manager-module~views-telecaller-telecaller-module"), __webpack_require__.e("views-kpcaller-kpcaller-module")]).then(__webpack_require__.bind(null,
            /*! ./views/kpcaller/kpcaller.module */
            "/oiM")).then(function (m) {
              return m.KpCallerModule;
            });
          }
        }, {
          path: 'dashboard',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | views-dashboard-dashboard-module */
            "views-dashboard-dashboard-module").then(__webpack_require__.bind(null,
            /*! ./views/dashboard/dashboard.module */
            "6dU7")).then(function (m) {
              return m.DashboardModule;
            });
          }
        }]
      }, {
        path: '**',
        component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__["P404Component"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "c2Qq":
    /*!*************************!*\
      !*** ./src/app/_nav.ts ***!
      \*************************/

    /*! exports provided: navItems */

    /***/
    function c2Qq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "navItems", function () {
        return navItems;
      });

      var navItems = [{
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
        role: ""
      }, {
        name: 'Agents',
        url: '/telecaller/agents',
        icon: 'icon-note',
        role: "TELE_CALLER"
      }, {
        name: 'Customers',
        url: '/telecaller/customers',
        icon: 'icon-basket-loaded',
        role: "TELE_CALLER"
      }, {
        name: 'Verification',
        url: '/kpcaller/verification',
        icon: 'icon-cursor',
        role: "KP_CALLER"
      }, {
        name: 'Assigned',
        url: '/kpcaller/assigned',
        icon: 'icon-cursor',
        role: "KP_CALLER"
      }, {
        name: 'DNF',
        url: '/kpcaller/dnf',
        icon: 'icon-cursor',
        role: "KP_CALLER"
      }, {
        name: 'Verified List',
        url: '/manager/verified_list',
        icon: 'icon-phone',
        role: "MANAGER"
      }, {
        name: 'Customers',
        url: '/manager/customers',
        icon: 'icon-basket-loaded',
        role: "MANAGER"
      }];
      /***/
    },

    /***/
    "dxhq":
    /*!**********************************************!*\
      !*** ./src/app/views/error/500.component.ts ***!
      \**********************************************/

    /*! exports provided: P500Component */

    /***/
    function dxhq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "P500Component", function () {
        return P500Component;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_500_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./500.component.html */
      "Lrxh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var P500Component = function P500Component() {
        _classCallCheck(this, P500Component);
      };

      P500Component.ctorParameters = function () {
        return [];
      };

      P500Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_500_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], P500Component);
      /***/
    },

    /***/
    "lm8q":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/default-layout/default-layout.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lm8q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header [navbarBrandRouterLink]=\"['/dashboard']\" [fixed]=\"true\"\n  [navbarBrandFull]=\"{src: 'assets/img/brand/logo.png',width:200,alt: 'CartIntoCar Logo'}\"\n  [navbarBrandMinimized]=\"{src: 'assets/img/brand/sygnet.svg', width: 30, height: 30, alt: 'CartIntoCar Logo'}\"\n  [sidebarToggler]=\"'lg'\">\n  <ul class=\"nav navbar-nav ml-auto\">\n    {{userName}}\n    <li class=\"nav-item dropdown\" dropdown placement=\"bottom right\">\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"\n        dropdownToggle (click)=\"false\">\n        <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" />\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\n        <div class=\"dropdown-header text-center\"><strong>Settings</strong></div>\n        <a class=\"dropdown-item\"><i class=\"fa fa-user\"></i>{{userName}}</a>\n        <div class=\"divider\"></div>\n        <a class=\"dropdown-item\" (click)=\"logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\n      </div>\n    </li>\n  </ul>\n</app-header>\n<div class=\"app-body\">\n  <app-sidebar #appSidebar [fixed]=\"true\" [display]=\"'lg'\" [minimized]=\"sidebarMinimized\"\n    (minimizedChange)=\"toggleMinimize($event)\">\n    <app-sidebar-nav [navItems]=\"navItems\" [perfectScrollbar] [disabled]=\"appSidebar.minimized\"></app-sidebar-nav>\n    <app-sidebar-minimizer></app-sidebar-minimizer>\n  </app-sidebar>\n  <!-- Main content -->\n  <main class=\"main\">\n    <cui-breadcrumb>\n    </cui-breadcrumb>\n    <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n    </div>\n  </main>\n</div>\n<app-footer>\n  <span><a>Jewel Telecaller</a> &copy; 2021 jewel.</span>\n  <!-- <span class=\"ml-auto\">Powered by <a href=\"https://www.upsquad.in\">upsquad</a></span> -->\n</app-footer>";
      /***/
    },

    /***/
    "nAJl":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/404.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function nAJl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n          </div>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-append\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "nSew":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function nSew(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <div class=\"app-body bg-image\">\n  <main class=\"main d-flex align-items-center\" style=\"background-color: rgba(0, 0, 0, 0.8);\">\n    <div class=\"login-box\">\n      <div class=\"card p-4\" style=\"width: fit-content;\">\n        <div class=\"card-body\">\n          <form>\n            <h1>Login</h1>\n            <p class=\"text-muted\">Welcome back! Please log in to your account</p>\n            <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n              </div>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Username\" autocomplete=\"username\" required>\n            </div>\n            <div class=\"input-group mb-4\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n              </div>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"current-password\"\n                required>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <button type=\"button\" class=\"btn btn-primary px-4\">Login</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </main>\n</div> -->\n<!-- <div class=\"bg-image\"> -->\n<div class=\"d-md-flex h-md-100 align-items-center\">\n  <div class=\"col-md-6 p-0 bg-black h-md-100 login-screen\">\n    <div class=\"text-white d-md-flex align-items-center h-100 text-center justify-content-center\">\n      <div class=\"container-fluid bg-image\" style=\" height: 100vh \">\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 p-0 bg-white h-md-100\">\n    <div class=\"d-md-flex align-items-center h-md-100 justify-content-center\">\n      <div class=\"container-fluid fallback-image\" style=\" height: 100vh \">\n        <form class=\"login-box\" #usForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n          <h1>JEWEL</h1>\n          <p class=\"text-muted\">Welcome back! Please log in to your account</p>\n          <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n            </div>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Username\" id=\"login\" maxlength=\"80\" size=\"30\" ngModel\n              value=\"\" name=\"identifier\" required>\n          </div>\n          <div class=\"input-group mb-4\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n            </div>\n            <input type=\"password\" class=\"form-control\" placeholder=\"Password\" id=\"password\" size=\"30\" ngModel\n              name=\"password\" value=\"\" required>\n          </div>\n          <!-- <div class=\"row\"> -->\n          <!-- <div class=\"col-6\"> -->\n          <button type=\"submit\" class=\"btn btn-lg px-4\" style=\"background-color: #43425D; color: white;\">\n            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\">\n            </span>Login\n          </button>\n          <!-- </div> -->\n          <!-- </div> -->\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- </div> -->";
      /***/
    },

    /***/
    "nl+3":
    /*!*******************************************!*\
      !*** ./src/app/views/login/auth.guard.ts ***!
      \*******************************************/

    /*! exports provided: AuthGuard */

    /***/
    function nl3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
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


      var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./authentication.service */
      "1BUF");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, authenticationService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.authenticationService = authenticationService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var currentUser = this.authenticationService.currentUserValue;

            if (currentUser) {
              console.log(currentUser, 'authguard', route.data.roles); // check if route is restricted by role

              if (route.data.roles && route.data.roles.indexOf(currentUser.user.UserType) === -1) {
                // role not authorised so redirect to home page
                this.router.navigate(['/500']);
                console.log('authguard failed');
                return false;
              } // authorised so return true


              return true;
            }

            console.log(currentUser, 'authguard il kerilla', route.data.roles); // not logged in so redirect to login page with the return url

            this.router.navigate(['/login'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])], AuthGuard);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "wAiw");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
        useJit: true,
        preserveWhitespaces: true
      })["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map