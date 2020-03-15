(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["glosario-glosario-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/glosario/glosario.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/glosario/glosario.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>glosario</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  \n</ion-header>\n<ion-searchbar (ionChange)=\"buscar($event)\" ></ion-searchbar>\n<ion-content>\n  <ion-list>\n    <ion-item (click)=\"goToDetailPage(definicion.palabra)\" *ngFor=\"let definicion of definiciones | filtro: textoBuscar\">\n      <ion-label>\n        {{definicion.palabra}}\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/glosario/glosario-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/glosario/glosario-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: GlosarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlosarioPageRoutingModule", function() { return GlosarioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _glosario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glosario.page */ "./src/app/glosario/glosario.page.ts");




const routes = [
    {
        path: '',
        component: _glosario_page__WEBPACK_IMPORTED_MODULE_3__["GlosarioPage"]
    }
];
let GlosarioPageRoutingModule = class GlosarioPageRoutingModule {
};
GlosarioPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GlosarioPageRoutingModule);



/***/ }),

/***/ "./src/app/glosario/glosario.module.ts":
/*!*********************************************!*\
  !*** ./src/app/glosario/glosario.module.ts ***!
  \*********************************************/
/*! exports provided: GlosarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlosarioPageModule", function() { return GlosarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _glosario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./glosario-routing.module */ "./src/app/glosario/glosario-routing.module.ts");
/* harmony import */ var _glosario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./glosario.page */ "./src/app/glosario/glosario.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








let GlosarioPageModule = class GlosarioPageModule {
};
GlosarioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _glosario_routing_module__WEBPACK_IMPORTED_MODULE_5__["GlosarioPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_glosario_page__WEBPACK_IMPORTED_MODULE_6__["GlosarioPage"]]
    })
], GlosarioPageModule);



/***/ }),

/***/ "./src/app/glosario/glosario.page.scss":
/*!*********************************************!*\
  !*** ./src/app/glosario/glosario.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb3NhcmlvL2dsb3NhcmlvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/glosario/glosario.page.ts":
/*!*******************************************!*\
  !*** ./src/app/glosario/glosario.page.ts ***!
  \*******************************************/
/*! exports provided: GlosarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlosarioPage", function() { return GlosarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _servicios_definiciones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios/definiciones.service */ "./src/app/servicios/definiciones.service.ts");




let GlosarioPage = class GlosarioPage {
    constructor(def, navCtr) {
        this.def = def;
        this.navCtr = navCtr;
        this.textoBuscar = '';
        this.definiciones = this.def.definiciones;
    }
    ngOnInit() {
    }
    goToDetailPage(palabra) {
        this.navCtr.navigateForward(`detail/${palabra}`);
    }
    buscar(event) {
        this.textoBuscar = event.detail.value;
        console.log(this.textoBuscar);
    }
};
GlosarioPage.ctorParameters = () => [
    { type: _servicios_definiciones_service__WEBPACK_IMPORTED_MODULE_3__["DefinicionesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
GlosarioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-glosario',
        template: __webpack_require__(/*! raw-loader!./glosario.page.html */ "./node_modules/raw-loader/index.js!./src/app/glosario/glosario.page.html"),
        styles: [__webpack_require__(/*! ./glosario.page.scss */ "./src/app/glosario/glosario.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_definiciones_service__WEBPACK_IMPORTED_MODULE_3__["DefinicionesService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], GlosarioPage);



/***/ })

}]);
//# sourceMappingURL=glosario-glosario-module-es2015.js.map