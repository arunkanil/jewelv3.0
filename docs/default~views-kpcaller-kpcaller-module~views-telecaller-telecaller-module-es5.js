(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-kpcaller-kpcaller-module~views-telecaller-telecaller-module"], {
    /***/
    "2ZVE":
    /*!************************************************************************!*\
      !*** ./node_modules/ngx-bootstrap/tabs/fesm2015/ngx-bootstrap-tabs.js ***!
      \************************************************************************/

    /*! exports provided: NgTranscludeDirective, TabDirective, TabHeadingDirective, TabsModule, TabsetComponent, TabsetConfig */

    /***/
    function ZVE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgTranscludeDirective", function () {
        return NgTranscludeDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabDirective", function () {
        return TabDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabHeadingDirective", function () {
        return TabHeadingDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsModule", function () {
        return TabsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsetComponent", function () {
        return TabsetComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsetConfig", function () {
        return TabsetConfig;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      function TabsetComponent_li_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsetComponent_li_1_span_4_Template_span_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var tabz_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            $event.preventDefault();
            return ctx_r4.removeTab(tabz_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u274C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a1) {
        return ["nav-item", a1];
      };

      function TabsetComponent_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function TabsetComponent_li_1_Template_li_keydown_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var i_r2 = ctx.index;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.keyNavActions($event, i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsetComponent_li_1_Template_a_click_1_listener() {
            var tabz_r1 = ctx.$implicit;
            return tabz_r1.active = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TabsetComponent_li_1_span_4_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tabz_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", tabz_r1.active)("disabled", tabz_r1.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, tabz_r1.customClass || ""));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", tabz_r1.active)("disabled", tabz_r1.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-controls", tabz_r1.id ? tabz_r1.id : "")("aria-selected", !!tabz_r1.active)("id", tabz_r1.id ? tabz_r1.id + "-link" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTransclude", tabz_r1.headingRef);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tabz_r1.heading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tabz_r1.removable);
        }
      }

      var _c1 = ["*"];

      var NgTranscludeDirective = /*#__PURE__*/function () {
        /**
         * @param {?} viewRef
         */
        function NgTranscludeDirective(viewRef) {
          _classCallCheck(this, NgTranscludeDirective);

          this.viewRef = viewRef;
        }
        /**
         * @param {?} templateRef
         * @return {?}
         */


        _createClass(NgTranscludeDirective, [{
          key: "ngTransclude",
          get:
          /* tslint:disable-next-line:no-any */

          /**
           * @return {?}
           */
          function get() {
            return this._ngTransclude;
          },
          set: function set(templateRef) {
            this._ngTransclude = templateRef;

            if (templateRef) {
              this.viewRef.createEmbeddedView(templateRef);
            }
          }
        }]);

        return NgTranscludeDirective;
      }();

      NgTranscludeDirective.ɵfac = function NgTranscludeDirective_Factory(t) {
        return new (t || NgTranscludeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
      };

      NgTranscludeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgTranscludeDirective,
        selectors: [["", "ngTransclude", ""]],
        inputs: {
          ngTransclude: "ngTransclude"
        }
      });
      /** @nocollapse */

      NgTranscludeDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      };

      NgTranscludeDirective.propDecorators = {
        ngTransclude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTranscludeDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[ngTransclude]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }];
        }, {
          ngTransclude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var TabsetConfig = function TabsetConfig() {
        _classCallCheck(this, TabsetConfig);

        /**
         * provides default navigation context class: 'tabs' or 'pills'
         */
        this.type = 'tabs';
        /**
         * provides possibility to set keyNavigations enable or disable, by default is enable
         */

        this.isKeysAllowed = true;
        /**
         * aria label for tab list
         */

        this.ariaLabel = 'Tabs';
      };

      TabsetConfig.ɵfac = function TabsetConfig_Factory(t) {
        return new (t || TabsetConfig)();
      };
      /** @nocollapse */


      TabsetConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function TabsetConfig_Factory() {
          return new TabsetConfig();
        },
        token: TabsetConfig,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsetConfig, [{
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
      // todo: add active event to tab
      // todo: fix? mixing static and dynamic tabs position tabs in order of creation


      var TabsetComponent = /*#__PURE__*/function () {
        /**
         * @param {?} config
         * @param {?} renderer
         * @param {?} elementRef
         */
        function TabsetComponent(config, renderer, elementRef) {
          _classCallCheck(this, TabsetComponent);

          this.renderer = renderer;
          this.elementRef = elementRef;
          this.clazz = true;
          this.tabs = [];
          this.classMap = {};
          Object.assign(this, config);
        }
        /**
         * if true tabs will be placed vertically
         * @return {?}
         */


        _createClass(TabsetComponent, [{
          key: "vertical",
          get: function get() {
            return this._vertical;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._vertical = value;
            this.setClassMap();
          }
          /**
           * if true tabs fill the container and have a consistent width
           * @return {?}
           */

        }, {
          key: "justified",
          get: function get() {
            return this._justified;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._justified = value;
            this.setClassMap();
          }
          /**
           * navigation context class: 'tabs' or 'pills'
           * @return {?}
           */

        }, {
          key: "type",
          get: function get() {
            return this._type;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._type = value;
            this.setClassMap();
          }
          /**
           * @return {?}
           */

        }, {
          key: "isKeysAllowed",
          get: function get() {
            return this._isKeysAllowed;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._isKeysAllowed = value;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.isDestroyed = true;
          }
          /**
           * @param {?} tab
           * @return {?}
           */

        }, {
          key: "addTab",
          value: function addTab(tab) {
            this.tabs.push(tab);
            tab.active = this.tabs.length === 1 && typeof tab.active === 'undefined';
          }
          /**
           * @param {?} tab
           * @param {?=} options
           * @return {?}
           */

        }, {
          key: "removeTab",
          value: function removeTab(tab) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
              reselect: true,
              emit: true
            };

            /** @type {?} */
            var index = this.tabs.indexOf(tab);

            if (index === -1 || this.isDestroyed) {
              return;
            } // Select a new tab if the tab to be removed is selected and not destroyed


            if (options.reselect && tab.active && this.hasAvailableTabs(index)) {
              /** @type {?} */
              var newActiveIndex = this.getClosestTabIndex(index);
              this.tabs[newActiveIndex].active = true;
            }

            if (options.emit) {
              tab.removed.emit(tab);
            }

            this.tabs.splice(index, 1);

            if (tab.elementRef.nativeElement.parentNode) {
              this.renderer.removeChild(tab.elementRef.nativeElement.parentNode, tab.elementRef.nativeElement);
            }
          }
          /* tslint:disable-next-line: cyclomatic-complexity */

          /**
           * @param {?} event
           * @param {?} index
           * @return {?}
           */

        }, {
          key: "keyNavActions",
          value: function keyNavActions(event, index) {
            if (!this.isKeysAllowed) {
              return;
            }
            /** @type {?} */


            var list = Array.from(this.elementRef.nativeElement.querySelectorAll('.nav-link')); // const activeElList = list.filter((el: HTMLElement) => !el.classList.contains('disabled'));
            // tslint:disable-next-line:deprecation

            if (event.keyCode === 13 || event.key === 'Enter' || event.keyCode === 32 || event.key === 'Space') {
              event.preventDefault();
              /** @type {?} */

              var currentTab = list[index % list.length];
              currentTab.click();
              return;
            } // tslint:disable-next-line:deprecation


            if (event.keyCode === 39 || event.key === 'RightArrow') {
              /** @type {?} */
              var nextTab;
              /** @type {?} */

              var shift = 1;

              do {
                nextTab = list[(index + shift) % list.length];
                shift++;
              } while (nextTab.classList.contains('disabled'));

              nextTab.focus();
              return;
            } // tslint:disable-next-line:deprecation


            if (event.keyCode === 37 || event.key === 'LeftArrow') {
              /** @type {?} */
              var previousTab;
              /** @type {?} */

              var _shift = 1;
              /** @type {?} */

              var i = index;

              do {
                if (i - _shift < 0) {
                  i = list.length - 1;
                  previousTab = list[i];
                  _shift = 0;
                } else {
                  previousTab = list[i - _shift];
                }

                _shift++;
              } while (previousTab.classList.contains('disabled'));

              previousTab.focus();
              return;
            } // tslint:disable-next-line:deprecation


            if (event.keyCode === 36 || event.key === 'Home') {
              event.preventDefault();
              /** @type {?} */

              var firstTab;
              /** @type {?} */

              var _shift2 = 0;

              do {
                firstTab = list[_shift2 % list.length];
                _shift2++;
              } while (firstTab.classList.contains('disabled'));

              firstTab.focus();
              return;
            } // tslint:disable-next-line:deprecation


            if (event.keyCode === 35 || event.key === 'End') {
              event.preventDefault();
              /** @type {?} */

              var lastTab;
              /** @type {?} */

              var _shift3 = 1;
              /** @type {?} */

              var _i = index;

              do {
                if (_i - _shift3 < 0) {
                  _i = list.length - 1;
                  lastTab = list[_i];
                  _shift3 = 0;
                } else {
                  lastTab = list[_i - _shift3];
                }

                _shift3++;
              } while (lastTab.classList.contains('disabled'));

              lastTab.focus();
              return;
            } // tslint:disable-next-line:deprecation


            if (event.keyCode === 46 || event.key === 'Delete') {
              if (this.tabs[index].removable) {
                this.removeTab(this.tabs[index]);

                if (list[index + 1]) {
                  list[(index + 1) % list.length].focus();
                  return;
                }

                if (list[list.length - 1]) {
                  list[0].focus();
                }
              }
            }
          }
          /**
           * @protected
           * @param {?} index
           * @return {?}
           */

        }, {
          key: "getClosestTabIndex",
          value: function getClosestTabIndex(index) {
            /** @type {?} */
            var tabsLength = this.tabs.length;

            if (!tabsLength) {
              return -1;
            }

            for (var step = 1; step <= tabsLength; step += 1) {
              /** @type {?} */
              var prevIndex = index - step;
              /** @type {?} */

              var nextIndex = index + step;

              if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
              }

              if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
              }
            }

            return -1;
          }
          /**
           * @protected
           * @param {?} index
           * @return {?}
           */

        }, {
          key: "hasAvailableTabs",
          value: function hasAvailableTabs(index) {
            /** @type {?} */
            var tabsLength = this.tabs.length;

            if (!tabsLength) {
              return false;
            }

            for (var i = 0; i < tabsLength; i += 1) {
              if (!this.tabs[i].disabled && i !== index) {
                return true;
              }
            }

            return false;
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "setClassMap",
          value: function setClassMap() {
            this.classMap = _defineProperty({
              'nav-stacked': this.vertical,
              'flex-column': this.vertical,
              'nav-justified': this.justified
            }, "nav-".concat(this.type), true);
          }
        }]);

        return TabsetComponent;
      }();

      TabsetComponent.ɵfac = function TabsetComponent_Factory(t) {
        return new (t || TabsetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TabsetConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      TabsetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TabsetComponent,
        selectors: [["tabset"]],
        hostVars: 2,
        hostBindings: function TabsetComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tab-container", ctx.clazz);
          }
        },
        inputs: {
          vertical: "vertical",
          justified: "justified",
          type: "type"
        },
        ngContentSelectors: _c1,
        decls: 4,
        vars: 3,
        consts: [["role", "tablist", 1, "nav", 3, "ngClass", "click"], [3, "ngClass", "active", "disabled", "keydown", 4, "ngFor", "ngForOf"], [1, "tab-content"], [3, "ngClass", "keydown"], ["href", "javascript:void(0);", "role", "tab", 1, "nav-link", 3, "click"], [3, "ngTransclude"], ["class", "bs-remove-tab", 3, "click", 4, "ngIf"], [1, "bs-remove-tab", 3, "click"]],
        template: function TabsetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsetComponent_Template_ul_click_0_listener($event) {
              return $event.preventDefault();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabsetComponent_li_1_Template, 5, 17, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classMap);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.ariaLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], NgTranscludeDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["[_nghost-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item.disabled[_ngcontent-%COMP%]   a.disabled[_ngcontent-%COMP%]{cursor:default}"]
      });
      /** @nocollapse */

      TabsetComponent.ctorParameters = function () {
        return [{
          type: TabsetConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      TabsetComponent.propDecorators = {
        vertical: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        justified: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clazz: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.tab-container']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsetComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'tabset',
            template: "<ul class=\"nav\" [ngClass]=\"classMap\"\n    (click)=\"$event.preventDefault()\"\n    [attr.aria-label]=\"ariaLabel\"\n    role=\"tablist\">\n  <li *ngFor=\"let tabz of tabs; let i = index\" [ngClass]=\"['nav-item', tabz.customClass || '']\"\n      [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\" (keydown)=\"keyNavActions($event, i)\">\n    <a href=\"javascript:void(0);\" class=\"nav-link\" role=\"tab\"\n       [attr.aria-controls]=\"tabz.id ? tabz.id : ''\"\n       [attr.aria-selected]=\"!!tabz.active\"\n       [attr.id]=\"tabz.id ? tabz.id + '-link' : ''\"\n       [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"\n       (click)=\"tabz.active = true\">\n      <span [ngTransclude]=\"tabz.headingRef\">{{ tabz.heading }}</span>\n      <span *ngIf=\"tabz.removable\" (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"bs-remove-tab\"> &#10060;</span>\n    </a>\n  </li>\n</ul>\n<div class=\"tab-content\">\n  <ng-content></ng-content>\n</div>\n",
            styles: [":host .nav-tabs .nav-item.disabled a.disabled{cursor:default}"]
          }]
        }], function () {
          return [{
            type: TabsetConfig
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          clazz: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.tab-container']
          }],
          vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          justified: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var TabDirective = /*#__PURE__*/function () {
        /**
         * @param {?} tabset
         * @param {?} elementRef
         * @param {?} renderer
         */
        function TabDirective(tabset, elementRef, renderer) {
          _classCallCheck(this, TabDirective);

          this.elementRef = elementRef;
          this.renderer = renderer;
          /**
           * fired when tab became active, $event:Tab equals to selected instance of Tab component
           */

          this.selectTab = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * fired when tab became inactive, $event:Tab equals to deselected instance of Tab component
           */

          this.deselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * fired before tab will be removed, $event:Tab equals to instance of removed tab
           */

          this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.addClass = true;
          this.role = 'tabpanel';
          this.tabset = tabset;
          this.tabset.addTab(this);
        }
        /**
         * if set, will be added to the tab's class attribute. Multiple classes are supported.
         * @return {?}
         */


        _createClass(TabDirective, [{
          key: "customClass",
          get: function get() {
            return this._customClass;
          }
          /**
           * @param {?} customClass
           * @return {?}
           */
          ,
          set: function set(customClass) {
            var _this = this;

            if (this.customClass) {
              this.customClass.split(' ').forEach(
              /**
              * @param {?} cssClass
              * @return {?}
              */
              function (cssClass) {
                _this.renderer.removeClass(_this.elementRef.nativeElement, cssClass);
              });
            }

            this._customClass = customClass ? customClass.trim() : null;

            if (this.customClass) {
              this.customClass.split(' ').forEach(
              /**
              * @param {?} cssClass
              * @return {?}
              */
              function (cssClass) {
                _this.renderer.addClass(_this.elementRef.nativeElement, cssClass);
              });
            }
          }
          /**
           * tab active state toggle
           * @return {?}
           */

        }, {
          key: "active",
          get: function get() {
            return this._active;
          }
          /**
           * @param {?} active
           * @return {?}
           */
          ,
          set: function set(active) {
            var _this2 = this;

            if (this._active === active) {
              return;
            }

            if (this.disabled && active || !active) {
              if (this._active && !active) {
                this.deselect.emit(this);
                this._active = active;
              }

              return;
            }

            this._active = active;
            this.selectTab.emit(this);
            this.tabset.tabs.forEach(
            /**
            * @param {?} tab
            * @return {?}
            */
            function (tab) {
              if (tab !== _this2) {
                tab.active = false;
              }
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "ariaLabelledby",
          get: function get() {
            return this.id ? "".concat(this.id, "-link") : '';
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.removable = this.removable;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.tabset.removeTab(this, {
              reselect: false,
              emit: false
            });
          }
        }]);

        return TabDirective;
      }();

      TabDirective.ɵfac = function TabDirective_Factory(t) {
        return new (t || TabDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TabsetComponent), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      TabDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: TabDirective,
        selectors: [["tab"], ["", "tab", ""]],
        hostVars: 7,
        hostBindings: function TabDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role)("aria-labelledby", ctx.ariaLabelledby)("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tab-pane", ctx.addClass)("active", ctx.active);
          }
        },
        inputs: {
          customClass: "customClass",
          active: "active",
          removable: "removable",
          heading: "heading",
          id: "id",
          disabled: "disabled"
        },
        outputs: {
          selectTab: "selectTab",
          deselect: "deselect",
          removed: "removed"
        },
        exportAs: ["tab"]
      });
      /** @nocollapse */

      TabDirective.ctorParameters = function () {
        return [{
          type: TabsetComponent
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      };

      TabDirective.propDecorators = {
        heading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.id']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        removable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.active']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectTab: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        deselect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        removed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        addClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.tab-pane']
        }],
        role: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.role']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.aria-labelledby']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'tab, [tab]',
            exportAs: 'tab'
          }]
        }], function () {
          return [{
            type: TabsetComponent
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, {
          selectTab: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          deselect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          removed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          addClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.tab-pane']
          }],
          role: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.role']
          }],
          customClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.active']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.aria-labelledby']
          }],
          removable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          heading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.id']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Should be used to mark <ng-template> element as a template for tab heading
       */


      var TabHeadingDirective =
      /* tslint:disable-next-line:no-any */

      /**
       * @param {?} templateRef
       * @param {?} tab
       */
      function TabHeadingDirective(templateRef, tab) {
        _classCallCheck(this, TabHeadingDirective);

        tab.headingRef = templateRef;
      };

      TabHeadingDirective.ɵfac = function TabHeadingDirective_Factory(t) {
        return new (t || TabHeadingDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TabDirective));
      };

      TabHeadingDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: TabHeadingDirective,
        selectors: [["", "tabHeading", ""]]
      });
      /** @nocollapse */

      TabHeadingDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }, {
          type: TabDirective
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabHeadingDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[tabHeading]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }, {
            type: TabDirective
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var TabsModule = /*#__PURE__*/function () {
        function TabsModule() {
          _classCallCheck(this, TabsModule);
        }

        _createClass(TabsModule, null, [{
          key: "forRoot",
          value:
          /**
           * @return {?}
           */
          function forRoot() {
            return {
              ngModule: TabsModule,
              providers: []
            };
          }
        }]);

        return TabsModule;
      }();

      TabsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TabsModule
      });
      TabsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TabsModule_Factory(t) {
          return new (t || TabsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TabsModule, {
          declarations: function declarations() {
            return [NgTranscludeDirective, TabDirective, TabsetComponent, TabHeadingDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [TabDirective, TabsetComponent, TabHeadingDirective, NgTranscludeDirective];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [NgTranscludeDirective, TabDirective, TabsetComponent, TabHeadingDirective],
            exports: [TabDirective, TabsetComponent, TabHeadingDirective, NgTranscludeDirective]
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
      //# sourceMappingURL=ngx-bootstrap-tabs.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~views-kpcaller-kpcaller-module~views-telecaller-telecaller-module-es5.js.map