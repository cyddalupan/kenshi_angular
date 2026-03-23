(self["webpackChunktoybits_pwa_skeleton"] = self["webpackChunktoybits_pwa_skeleton"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.page */ 6393);
/* harmony import */ var _pages_pages_pages_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/pages/pages.page */ 4841);
/* harmony import */ var _pages_components_components_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/components/components.page */ 243);
/* harmony import */ var _pages_settings_settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/settings/settings.page */ 4797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);







const routes = [{
  path: '',
  component: _pages_home_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
}, {
  path: 'pages',
  component: _pages_pages_pages_page__WEBPACK_IMPORTED_MODULE_1__.PagesPage
}, {
  path: 'components',
  component: _pages_components_components_page__WEBPACK_IMPORTED_MODULE_2__.ComponentsPage
}, {
  path: 'settings',
  component: _pages_settings_settings_page__WEBPACK_IMPORTED_MODULE_3__.SettingsPage
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 7401);


class AppComponent {
  constructor() {
    console.log('AppComponent constructor - SIMPLE VERSION');
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-app");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonRouterOutlet],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 8205);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 7401);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.page */ 6393);
/* harmony import */ var _pages_pages_pages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pages/pages.page */ 4841);
/* harmony import */ var _pages_components_components_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/components/components.page */ 243);
/* harmony import */ var _pages_settings_settings_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/settings/settings.page */ 4797);
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/device.service */ 3560);
/* harmony import */ var _services_pwa_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/pwa.service */ 366);
/* harmony import */ var _services_wisdomvault_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/wisdomvault-api.service */ 830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);

















class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      providers: [_services_device_service__WEBPACK_IMPORTED_MODULE_6__.DeviceService, _services_pwa_service__WEBPACK_IMPORTED_MODULE_7__.PwaService, _services_wisdomvault_api_service__WEBPACK_IMPORTED_MODULE_8__.WisdomVaultApiService, {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouteReuseStrategy,
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicRouteStrategy
      }],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _pages_home_home_page__WEBPACK_IMPORTED_MODULE_2__.HomePage, _pages_pages_pages_page__WEBPACK_IMPORTED_MODULE_3__.PagesPage, _pages_components_components_page__WEBPACK_IMPORTED_MODULE_4__.ComponentsPage, _pages_settings_settings_page__WEBPACK_IMPORTED_MODULE_5__.SettingsPage],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 243:
/*!*****************************************************!*\
  !*** ./src/app/pages/components/components.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentsPage: () => (/* binding */ ComponentsPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 7401);



function ComponentsPage_div_15_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "ion-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Secondary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Tertiary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function ComponentsPage_div_15_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "ion-card")(2, "ion-card-header")(3, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Card Example");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Card Subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " This is an example of an Ionic card component with header and content. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function ComponentsPage_div_15_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "ion-list")(2, "ion-item")(3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Item 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-item")(6, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Item 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-item")(9, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Item 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
}
function ComponentsPage_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "ion-card")(2, "ion-card-header")(3, "ion-card-title", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-card-content")(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ComponentsPage_div_15_div_9_Template, 19, 0, "div", 10)(10, ComponentsPage_div_15_div_10_Template, 9, 0, "div", 10)(11, ComponentsPage_div_15_div_11_Template, 11, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const component_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", component_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", component_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](component_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", component_r1.name === "Buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", component_r1.name === "Cards");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", component_r1.name === "Lists");
  }
}
class ComponentsPage {
  constructor() {
    this.components = [{
      name: 'Buttons',
      icon: 'radio-button-on',
      description: 'Various button styles and states'
    }, {
      name: 'Cards',
      icon: 'card',
      description: 'Card layouts with headers and content'
    }, {
      name: 'Lists',
      icon: 'list',
      description: 'Ionic list components with items'
    }, {
      name: 'Inputs',
      icon: 'create',
      description: 'Form inputs and validation'
    }, {
      name: 'Modals',
      icon: 'albums',
      description: 'Modal dialogs and popups'
    }, {
      name: 'Tabs',
      icon: 'folder',
      description: 'Tab navigation and routing'
    }, {
      name: 'Grid',
      icon: 'grid',
      description: 'Responsive grid system'
    }, {
      name: 'Icons',
      icon: 'star',
      description: 'Ionic icon library'
    }];
  }
  static {
    this.ɵfac = function ComponentsPage_Factory(t) {
      return new (t || ComponentsPage)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ComponentsPage,
      selectors: [["app-components"]],
      decls: 16,
      vars: 1,
      consts: [[2, "--background", "linear-gradient(135deg, #4f46e5, #7c3aed)", "--color", "white"], [2, "font-size", "18px", "font-weight", "600"], ["slot", "end"], ["fill", "clear", 2, "--color", "white"], ["slot", "icon-only", "name", "cube"], [1, "ion-padding"], ["style", "margin-bottom: 16px;", 4, "ngFor", "ngForOf"], [2, "margin-bottom", "16px"], [2, "display", "flex", "align-items", "center", "gap", "8px"], ["color", "primary", 3, "name"], ["style", "margin-top: 16px;", 4, "ngIf"], [2, "margin-top", "16px"], ["color", "primary"], ["color", "secondary"], ["color", "tertiary"], ["color", "success"], ["color", "warning"], ["color", "danger"], ["fill", "outline"], ["fill", "clear"]],
      template: function ComponentsPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-title", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Components");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-buttons", 2)(5, "ion-button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-content", 5)(8, "ion-card")(9, "ion-card-header")(10, "ion-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u2728 Ionic Components");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-card-content")(13, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Explore the available Ionic components for building your app:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ComponentsPage_div_15_Template, 12, 6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.components);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar],
      styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29tcG9uZW50cyBwYWdlIHN0eWxlcyAqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9jb21wb25lbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBQTtBQUNBLGdSQUFnUiIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvbXBvbmVudHMgcGFnZSBzdHlsZXMgKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 6393:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePage: () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _var_www_pwa_toybits_cloud_angular_skeleton_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/device.service */ 3560);
/* harmony import */ var _services_pwa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/pwa.service */ 366);
/* harmony import */ var _services_wisdomvault_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/wisdomvault-api.service */ 830);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7401);








function HomePage_div_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30)(1, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.loginError, " ");
  }
}
function HomePage_div_1_ion_icon_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-icon", 33);
  }
}
function HomePage_div_1_ion_spinner_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-spinner", 34);
  }
}
function HomePage_div_1_div_54_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "p")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\u26A0\uFE0F IMPORTANT: Must use Safari browser");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ol", 43)(5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Open in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Safari");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " (not Chrome)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Tap the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " button ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\u238B");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Scroll down to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\"Add to Home Screen\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Tap ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "\"Add\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " in top right");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Launch from home screen");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "p", 45)(29, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "iOS only allows PWA installation via Safari browser");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function HomePage_div_1_div_54_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "p")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\uD83D\uDCF1 Install on Android (Use Chrome)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ol", 43)(5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Open in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Chrome");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " browser");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Tap the three dots ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\u22EE");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " in top right");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "\"Install app\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "\"Add to Home screen\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Tap ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\"Install\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " to confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Launch from home screen");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function HomePage_div_1_div_54_div_6_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 49)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Note:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Install button appears when browser detects PWA is installable. You can also check browser menu (\u22EE) for \"Install\" option. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function HomePage_div_1_div_54_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "p")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\uD83D\uDCBB Install on Desktop");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ol", 43)(5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Chrome");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Edge");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " for best experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Look for install icon ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\u2B07\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " in address bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Click ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "\"Install\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " button");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Launch from Start Menu or Applications");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, HomePage_div_1_div_54_div_6_div_25_Template, 6, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.canInstall);
  }
}
function HomePage_div_1_div_54_ion_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomePage_div_1_div_54_ion_button_7_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onInstallClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Install Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function HomePage_div_1_div_54_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Follow the instructions above to install via your browser menu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function HomePage_div_1_div_54_ion_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomePage_div_1_div_54_ion_button_9_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onSkipInstall());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Skip for Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function HomePage_div_1_div_54_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Installation skipped. You can install later from browser menu.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function HomePage_div_1_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35)(1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, HomePage_div_1_div_54_div_4_Template, 31, 0, "div", 38)(5, HomePage_div_1_div_54_div_5_Template, 29, 0, "div", 38)(6, HomePage_div_1_div_54_div_6_Template, 26, 1, "div", 38)(7, HomePage_div_1_div_54_ion_button_7_Template, 3, 0, "ion-button", 39)(8, HomePage_div_1_div_54_div_8_Template, 4, 0, "div", 40)(9, HomePage_div_1_div_54_ion_button_9_Template, 2, 0, "ion-button", 41)(10, HomePage_div_1_div_54_div_10_Template, 4, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.installTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.deviceType === "ios");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.deviceType === "android");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.deviceType === "desktop");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.installPromptDismissed && ctx_r1.canInstall);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.installPromptDismissed && (ctx_r1.deviceType === "ios" || ctx_r1.deviceType === "android") && !ctx_r1.canInstall);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.installPromptDismissed);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.installPromptDismissed);
  }
}
function HomePage_div_1_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 58)(1, "h3", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " \u2705 App Installed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 61)(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Great! You're using the installed version.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Launch from your home screen for the best experience. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function HomePage_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " \uD83D\uDD10 Login to ToyBits Admin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Login with your Facebook page credentials to access the admin dashboard. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function HomePage_div_1_Template_form_ngSubmit_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.login(ctx_r1.loginUsername, ctx_r1.loginPassword));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-item", 10)(9, "ion-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function HomePage_div_1_Template_ion_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.loginUsername, $event) || (ctx_r1.loginUsername = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-item", 13)(13, "ion-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ion-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function HomePage_div_1_Template_ion_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.loginPassword, $event) || (ctx_r1.loginPassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-item", 15)(17, "ion-checkbox", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function HomePage_div_1_Template_ion_checkbox_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.rememberMe, $event) || (ctx_r1.rememberMe = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Keep me logged in for 7 days ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, HomePage_div_1_div_21_Template, 4, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "ion-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, HomePage_div_1_ion_icon_23_Template, 1, 0, "ion-icon", 21)(24, HomePage_div_1_ion_spinner_24_Template, 1, 0, "ion-spinner", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 23)(27, "h4", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " Available Pages for Testing: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "ul", 26)(31, "li")(32, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "admin_kenshi");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " - KENSHi chatbot (premium)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "li")(36, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "admin_iprint");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, " - iPrint (gold)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "li")(40, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "admin_masterchili");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, " - MasterChili (gold)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "li")(44, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "admin_philcango");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, " - Philcango (premium)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "li")(48, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "admin_success_agency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, " - Success Agency (premium)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "p", 27)(52, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Use any password for testing (API will validate)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, HomePage_div_1_div_54_Template, 11, 8, "div", 28)(55, HomePage_div_1_div_55_Template, 9, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.loginUsername);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.loginPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.rememberMe);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.loginError);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.loginLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.loginLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.loginLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.loginLoading ? "Logging in..." : "Login", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.showInstallCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.showInstalledMessage);
  }
}
function HomePage_div_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 71)(1, "ion-card")(2, "ion-card-header")(3, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\uD83D\uDCCA Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-card-content")(6, "div", 72)(7, "div", 73)(8, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Facebook Pages");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 73)(13, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Premium Tier");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 73)(18, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Gold Tier");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 73)(23, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Basic Tier");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "ion-card")(28, "ion-card-header")(29, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "\uD83D\uDCF1 Facebook Pages");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "ion-card-content")(32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Manage your connected Facebook pages:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "ion-button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "ion-icon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " View All Pages ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "ion-button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "ion-icon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " Add New Page ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "ion-card")(41, "ion-card-header")(42, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "\uD83D\uDD17 API Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "ion-card-content")(45, "ion-item", 82)(46, "ion-label")(47, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "WisdomVault API");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "https://wisdomvault.welfareph.com/page/api/list/");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "ion-badge", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "ion-button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomePage_div_2_div_14_Template_ion_button_click_53_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.testApi());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "ion-icon", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, " Test Connection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", ctx_r1.apiStatus === "online" ? "success" : "danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.apiStatus, " ");
  }
}
function HomePage_div_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 86)(1, "ion-card")(2, "ion-card-header")(3, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\u2728 Ionic Components");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-card-content")(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Explore the available Ionic components for building your app:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function HomePage_div_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 86)(1, "ion-card")(2, "ion-card-header")(3, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\u26A1 App Features");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-card-content")(6, "ion-item")(7, "ion-label")(8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\uD83C\uDF19 Dark Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Toggle between light and dark themes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-toggle", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function HomePage_div_2_div_16_Template_ion_toggle_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.isDarkMode, $event) || (ctx_r1.isDarkMode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionChange", function HomePage_div_2_div_16_Template_ion_toggle_ionChange_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onThemeToggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.isDarkMode);
  }
}
function HomePage_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 63)(1, "div", 64)(2, "h2", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Tier: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " \u2022 Page ID: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomePage_div_2_Template_ion_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "ion-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, HomePage_div_2_div_14_Template, 56, 2, "div", 69)(15, HomePage_div_2_div_15_Template, 8, 0, "div", 70)(16, HomePage_div_2_div_16_Template, 13, 1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" \uD83D\uDC4B Welcome, ", (ctx_r1.currentPage == null ? null : ctx_r1.currentPage.page_name) || "Admin", "! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx_r1.currentPage == null ? null : ctx_r1.currentPage.tier) || "Unknown");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx_r1.currentPage == null ? null : ctx_r1.currentPage.page_id) || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.currentTab === "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.currentTab === "components");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.currentTab === "settings");
  }
}
function HomePage_ion_tab_bar_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-tab-bar", 88)(1, "ion-tab-button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomePage_ion_tab_bar_3_Template_ion_tab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.switchTab("home"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-icon", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-tab-button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomePage_ion_tab_bar_3_Template_ion_tab_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.switchTab("components"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "ion-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Components");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-tab-button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomePage_ion_tab_bar_3_Template_ion_tab_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.switchTab("settings"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "ion-icon", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selected", ctx_r1.currentTab === "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selected", ctx_r1.currentTab === "components");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selected", ctx_r1.currentTab === "settings");
  }
}
class HomePage {
  constructor(deviceService, pwaService, wisdomVaultApi) {
    this.deviceService = deviceService;
    this.pwaService = pwaService;
    this.wisdomVaultApi = wisdomVaultApi;
    this.deviceType = 'desktop';
    this.deviceName = '';
    this.browserName = '';
    this.isStandalone = false;
    this.isSkipped = false;
    this.canInstall = false;
    this.installInstructions = [];
    this.pagesCount = 0;
    this.apiStatus = 'checking';
    this.platform = '';
    this.hasServiceWorker = false;
    this.hasPushSupport = false;
    this.isDarkMode = false;
    this.installPromptDismissed = false;
    this.installTitle = '📱 Install as Native App';
    this.currentTab = 'home';
    this.notifications = true;
    this.autoSync = true;
    // Components for components tab
    this.components = [{
      name: 'Buttons',
      icon: 'radio-button-on',
      description: 'Various button styles and states'
    }, {
      name: 'Cards',
      icon: 'card',
      description: 'Card layouts with headers and content'
    }, {
      name: 'Lists',
      icon: 'list',
      description: 'Ionic list components with items'
    }, {
      name: 'Inputs',
      icon: 'create',
      description: 'Form inputs and validation'
    }, {
      name: 'Modals',
      icon: 'albums',
      description: 'Modal dialogs and popups'
    }, {
      name: 'Tabs',
      icon: 'folder',
      description: 'Tab navigation and routing'
    }, {
      name: 'Grid',
      icon: 'grid',
      description: 'Responsive grid system'
    }, {
      name: 'Icons',
      icon: 'star',
      description: 'Ionic icon library'
    }];
    // UI state
    this.showInstallCard = true;
    this.showAppFeatures = false;
    this.showInstalledMessage = false;
    // Login state
    this.isLoggedIn = false;
    this.showLoginForm = true;
    this.showNavigation = false;
    this.currentPage = null;
    this.loginError = '';
    this.loginLoading = false;
    this.loginUsername = '';
    this.loginPassword = '';
    this.rememberMe = true; // Default to true for better UX
  }
  ngOnInit() {
    this.initializePage();
    this.loadPagesCount();
  }
  initializePage() {
    // Get device info
    this.deviceType = this.deviceService.getDeviceType();
    this.deviceName = this.deviceService.getDeviceName();
    this.browserName = this.deviceService.getBrowserName();
    this.isStandalone = this.deviceService.getIsStandalone();
    this.isSkipped = this.deviceService.isInstallationSkipped();
    this.canInstall = this.pwaService.canInstall();
    // Set installation title based on device
    if (this.deviceType === 'ios') {
      this.installTitle = '📱 Install on iOS (Use Safari)';
    } else if (this.deviceType === 'android') {
      this.installTitle = '📱 Install on Android (Use Chrome)';
    } else {
      this.installTitle = '💻 Install on Desktop';
    }
    this.installInstructions = this.deviceService.getInstallInstructions();
    // Check if user is already logged in
    this.checkAuthToken();
    // Update UI based on state
    this.updateUIState();
  }
  updateUIState() {
    // Show install card if:
    // 1. User is NOT logged in AND
    // 2. On MOBILE devices (iOS/Android) AND
    // 3. App is NOT already installed (not standalone)
    const isMobile = this.deviceType === 'ios' || this.deviceType === 'android';
    this.showInstallCard = !this.isLoggedIn && isMobile && !this.isStandalone;
    this.showInstalledMessage = this.isStandalone;
    // Get platform info
    this.platform = navigator.platform || 'Unknown';
    this.hasServiceWorker = 'serviceWorker' in navigator;
    this.hasPushSupport = 'PushManager' in window;
    // Check system preference AND saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      this.isDarkMode = true;
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      this.isDarkMode = false;
      document.documentElement.classList.remove("dark");
    } else {
      // Fallback to system preference
      this.isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (this.isDarkMode) {
        document.documentElement.classList.add("dark");
      }
    }
  }
  getDeviceIcon() {
    switch (this.deviceType) {
      case 'ios':
        return 'phone-portrait';
      case 'android':
        return 'logo-android';
      default:
        return 'desktop';
    }
  }
  getInstallButtonText() {
    if (this.deviceType === 'ios') {
      return 'Add to Home Screen';
    } else if (this.deviceType === 'android') {
      return 'Install App';
    } else {
      return 'Install PWA';
    }
  }
  loadPagesCount() {
    // Note: The WisdomVaultApiService might need to be updated to match the actual API
    // For now, we'll set a default value
    this.pagesCount = 0;
    // Uncomment when API is ready:
    // this.wisdomVaultApi.getFacebookPages().subscribe({
    //   next: (pages) => this.pagesCount = pages.length,
    //   error: (error) => console.error('Failed to load pages count:', error)
    // });
  }
  // Test API connection
  testApi() {
    this.apiStatus = 'checking';
    // Note: Update this when API service is ready
    setTimeout(() => {
      this.apiStatus = 'online'; // Simulate successful connection
      alert('API connection successful! (Simulated)');
    }, 1000);
    // Uncomment when API is ready:
    // this.wisdomVaultApi.getFacebookPages().subscribe({
    //   next: () => {
    //     this.apiStatus = 'online';
    //     alert('API connection successful!');
    //   },
    //   error: () => {
    //     this.apiStatus = 'offline';
    //     alert('API connection failed. Please check your connection.');
    //   }
    // });
  }
  // Refresh page
  onRefresh() {
    window.location.reload();
  }
  // Skip installation
  onSkipInstall() {
    this.deviceService.skipInstallation();
    this.installPromptDismissed = true;
    // Don't hide the card, just mark as dismissed
    // Card still shows for reference but install button is hidden
    this.updateUIState();
  }
  // Install app
  onInstallClick() {
    var _this = this;
    return (0,_var_www_pwa_toybits_cloud_angular_skeleton_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const installed = yield _this.pwaService.triggerInstall();
      if (installed) {
        _this.deviceService.markAsInstalled();
        _this.isStandalone = true;
        _this.showInstallCard = false;
        _this.updateUIState();
      }
    })();
  }
  onThemeToggle() {
    this.pwaService.toggleDarkMode();
  }
  onFeatureClick(feature) {
    const messages = {
      notifications: '🔔 Notifications: Get real-time updates for important events',
      offline: '📱 Offline Mode: Access content even without internet',
      sync: '🔄 Sync: Your data is automatically synchronized across devices',
      security: '🔒 Security: End-to-end encryption for your sensitive data',
      settings: '⚙️ Settings: Configure your app preferences'
    };
    alert(messages[feature] || 'Feature demo');
  }
  takeAppTour() {
    alert('Welcome to ToyBits! This is a native-like PWA experience with:\n\n• Native app UI components\n• Offline functionality\n• Push notifications\n• Dark mode support\n• Smooth animations');
  }
  switchTab(tabName) {
    if (tabName === 'settings') {
      // Navigate to the actual SettingsPage component
      window.location.href = '/settings';
      return;
    }
    this.currentTab = tabName;
    // Scroll to top when switching tabs
    const content = document.querySelector('ion-content');
    if (content) {
      content.scrollToTop(300);
    }
  }
  clearCache() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistration().then(registration => {
        if (registration) {
          return caches.delete('angular-ionic-pwa-skeleton-v3-skeleton-icons');
        }
        return undefined;
      }).then(() => {
        alert('Cache cleared. Reloading...');
        window.location.reload();
      }).catch(error => {
        alert('Error clearing cache: ' + error.message);
      });
    }
  }
  // Login methods
  login(username, password) {
    this.loginLoading = true;
    this.loginError = '';
    this.wisdomVaultApi.login(username, password).subscribe({
      next: response => {
        this.loginLoading = false;
        if (response.success && response.page) {
          // Successful login
          this.isLoggedIn = true;
          this.showLoginForm = false;
          this.showNavigation = true;
          this.currentPage = response.page;
          this.loginError = '';
          // Save auth state with expiration
          const authData = {
            token: response.token || '',
            pageId: response.page.id.toString(),
            pageName: response.page.page_name,
            rememberMe: this.rememberMe,
            expiresAt: this.rememberMe ? Date.now() + 7 * 24 * 60 * 60 * 1000 // 7 days
            : Date.now() + 24 * 60 * 60 * 1000 // 24 hours
          };
          localStorage.setItem('toybits_auth_data', JSON.stringify(authData));
          // Update UI
          this.updateUIState();
        } else {
          // Login failed
          this.isLoggedIn = false;
          this.showLoginForm = true;
          this.showNavigation = false;
          this.loginError = response.message || 'Login failed';
        }
      },
      error: error => {
        this.loginLoading = false;
        this.isLoggedIn = false;
        this.showLoginForm = true;
        this.showNavigation = false;
        this.loginError = 'Login failed. Please check your connection.';
        console.error('Login error:', error);
      }
    });
  }
  logout() {
    this.isLoggedIn = false;
    this.showLoginForm = true;
    this.showNavigation = false;
    this.currentPage = null;
    this.loginError = '';
    // Clear auth state
    localStorage.removeItem('toybits_auth_data');
    // Update UI
    this.updateUIState();
  }
  checkAuthToken() {
    const authDataStr = localStorage.getItem('toybits_auth_data');
    if (authDataStr) {
      try {
        const authData = JSON.parse(authDataStr);
        // Check if token has expired
        if (Date.now() > authData.expiresAt) {
          console.log('Auth token expired');
          this.logout();
          return;
        }
        // Try to validate token by getting page info
        this.wisdomVaultApi.getPageById(parseInt(authData.pageId)).subscribe({
          next: page => {
            this.isLoggedIn = true;
            this.showLoginForm = false;
            this.showNavigation = true;
            this.currentPage = page;
            this.rememberMe = authData.rememberMe;
            this.updateUIState();
          },
          error: () => {
            // Token invalid, clear it
            this.logout();
          }
        });
      } catch (error) {
        console.error('Error parsing auth data:', error);
        this.logout();
      }
    }
  }
  static {
    this.ɵfac = function HomePage_Factory(t) {
      return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_device_service__WEBPACK_IMPORTED_MODULE_1__.DeviceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_pwa_service__WEBPACK_IMPORTED_MODULE_2__.PwaService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_wisdomvault_api_service__WEBPACK_IMPORTED_MODULE_3__.WisdomVaultApiService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: HomePage,
      selectors: [["app-home"]],
      decls: 4,
      vars: 3,
      consts: [[1, "ion-padding"], ["class", "tab-content", "data-testid", "login-form", 4, "ngIf"], ["class", "tab-content", "data-testid", "admin-dashboard", 4, "ngIf"], ["slot", "bottom", "data-testid", "navigation-tabs", 4, "ngIf"], ["data-testid", "login-form", 1, "tab-content"], [1, "install-box", 2, "max-width", "400px", "margin", "0 auto"], [2, "margin", "0 0 20px 0", "color", "#1e40af", "display", "flex", "align-items", "center", "gap", "8px"], ["name", "lock-closed"], [2, "margin", "0 0 20px 0", "color", "#4b5563"], [3, "ngSubmit"], [2, "margin-bottom", "16px"], ["position", "floating"], ["type", "text", "name", "username", "required", "", "placeholder", "e.g., admin_kenshi", 3, "ngModelChange", "ngModel"], [2, "margin-bottom", "24px"], ["type", "password", "name", "password", "required", "", "placeholder", "Enter your password", 3, "ngModelChange", "ngModel"], ["lines", "none", 2, "margin-bottom", "16px"], ["slot", "start", "name", "rememberMe", 3, "ngModelChange", "ngModel"], [2, "font-size", "0.9rem", "color", "#4b5563"], ["name", "time", 2, "vertical-align", "middle", "margin-right", "4px"], ["style", "margin-bottom: 16px; padding: 12px; background: #fee2e2; border-radius: 6px; border: 1px solid #fca5a5;", 4, "ngIf"], ["expand", "block", "color", "primary", "type", "submit", 3, "disabled"], ["name", "log-in", "slot", "start", 4, "ngIf"], ["name", "crescent", "slot", "start", 4, "ngIf"], [2, "margin-top", "24px", "padding", "16px", "background", "#f0f9ff", "border-radius", "8px", "border", "1px solid #bae6fd"], [2, "margin", "0 0 8px 0", "color", "#0369a1", "font-size", "0.95rem"], ["name", "information-circle", 2, "vertical-align", "middle"], [2, "margin", "0", "padding-left", "20px", "color", "#4b5563", "font-size", "0.9rem"], [2, "margin", "8px 0 0 0", "color", "#4b5563", "font-size", "0.85rem"], ["class", "install-box", "data-testid", "install-card", 4, "ngIf"], ["class", "install-box", "style", "background: linear-gradient(135deg, #10b981, #059669); color: white;", 4, "ngIf"], [2, "margin-bottom", "16px", "padding", "12px", "background", "#fee2e2", "border-radius", "6px", "border", "1px solid #fca5a5"], [2, "margin", "0", "color", "#dc2626", "font-size", "0.9rem"], ["name", "warning", 2, "vertical-align", "middle", "margin-right", "4px"], ["name", "log-in", "slot", "start"], ["name", "crescent", "slot", "start"], ["data-testid", "install-card", 1, "install-box"], [2, "margin", "0 0 12px 0", "color", "#1e40af", "display", "flex", "align-items", "center", "gap", "8px"], ["name", "download"], [4, "ngIf"], ["expand", "block", "color", "primary", 3, "click", 4, "ngIf"], ["class", "ion-text-center", "style", "margin: 16px 0; padding: 12px; background: #f0f9ff; border-radius: 8px; border: 1px solid #bae6fd;", 4, "ngIf"], ["expand", "block", "fill", "outline", 3, "click", 4, "ngIf"], ["class", "ion-text-center", 4, "ngIf"], [2, "margin", "10px 0", "padding-left", "20px"], [2, "color", "#4f46e5"], [2, "margin-top", "8px", "font-size", "0.9rem", "color", "#1e40af"], ["class", "ion-text-center", "style", "margin: 12px 0; padding: 10px; background: #fef3c7; border-radius: 6px; border: 1px solid #fbbf24;", 4, "ngIf"], [1, "ion-text-center", 2, "margin", "12px 0", "padding", "10px", "background", "#fef3c7", "border-radius", "6px", "border", "1px solid #fbbf24"], ["name", "information-circle", "color", "warning"], [2, "margin", "4px 0 0 0", "color", "#92400e", "font-size", "0.85rem"], ["expand", "block", "color", "primary", 3, "click"], ["name", "download", "slot", "start"], [1, "ion-text-center", 2, "margin", "16px 0", "padding", "12px", "background", "#f0f9ff", "border-radius", "8px", "border", "1px solid #bae6fd"], ["name", "information-circle", "color", "primary"], [2, "margin", "8px 0 0 0", "color", "#0369a1", "font-size", "0.9rem"], ["expand", "block", "fill", "outline", 3, "click"], [1, "ion-text-center"], ["name", "information-circle", "color", "medium"], [1, "install-box", 2, "background", "linear-gradient(135deg, #10b981, #059669)", "color", "white"], [2, "margin", "0 0 12px 0", "display", "flex", "align-items", "center", "gap", "8px"], ["name", "checkmark-circle"], [2, "margin", "0", "font-size", "0.95rem"], [2, "margin", "8px 0 0 0", "font-size", "0.9rem", "opacity", "0.9"], ["data-testid", "admin-dashboard", 1, "tab-content"], [2, "margin-bottom", "24px", "padding", "20px", "background", "linear-gradient(135deg, #4f46e5, #7c3aed)", "border-radius", "12px", "color", "white"], [2, "margin", "0 0 8px 0", "font-size", "1.5rem"], [2, "margin", "0", "opacity", "0.9", "font-size", "0.95rem"], ["fill", "outline", "color", "light", "size", "small", 2, "margin-top", "12px", 3, "click"], ["name", "log-out", "slot", "start"], ["class", "tab-content", "data-testid", "main-navigation", 4, "ngIf"], ["class", "tab-content", 4, "ngIf"], ["data-testid", "main-navigation", 1, "tab-content"], [2, "display", "grid", "grid-template-columns", "repeat(auto-fit, minmax(150px, 1fr))", "gap", "16px"], [2, "text-align", "center", "padding", "16px", "background", "#f0f9ff", "border-radius", "8px"], [2, "font-size", "2rem", "color", "#4f46e5", "margin-bottom", "8px"], [2, "font-size", "2rem", "color", "#10b981", "margin-bottom", "8px"], [2, "font-size", "2rem", "color", "#f59e0b", "margin-bottom", "8px"], [2, "font-size", "2rem", "color", "#ef4444", "margin-bottom", "8px"], ["expand", "block", "color", "primary", 2, "margin-bottom", "16px"], ["name", "logo-facebook", "slot", "start"], ["expand", "block", "fill", "outline", "color", "medium"], ["name", "add-circle", "slot", "start"], ["lines", "none"], ["slot", "end", 3, "color"], ["expand", "block", "fill", "clear", 3, "click"], ["name", "wifi", "slot", "start"], [1, "tab-content"], ["color", "primary", 3, "ngModelChange", "ionChange", "ngModel"], ["slot", "bottom", "data-testid", "navigation-tabs"], ["tab", "home", 2, "--color", "#64748b", "--color-selected", "#4f46e5", 3, "click", "selected"], ["name", "home", 2, "font-size", "24px", "color", "#4f46e5"], ["tab", "components", 2, "--color", "#64748b", "--color-selected", "#4f46e5", 3, "click", "selected"], ["name", "cube", 2, "font-size", "24px", "color", "#4f46e5"], ["tab", "settings", 2, "--color", "#64748b", "--color-selected", "#4f46e5", 3, "click", "selected"], ["name", "settings", 2, "font-size", "24px", "color", "#4f46e5"]],
      template: function HomePage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-content", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HomePage_div_1_Template, 56, 10, "div", 1)(2, HomePage_div_2_Template, 17, 6, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, HomePage_ion_tab_bar_3_Template, 13, 3, "ion-tab-bar", 3);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn && ctx.showLoginForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoggedIn && ctx.showNavigation);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoggedIn && ctx.showNavigation);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTabBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.TextValueAccessor],
      styles: ["\n\n.native-header[_ngcontent-%COMP%] {\n  height: 44px;\n  background: rgba(255, 255, 255, 0.8);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);\n}\n\n.native-tab-bar[_ngcontent-%COMP%] {\n  height: 49px;\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-top: 0.5px solid rgba(0, 0, 0, 0.1);\n  padding-bottom: env(safe-area-inset-bottom);\n}\n\n.native-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n}\n\n.native-button[_ngcontent-%COMP%] {\n  background: #007AFF;\n  color: white;\n  border-radius: 10px;\n  font-weight: 600;\n  transition: all 0.2s;\n  -webkit-tap-highlight-color: rgba(0, 122, 255, 0.3);\n}\n\n.native-button[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n  opacity: 0.9;\n}\n\n\n\n@media (prefers-color-scheme: dark) {\n  .native-header[_ngcontent-%COMP%] {\n    background: rgba(30, 30, 30, 0.8);\n    border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);\n  }\n  .native-tab-bar[_ngcontent-%COMP%] {\n    background: rgba(30, 30, 30, 0.9);\n    border-top: 0.5px solid rgba(255, 255, 255, 0.1);\n  }\n  .native-card[_ngcontent-%COMP%] {\n    background: #1c1c1e;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n  }\n}\n\n\n.glass-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n\n\n@media (display-mode: standalone) {\n  .standalone-padding[_ngcontent-%COMP%] {\n    padding-top: 20px;\n  }\n}\n\n\nion-content[_ngcontent-%COMP%] {\n  --background: transparent;\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\n\nion-footer[_ngcontent-%COMP%] {\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsNkNBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSwwQ0FBQTtFQUNBLDJDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1EQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQSxzQkFBQTtBQUNBO0VBQ0U7SUFDRSxpQ0FBQTtJQUNBLG1EQUFBO0VBQ0Y7RUFFQTtJQUNFLGlDQUFBO0lBQ0EsZ0RBQUE7RUFBRjtFQUdBO0lBQ0UsbUJBQUE7SUFDQSx5Q0FBQTtFQURGO0FBQ0Y7QUFJQSx5QkFBQTtBQUNBO0VBQ0Usb0NBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMENBQUE7QUFGRjs7QUFLQSx1Q0FBQTtBQUNBO0VBQ0U7SUFDRSxpQkFBQTtFQUZGO0FBQ0Y7QUFLQSxvQkFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSx1QkFBQTtBQUhGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTmF0aXZlIGFwcCBzdHlsZXMgKi9cbi5uYXRpdmUtaGVhZGVyIHtcbiAgaGVpZ2h0OiA0NHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLm5hdGl2ZS10YWItYmFyIHtcbiAgaGVpZ2h0OiA0OXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZy1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbn1cblxuLm5hdGl2ZS1jYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLm5hdGl2ZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMDA3QUZGO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMTIyLCAyNTUsIDAuMyk7XG59XG5cbi5uYXRpdmUtYnV0dG9uOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLyogRGFyayBtb2RlIHN1cHBvcnQgKi9cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgLm5hdGl2ZS1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMzAsIDMwLCAzMCwgMC44KTtcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIH1cbiAgXG4gIC5uYXRpdmUtdGFiLWJhciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgzMCwgMzAsIDMwLCAwLjkpO1xuICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgfVxuICBcbiAgLm5hdGl2ZS1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWMxYzFlO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG59XG5cbi8qIEdsYXNzbW9ycGhpc20gZWZmZWN0ICovXG4uZ2xhc3MtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuXG4vKiBIaWRlIGJyb3dzZXIgVUkgaW4gc3RhbmRhbG9uZSBtb2RlICovXG5AbWVkaWEgKGRpc3BsYXktbW9kZTogc3RhbmRhbG9uZSkge1xuICAuc3RhbmRhbG9uZS1wYWRkaW5nIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxufVxuXG4vKiBJb25pYyBvdmVycmlkZXMgKi9cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQkFBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDZDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMENBQUE7RUFDQSwyQ0FBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtREFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUEsc0JBQUE7QUFDQTtFQUNFO0lBQ0UsaUNBQUE7SUFDQSxtREFBQTtFQUNGO0VBRUE7SUFDRSxpQ0FBQTtJQUNBLGdEQUFBO0VBQUY7RUFHQTtJQUNFLG1CQUFBO0lBQ0EseUNBQUE7RUFERjtBQUNGO0FBSUEseUJBQUE7QUFDQTtFQUNFLG9DQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDBDQUFBO0FBRkY7O0FBS0EsdUNBQUE7QUFDQTtFQUNFO0lBQ0UsaUJBQUE7RUFGRjtBQUNGO0FBS0Esb0JBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsdUJBQUE7QUFIRjtBQUNBLHd6R0FBd3pHIiwic291cmNlc0NvbnRlbnQiOlsiLyogTmF0aXZlIGFwcCBzdHlsZXMgKi9cbi5uYXRpdmUtaGVhZGVyIHtcbiAgaGVpZ2h0OiA0NHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLm5hdGl2ZS10YWItYmFyIHtcbiAgaGVpZ2h0OiA0OXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZy1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbn1cblxuLm5hdGl2ZS1jYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLm5hdGl2ZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMDA3QUZGO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMTIyLCAyNTUsIDAuMyk7XG59XG5cbi5uYXRpdmUtYnV0dG9uOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLyogRGFyayBtb2RlIHN1cHBvcnQgKi9cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgLm5hdGl2ZS1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMzAsIDMwLCAzMCwgMC44KTtcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIH1cbiAgXG4gIC5uYXRpdmUtdGFiLWJhciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgzMCwgMzAsIDMwLCAwLjkpO1xuICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgfVxuICBcbiAgLm5hdGl2ZS1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWMxYzFlO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG59XG5cbi8qIEdsYXNzbW9ycGhpc20gZWZmZWN0ICovXG4uZ2xhc3MtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuXG4vKiBIaWRlIGJyb3dzZXIgVUkgaW4gc3RhbmRhbG9uZSBtb2RlICovXG5AbWVkaWEgKGRpc3BsYXktbW9kZTogc3RhbmRhbG9uZSkge1xuICAuc3RhbmRhbG9uZS1wYWRkaW5nIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxufVxuXG4vKiBJb25pYyBvdmVycmlkZXMgKi9cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 4841:
/*!*******************************************!*\
  !*** ./src/app/pages/pages/pages.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagesPage: () => (/* binding */ PagesPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_wisdomvault_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/wisdomvault-api.service */ 830);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 7401);




function PagesPage_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading pages...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function PagesPage_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PagesPage_div_9_Template_ion_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.loadPages());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Retry");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.error);
  }
}
function PagesPage_div_10_ion_item_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item")(1, "ion-label")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const page_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](page_r3.page_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Username: ", page_r3.username, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Tier: ", page_r3.tier, "");
  }
}
function PagesPage_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PagesPage_div_10_ion_item_4_Template, 8, 3, "ion-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total pages: ", ctx_r1.pages.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.pages);
  }
}
class PagesPage {
  constructor(wisdomVaultApi) {
    this.wisdomVaultApi = wisdomVaultApi;
    this.pages = [];
    this.loading = true;
    this.error = null;
  }
  ngOnInit() {
    this.loadPages();
  }
  loadPages() {
    this.loading = true;
    this.error = null;
    this.wisdomVaultApi.getPages().subscribe({
      next: pages => {
        this.pages = pages;
        this.loading = false;
      },
      error: error => {
        this.error = 'Failed to load pages. Please try again.';
        this.loading = false;
        console.error('Error loading pages:', error);
      }
    });
  }
  static {
    this.ɵfac = function PagesPage_Factory(t) {
      return new (t || PagesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_wisdomvault_api_service__WEBPACK_IMPORTED_MODULE_0__.WisdomVaultApiService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PagesPage,
      selectors: [["app-pages"]],
      decls: 11,
      vars: 3,
      consts: [[1, "ion-padding"], [4, "ngIf"], [2, "color", "red"], [3, "click"], [4, "ngFor", "ngForOf"]],
      template: function PagesPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "WisdomVault Pages");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-content")(5, "div", 0)(6, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Facebook Pages from WisdomVault");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PagesPage_div_8_Template, 3, 0, "div", 1)(9, PagesPage_div_9_Template, 5, 1, "div", 1)(10, PagesPage_div_10_Template, 5, 2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 4797:
/*!*************************************************!*\
  !*** ./src/app/pages/settings/settings.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsPage: () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/device.service */ 3560);
/* harmony import */ var _services_pwa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/pwa.service */ 366);
/* harmony import */ var _services_wisdomvault_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/wisdomvault-api.service */ 830);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7401);







function SettingsPage_ion_card_39_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-spinner", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Loading page data...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function SettingsPage_ion_card_39_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27)(1, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.pageError, " ");
  }
}
function SettingsPage_ion_card_39_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30)(1, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Page settings saved successfully! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function SettingsPage_ion_card_39_div_10_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 50)(1, "ion-input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SettingsPage_ion_card_39_div_10_div_28_Template_ion_input_ngModelChange_1_listener($event) {
      const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3).index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r0.editEmails[i_r4], $event) || (ctx_r0.editEmails[i_r4] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SettingsPage_ion_card_39_div_10_div_28_Template_ion_button_click_2_listener() {
      const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3).index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.removeEmailField(i_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.editEmails[i_r4]);
  }
}
function SettingsPage_ion_card_39_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "ion-list", 6)(2, "ion-item")(3, "ion-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Page Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SettingsPage_ion_card_39_div_10_Template_ion_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r0.editPageName, $event) || (ctx_r0.editPageName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-item")(7, "ion-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Tier");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SettingsPage_ion_card_39_div_10_Template_ion_select_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r0.editTier, $event) || (ctx_r0.editTier = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-select-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Basic");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-select-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Gold");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-select-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Premium");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-item")(17, "ion-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Description (Info)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ion-textarea", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SettingsPage_ion_card_39_div_10_Template_ion_textarea_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r0.editInfo, $event) || (ctx_r0.editInfo = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ion-item")(21, "ion-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Additional Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ion-textarea", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SettingsPage_ion_card_39_div_10_Template_ion_textarea_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r0.editAdditionalInfo, $event) || (ctx_r0.editAdditionalInfo = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ion-item")(25, "ion-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Email Addresses");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, SettingsPage_ion_card_39_div_10_div_28_Template, 4, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "ion-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SettingsPage_ion_card_39_div_10_Template_ion_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.addEmailField());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "ion-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " Add Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "ion-item")(33, "ion-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Features");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 41)(36, "ion-item", 6)(37, "ion-toggle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SettingsPage_ion_card_39_div_10_Template_ion_toggle_ngModelChange_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r0.editFeatures.inventory, $event) || (ctx_r0.editFeatures.inventory = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " Inventory Management ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "ion-item", 6)(40, "ion-toggle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SettingsPage_ion_card_39_div_10_Template_ion_toggle_ngModelChange_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r0.editFeatures.pos, $event) || (ctx_r0.editFeatures.pos = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, " Point of Sale (POS) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "ion-item", 6)(43, "ion-toggle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SettingsPage_ion_card_39_div_10_Template_ion_toggle_ngModelChange_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r0.editFeatures.leads, $event) || (ctx_r0.editFeatures.leads = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, " Lead Generation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "ion-item", 6)(46, "ion-toggle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SettingsPage_ion_card_39_div_10_Template_ion_toggle_ngModelChange_46_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r0.editFeatures.online_selling, $event) || (ctx_r0.editFeatures.online_selling = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, " Online Selling ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "ion-item", 6)(49, "ion-toggle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SettingsPage_ion_card_39_div_10_Template_ion_toggle_ngModelChange_49_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r0.editFeatures.scheduling, $event) || (ctx_r0.editFeatures.scheduling = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, " Appointment Scheduling ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "ion-item")(52, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Page ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "ion-note", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "ion-item")(57, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "ion-note", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "ion-item")(62, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Database ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "ion-note", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 45)(67, "ion-button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SettingsPage_ion_card_39_div_10_Template_ion_button_click_67_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.savePageSettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "ion-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "ion-button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SettingsPage_ion_card_39_div_10_Template_ion_button_click_70_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.resetForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, " Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.editPageName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.editTier);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.editInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.editAdditionalInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.editEmails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.editFeatures.inventory);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.editFeatures.pos);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.editFeatures.leads);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.editFeatures.online_selling);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.editFeatures.scheduling);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.currentPage.page_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.currentPage.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.currentPage.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r0.pageLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.pageLoading ? "Saving..." : "Save Changes", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r0.pageLoading);
  }
}
function SettingsPage_ion_card_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-card")(1, "ion-card-header")(2, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\uD83D\uDCC4 Page Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SettingsPage_ion_card_39_div_7_Template, 4, 0, "div", 21)(8, SettingsPage_ion_card_39_div_8_Template, 4, 1, "div", 22)(9, SettingsPage_ion_card_39_div_9_Template, 4, 0, "div", 23)(10, SettingsPage_ion_card_39_div_10_Template, 73, 16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.currentPage.page_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.pageLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.pageError && !ctx_r0.pageLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.pageSaved);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.pageLoading && !ctx_r0.pageError);
  }
}
function SettingsPage_ion_card_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-card")(1, "ion-card-header")(2, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\uD83D\uDCC4 Page Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-card-content")(5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "ion-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "No page data available");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Please login to view and edit page settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
}
function SettingsPage_ion_icon_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-icon", 56);
  }
}
function SettingsPage_ion_icon_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-icon", 57);
  }
}
class SettingsPage {
  constructor(deviceService, pwaService, wisdomVaultApi) {
    this.deviceService = deviceService;
    this.pwaService = pwaService;
    this.wisdomVaultApi = wisdomVaultApi;
    this.darkMode = false;
    this.notifications = true;
    this.autoSync = true;
    this.cacheSize = '2.4 MB';
    this.version = '1.0.0';
    // Device detection debug properties
    this.deviceType = 'unknown';
    this.browserName = 'unknown';
    this.isStandalone = false;
    this.isSkipped = false;
    this.canInstall = false;
    this.showInstallCard = false;
    this.userAgent = '';
    this.deviceDetectionStatus = 'Not initialized';
    this.shouldShowInstallInstructions = 'Unknown';
    this.debugTimestamp = '';
    // Page settings properties
    this.currentPage = null;
    this.pageLoading = false;
    this.pageError = '';
    this.pageSaved = false;
    // Form properties for editing
    this.editPageName = '';
    this.editInfo = '';
    this.editAdditionalInfo = '';
    this.editTier = 'basic';
    this.editEmails = [''];
    this.editFeatures = {
      inventory: false,
      pos: false,
      leads: false,
      online_selling: false,
      scheduling: false
    };
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.darkMode = true;
    }
  }
  ngOnInit() {
    this.updateDebugInfo();
    this.loadPageData();
  }
  loadPageData() {
    const authDataStr = localStorage.getItem('toybits_auth_data');
    if (authDataStr) {
      try {
        const authData = JSON.parse(authDataStr);
        const pageId = parseInt(authData.pageId);
        this.pageLoading = true;
        this.pageError = '';
        this.wisdomVaultApi.getPageById(pageId).subscribe({
          next: page => {
            this.currentPage = page;
            this.populateFormFromPage(page);
            this.pageLoading = false;
          },
          error: error => {
            console.error('Error loading page data:', error);
            this.pageError = 'Failed to load page data. Please try again.';
            this.pageLoading = false;
          }
        });
      } catch (error) {
        console.error('Error parsing auth data:', error);
        this.pageError = 'Invalid authentication data. Please login again.';
        this.pageLoading = false;
      }
    } else {
      this.pageError = 'No page data available. Please login first.';
    }
  }
  populateFormFromPage(page) {
    this.editPageName = page.page_name;
    this.editInfo = page.info || '';
    this.editAdditionalInfo = page.additional_info || '';
    this.editTier = page.tier;
    this.editEmails = page.emails.length > 0 ? [...page.emails] : [''];
    this.editFeatures = {
      ...page.features
    };
  }
  addEmailField() {
    this.editEmails.push('');
  }
  removeEmailField(index) {
    if (this.editEmails.length > 1) {
      this.editEmails.splice(index, 1);
    } else {
      this.editEmails[index] = '';
    }
  }
  savePageSettings() {
    if (!this.currentPage) return;
    this.pageLoading = true;
    this.pageError = '';
    this.pageSaved = false;
    // In a real implementation, this would call an update API endpoint
    // For now, we'll simulate saving and update the local data
    const updatedPage = {
      ...this.currentPage,
      page_name: this.editPageName,
      info: this.editInfo || null,
      additional_info: this.editAdditionalInfo || null,
      tier: this.editTier,
      emails: this.editEmails.filter(email => email.trim() !== ''),
      features: {
        ...this.editFeatures
      }
    };
    // Simulate API call delay
    setTimeout(() => {
      this.currentPage = updatedPage;
      this.pageLoading = false;
      this.pageSaved = true;
      // Show success message for 3 seconds
      setTimeout(() => {
        this.pageSaved = false;
      }, 3000);
      console.log('Page settings saved:', updatedPage);
    }, 1000);
  }
  resetForm() {
    if (this.currentPage) {
      this.populateFormFromPage(this.currentPage);
    }
  }
  updateDebugInfo() {
    // Get device information
    this.deviceType = this.deviceService.getDeviceType();
    this.browserName = this.deviceService.getBrowserName();
    this.isStandalone = this.deviceService.getIsStandalone();
    // Get PWA installation status
    this.canInstall = this.pwaService.canInstall();
    // Check if user skipped installation
    const skipped = localStorage.getItem('toybits_skipped');
    this.isSkipped = skipped === 'true';
    // Determine if install card should show
    const isMobile = this.deviceType === 'ios' || this.deviceType === 'android';
    this.showInstallCard = isMobile;
    // User agent
    this.userAgent = navigator.userAgent || 'Unknown';
    // Debug status
    this.deviceDetectionStatus = this.deviceType !== 'desktop' ? 'Working' : 'May be desktop or detection failed';
    // Should show install instructions?
    this.shouldShowInstallInstructions = isMobile ? 'YES (Mobile device)' : 'NO (Desktop or detection failed)';
    // Timestamp
    this.debugTimestamp = new Date().toLocaleTimeString();
    console.log('DEBUG - Device Detection Results:');
    console.log('  deviceType:', this.deviceType);
    console.log('  browserName:', this.browserName);
    console.log('  isStandalone:', this.isStandalone);
    console.log('  isSkipped:', this.isSkipped);
    console.log('  canInstall:', this.canInstall);
    console.log('  showInstallCard:', this.showInstallCard);
    console.log('  isMobile:', isMobile);
    console.log('  User Agent:', this.userAgent);
  }
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark', this.darkMode);
  }
  clearCache() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistration().then(registration => {
        if (registration) {
          return caches.delete('angular-ionic-pwa-skeleton-v3-skeleton-icons');
        }
        return undefined;
      }).then(() => {
        alert('Cache cleared. Reloading...');
        window.location.reload();
      }).catch(error => {
        alert('Error clearing cache: ' + error.message);
      });
    }
  }
  static {
    this.ɵfac = function SettingsPage_Factory(t) {
      return new (t || SettingsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_device_service__WEBPACK_IMPORTED_MODULE_0__.DeviceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_pwa_service__WEBPACK_IMPORTED_MODULE_1__.PwaService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_wisdomvault_api_service__WEBPACK_IMPORTED_MODULE_2__.WisdomVaultApiService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: SettingsPage,
      selectors: [["app-settings"]],
      decls: 144,
      vars: 20,
      consts: [[2, "--background", "linear-gradient(135deg, #4f46e5, #7c3aed)", "--color", "white"], [2, "font-size", "18px", "font-weight", "600"], ["slot", "end"], ["fill", "clear", 2, "--color", "white"], ["slot", "icon-only", "name", "settings"], [1, "ion-padding"], ["lines", "none"], ["slot", "end", "id", "settings-sw-status"], ["slot", "end", "id", "settings-pwa-status"], [4, "ngIf"], ["slot", "end", 2, "font-size", "0.8rem", "max-width", "150px", "overflow", "hidden", "text-overflow", "ellipsis"], [2, "margin-top", "16px", "padding", "12px", "background", "#f1f5f9", "border-radius", "8px", "font-size", "0.9rem"], [2, "margin", "4px 0"], ["slot", "start", 3, "ngModelChange", "ionChange", "ngModel"], ["name", "moon", "slot", "end", 4, "ngIf"], ["name", "sunny", "slot", "end", 4, "ngIf"], ["slot", "start", 3, "ngModelChange", "ngModel"], ["expand", "block", "color", "warning", 3, "click"], ["name", "trash", "slot", "start"], [2, "margin-top", "12px", "font-size", "0.9rem", "color", "#64748b"], [2, "margin", "8px 0", "padding-left", "20px"], ["style", "text-align: center; padding: 20px;", 4, "ngIf"], ["style", "padding: 12px; background: #fee2e2; border-radius: 6px; border: 1px solid #fca5a5; margin-bottom: 16px;", 4, "ngIf"], ["style", "padding: 12px; background: #dcfce7; border-radius: 6px; border: 1px solid #86efac; margin-bottom: 16px;", 4, "ngIf"], [2, "text-align", "center", "padding", "20px"], ["name", "crescent"], [2, "margin-top", "12px", "color", "#64748b"], [2, "padding", "12px", "background", "#fee2e2", "border-radius", "6px", "border", "1px solid #fca5a5", "margin-bottom", "16px"], [2, "margin", "0", "color", "#dc2626", "font-size", "0.9rem"], ["name", "warning", 2, "vertical-align", "middle", "margin-right", "4px"], [2, "padding", "12px", "background", "#dcfce7", "border-radius", "6px", "border", "1px solid #86efac", "margin-bottom", "16px"], [2, "margin", "0", "color", "#16a34a", "font-size", "0.9rem"], ["name", "checkmark-circle", 2, "vertical-align", "middle", "margin-right", "4px"], ["position", "stacked"], ["placeholder", "Enter page name", 3, "ngModelChange", "ngModel"], ["interface", "popover", 3, "ngModelChange", "ngModel"], ["value", "basic"], ["value", "gold"], ["value", "premium"], ["placeholder", "Enter page description", "rows", "4", "autoGrow", "true", 3, "ngModelChange", "ngModel"], ["placeholder", "Enter additional information", "rows", "3", "autoGrow", "true", 3, "ngModelChange", "ngModel"], [2, "width", "100%"], ["style", "display: flex; align-items: center; margin-bottom: 8px;", 4, "ngFor", "ngForOf"], ["fill", "clear", "size", "small", "color", "primary", 3, "click"], ["name", "add", "slot", "start"], [2, "display", "flex", "gap", "12px", "margin-top", "20px"], ["expand", "block", "color", "primary", 3, "click", "disabled"], ["name", "save", "slot", "start"], ["expand", "block", "color", "medium", "fill", "outline", 3, "click", "disabled"], ["name", "refresh", "slot", "start"], [2, "display", "flex", "align-items", "center", "margin-bottom", "8px"], ["placeholder", "email@example.com", 2, "flex", "1", "margin-right", "8px", 3, "ngModelChange", "ngModel"], ["fill", "clear", "color", "medium", "size", "small", 3, "click"], ["name", "close", "slot", "icon-only"], ["name", "document-text", 2, "font-size", "48px", "color", "#94a3b8"], [2, "font-size", "0.9rem", "color", "#94a3b8"], ["name", "moon", "slot", "end"], ["name", "sunny", "slot", "end"]],
      template: function SettingsPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-title", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-buttons", 2)(5, "ion-button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "ion-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-content", 5)(8, "ion-card")(9, "ion-card-header")(10, "ion-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\u2699\uFE0F App Information");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-card-content")(13, "ion-list", 6)(14, "ion-item")(15, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "App Version");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-note", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ion-item")(20, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Build Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ion-note", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "2026-03-20");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ion-item")(25, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Cache Size");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "ion-note", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "ion-item")(30, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Service Worker");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "ion-note", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Checking...");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "ion-item")(35, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "PWA Mode");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "ion-note", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Checking...");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, SettingsPage_ion_card_39_Template, 11, 5, "ion-card", 9)(40, SettingsPage_ion_card_40_Template, 11, 0, "ion-card", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "ion-card")(42, "ion-card-header")(43, "ion-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "\uD83D\uDCF1 Device Detection");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "ion-card-content")(46, "ion-list", 6)(47, "ion-item")(48, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Device Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "ion-note", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "ion-item")(53, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Browser");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "ion-note", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "ion-item")(58, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "PWA Installed");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "ion-note", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "ion-item")(63, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Install Skipped");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "ion-note", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "ion-item")(68, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Can Install");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "ion-note", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "ion-item")(73, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Show Install Card");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "ion-note", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "ion-item")(78, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "User Agent");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "ion-note", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 11)(83, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "Debug Info:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "ion-card")(92, "ion-card-header")(93, "ion-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "\uD83C\uDFA8 Theme");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "ion-card-content")(96, "ion-item")(97, "ion-toggle", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SettingsPage_Template_ion_toggle_ngModelChange_97_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.darkMode, $event) || (ctx.darkMode = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionChange", function SettingsPage_Template_ion_toggle_ionChange_97_listener() {
            return ctx.toggleDarkMode();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, " Dark Mode ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](99, SettingsPage_ion_icon_99_Template, 1, 0, "ion-icon", 14)(100, SettingsPage_ion_icon_100_Template, 1, 0, "ion-icon", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "ion-item")(102, "ion-toggle", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SettingsPage_Template_ion_toggle_ngModelChange_102_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.notifications, $event) || (ctx.notifications = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, " Push Notifications ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "ion-item")(105, "ion-toggle", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SettingsPage_Template_ion_toggle_ngModelChange_105_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.autoSync, $event) || (ctx.autoSync = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, " Auto Sync ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "ion-card")(108, "ion-card-header")(109, "ion-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "\uD83D\uDDD1\uFE0F Cache");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "ion-card-content")(112, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "Clear cached data to free up storage or fix issues:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "ion-button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SettingsPage_Template_ion_button_click_114_listener() {
            return ctx.clearCache();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](115, "ion-icon", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "p", 19)(118, "em");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "Note: Clearing cache will reload the app");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "ion-card")(121, "ion-card-header")(122, "ion-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "\uD83D\uDD17 About");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "ion-card-content")(125, "p")(126, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, "ToyBits PWA");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, " - Business Automation Progressive Web App");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "Built with Angular 17 and Ionic 7");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, "Features:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "ul", 20)(134, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "Native app experience");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "Offline functionality");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, "Push notifications");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141, "Dark mode support");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, "Tab navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.version);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.cacheSize);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentPage);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.currentPage && !ctx.pageLoading && ctx.pageError);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.deviceType);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.browserName);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.isStandalone ? "Yes" : "No");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.isSkipped ? "Yes" : "No");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.canInstall ? "Yes" : "No");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.showInstallCard ? "Yes" : "No");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.userAgent, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Device detection: ", ctx.deviceDetectionStatus, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Install instructions should show: ", ctx.shouldShowInstallInstructions, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Last updated: ", ctx.debugTimestamp, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.darkMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.darkMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.darkMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.notifications);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.autoSync);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Clear Cache (", ctx.cacheSize, ") ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.TextValueAccessor],
      styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBQSIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZXR0aW5ncyBwYWdlIHN0eWxlcyAqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUFBO0FBQ0Esd1FBQXdRIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2V0dGluZ3MgcGFnZSBzdHlsZXMgKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 3560:
/*!********************************************!*\
  !*** ./src/app/services/device.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeviceService: () => (/* binding */ DeviceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class DeviceService {
  constructor() {
    this.deviceType = 'desktop';
    this.browserType = 'other';
    this.isStandalone = false;
    this.detectDevice();
  }
  detectDevice() {
    this.detectDeviceType();
    this.detectBrowser();
    this.checkStandalone();
  }
  detectDeviceType() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // iOS detection
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      this.deviceType = 'ios';
      return;
    }
    // Android detection
    if (/android/i.test(userAgent)) {
      this.deviceType = 'android';
      return;
    }
    // Default to desktop
    this.deviceType = 'desktop';
  }
  detectBrowser() {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) {
      this.browserType = 'chrome';
    } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
      this.browserType = 'safari';
    } else if (userAgent.includes('Firefox')) {
      this.browserType = 'firefox';
    } else if (userAgent.includes('Edg')) {
      this.browserType = 'edge';
    } else {
      this.browserType = 'other';
    }
  }
  checkStandalone() {
    // Check if app is running in standalone mode
    this.isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
    // Check localStorage for installation status
    const isInstalled = localStorage.getItem('toybits_installed') === 'true';
    this.isStandalone = this.isStandalone || isInstalled;
  }
  getDeviceType() {
    return this.deviceType;
  }
  getBrowserType() {
    return this.browserType;
  }
  getIsStandalone() {
    return this.isStandalone;
  }
  getDeviceName() {
    switch (this.deviceType) {
      case 'ios':
        return 'iPhone/iPad';
      case 'android':
        return 'Android';
      default:
        return 'Desktop';
    }
  }
  getBrowserName() {
    switch (this.browserType) {
      case 'chrome':
        return 'Chrome';
      case 'safari':
        return 'Safari';
      case 'firefox':
        return 'Firefox';
      case 'edge':
        return 'Edge';
      default:
        return 'Browser';
    }
  }
  getInstallInstructions() {
    const instructions = [];
    switch (this.deviceType) {
      case 'ios':
        instructions.push('Open in Safari browser');
        instructions.push('Tap the Share button ⎋ at the bottom');
        instructions.push('Scroll and tap "Add to Home Screen"');
        instructions.push('Tap "Add" to install');
        break;
      case 'android':
        instructions.push('Open in Chrome browser');
        instructions.push('Tap the three dots ⋮ in top right');
        instructions.push('Select "Install app" or "Add to Home screen"');
        instructions.push('Tap "Install" to confirm');
        break;
      case 'desktop':
        instructions.push('Use Chrome or Edge for best experience');
        instructions.push('Look for install icon ⬇️ in address bar');
        instructions.push('Click "Install" button');
        instructions.push('Launch from Start Menu or Applications');
        break;
    }
    return instructions;
  }
  markAsInstalled() {
    localStorage.setItem('toybits_installed', 'true');
    this.isStandalone = true;
  }
  skipInstallation() {
    localStorage.setItem('toybits_skipped', 'true');
  }
  isInstallationSkipped() {
    return localStorage.getItem('toybits_skipped') === 'true';
  }
  static {
    this.ɵfac = function DeviceService_Factory(t) {
      return new (t || DeviceService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DeviceService,
      factory: DeviceService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 366:
/*!*****************************************!*\
  !*** ./src/app/services/pwa.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PwaService: () => (/* binding */ PwaService)
/* harmony export */ });
/* harmony import */ var _var_www_pwa_toybits_cloud_angular_skeleton_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class PwaService {
  constructor() {
    this.deferredPrompt = null;
    this.isOnline = true;
  }
  initialize() {
    this.setupEventListeners();
    this.checkOnlineStatus();
  }
  setupEventListeners() {
    // Before install prompt
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      this.deferredPrompt = e;
    });
    // App installed
    window.addEventListener('appinstalled', () => {
      console.log('PWA installed successfully');
      this.deferredPrompt = null;
    });
    // Online/offline status
    window.addEventListener('online', () => {
      this.isOnline = true;
      console.log('App is online');
    });
    window.addEventListener('offline', () => {
      this.isOnline = false;
      console.log('App is offline');
    });
    // Prevent pull-to-refresh on mobile
    this.preventPullToRefresh();
  }
  checkOnlineStatus() {
    this.isOnline = navigator.onLine;
  }
  preventPullToRefresh() {
    // Prevent pull-to-refresh on mobile
    let startY;
    document.addEventListener('touchstart', e => {
      startY = e.touches[0].clientY;
    }, {
      passive: true
    });
    document.addEventListener('touchmove', e => {
      const y = e.touches[0].clientY;
      // If pulling down from top, prevent default
      if (startY < 50 && y > startY) {
        e.preventDefault();
      }
    }, {
      passive: false
    });
  }
  canInstall() {
    return !!this.deferredPrompt;
  }
  triggerInstall() {
    var _this = this;
    return (0,_var_www_pwa_toybits_cloud_angular_skeleton_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.deferredPrompt) {
        return false;
      }
      try {
        _this.deferredPrompt.prompt();
        const choiceResult = yield _this.deferredPrompt.userChoice;
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted install');
          return true;
        } else {
          console.log('User dismissed install');
          return false;
        }
      } catch (error) {
        console.error('Install error:', error);
        return false;
      } finally {
        _this.deferredPrompt = null;
      }
    })();
  }
  isOnlineStatus() {
    return this.isOnline;
  }
  requestNotificationPermission() {
    if (!('Notification' in window)) {
      return Promise.resolve('denied');
    }
    if (Notification.permission === 'granted') {
      return Promise.resolve('granted');
    }
    if (Notification.permission === 'denied') {
      return Promise.resolve('denied');
    }
    return Notification.requestPermission();
  }
  showNotification(title, options) {
    if (!('Notification' in window) || Notification.permission !== 'granted') {
      return;
    }
    const notificationOptions = {
      icon: '/assets/icons/icon-192x192.png',
      badge: '/assets/icons/icon-192x192.png',
      vibrate: [100, 50, 100],
      ...options
    };
    new Notification(title, notificationOptions);
  }
  toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
  getCurrentTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }
    return 'system';
  }
  static {
    this.ɵfac = function PwaService_Factory(t) {
      return new (t || PwaService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PwaService,
      factory: PwaService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 830:
/*!*****************************************************!*\
  !*** ./src/app/services/wisdomvault-api.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WisdomVaultApiService: () => (/* binding */ WisdomVaultApiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);




class WisdomVaultApiService {
  constructor(http) {
    this.http = http;
    this.BASE_URL = 'https://wisdomvault.welfareph.com';
  }
  /**
   * Get all Facebook pages from WisdomVault
   */
  getPages() {
    const url = `${this.BASE_URL}/page/api/list/`;
    return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(response => {
      if (response.success) {
        return response.pages;
      } else {
        throw new Error('Failed to fetch pages');
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('Error fetching pages:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => new Error('Failed to fetch pages from WisdomVault API'));
    }));
  }
  /**
   * Login to a Facebook page
   */
  login(username, password) {
    const url = `${this.BASE_URL}/page/login/api/`;
    const body = {
      username,
      password
    };
    return this.http.post(url, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('Login error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => new Error('Login failed'));
    }));
  }
  /**
   * Get page by ID
   */
  getPageById(pageId) {
    return this.getPages().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(pages => {
      const page = pages.find(p => p.id === pageId);
      if (!page) {
        throw new Error(`Page with ID ${pageId} not found`);
      }
      return page;
    }));
  }
  /**
   * Get pages by tier
   */
  getPagesByTier(tier) {
    return this.getPages().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(pages => pages.filter(page => page.tier === tier)));
  }
  /**
   * Get pages with specific feature enabled
   */
  getPagesWithFeature(feature) {
    return this.getPages().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(pages => pages.filter(page => page.features[feature])));
  }
  /**
   * Search pages by name
   */
  searchPages(query) {
    return this.getPages().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(pages => pages.filter(page => page.page_name.toLowerCase().includes(query.toLowerCase()) || page.username.toLowerCase().includes(query.toLowerCase()))));
  }
  /**
   * Get page statistics
   */
  getPageStats() {
    return this.getPages().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(pages => {
      const byTier = {
        basic: 0,
        gold: 0,
        premium: 0
      };
      const byFeature = {
        inventory: 0,
        pos: 0,
        leads: 0,
        online_selling: 0,
        scheduling: 0
      };
      pages.forEach(page => {
        // Count by tier
        byTier[page.tier]++;
        // Count by feature
        Object.keys(page.features).forEach(feature => {
          const key = feature;
          if (page.features[key]) {
            byFeature[key]++;
          }
        });
      });
      return {
        total: pages.length,
        byTier,
        byFeature
      };
    }));
  }
  static {
    this.ɵfac = function WisdomVaultApiService_Factory(t) {
      return new (t || WisdomVaultApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: WisdomVaultApiService,
      factory: WisdomVaultApiService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 8996:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		7518,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		1981,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		1603,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		2273,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		9642,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4476,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		2335,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8221,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		7184,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		8759,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4248,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		9863,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		1769,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		2569,
		"default-node_modules_ionic_core_dist_esm_data-bb424ba8_js",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		6534,
		"default-node_modules_ionic_core_dist_esm_data-bb424ba8_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		5458,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		654,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		6034,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		761,
		"default-node_modules_ionic_core_dist_esm_form-controller-21dd62b1_js-node_modules_ionic_core_-a176d1",
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		6492,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		9557,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		8353,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		1024,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		9160,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		393,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		3970,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		437,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		6772,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4810,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		4639,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		628,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		852,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1479,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4065,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		7971,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		3184,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		469,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8471,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-spinner.entry.js": [
		388,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		2392,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		6059,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		5427,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		198,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		1735,
		"default-node_modules_ionic_core_dist_esm_form-controller-21dd62b1_js-node_modules_ionic_core_-a176d1",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		7510,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5297,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 8996;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 4140:
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ strict namespace object ***!
  \************************************************************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 4140;
module.exports = webpackEmptyAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map