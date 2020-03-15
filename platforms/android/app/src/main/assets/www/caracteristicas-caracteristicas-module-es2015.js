(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["caracteristicas-caracteristicas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/caracteristicas/caracteristicas.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/caracteristicas/caracteristicas.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Características</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-item>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-card text-center button (click)=\"goTo(musgo.genero, musgo.id)\" *ngFor=\"let musgo of musgos\">\n              <p text-wrap>{{musgo.caracteristica}}</p>\n              <ion-img [src]=\"musgo.imagen\" ></ion-img>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-button expand=\"full\" (click)=\"goToGlosarioPage()\">Glosario</ion-button>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/caracteristicas/caracteristicas-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/caracteristicas/caracteristicas-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CaracteristicasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaracteristicasPageRoutingModule", function() { return CaracteristicasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _caracteristicas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./caracteristicas.page */ "./src/app/caracteristicas/caracteristicas.page.ts");




const routes = [
    {
        path: '',
        component: _caracteristicas_page__WEBPACK_IMPORTED_MODULE_3__["CaracteristicasPage"]
    }
];
let CaracteristicasPageRoutingModule = class CaracteristicasPageRoutingModule {
};
CaracteristicasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CaracteristicasPageRoutingModule);



/***/ }),

/***/ "./src/app/caracteristicas/caracteristicas.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/caracteristicas/caracteristicas.module.ts ***!
  \***********************************************************/
/*! exports provided: CaracteristicasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaracteristicasPageModule", function() { return CaracteristicasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _caracteristicas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./caracteristicas-routing.module */ "./src/app/caracteristicas/caracteristicas-routing.module.ts");
/* harmony import */ var _caracteristicas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./caracteristicas.page */ "./src/app/caracteristicas/caracteristicas.page.ts");







let CaracteristicasPageModule = class CaracteristicasPageModule {
};
CaracteristicasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _caracteristicas_routing_module__WEBPACK_IMPORTED_MODULE_5__["CaracteristicasPageRoutingModule"]
        ],
        declarations: [_caracteristicas_page__WEBPACK_IMPORTED_MODULE_6__["CaracteristicasPage"]]
    })
], CaracteristicasPageModule);



/***/ }),

/***/ "./src/app/caracteristicas/caracteristicas.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/caracteristicas/caracteristicas.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZWwvcHJveWVjdG9zL2lvbmljL2N0bS9zcmMvYXBwL2NhcmFjdGVyaXN0aWNhcy9jYXJhY3RlcmlzdGljYXMucGFnZS5zY3NzIiwic3JjL2FwcC9jYXJhY3RlcmlzdGljYXMvY2FyYWN0ZXJpc3RpY2FzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jYXJhY3RlcmlzdGljYXMvY2FyYWN0ZXJpc3RpY2FzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn0iLCJpb24tY2FyZCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/caracteristicas/caracteristicas.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/caracteristicas/caracteristicas.page.ts ***!
  \*********************************************************/
/*! exports provided: CaracteristicasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaracteristicasPage", function() { return CaracteristicasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servicios_musgos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servicios/musgos.service */ "./src/app/servicios/musgos.service.ts");





let CaracteristicasPage = class CaracteristicasPage {
    constructor(navCtr, route, mus) {
        this.navCtr = navCtr;
        this.route = route;
        this.mus = mus;
        this.musgos = [];
        this.ante = this.route.snapshot.paramMap.get('ante');
        this.musgos = this.mus.musgos.filter(musgo => musgo.antecesor == this.ante);
    }
    ngOnInit() {
        console.log(this.musgos);
    }
    goTo(genero, ante) {
        if (genero != "") {
            this.navCtr.navigateForward(`genero/${genero}`);
        }
        else {
            this.navCtr.navigateForward(`caracteristicas/${ante}`);
        }
    }
    goToGlosarioPage() {
        this.navCtr.navigateForward(`glosario`);
    }
};
CaracteristicasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _servicios_musgos_service__WEBPACK_IMPORTED_MODULE_4__["MusgosService"] }
];
CaracteristicasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-caracteristicas',
        template: __webpack_require__(/*! raw-loader!./caracteristicas.page.html */ "./node_modules/raw-loader/index.js!./src/app/caracteristicas/caracteristicas.page.html"),
        styles: [__webpack_require__(/*! ./caracteristicas.page.scss */ "./src/app/caracteristicas/caracteristicas.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _servicios_musgos_service__WEBPACK_IMPORTED_MODULE_4__["MusgosService"]])
], CaracteristicasPage);



/***/ }),

/***/ "./src/app/servicios/musgos.service.ts":
/*!*********************************************!*\
  !*** ./src/app/servicios/musgos.service.ts ***!
  \*********************************************/
/*! exports provided: MusgosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusgosService", function() { return MusgosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MusgosService = class MusgosService {
    constructor() {
        this.musgos = [
            {
                id: "1",
                clave: "1",
                caracteristica: "Acrocárpicos",
                antecesor: "0",
                genero: "",
                imagen: "assets/img/glosario/Acrocárpico.png"
            },
            {
                id: "2",
                clave: "2",
                caracteristica: "Hojas sin lamelas",
                antecesor: "1",
                genero: "",
                imagen: ""
            },
            {
                id: "3",
                clave: "3",
                caracteristica: "Hojas dísticas formando dos hileras a lo largo del tallo",
                antecesor: "2",
                genero: "",
                imagen: ""
            },
            {
                id: "4",
                clave: "4",
                caracteristica: "Hojas formadas por tres partes: lamina vaginante, lamina dorsal y lamina ventral",
                antecesor: "3",
                genero: "Fissidens",
                imagen: ""
            },
            {
                id: "5",
                clave: "4",
                caracteristica: "Hojas formadas por una sola lámina",
                antecesor: "3",
                genero: "",
                imagen: ""
            },
            {
                id: "6",
                clave: "5",
                caracteristica: "Hojas no envainantes; opacas",
                antecesor: "5",
                genero: "Eustichia",
                imagen: ""
            },
            {
                id: "7",
                clave: "5",
                caracteristica: "Hojas envainantes sobrepuestas o apretadas, pero con los ápices foliares esparcidos; lustrosos",
                antecesor: "5",
                genero: "",
                imagen: ""
            },
            {
                id: "8",
                clave: "6",
                caracteristica: "Hojas formadas abruptamente una súbula lineal, rugosa; costa muy rugosa, excurrente, llenando la mayoría de la súbula",
                antecesor: "7",
                genero: "Distichium",
                imagen: ""
            },
            {
                id: "9",
                clave: "6",
                caracteristica: "Hojas inferiores obtusas y redondeadas en al ápice; las hojas superiores tornándose apiculadas y aquilladas",
                antecesor: "7",
                genero: "Bryoxiphium",
                imagen: ""
            },
            {
                id: "10",
                clave: "3",
                caracteristica: "Hojas en tres o más hileras",
                antecesor: "2",
                genero: "",
                imagen: ""
            },
            {
                id: "11",
                clave: "7",
                caracteristica: "Hojas en tres hileras evidentes, las laterales grandes y ovadas y las dorsales más pequeñas y estrechas",
                antecesor: "10",
                genero: "Epipterygium",
                imagen: ""
            },
            {
                id: "12",
                clave: "7",
                caracteristica: "Hojas en más de tres hileras evidentes",
                antecesor: "10",
                genero: "",
                imagen: ""
            },
            {
                id: "13",
                clave: "8",
                caracteristica: "Plantas efímeras, capsulas cleistocárpicas",
                antecesor: "12",
                genero: "",
                imagen: ""
            },
            {
                id: "14",
                clave: "9",
                caracteristica: "Esporas grandes, más de 100 µm de diámetro, lisas; capsulas de color café oscuro a casi negras al madurar",
                antecesor: "13",
                genero: "Archidium",
                imagen: ""
            },
            {
                id: "15",
                clave: "9",
                caracteristica: "Esporas pequeñas, menos de 100 µm de diámetro, lisas o finamente papilosas; capsulas amarillentas a anaranjadas",
                antecesor: "13",
                genero: "",
                imagen: ""
            },
            {
                id: "16",
                clave: "10",
                caracteristica: "Hojas vegetativas y periqueciales con la costa prolongándose en una arista o pelo",
                antecesor: "15",
                genero: "",
                imagen: ""
            },
            {
                id: "17",
                clave: "11",
                caracteristica: "Plantas blanquecinas; células foliares lisas",
                antecesor: "16",
                genero: "Lorentzeilla",
                imagen: ""
            },
            {
                id: "18",
                clave: "11",
                caracteristica: "Plantas café amarillentas; células foliares papilosas",
                antecesor: "16",
                genero: "Phascum",
                imagen: ""
            },
            {
                id: "19",
                clave: "10",
                caracteristica: "Hojas vegetativas y periqueciales con los ápices de las hojas no terminando en arista o pelo",
                antecesor: "15",
                genero: "",
                imagen: ""
            },
            {
                id: "20",
                clave: "12",
                caracteristica: "Células exoteciales con engrosamientos lenticulares medidos en la pared externa",
                antecesor: "19",
                genero: "",
                imagen: ""
            },
            {
                id: "21",
                clave: "13",
                caracteristica: "Células distales de la hoja lisas",
                antecesor: "20",
                genero: "Pleuridium aurantiacum",
                imagen: ""
            },
            {
                id: "22",
                clave: "13",
                caracteristica: "Células distales de la hoja papilosas",
                antecesor: "20",
                genero: "",
                imagen: ""
            },
            {
                id: "23",
                clave: "14",
                caracteristica: "Hojas periqueciales linguladas; células foliases distales oscuras, con seis a ocho papilas",
                antecesor: "22",
                genero: "Uleobryum",
                imagen: ""
            },
            {
                id: "24",
                clave: "14",
                caracteristica: "Hojas periqueciales linguladas; células foliases distales translucidas con dos a tres papilas",
                antecesor: "22",
                genero: "Bryoceuthospora",
                imagen: ""
            },
            {
                id: "25",
                clave: "12",
                caracteristica: "Células exoteciales sin engrosamiento lenticulares en la pared externa",
                antecesor: "19",
                genero: "",
                imagen: ""
            },
            {
                id: "26",
                clave: "15",
                caracteristica: "Plantas bulbiformes, cobrizas, hojas fuertemente cónicas",
                antecesor: "25",
                genero: "Acaulon",
                imagen: ""
            },
            {
                id: "27",
                clave: "15",
                caracteristica: "Plantas no bulbiformes, verde amarillentas, hojas planas",
                antecesor: "25",
                genero: "",
                imagen: ""
            },
            {
                id: "28",
                clave: "16",
                caracteristica: "Hojas crispadas al secarse; células foliares distales cortas, pluripapilosas",
                antecesor: "27",
                genero: "Tortella frucharti",
                imagen: ""
            },
            {
                id: "29",
                clave: "16",
                caracteristica: "Hojas no crispadas al secarse: células foliares distales alargadas, lisas",
                antecesor: "27",
                genero: "",
                imagen: ""
            },
            {
                id: "30",
                clave: "17",
                caracteristica: "Hojas con los bordes superiores biestratificados",
                antecesor: "29",
                genero: "Pseudephemerum",
                imagen: ""
            },
            {
                id: "31",
                clave: "17",
                caracteristica: "Hojas con los borde superiores uniestratificados",
                antecesor: "29",
                genero: "Pleuridium",
                imagen: ""
            },
            {
                id: "32",
                clave: "8",
                caracteristica: "Plantas perennes, capsulas estegocárpicas.",
                antecesor: "12",
                genero: "",
                imagen: ""
            },
            {
                id: "33",
                clave: "18",
                caracteristica: "Esporofito dehiscente por cuatro valvas; plantas pequeñas de color oscuro",
                antecesor: "32",
                genero: "Andreaea",
                imagen: ""
            },
            {
                id: "34",
                clave: "18",
                caracteristica: "Esporofito dehiscente por un opérculo",
                antecesor: "32",
                genero: "",
                imagen: ""
            },
            {
                id: "35",
                clave: "19",
                caracteristica: "Células foliares distales con papilas.",
                antecesor: "34",
                genero: "",
                imagen: ""
            },
            {
                id: "36",
                clave: "20",
                caracteristica: "Células foliares distales con papilas en los extremos; base de los tallos densamente tomentoso",
                antecesor: "35",
                genero: "",
                imagen: ""
            },
            {
                id: "37",
                clave: "21",
                caracteristica: "Hojas con la base envainante, lisas, celulares alares no diferenciadas",
                antecesor: "36",
                genero: "Bartramia",
                imagen: ""
            },
            {
                id: "38",
                clave: "21",
                caracteristica: "Hojas con base no envainante, plegadas, células alares diferenciadas o no claramente así",
                antecesor: "36",
                genero: "",
                imagen: ""
            },
            {
                id: "39",
                clave: "22",
                caracteristica: "Hojas plegadas al menos en la base, células alares diferenciadas",
                antecesor: "38",
                genero: "Breutelia",
                imagen: ""
            },
            {
                id: "40",
                clave: "22",
                caracteristica: "Hojas no plegadas; células alares no claramente diferenciadas",
                antecesor: "38",
                genero: "",
                imagen: ""
            },
            {
                id: "41",
                clave: "23",
                caracteristica: "Tallos en ramas en verticilos subflorales",
                antecesor: "40",
                genero: "Philonotis",
                imagen: ""
            },
            {
                id: "42",
                clave: "23",
                caracteristica: "Tallos sin verticilos subflorales",
                antecesor: "40",
                genero: "",
                imagen: ""
            },
            {
                id: "43",
                clave: "24",
                caracteristica: "Lamina foliar distal multiestratificada; células alares  más cortas que las medias distales",
                antecesor: "42",
                genero: "Anacolia",
                imagen: ""
            },
            {
                id: "44",
                clave: "24",
                caracteristica: "Lamina foliar uniestratificada, células de tamaño uniforme",
                antecesor: "42",
                genero: "Flowersia",
                imagen: ""
            },
            {
                id: "45",
                clave: "20",
                caracteristica: "Células foliares con papilas sobre el lumen; base de los tallos sin tomento",
                antecesor: "35",
                genero: "",
                imagen: ""
            },
            {
                id: "46",
                clave: "25",
                caracteristica: "Dientes del peristoma filiformes, en un verticilo",
                antecesor: "45",
                genero: "",
                imagen: ""
            },
            {
                id: "47",
                clave: "26",
                caracteristica: "Células foliares proximales hialinas, extendiéndose a lo largo de los bordes hasta formas un área en V; bordes distales planos",
                antecesor: "46",
                genero: "",
                imagen: ""
            },
            {
                id: "48",
                clave: "27",
                caracteristica: "Base foliar erecta; hojas apiculadas",
                antecesor: "47",
                genero: "Tortella",
                imagen: ""
            },
            {
                id: "49",
                clave: "27",
                caracteristica: "Base foliar envainante; hojas acuminadas",
                antecesor: "47",
                genero: "Pleurochaete",
                imagen: ""
            },
            {
                id: "50",
                clave: "26",
                caracteristica: "Células foliares proximales hialinas rara vez formando un área en forma de V; bordes distales incurvados, planos o recurvados",
                antecesor: "46",
                genero: "",
                imagen: ""
            },
            {
                id: "51",
                clave: "28",
                caracteristica: "Pared de la capsula fuertemente acostillada",
                antecesor: "50",
                genero: "Amphidium",
                imagen: ""
            },
            {
                id: "52",
                clave: "28",
                caracteristica: "Pared de la capsula lisa",
                antecesor: "50",
                genero: "",
                imagen: ""
            },
            {
                id: "53",
                clave: "29",
                caracteristica: "Borde foliar diferenciado formado por varias hileras de una célula alargadas y hialinas que ocupan casi toda la longitud de la hoja",
                antecesor: "52",
                genero: "Leucoloma",
                imagen: ""
            },
            {
                id: "54",
                clave: "29",
                caracteristica: "Borde foliar no diferenciado",
                antecesor: "52",
                genero: "",
                imagen: ""
            },
            {
                id: "55",
                clave: "30",
                caracteristica: "Borde foliar no diferenciado",
                antecesor: "54",
                genero: "",
                imagen: ""
            },
            {
                id: "56",
                clave: "31",
                caracteristica: "Base foliar auriculada; lamina biestratificada cerca de la costa; célula terminar de los filamentos con un engrosamiento apical",
                antecesor: "55",
                genero: "Aloina",
                imagen: ""
            },
            {
                id: "57",
                clave: "31",
                caracteristica: "Base foliar no diferenciada; lamina uniestrafiticada; célula terminal de los filamentos de pared uniformemente delgada",
                antecesor: "55",
                genero: "Aloinella",
                imagen: ""
            },
            {
                id: "58",
                clave: "30",
                caracteristica: "Costa sin filamentos, pero a veces con un cojín de células combadas",
                antecesor: "54",
                genero: "",
                imagen: ""
            },
            {
                id: "59",
                clave: "32",
                caracteristica: "Hojas profundamente cóncavas en forma de cuchara",
                antecesor: "58",
                genero: "Saitobryum",
                imagen: ""
            },
            {
                id: "60",
                clave: "32",
                caracteristica: "Hojas planas a ampliamente acanaladas o aquilladas, a veces débilmente cóncavas o cuculadas  en el ápice",
                antecesor: "58",
                genero: "",
                imagen: ""
            },
            {
                id: "61",
                clave: "33",
                caracteristica: "Células foliares distales combadas a mamilosas adaxialmente, débilmente convexa en la superficie abaxial, a veces papilosas o en una o en ambas superficies",
                antecesor: "60",
                genero: "",
                imagen: ""
            },
            {
                id: "62",
                clave: "34",
                caracteristica: "Lamina foliar distal biestratificada",
                antecesor: "61",
                genero: "Timmiella",
                imagen: ""
            },
            {
                id: "63",
                clave: "34",
                caracteristica: "Lamina foliar distal uniestratificada",
                antecesor: "61",
                genero: "Barbula",
                imagen: ""
            },
            {
                id: "64",
                clave: "33",
                caracteristica: "Células foliares, distales planas o igualmente convexas a combadas en ambas superficies",
                antecesor: "60",
                genero: "",
                imagen: ""
            },
            {
                id: "65",
                clave: "35",
                caracteristica: "Lamina foliar total o parcialmente biestratificada",
                antecesor: "64",
                genero: "",
                imagen: ""
            },
            {
                id: "66",
                clave: "36",
                caracteristica: "Hojas lanceoladas a ovadas, lamina distal biestratificada",
                antecesor: "65",
                genero: "",
                imagen: ""
            },
            {
                id: "67",
                clave: "37",
                caracteristica: "Margen foliar ventado",
                antecesor: "66",
                genero: "Rhexophyllum",
                imagen: ""
            },
            {
                id: "68",
                clave: "37",
                caracteristica: "Margen foliar entero",
                antecesor: "66",
                genero: "Didymodon",
                imagen: ""
            },
            {
                id: "69",
                clave: "36",
                caracteristica: "Hojas de varias formas, biestrafiticadas solamente en los márgenes o en el ápice",
                antecesor: "65",
                genero: "",
                imagen: ""
            },
            {
                id: "70",
                clave: "38",
                caracteristica: "Plantas pardo rojizas en la base; hojas con una base oblongo-envainante",
                antecesor: "69",
                genero: "Mironia",
                imagen: ""
            },
            {
                id: "71",
                clave: "38",
                caracteristica: "Plantas verdes o amarillentas en la base; hojas poco o no diferenciadas en la base",
                antecesor: "69",
                genero: "",
                imagen: ""
            },
            {
                id: "72",
                clave: "39",
                caracteristica: "Costa subpercurrente",
                antecesor: "71",
                genero: "Gymnostomum",
                imagen: ""
            },
            {
                id: "73",
                clave: "39",
                caracteristica: "Costa percurrente a cortamente excurrente",
                antecesor: "71",
                genero: "",
                imagen: ""
            },
            {
                id: "74",
                clave: "40",
                caracteristica: "Hojas frecuentemente glaucas; células foliares distales heterogéneas  en forma y tamaño, con papilas grandes, apretadas y planas",
                antecesor: "73",
                genero: "Molendoa",
                imagen: ""
            },
            {
                id: "75",
                clave: "40",
                caracteristica: "Hojas verde oscuro; células foliares distales subcuadradas a redondeo-angulares, con papilas pequeñas, hemisféricas",
                antecesor: "73",
                genero: "Didymodon",
                imagen: ""
            },
            {
                id: "76",
                clave: "35",
                caracteristica: "Lamina foliar completamente uniestratificada",
                antecesor: "64",
                genero: "",
                imagen: ""
            },
            {
                id: "77",
                clave: "41",
                caracteristica: "Costa con dos bandas estereidas, la adaxial a veces esta pobremente desarrollada",
                antecesor: "76",
                genero: "",
                imagen: ""
            },
            {
                id: "78",
                clave: "42",
                caracteristica: "Tallos con las hojas inferiores pardo-rojizas",
                antecesor: "77",
                genero: "",
                imagen: ""
            },
            {
                id: "79",
                clave: "43",
                caracteristica: "Células foliares distales convexas y papilosas en ambas superficies",
                antecesor: "78",
                genero: "Bryoerythrophyllum",
                imagen: ""
            },
            {
                id: "80",
                clave: "43",
                caracteristica: "Células foliares distales mamilosas en la superficie adaxial y ligeramente convexas en la abaxial",
                antecesor: "78",
                genero: "Hyophila",
                imagen: ""
            },
            {
                id: "81",
                clave: "42",
                caracteristica: "Tallos con las hojas inferiores amarillentas-pardo obscuras",
                antecesor: "77",
                genero: "",
                imagen: ""
            },
            {
                id: "82",
                clave: "44",
                caracteristica: "Borde foliar incurvado involuto",
                antecesor: "81",
                genero: "",
                imagen: ""
            },
            {
                id: "83",
                clave: "45",
                caracteristica: "Hojas fuertemente torcidas al secarse; borde foliar distal fuertemente incurvado a involuto",
                antecesor: "82",
                genero: "Weissia",
                imagen: ""
            },
            {
                id: "84",
                clave: "45",
                caracteristica: "Hojas no fuertemente torcidas al secarse, borde foliar distal plano a ampliamente incurvado",
                antecesor: "82",
                genero: "Trichostomum",
                imagen: ""
            },
            {
                id: "85",
                clave: "44",
                caracteristica: "Borde foliar plano a recurvado",
                antecesor: "81",
                genero: "",
                imagen: ""
            },
            {
                id: "86",
                clave: "46",
                caracteristica: "Borde foliar totalmente plano",
                antecesor: "85",
                genero: "",
                imagen: ""
            },
            {
                id: "87",
                clave: "47",
                caracteristica: "Ápice de la hoja agudo; costa percurrente a cortamente excurrente como un mucrón",
                antecesor: "86",
                genero: "Trichostomum",
                imagen: ""
            },
            {
                id: "88",
                clave: "47",
                caracteristica: "Ápice de la hoja agudo a redondeado; costa subpercurrente, terminando dos-cinco células abajo del ápice",
                antecesor: "86",
                genero: "",
                imagen: ""
            },
            {
                id: "89",
                clave: "48",
                caracteristica: "Células proximales de la hoja de pared delgada, infladas",
                antecesor: "88",
                genero: "Didymodon",
                imagen: ""
            },
            {
                id: "90",
                clave: "48",
                caracteristica: "Células proximales de la hoja de pared gruesa, no infladas",
                antecesor: "88",
                genero: "Gymnostomum",
                imagen: ""
            },
            {
                id: "91",
                clave: "46",
                caracteristica: "Borde foliar recurvado, al menos en la mitad proximal",
                antecesor: "85",
                genero: "",
                imagen: ""
            },
            {
                id: "92",
                clave: "49",
                caracteristica: "Costa en sección transversal sin epidermis adaxial; tallos usualmente sin cordón central",
                antecesor: "91",
                genero: "",
                imagen: ""
            },
            {
                id: "93",
                clave: "50",
                caracteristica: "Células foliares grandes y rectangulares, irregulares en la porción media superior; papilas usualmente simples",
                antecesor: "92",
                genero: "Hymenostylium",
                imagen: ""
            },
            {
                id: "94",
                clave: "50",
                caracteristica: "Células foliares cuadradas a redondeadas, uniformes en la porción media superior; papilas simples a bífidas o multifidas",
                antecesor: "92",
                genero: "Leptodontium",
                imagen: ""
            },
            {
                id: "95",
                clave: "49",
                caracteristica: "Costa en sección transversal con la epidermis adaxial; tallos usualmente con cordón central",
                antecesor: "91",
                genero: "",
                imagen: ""
            },
            {
                id: "96",
                clave: "51",
                caracteristica: "Hojas oblongo-linguladas a ovado lanceoladas; células proximales fuertemente diferenciadas",
                antecesor: "95",
                genero: "Barbula",
                imagen: ""
            },
            {
                id: "97",
                clave: "51",
                caracteristica: "Hojas lanceoladas a largamente lanceoladas; células foliares proximales pobremente diferenciadas",
                antecesor: "95",
                genero: "Didymodon",
                imagen: ""
            },
            {
                id: "98",
                clave: "41",
                caracteristica: "Costa solo con banda estereida abaxial",
                antecesor: "76",
                genero: "",
                imagen: ""
            },
            {
                id: "99",
                clave: "52",
                caracteristica: "Plantas delicadas, con hojas no aquilladas, linear-subuladas a partir de una base fuertemente envainante",
                antecesor: "98",
                genero: "Ditrichum",
                imagen: ""
            },
            {
                id: "100",
                clave: "52",
                caracteristica: "Plantas robustas, con hojas aquilladas, oblongo-lanceoladas u oblongo-linguladas, con base no envainante",
                antecesor: "98",
                genero: "",
                imagen: ""
            },
            {
                id: "101",
                clave: "53",
                caracteristica: "Células de la mitad distal de la hoja lisas y mamilosas",
                antecesor: "100",
                genero: "Oreoweisia",
                imagen: ""
            },
            {
                id: "102",
                clave: "53",
                caracteristica: "Células de la mitad distal de la hoja con papilas bajas, huecas o compuestas",
                antecesor: "100",
                genero: "",
                imagen: ""
            },
            {
                id: "103",
                clave: "54",
                caracteristica: "Bordes de las hojas espiralmente revolutos; las células del espiral con la pared delgada",
                antecesor: "102",
                genero: "Pseudocrossidium",
                imagen: ""
            },
            {
                id: "104",
                clave: "54",
                caracteristica: "Bordes de las hojas planos a fuertemente revolutos, sin células de pared delgada",
                antecesor: "102",
                genero: "",
                imagen: ""
            },
            {
                id: "105",
                clave: "55",
                caracteristica: "Hojas con la costa amplia, hasta ocho células de ancho en la mitad de la hoja, lateralmente espolonada",
                antecesor: "104",
                genero: "Didymodon",
                imagen: ""
            },
            {
                id: "106",
                clave: "55",
                caracteristica: "Hojas con la costa estrecha, rara vez más de seis células de ancho en la mitad de la hoja, sin proyecciones laterales",
                antecesor: "104",
                genero: "",
                imagen: ""
            },
            {
                id: "107",
                clave: "56",
                caracteristica: "Hojas fuertemente aquilladas; Células foliares distales pequeñas 7-9 µm de ancho, bordes usualmente planos",
                antecesor: "106",
                genero: "Anoectangium",
                imagen: ""
            },
            {
                id: "108",
                clave: "56",
                caracteristica: "Hojas no aquilladas; células superiores grandes 10-20 µm de ancho; bordes recurvados",
                antecesor: "106",
                genero: "",
                imagen: ""
            },
            {
                id: "109",
                clave: "57",
                caracteristica: "Costa con células epidérmicas adaxiales combadas formando un cojín; células foliares marginales de pared gruesa y casi lisa",
                antecesor: "108",
                genero: "Desmatodon",
                imagen: ""
            },
            {
                id: "110",
                clave: "57",
                caracteristica: "Costa sin un cojín de células combadas; borde foliar a veces formado por células diferenciadas en tamaño o color",
                antecesor: "108",
                genero: "",
                imagen: ""
            },
            {
                id: "111",
                clave: "58",
                caracteristica: "Margen cerrado desde la mitad de la hoja",
                antecesor: "110",
                genero: "Hennediella",
                imagen: ""
            },
            {
                id: "112",
                clave: "58",
                caracteristica: "Margen entero o solamente dentado en el extremo dista",
                antecesor: "110",
                genero: "",
                imagen: ""
            },
            {
                id: "113",
                clave: "59",
                caracteristica: "Costa excurrente como una arista o pelo liso de color anaranjado; plantas sin yemas",
                antecesor: "112",
                genero: "Pseudocrossidium",
                imagen: ""
            },
            {
                id: "114",
                clave: "59",
                caracteristica: "Costa subpercurrente a excurrente, como arista o pelo hialino; yemas ausentes o de varios tipos",
                antecesor: "112",
                genero: "Syntrichia",
                imagen: ""
            },
            {
                id: "115",
                clave: "25",
                caracteristica: "peristoma con dos verticilos",
                antecesor: "45",
                genero: "",
                imagen: ""
            },
            {
                id: "116",
                clave: "60",
                caracteristica: "hojas periqueciales mucho más largas que las hojas vegetativas, con la costa largamente excurrente; cápsula inmersa, asimétrica",
                antecesor: "115",
                genero: "Diphyscium",
                imagen: ""
            },
            {
                id: "117",
                clave: "60",
                caracteristica: "hojas periqueciales no o débilmente diferenciadas de las vegetativas; cápsula inmersa, emergente o excerta, simétrica",
                antecesor: "115",
                genero: "",
                imagen: ""
            },
            {
                id: "118",
                clave: "61",
                caracteristica: "plantas robustas, hojas rígidas al secarse con la base ligeramente envainante, las células de la mitad distal mamilosas",
                antecesor: "117",
                genero: "Timmia",
                imagen: ""
            },
            {
                id: "119",
                clave: "61",
                caracteristica: "plantas de tamaño medio, hojas flexuosas o erectas al secarse, con la base son envainante y las células de la mitad distal uni o pluripapilosas",
                antecesor: "117",
                genero: "",
                imagen: ""
            },
            {
                id: "120",
                clave: "62",
                caracteristica: "plantas verde obscuro con las hojas flexuosas al secarse; propágulos elípticos en las axilas de las hojas",
                antecesor: "119",
                genero: "Zygodon",
                imagen: ""
            },
            {
                id: "121",
                clave: "62",
                caracteristica: "plantas verde amarillentas con las hojas erectas al secarse; propágulos ausentes",
                antecesor: "119",
                genero: "Orthotrichum",
                imagen: ""
            },
            {
                id: "122",
                clave: "19",
                caracteristica: "células foliares distales lisas",
                antecesor: "34",
                genero: "",
                imagen: ""
            },
            {
                id: "123",
                clave: "63",
                caracteristica: "Cápsulas cleistocárpicas",
                antecesor: "122",
                genero: "",
                imagen: ""
            },
            {
                id: "124",
                clave: "64",
                caracteristica: "Hojas ±contorneadas al secarse, erecto-esparcidas al mojarse; cápsulas curvado-asimétricas; peristoma frecuentemente con dientes sigmoideos y oblicuamente arreglados",
                antecesor: "123",
                genero: "Funari",
                imagen: ""
            },
            {
                id: "125",
                clave: "64",
                caracteristica: "Hojas erecto-imbricadas o esparcidas al secarse; cápsulas periformes a cilíndricas; peristoma no sigmoideo",
                antecesor: "123",
                genero: "",
                imagen: ""
            },
            {
                id: "126",
                clave: "65",
                caracteristica: "plantas juláceas; ápices redondeados a obtuso; células distales romboides a linear-vermiculares",
                antecesor: "125",
                genero: "Anomobryum",
                imagen: ""
            },
            {
                id: "127",
                clave: "65",
                caracteristica: "Plantas no juláceas; ápices redondeados, agudos o acuminados; células distales romboidales a hexagonales",
                antecesor: "125",
                genero: "",
                imagen: ""
            },
            {
                id: "128",
                clave: "66",
                caracteristica: "Cápsula erecta o casi así, sin annulus, caliptra abruptamente inflada en la base",
                antecesor: "127",
                genero: "Entosthodon"
            },
            {
                id: "129",
                clave: "66",
                caracteristica: "Cápsula erecta a péndula, con annulus, caliptra gradualmente ensanchada hacia la base",
                antecesor: "127",
                genero: "",
                imagen: ""
            },
            {
                id: "130",
                clave: "67",
                caracteristica: "Costa fuerte, con frecuencia terminando en un apículo, arista o pelo",
                antecesor: "129",
                genero: "",
                imagen: ""
            },
            {
                id: "131",
                clave: "68",
                caracteristica: "Base foliar estrecha, decurrente; células distales hexagonales",
                antecesor: "130",
                genero: "Mnium",
                imagen: ""
            },
            {
                id: "132",
                clave: "68",
                caracteristica: "Base foliar amplia, no decurrente; células distales romboidales",
                antecesor: "130",
                genero: "",
                imagen: ""
            },
            {
                id: "133",
                clave: "69",
                caracteristica: "Endostoma con una membrana basal bien desarrollada y con segmentos rudimentarios",
                antecesor: "132",
                genero: "Brachymenium",
                imagen: ""
            },
            {
                id: "134",
                clave: "69",
                caracteristica: "Endostoma con segmentos bien desarrollados, adheridos al exostoma",
                antecesor: "132",
                genero: "Synthetodontium",
                imagen: ""
            },
            {
                id: "135",
                clave: "67",
                caracteristica: "Costa débil, subpercurrente a excurrente",
                antecesor: "129",
                genero: "",
                imagen: ""
            },
            {
                id: "136",
                clave: "70",
                caracteristica: "Hojas lanceoladas, generalmente serruladas en el ápice, con las células de la mitad distal linear-romboidales; esporofito lateral con los segmentos más largos que los dientes",
                antecesor: "135",
                genero: "Schizymenium",
                imagen: ""
            },
            {
                id: "137",
                clave: "70",
                caracteristica: "Hojas obovadas a linear-setáceas, principalmente lisas a dentadas en la mitad superior y células distales lineales a hexagonales; esporofito terminal con los segmentos y dientes del mismo tamaño",
                antecesor: "135",
                genero: "",
                imagen: ""
            },
            {
                id: "138",
                clave: "71",
                caracteristica: "Tallos postrados o con estolones; las ramas fértiles formando una roseta con varios esporofitos",
                antecesor: "137",
                genero: "",
                imagen: ""
            },
            {
                id: "139",
                clave: "72",
                caracteristica: "Estolones subterráneos, sin hojas; células de la mitad distal de la hoja oblongo-hexagonales",
                antecesor: "138",
                genero: "Rhodobryum",
                imagen: ""
            },
            {
                id: "140",
                clave: "72",
                caracteristica: ". Estolones superficiales, con hojas; células de la mitad distal de la hoja isodiamétricas, las yuxtacostales casi del doble del tamaño de las células adyacentes",
                antecesor: "138",
                genero: "Plagiomnium",
                imagen: ""
            },
            {
                id: "141",
                clave: "71",
                caracteristica: "Tallos erectos con las hojas esparcidas a todo lo largo o formando rosetas, sin estolones; esporofitos solitarios",
                antecesor: "137",
                genero: "",
                imagen: ""
            },
            {
                id: "142",
                clave: "73",
                caracteristica: "Hojas lineares a linear-setáceas, fuertemente torcidas al secarse; células de la mitad distal de la hoja lineares a linear- romboidales; las proximales anchas y laxamente oblongo-hexagonales",
                antecesor: "141",
                genero: "Orthodontium",
                imagen: ""
            },
            {
                id: "143",
                clave: "73",
                caracteristica: "Hojas ni lineares ni fuertemente torcidas al secarse; células de la mitad distal de la hoja romboidales a hexagonales; las proximales cuadradas a rectangulares",
                antecesor: "141",
                genero: "",
                imagen: ""
            },
            {
                id: "144",
                clave: "74",
                caracteristica: "Hojas no bordeadas; costa percurrente a subpercurrente",
                antecesor: "143",
                genero: "Pohlia",
                imagen: ""
            },
            {
                id: "145",
                clave: "74",
                caracteristica: "Hojas bordeadas por 2-5 hileras de células largas y estrechas; costa subpercurrente a largamente excurrente",
                antecesor: "143",
                genero: "Bryum",
                imagen: ""
            },
            {
                id: "146",
                clave: "63",
                caracteristica: "Cápsulas estegocárpicas",
                antecesor: "122",
                genero: "",
                imagen: ""
            },
            {
                id: "147",
                clave: "75",
                caracteristica: "Cápsulas sin peristoma",
                antecesor: "146",
                genero: "",
                imagen: ""
            },
            {
                id: "148",
                clave: "76",
                caracteristica: "Cápsulas inmersas",
                antecesor: "147",
                genero: "",
                imagen: ""
            },
            {
                id: "149",
                clave: "77",
                caracteristica: "Cápsulas con opérculo evidente",
                antecesor: "148",
                genero: "Bryomanginia",
                imagen: ""
            },
            {
                id: "150",
                clave: "77",
                caracteristica: "Cápsulas dehiscentes por una línea en la mitad de la urna",
                antecesor: "148",
                genero: "Micromitrium",
                imagen: ""
            },
            {
                id: "151",
                clave: "76",
                caracteristica: "Cápsulas emergentes a largamente exsertas",
                antecesor: "147",
                genero: "",
                imagen: ""
            },
            {
                id: "152",
                clave: "78",
                caracteristica: "Tallos juláceos; hojas secas o húmedas con las puntas curvadas o adheridas al tallo",
                antecesor: "151",
                genero: "",
                imagen: ""
            },
            {
                id: "153",
                clave: "79",
                caracteristica: "Margen de la hoja irregularmente crenulada en la mitad distal",
                antecesor: "152",
                genero: "Aongstroemia",
                imagen: ""
            },
            {
                id: "154",
                clave: "79",
                caracteristica: "margen de la hoja entero",
                antecesor: "152",
                genero: "Astomiopsis",
                imagen: ""
            },
            {
                id: "156",
                clave: "78",
                caracteristica: "Tallos no juláceos, con las hojas secas contorneadas",
                antecesor: "151",
                genero: "",
                imagen: ""
            },
            {
                id: "157",
                clave: "80",
                caracteristica: "Plantas verde-brillante, hojas con costa; esporofitos exsertos",
                antecesor: "156",
                genero: "Physcomitrium",
                imagen: ""
            },
            {
                id: "158",
                clave: "80",
                caracteristica: "Plantas blanquecinas, hojas sin costa; esporofitos inmersos",
                antecesor: "156",
                genero: "Gigaspermum",
                imagen: ""
            },
            {
                id: "159",
                clave: "75",
                caracteristica: "Cápsulas con peristoma",
                antecesor: "146",
                genero: "",
                imagen: ""
            },
            {
                id: "160",
                clave: "81",
                caracteristica: "Células alares diferenciadas",
                antecesor: "159",
                genero: "",
                imagen: ""
            },
            {
                id: "161",
                clave: "82",
                caracteristica: "Costa ancha, ocupando la mitad o más de la lámina foliar",
                antecesor: "160",
                genero: "",
                imagen: ""
            },
            {
                id: "162",
                clave: "83",
                caracteristica: "Costa en sección transversal con 1-2 hileras de leucocistos adaxiales y 1-2 hileras de subestereidas abaxiales; células alares débil a fuertemente diferenciadas",
                antecesor: "161",
                genero: "Campylopus",
                imagen: ""
            },
            {
                id: "163",
                clave: "83",
                caracteristica: "Costa en sección transversal con dos capas de leucocistos separados por una de clorocistos",
                antecesor: "161",
                genero: "Paraleucobryum",
                imagen: ""
            },
            {
                id: "164",
                clave: "82",
                caracteristica: "Costa estrecha, ocupando un tercio o menos de la base foliar",
                antecesor: "160",
                genero: "",
                imagen: ""
            },
            {
                id: "165",
                clave: "84",
                caracteristica: "Costa terminando en el ápice o prolongándose en un pelo",
                antecesor: "164",
                genero: "",
                imagen: ""
            },
            {
                id: "166",
                clave: "85",
                caracteristica: "Células medias y distales de la hoja cortas usualmente con pared gruesa y ± sinuosa, células alares subcuadradas frecuentemente con una hilera marginal de células hialinas",
                antecesor: "165",
                genero: "Grimmia",
                imagen: ""
            },
            {
                id: "167",
                clave: "85",
                caracteristica: "Células de la hoja estrechas y nodulosas, en la región alar con 1-5 hileras marginales de células más cortas y anchas, de pared lisa y coloreada",
                antecesor: "165",
                genero: "Racomitrium",
                imagen: ""
            },
            {
                id: "168",
                clave: "84",
                caracteristica: "Costa terminando cerca del ápice a excurrente",
                antecesor: "164",
                genero: "",
                imagen: ""
            },
            {
                id: "169",
                clave: "86",
                caracteristica: "Células medias y distales de la hoja cuadrada a cortamente rectangulares u oblongas; células proximales de pared gruesa y perforada",
                antecesor: "168",
                genero: "",
                imagen: ""
            },
            {
                id: "170",
                clave: "87",
                caracteristica: "Células medias y distales de la hoja cuadradas, las proximales de pared gruesa y perforada; células alares infladas, café amarillentas y con frecuencia biestratificadas",
                antecesor: "169",
                genero: "Dicranun",
                imagen: ""
            },
            {
                id: "171",
                clave: "87",
                caracteristica: "Células medias y distales de la hoja cortamente rectangulares, a veces de forma heterogénea, de pared gruesa, las proximales rectangulares, ± diferenciadas en los ángulos basales y hialinas o rojizos",
                antecesor: "169",
                genero: "Pilopogon",
                imagen: ""
            },
            {
                id: "172",
                clave: "86",
                caracteristica: "Células medias y distales de la hoja pequeñas y subcuadradas, las proximales con pared lisa",
                antecesor: "171",
                genero: "",
                imagen: ""
            },
            {
                id: "173",
                clave: "88",
                caracteristica: "Hojas estrechas lanceoladas-acuminadas a subuladas, tubulosas; esporofitos solitarios, con la caliptra cuculada, lisa y entera en la base",
                antecesor: "172",
                genero: "Dicranoweisia",
                imagen: ""
            },
            {
                id: "174",
                clave: "88",
                caracteristica: "Hojas oblongo-lanceoladas, con una base ± envainante; esporofitos solitarios o en grupos con la caliptra mitrada, plagada y escabrosa, profundamente lobada en la base",
                antecesor: "172",
                genero: "Ptrychomitrium",
                imagen: ""
            },
            {
                id: "175",
                clave: "81",
                caracteristica: "Células alares no diferenciadas",
                antecesor: "159",
                genero: "",
                imagen: ""
            },
            {
                id: "176",
                clave: "89",
                caracteristica: "Bordes enteros o crenulados",
                antecesor: "175",
                genero: "",
                imagen: ""
            },
            {
                id: "177",
                clave: "90",
                caracteristica: "Células medias y distales de la hoja romboidales",
                antecesor: "176",
                genero: "",
                imagen: ""
            },
            {
                id: "178",
                clave: "91",
                caracteristica: "Hojas redondeadas, con ápice cuculado, costa con pequeños espolones cerca del extremo distal",
                antecesor: "177",
                genero: "Globulinella",
                imagen: ""
            },
            {
                id: "179",
                clave: "91",
                caracteristica: "Hojas sin esa combinación de caracteres",
                antecesor: "177",
                genero: "",
                imagen: ""
            },
            {
                id: "180",
                clave: "92",
                caracteristica: "Costa largamente excurrente; bordes de las hojas diferenciados por células largas y pálidas; esporofito apical",
                antecesor: "179",
                genero: "Brachymitrion",
                imagen: ""
            },
            {
                id: "181",
                clave: "92",
                caracteristica: "Costa percurrente o casi así; bordes de las hojas no diferenciados; esporofito lateral",
                antecesor: "179",
                genero: "Mielichhoferia",
                imagen: ""
            },
            {
                id: "182",
                clave: "90",
                caracteristica: "Células medias y distales de la hoja con otras formas",
                antecesor: "176",
                genero: "",
                imagen: ""
            },
            {
                id: "183",
                clave: "93",
                caracteristica: "Cápsula globosa, con esporas grandes (48-65 µm) verrucosas",
                antecesor: "182",
                genero: "Neosharpiella",
                imagen: ""
            },
            {
                id: "184",
                clave: "93",
                caracteristica: "Cápsula cilíndrica, ovoide o elipsoidal, con esporas pequeñas, finamente papilosas",
                antecesor: "182",
                genero: "",
                imagen: ""
            },
            {
                id: "185",
                clave: "94",
                caracteristica: "Cápsula inmersa, columela desprendiéndose con el opérculo",
                antecesor: "184",
                genero: "Schistidium",
                imagen: ""
            },
            {
                id: "186",
                clave: "94",
                caracteristica: "Cápsula exserta, columela permaneciendo en la urna",
                antecesor: "184",
                genero: "",
                imagen: ""
            },
            {
                id: "187",
                clave: "95",
                caracteristica: "Cápsula fuertemente acostillada al secarse",
                antecesor: "186",
                genero: "",
                imagen: ""
            },
            {
                id: "188",
                clave: "96",
                caracteristica: "Opérculo cónico subulado; caliptra mirada, pilosa, cubriendo completamente la cápsula",
                antecesor: "187",
                genero: "Macrocoma",
                imagen: ""
            },
            {
                id: "189",
                clave: "96",
                caracteristica: "Opérculo oblicuamente tubulado, casi tan largo como la urna; caliptra cuculada y desnuda",
                antecesor: "187",
                genero: "Rhabdoweisia",
                imagen: ""
            },
            {
                id: "190",
                clave: "95",
                caracteristica: "Cápsula lisa",
                antecesor: "186",
                genero: "",
                imagen: ""
            },
            {
                id: "191",
                clave: "97",
                caracteristica: "Peristoma formado por 32 dientes unidos en la base por una membrana pálida",
                antecesor: "190",
                genero: "Chenia",
                imagen: ""
            },
            {
                id: "192",
                clave: "97",
                caracteristica: "Peristoma formado por dientes individuales o unidos en pares en la base",
                antecesor: "190",
                genero: "",
                imagen: ""
            },
            {
                id: "193",
                clave: "98",
                caracteristica: "Dientes del peristoma cribosos; hojas con un pelo hialino",
                antecesor: "192",
                genero: "Coscinodon",
                imagen: ""
            },
            {
                id: "194",
                clave: "98",
                caracteristica: "Dientes del peristoma no cribosos; hojas sin un pelo hialino",
                antecesor: "192",
                genero: "",
                imagen: ""
            },
            {
                id: "195",
                clave: "99",
                caracteristica: "Caliptra mirada, cubriendo toda la cápsula, fimbriada en la base",
                antecesor: "194",
                genero: "Encalypta",
                imagen: ""
            },
            {
                id: "196",
                clave: "99",
                caracteristica: "Caliptra cuculada, cubriendo la parte distal de la cápsula, entera",
                antecesor: "194",
                genero: "",
                imagen: ""
            },
            {
                id: "197",
                clave: "100",
                caracteristica: "Hojas crispadas y con torneadas al secarse; usualmente con 2-4 esporofitos por periquecio",
                antecesor: "196",
                genero: "Symblepharis",
                imagen: ""
            },
            {
                id: "198",
                clave: "100",
                caracteristica: "Hojas erecto-flexuosas, escasamente modificadas al secarse; usualmente con un esporofito por periquecio",
                antecesor: "196",
                genero: "Dicranella",
                imagen: ""
            },
            {
                id: "199",
                clave: "89",
                caracteristica: "Bordes denticulados o serrados",
                antecesor: "175",
                genero: "",
                imagen: ""
            },
            {
                id: "200",
                clave: "101",
                caracteristica: "Hojas lanceoladas, gradualmente acuminadas, a veces aristadas",
                antecesor: "199",
                genero: "",
                imagen: ""
            },
            {
                id: "201",
                clave: "102",
                caracteristica: "Cápsula suberecta y casi simétrica a fuertemente curvada, ± estrumosa en la base, ± sulcada al secarse",
                antecesor: "200",
                genero: "Ceratodon",
                imagen: ""
            },
            {
                id: "202",
                clave: "102",
                caracteristica: "Capsula erecta y simétrica, a veces ligeramente inclinada, oblongo a estrechamente cilíndrica, lisa al secarse",
                antecesor: "200",
                genero: "Atractylocarpus",
                imagen: ""
            },
            {
                id: "203",
                clave: "101",
                caracteristica: "Hojas ovadas, oblongo-linguladas a espatuladas; costa subpercurrente o rara vez apiculada",
                antecesor: "199",
                genero: "",
                imagen: ""
            },
            {
                id: "204",
                clave: "103",
                caracteristica: "Cápsula sin hipófisis diferenciada; peristoma bien desarrollado, los dientes rojos y torcidos en espiral",
                antecesor: "203",
                genero: "Sagenotortula",
                imagen: ""
            },
            {
                id: "205",
                clave: "2",
                caracteristica: "Hojas con lamelas",
                antecesor: "1",
                genero: "",
                imagen: ""
            },
            {
                id: "206",
                clave: "104",
                caracteristica: "Hojas sin una base envainante",
                antecesor: "205",
                genero: "",
                imagen: ""
            },
            {
                id: "207",
                clave: "105",
                caracteristica: "Lamelas pocas, sobre la costa",
                antecesor: "206",
                genero: "Atrichum",
                imagen: ""
            },
            {
                id: "208",
                clave: "105",
                caracteristica: "Lamelas numerosas, sobre la costa y la lámina",
                antecesor: "206",
                genero: "Notoligotrichum",
                imagen: ""
            },
            {
                id: "209",
                clave: "104",
                caracteristica: "Hojas con una base envainante",
                antecesor: "205",
                genero: "",
                imagen: ""
            },
            {
                id: "210",
                clave: "106",
                caracteristica: "Base sin un borde hialino",
                antecesor: "209",
                genero: "Pogonatum",
                imagen: ""
            },
            {
                id: "211",
                clave: "106",
                caracteristica: "Base con un borde hialino estrecho",
                antecesor: "209",
                genero: "",
                imagen: ""
            },
            {
                id: "212",
                clave: "107",
                caracteristica: "Limbo de la hoja con bordes enteros, ampliamente involutos, cubriendo las lamelas; célula marginal de la lamela piriforme, lisa en sección transversal",
                antecesor: "211",
                genero: "Polytrichum",
                imagen: ""
            },
            {
                id: "213",
                clave: "107",
                caracteristica: "Limbo de la hoja con bordes serrados, planos o erectos; célula apical de la lamela piriforme y fuertemente papilosa",
                antecesor: "211",
                genero: "Polytrichastrum",
                imagen: ""
            },
            {
                id: "214",
                clave: "1",
                caracteristica: "Musgos pleurocárpicos",
                antecesor: "0",
                genero: "",
                imagen: "assets/img/glosario/Pleurocárpicos.png"
            },
            {
                id: "215",
                clave: "108",
                caracteristica: "Hojas ecostadas",
                antecesor: "214",
                genero: "",
                imagen: ""
            },
            {
                id: "216",
                clave: "109",
                caracteristica: "Cápsula sin peristoma; células foliares medias y distales de pared sinuosa, con papilas sobre el lumen",
                antecesor: "215",
                genero: "",
                imagen: ""
            },
            {
                id: "217",
                clave: "110",
                caracteristica: "Cápsulas exsertas",
                antecesor: "216",
                genero: "Braunia",
                imagen: ""
            },
            {
                id: "218",
                clave: "110",
                caracteristica: "Cápsulas inmersas",
                antecesor: "216",
                genero: "",
                imagen: ""
            },
            {
                id: "219",
                clave: "111",
                caracteristica: "Hojas terminando en una punta hialina irregularmente espinulosa; hojas periqueciales con los bordes ciliados",
                antecesor: "218",
                genero: "Hedwigia",
                imagen: ""
            },
            {
                id: "220",
                clave: "111",
                caracteristica: "Hojas sin una punta hialina; hojas periqueciales más largas que las vegetativas y cubriendo totalmente el esporofito",
                antecesor: "218",
                genero: "Hedwigidium",
                imagen: ""
            },
            {
                id: "221",
                clave: "109",
                caracteristica: "Cápsula con peristoma; células foliares medias y distales de pared recta a ligeramente curva, lisas o débilmente proradas abaxialmente",
                antecesor: "215",
                genero: "",
                imagen: ""
            },
            {
                id: "222",
                clave: "112",
                caracteristica: "Células foliares medias y distales, flexuosas, fusiformes, generalmente proradas en la espalda",
                antecesor: "221",
                genero: "Isopterigiopsis",
                imagen: ""
            },
            {
                id: "223",
                clave: "112",
                caracteristica: "células foliares medias y distales linear-romboidales, lisas",
                antecesor: "221",
                genero: "",
                imagen: ""
            },
            {
                id: "224",
                clave: "113",
                caracteristica: "Células alares redondeado-cuadradas a oblatas en muchas hileras",
                antecesor: "223",
                genero: "Leucodon",
                imagen: ""
            },
            {
                id: "225",
                clave: "113",
                caracteristica: "Células alares subcuadradas en áreas triangulares pequeñas o con las proximales infladas, hialinas o amarillas en 1-2 hileras",
                antecesor: "223",
                genero: "",
                imagen: ""
            },
            {
                id: "226",
                clave: "114",
                caracteristica: "Células exoteciales colenquimatosas; células alares proximales infladas, en una hilera basal",
                antecesor: "225",
                genero: "Sematophyllum",
                imagen: ""
            },
            {
                id: "227",
                clave: "114",
                caracteristica: "Células exoteciales no colenquimatosas; células alares proximales agrandadas, no infladas",
                antecesor: "225",
                genero: "Pylaisiadelpha",
                imagen: ""
            },
            {
                id: "228",
                clave: "108",
                caracteristica: "Hojas con costa",
                antecesor: "214",
                genero: "",
                imagen: ""
            },
            {
                id: "229",
                clave: "115",
                caracteristica: "Costa simple",
                antecesor: "228",
                genero: "",
                imagen: ""
            },
            {
                id: "230",
                clave: "116",
                caracteristica: "Hojas de tallos y ramas con células alares bien diferenciadas",
                antecesor: "229",
                genero: "",
                imagen: ""
            },
            {
                id: "231",
                clave: "117",
                caracteristica: "Tallos estipitados",
                antecesor: "230",
                genero: "",
                imagen: ""
            },
            {
                id: "232",
                clave: "118",
                caracteristica: "Tallos irregularmente ramificados; hojas del estípite pequeñas, parecidas a escamas, adpresas y triangular-acuminadas",
                antecesor: "231",
                genero: "Porotrichum",
                imagen: ""
            },
            {
                id: "233",
                clave: "118",
                caracteristica: "Tallos pinnados; hojas del estípite no parecidas a escamas",
                antecesor: "231",
                genero: "",
                imagen: ""
            },
            {
                id: "234",
                clave: "119",
                caracteristica: "Hojas opacas, erecto-extendidas, las del tallo con una base ligeramente auriculada",
                antecesor: "233",
                genero: "Pireella",
                imagen: ""
            },
            {
                id: "235",
                clave: "119",
                caracteristica: "Hojas lustrosas, imbricadas; las del tallo, decurrentes",
                antecesor: "233",
                genero: "Pterobryopsis",
                imagen: ""
            },
            {
                id: "236",
                clave: "117",
                caracteristica: "Tallos no diferenciados en estípite y ramas",
                antecesor: "230",
                genero: "",
                imagen: ""
            },
            {
                id: "237",
                clave: "120",
                caracteristica: "Hojas fuertemente plegadas al secarse",
                antecesor: "236",
                genero: "",
                imagen: ""
            },
            {
                id: "238",
                clave: "121",
                caracteristica: "hojas de las ramas túmidas al secarse; plantas colgantes",
                antecesor: "237",
                genero: "Meteorium",
                imagen: ""
            },
            {
                id: "239",
                clave: "121",
                caracteristica: "Hojas de las ramas erectas al secarse, plantas postradas",
                antecesor: "237",
                genero: "",
                imagen: ""
            },
            {
                id: "240",
                clave: "122",
                caracteristica: "Hojas del tallo erectas a esparcidas y con frecuencia ± secundadas; células foliares lisas",
                antecesor: "239",
                genero: "Palamocladium",
                imagen: ""
            },
            {
                id: "241",
                clave: "122",
                caracteristica: "Hojas del tallo falcado-secundas, laxamente erectas; células foliares proradas dorsalmente",
                antecesor: "239",
                genero: "Rhytidium",
                imagen: ""
            },
            {
                id: "242",
                clave: "120",
                caracteristica: "Hojas no plegadas al secarse",
                antecesor: "236",
                genero: "",
                imagen: ""
            },
            {
                id: "243",
                clave: "123",
                caracteristica: "Hojas de tallos y ramas generalmente diferenciadas; hojas del tallo ovadas, ampliamente cordado-ovadas, ± largamente acuminadas y decurrentes; hojas de las ramas más pequeñas más estrechas, no o ligeramente decurrentes",
                antecesor: "242",
                genero: "Kindbergia",
                imagen: ""
            },
            {
                id: "244",
                clave: "123",
                caracteristica: "Hojas de tallos y ramas similares o sólo algo diferenciados en tamaño",
                antecesor: "242",
                genero: "",
                imagen: ""
            },
            {
                id: "245",
                clave: "124",
                caracteristica: "Hojas con las células medias y distales uni o pluripapilosas",
                antecesor: "244",
                genero: "",
                imagen: ""
            },
            {
                id: "246",
                clave: "125",
                caracteristica: "Células foliares prorulosas",
                antecesor: "245",
                genero: "Cryphaea",
                imagen: ""
            },
            {
                id: "247",
                clave: "125",
                caracteristica: "Células foliares con las papilas sobre el lumen",
                antecesor: "245",
                genero: "",
                imagen: ""
            },
            {
                id: "248",
                clave: "126",
                caracteristica: "Células foliares medias y distales oblongo-hexagonales, densamente papilosas",
                antecesor: "247",
                genero: "Claopodium",
                imagen: ""
            },
            {
                id: "249",
                clave: "126",
                caracteristica: "Células foliares medias distales de otras formas, unipapilosas en uno o ambos lados",
                antecesor: "247",
                genero: "",
                imagen: ""
            },
            {
                id: "250",
                clave: "127",
                caracteristica: "Hojas de tallos y ramas lanceoladas con una base ovada, a veces subuladas frecuentemente rotas; células alares cuadradas a subcuadradas en un grupo denso",
                antecesor: "249",
                genero: "Prionodon",
                imagen: ""
            },
            {
                id: "251",
                clave: "127",
                caracteristica: "Hojas de tallos y ramas ovadas u ovado-lanceoladas; las puntas de las hojas maduras enteras; células alares oblatas",
                antecesor: "249",
                genero: "",
                imagen: ""
            },
            {
                id: "252",
                clave: "128",
                caracteristica: "Hojas imbricadas; Endostoma formado por una membrana basal que sobresale de la boca y segmentos reducidos de color amarillo fuertemente papilosos",
                antecesor: "251",
                genero: "Lindbergia",
                imagen: ""
            },
            {
                id: "253",
                clave: "128",
                caracteristica: "Hojas erectas; Endostoma formado por segmentos lanceolados, hialinos y ligeramente papilosos",
                antecesor: "251",
                genero: "Leskea",
                imagen: ""
            },
            {
                id: "254",
                clave: "124",
                caracteristica: "Hojas con las células medias y distales sin papilas",
                antecesor: "244",
                genero: "",
                imagen: ""
            },
            {
                id: "255",
                clave: "129",
                caracteristica: "Células alares fuertemente diferenciadas, a veces en grupos excavados casi hasta la costa, de pared delgada e infladas, hialinas o coloreadas",
                antecesor: "254",
                genero: "Drepanocladus",
                imagen: ""
            },
            {
                id: "256",
                clave: "129",
                caracteristica: "Células alares cuadradas o rectangulares, a veces infladas",
                antecesor: "254",
                genero: "",
                imagen: ""
            },
            {
                id: "257",
                clave: "130",
                caracteristica: "Ápice de la hoja acuminado o terminando en un pelo",
                antecesor: "256",
                genero: "Fabronia",
                imagen: ""
            },
            {
                id: "258",
                clave: "130",
                caracteristica: "Ápice de la hoja obtuso a agudo",
                antecesor: "256",
                genero: "",
                imagen: ""
            },
            {
                id: "259",
                clave: "131",
                caracteristica: "Opérculo largamente rostrado; células del acumen más cortas que las células adyacentes de la hoja",
                antecesor: "258",
                genero: "Rhynchostegium",
                imagen: ""
            },
            {
                id: "260",
                clave: "131",
                caracteristica: "Opérculo corto; células del acumen de la hoja no diferenciadas",
                antecesor: "258",
                genero: "",
                imagen: ""
            },
            {
                id: "261",
                clave: "132",
                caracteristica: "Hojas con células alargadas, romboidal-hexagonales, con decurrencias frecuentemente, cortas o largas",
                antecesor: "260",
                genero: "Brachythecium",
                imagen: ""
            },
            {
                id: "262",
                clave: "132",
                caracteristica: "Hojas con células cortas, sin decurrencias conspicuas",
                antecesor: "260",
                genero: "",
                imagen: ""
            },
            {
                id: "263",
                clave: "133",
                caracteristica: "Células de la hoja de pared gruesa; cápsula erectas cortamente exserta; vagínula y caliptra pilosas",
                antecesor: "262",
                genero: "Forstroemia",
                imagen: ""
            },
            {
                id: "264",
                clave: "133",
                caracteristica: "Células de la hoja de pared delgada; cápsula inclinada u horizontal, curvada o arqueada, claramente exserta; vagínula y caliptra lisas",
                antecesor: "262",
                genero: "",
                imagen: ""
            },
            {
                id: "265",
                clave: "134",
                caracteristica: "Plantas opacas; hojas erecto-esparcidas al secarse, ampliamente esparcidas al mojarse",
                antecesor: "264",
                genero: "Amblystegium",
                imagen: ""
            },
            {
                id: "266",
                clave: "134",
                caracteristica: "Plantas lustrosas; hojas ampliamente esparcidas al secarse a escuarrosas al mojarse",
                antecesor: "264",
                genero: "",
                imagen: ""
            },
            {
                id: "267",
                clave: "135",
                caracteristica: "Hojas de los tallos hasta 1.7 mm de largo; células alares ligeramente infladas, las células más anchas 10-18 µm",
                antecesor: "266",
                genero: "Campyliadelphus",
                imagen: ""
            },
            {
                id: "268",
                clave: "135",
                caracteristica: "Hojas de los tallos al menos 1.6 mm de largo, células alares muy infladas, las células más anchas 17-32 µm",
                antecesor: "266",
                genero: "Campylophylum",
                imagen: ""
            },
            {
                id: "269",
                clave: "116",
                caracteristica: "Hojas de tallos y ramas sin células alares",
                antecesor: "229",
                genero: "",
                imagen: ""
            },
            {
                id: "270",
                clave: "136",
                caracteristica: "Tallos sin parafilios",
                antecesor: "269",
                genero: "",
                imagen: ""
            },
            {
                id: "271",
                clave: "137",
                caracteristica: "Plantas en matas obscuras, con 4 hileras de hojas, las dorsales más pequeñas",
                antecesor: "270",
                genero: "Racopilum",
                imagen: ""
            },
            {
                id: "272",
                clave: "137",
                caracteristica: "Plantas en matas lustrosas, bronceadas o verde-amarillento opacas; las hojas no insertadas en hileras evidentes",
                antecesor: "270",
                genero: "",
                imagen: ""
            },
            {
                id: "273",
                clave: "138",
                caracteristica: "Células foliares medias y distales linear a linear-romboidales, lisas; costa recta",
                antecesor: "272",
                genero: "Rozea",
                imagen: ""
            },
            {
                id: "274",
                clave: "138",
                caracteristica: "Células casi uniformes en toda la hoja, cortamente oblongas proradas en la espalda; costa flexuosa arriba",
                antecesor: "272",
                genero: "Herpetineuron",
                imagen: ""
            },
            {
                id: "275",
                clave: "136",
                caracteristica: "Tallos con parafilios simples o compuestos",
                antecesor: "269",
                genero: "",
                imagen: ""
            },
            {
                id: "276",
                clave: "139",
                caracteristica: "Parafilios abundantes, ramificados y polimórficos",
                antecesor: "275",
                genero: "",
                imagen: ""
            },
            {
                id: "277",
                clave: "140",
                caracteristica: "Células de la hoja con una papila abaxial central fuerte",
                antecesor: "276",
                genero: "Thuidium",
                imagen: ""
            },
            {
                id: "278",
                clave: "140",
                caracteristica: "Células de la hoja con una papila abaxial central pequeña o en los ángulos distales",
                antecesor: "276",
                genero: "Haplocladium",
                imagen: ""
            },
            {
                id: "279",
                clave: "139",
                caracteristica: "Parafilios escasos, esparcidos, débilmente ramificados",
                antecesor: "275",
                genero: "",
                imagen: ""
            },
            {
                id: "280",
                clave: "141",
                caracteristica: "Tallo 1-pinnado; células foliares combadas en ambas superficies",
                antecesor: "279",
                genero: "Rauiella",
                imagen: ""
            },
            {
                id: "281",
                clave: "141",
                caracteristica: "Tallo regularmente 1-2-pinnado; células foliares no combadas",
                antecesor: "279",
                genero: "Cyrto-hypnum",
                imagen: ""
            },
            {
                id: "282",
                clave: "115",
                caracteristica: "Costa doble",
                antecesor: "228",
                genero: "",
                imagen: ""
            },
            {
                id: "283",
                clave: "142",
                caracteristica: "Células foliares papilosas",
                antecesor: "282",
                genero: "",
                imagen: ""
            },
            {
                id: "284",
                clave: "143",
                caracteristica: "Plantas estipitadas",
                antecesor: "283",
                genero: "Mittenothamnium",
                imagen: ""
            },
            {
                id: "285",
                clave: "143",
                caracteristica: "Plantas no estipitadas",
                antecesor: "283",
                genero: "",
                imagen: ""
            },
            {
                id: "286",
                clave: "144",
                caracteristica: "Tallos foliosos más o menos aplanados",
                antecesor: "285",
                genero: "Taxiphyllum",
                imagen: ""
            },
            {
                id: "287",
                clave: "144",
                caracteristica: "Tallos foliosos cilíndricos, no aplanados",
                antecesor: "285",
                genero: "",
                imagen: ""
            },
            {
                id: "288",
                clave: "145",
                caracteristica: "Hojas de tallos y ramas diferenciadas, esparcidas a escuarrosas o falcado-secundas",
                antecesor: "287",
                genero: "Ctenidium",
                imagen: ""
            },
            {
                id: "289",
                clave: "145",
                caracteristica: "Hojas de tallos y ramas similares en tamaño y forma",
                antecesor: "287",
                genero: "",
                imagen: ""
            },
            {
                id: "290",
                clave: "146",
                caracteristica: "Células foliares medias distales irregularmente oblongo-romboidales, de pared firme menudamente multipapilosas",
                antecesor: "289",
                genero: "Leptopterigynandrum",
                imagen: ""
            },
            {
                id: "291",
                clave: "146",
                caracteristica: "Células distales foliares de forma variable, proradas",
                antecesor: "289",
                genero: "",
                imagen: ""
            },
            {
                id: "292",
                clave: "147",
                caracteristica: "Costa doble, extendiéndose 0.7-0.9 de la longitud de la hoja, usualmente crestada en el dorso, la cresta 3-5 células de alto",
                antecesor: "291",
                genero: "Pilotrichum",
                imagen: ""
            },
            {
                id: "293",
                clave: "147",
                caracteristica: "Costa doble, extendiéndose casi hasta la mitad de la hoja o más",
                antecesor: "291",
                genero: "",
                imagen: ""
            },
            {
                id: "294",
                clave: "148",
                caracteristica: "Plantas rígidas, opacas, con las hojas homómalas",
                antecesor: "293",
                genero: "Horridohypnum",
                imagen: ""
            },
            {
                id: "295",
                clave: "148",
                caracteristica: "Plantas suaves, lustrosas, con las hojas recurvadas a escuarrosas",
                antecesor: "293",
                genero: "Campylophyllum",
                imagen: ""
            },
            {
                id: "296",
                clave: "142",
                caracteristica: "Células foliares lisas",
                antecesor: "282",
                genero: "",
                imagen: ""
            },
            {
                id: "297",
                clave: "149",
                caracteristica: "Base de la hoja claramente decurrente",
                antecesor: "296",
                genero: "",
                imagen: ""
            },
            {
                id: "298",
                clave: "150",
                caracteristica: "Células alares infladas, con frecuencia esféricas; las de las decurrencias cuadradas a oblongas, de pared firme y delgada",
                antecesor: "297",
                genero: "Plagiothecium",
                imagen: ""
            },
            {
                id: "299",
                clave: "150",
                caracteristica: "Células alares cuadradas a subcuadradas, en grupo triangulares; las decurrencias formadas por 1-3 hileras de células de pared firme, con frecuencia quedándose en el tallo al hacer la disección",
                antecesor: "297",
                genero: "Platygyriella",
                imagen: ""
            },
            {
                id: "300",
                clave: "149",
                caracteristica: "Hojas no decurrentes",
                antecesor: "296",
                genero: "",
                imagen: ""
            },
            {
                id: "301",
                clave: "151",
                caracteristica: "Hojas onduladas y asimétricas; esporofitos inmersos",
                antecesor: "300",
                genero: "Neckera",
                imagen: ""
            },
            {
                id: "302",
                clave: "151",
                caracteristica: "Hojas no onduladas, simétricas; esporofitos exsertos",
                antecesor: "300",
                genero: "",
                imagen: ""
            },
            {
                id: "303",
                clave: "152",
                caracteristica: "Hojas de tallos y ramas principalmente adpresas, cóncavas, oblongo-lanceoladas a ovadas, obtusas a acuminadas; células alares más largas que anchas, en grupos triangulares",
                antecesor: "302",
                genero: "Entodon",
                imagen: ""
            },
            {
                id: "304",
                clave: "152",
                caracteristica: "Hojas de tallos y ramas de otra forma; células alares pocas, no formando grupos triangulares",
                antecesor: "302",
                genero: "",
                imagen: ""
            },
            {
                id: "305",
                clave: "153",
                caracteristica: "Plantas con propágulos filamentosos o ramas flagelíferas",
                antecesor: "304",
                genero: "",
                imagen: ""
            },
            {
                id: "306",
                clave: "154",
                caracteristica: "Tallos simples, esparcida o irregularmente ramificados, con propágulos filamentosos uniseriados, simples o ramificaos, con células papilosas",
                antecesor: "305",
                genero: "Isopterygium",
                imagen: ""
            },
            {
                id: "307",
                clave: "154",
                caracteristica: "Tallos pinnada a irregularmente ramificados, ramas erectas a ascendentes, con frecuencia con ramas flagelíferas en las axilas de las hojas superiores",
                antecesor: "305",
                genero: "Platygyrium",
                imagen: ""
            },
            {
                id: "308",
                clave: "153",
                caracteristica: "Plantas sin propágulos o ramas flagelíferas",
                antecesor: "304",
                genero: "",
                imagen: ""
            },
            {
                id: "309",
                clave: "155",
                caracteristica: "Hojas arregladas en hileras espiraladas, panduriformes, con la base ligeramente auriculada",
                antecesor: "308",
                genero: "Pilotrichella",
                imagen: ""
            },
            {
                id: "310",
                clave: "155",
                caracteristica: "Hojas con otros arreglos, no panduriformes ni auriculadas",
                antecesor: "308",
                genero: "",
                imagen: ""
            },
            {
                id: "311",
                clave: "156",
                caracteristica: "Hojas aplanadas, falcado-cultiformes, asimétricas, adpresas en 4 hileras",
                antecesor: "310",
                genero: "Isodrepanium",
                imagen: ""
            },
            {
                id: "312",
                clave: "156",
                caracteristica: "Hojas no aplanadas, con otros arreglos",
                antecesor: "310",
                genero: "",
                imagen: ""
            },
            {
                id: "313",
                clave: "157",
                caracteristica: "hojas del tallo más grandes y más acuminadas que las de las ramas",
                antecesor: "312",
                genero: "Heterophyllium",
                imagen: ""
            },
            {
                id: "314",
                clave: "157",
                caracteristica: "Hojas de tallos y ramas de tamaño similar",
                antecesor: "312",
                genero: "",
                imagen: ""
            },
            {
                id: "315",
                clave: "158",
                caracteristica: "Hojas fuertemente folcado-secundas",
                antecesor: "314",
                genero: "",
                imagen: ""
            },
            {
                id: "316",
                clave: "159",
                caracteristica: "Cápsulas erectas",
                antecesor: "315",
                genero: "Pylaisia",
                imagen: ""
            },
            {
                id: "317",
                clave: "159",
                caracteristica: "Cápsulas horizontales, curvadas",
                antecesor: "315",
                genero: "Hypnum",
                imagen: ""
            },
            {
                id: "319",
                clave: "158",
                caracteristica: "Hojas erectas u homómalas",
                antecesor: "314",
                genero: "",
                imagen: ""
            },
            {
                id: "320",
                clave: "160",
                caracteristica: "Hojas homómalas, bordes recurvados proximalmente; células alares numerosas, en 20-30 hileras a lo largo del borde proximal",
                antecesor: "319",
                genero: "Homomallium",
                imagen: ""
            },
            {
                id: "321",
                clave: "160",
                caracteristica: "Hojas erectas, bordes planos, células alares pocas",
                antecesor: "319",
                genero: "",
                imagen: ""
            },
            {
                id: "322",
                clave: "161",
                caracteristica: "Borde foliar entero, células alares 5-12 a lo largo del margen",
                antecesor: "321",
                genero: "Pylaisia",
                imagen: ""
            },
            {
                id: "323",
                clave: "161",
                caracteristica: "Borde foliar fuertemente serrado en la porción distal y serrulado hacia la base, células alares 1-4 a lo largo del margen",
                antecesor: "321",
                genero: "Herzogiella",
                imagen: ""
            }
        ];
    }
};
MusgosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MusgosService);



/***/ })

}]);
//# sourceMappingURL=caracteristicas-caracteristicas-module-es2015.js.map