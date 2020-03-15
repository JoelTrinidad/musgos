(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["genero-genero-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/genero/genero.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/genero/genero.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Genero</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card padding *ngFor=\"let genero of generos\">\n        <ion-card-title>{{genero.nombre}}</ion-card-title>\n        <ion-card-content>\n          <ion-img [src]=\"genero.imagen\" alt=\"Imagen no disponible\"></ion-img>\n        </ion-card-content>\n      </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/genero/genero-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/genero/genero-routing.module.ts ***!
  \*************************************************/
/*! exports provided: GeneroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneroPageRoutingModule", function() { return GeneroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _genero_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./genero.page */ "./src/app/genero/genero.page.ts");




const routes = [
    {
        path: '',
        component: _genero_page__WEBPACK_IMPORTED_MODULE_3__["GeneroPage"]
    }
];
let GeneroPageRoutingModule = class GeneroPageRoutingModule {
};
GeneroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GeneroPageRoutingModule);



/***/ }),

/***/ "./src/app/genero/genero.module.ts":
/*!*****************************************!*\
  !*** ./src/app/genero/genero.module.ts ***!
  \*****************************************/
/*! exports provided: GeneroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneroPageModule", function() { return GeneroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _genero_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./genero-routing.module */ "./src/app/genero/genero-routing.module.ts");
/* harmony import */ var _genero_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./genero.page */ "./src/app/genero/genero.page.ts");







let GeneroPageModule = class GeneroPageModule {
};
GeneroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _genero_routing_module__WEBPACK_IMPORTED_MODULE_5__["GeneroPageRoutingModule"]
        ],
        declarations: [_genero_page__WEBPACK_IMPORTED_MODULE_6__["GeneroPage"]]
    })
], GeneroPageModule);



/***/ }),

/***/ "./src/app/genero/genero.page.scss":
/*!*****************************************!*\
  !*** ./src/app/genero/genero.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyby9nZW5lcm8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/genero/genero.page.ts":
/*!***************************************!*\
  !*** ./src/app/genero/genero.page.ts ***!
  \***************************************/
/*! exports provided: GeneroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneroPage", function() { return GeneroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servicios_generos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios/generos.service */ "./src/app/servicios/generos.service.ts");




let GeneroPage = class GeneroPage {
    constructor(route, gen) {
        this.route = route;
        this.gen = gen;
        this.genero = this.route.snapshot.paramMap.get('genero');
        this.generos = this.gen.generos.filter(x => x.nombre == this.genero);
    }
    ngOnInit() {
    }
};
GeneroPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _servicios_generos_service__WEBPACK_IMPORTED_MODULE_3__["GenerosService"] }
];
GeneroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-genero',
        template: __webpack_require__(/*! raw-loader!./genero.page.html */ "./node_modules/raw-loader/index.js!./src/app/genero/genero.page.html"),
        styles: [__webpack_require__(/*! ./genero.page.scss */ "./src/app/genero/genero.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _servicios_generos_service__WEBPACK_IMPORTED_MODULE_3__["GenerosService"]])
], GeneroPage);



/***/ }),

/***/ "./src/app/servicios/generos.service.ts":
/*!**********************************************!*\
  !*** ./src/app/servicios/generos.service.ts ***!
  \**********************************************/
/*! exports provided: GenerosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerosService", function() { return GenerosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GenerosService = class GenerosService {
    constructor() {
        this.generos = [
            {
                nombre: "Acaulon",
                imagen: "assets/img/generos/Acaulon.jpg"
            },
            {
                nombre: "Aloina",
                imagen: "assets/img/generos/Aloina.jpg"
            },
            {
                nombre: "Aloinella",
                imagen: "assets/img/generos/Aloinella.jpg"
            },
            {
                nombre: "Amblystegium",
                imagen: "assets/img/generos/Amblystegium.jpg"
            },
            {
                nombre: "Amphidium",
                imagen: "assets/img/generos/Amphidium.jpg"
            },
            {
                nombre: "Anacolia",
                imagen: "assets/img/generos/Anacolia.jpg"
            },
            {
                nombre: "Andreaea",
                imagen: "assets/img/generos/andreae.jpg"
            },
            {
                nombre: "Anoectangium",
                imagen: "assets/img/generos/Anoectangium.jpg"
            },
            {
                nombre: "Anomobryum",
                imagen: "assets/img/generos/Anomobryum.jpg"
            },
            {
                nombre: "Aongstroemia",
                imagen: "assets/img/generos/Aongstroemia.jpg"
            },
            {
                nombre: "Archidium",
                imagen: "assets/img/generos/Archidium.jpg"
            },
            {
                nombre: "Astomiopsis",
                imagen: "assets/img/generos/Astomiopsis.jpg"
            },
            {
                nombre: "Atractylocarpus",
                imagen: "assets/img/generos/Atractylocarpus.jpg"
            },
            {
                nombre: "Atrichum",
                imagen: "assets/img/generos/Atrichum.jpg"
            },
            {
                nombre: "Barbula",
                imagen: "assets/img/generos/Barbula.jpg"
            },
            {
                nombre: "Bartramia",
                imagen: "assets/img/generos/Bartramia.jpg"
            },
            {
                nombre: "Brachymenium",
                imagen: "assets/img/generos/Brachymenium.jpg"
            },
            {
                nombre: "Brachymitrion",
                imagen: "assets/img/generos/Brachymitrion.jpg"
            },
            {
                nombre: "Brachythecium",
                imagen: "assets/img/generos/Brachythecium.jpg"
            },
            {
                nombre: "Braunia",
                imagen: "assets/img/generos/Braunia.jpg"
            },
            {
                nombre: "Breutelia",
                imagen: "assets/img/generos/Breutelia.jpg"
            },
            {
                nombre: "Bryoceuthospora",
                imagen: "assets/img/generos/Bryoceuthospora.jpg"
            },
            {
                nombre: "Bryoerythrophyllum",
                imagen: "assets/img/generos/Bryoerythrophyllum.jpg"
            },
            {
                nombre: "Bryomanginia",
                imagen: "assets/img/generos/Bryomanginia.jpg"
            },
            {
                nombre: "Bryoxiphium",
                imagen: "assets/img/generos/Bryoxiphium.jpg"
            },
            {
                nombre: "Bryum",
                imagen: "assets/img/generos/Bryum.jpg"
            },
            {
                nombre: "Campyliadelphus",
                imagen: "assets/img/generos/Campyliadelphus.jpg"
            },
            {
                nombre: "Campylophyllum",
                imagen: "assets/img/generos/"
            },
            {
                nombre: "Campylophylum",
                imagen: "assets/img/generos/Campylophylum.jpg"
            },
            {
                nombre: "Campylopus",
                imagen: "assets/img/generos/Campylopus.jpg"
            },
            {
                nombre: "Ceratodon",
                imagen: "assets/img/generos/Ceratodon.jpg"
            },
            {
                nombre: "Chenia",
                imagen: "assets/img/generos/Chenia.jpg"
            },
            {
                nombre: "Claopodium",
                imagen: "assets/img/generos/Claopodium.jpg"
            },
            {
                nombre: "Coscinodon",
                imagen: "assets/img/generos/Coscinodon.jpg"
            },
            {
                nombre: "Cryphaea",
                imagen: "assets/img/generos/Cryphaea.jpg"
            },
            {
                nombre: "Ctenidium",
                imagen: "assets/img/generos/Ctenidium.jpg"
            },
            {
                nombre: "Cyrto-hypnum",
                imagen: "assets/img/generos/Cyrto-hypnum.jpg"
            },
            {
                nombre: "Desmatodon",
                imagen: "assets/img/generos/Desmatodon.jpg"
            },
            {
                nombre: "Dicranella",
                imagen: "assets/img/generos/Dicranella.jpg"
            },
            {
                nombre: "Dicranoweisia",
                imagen: "assets/img/generos/Dicranoweisia.jpg"
            },
            {
                nombre: "Dicranun",
                imagen: "assets/img/generos/Dicranum.jpg"
            },
            {
                nombre: "Didymodon",
                imagen: "assets/img/generos/Didymodon.jpg"
            },
            {
                nombre: "Diphyscium",
                imagen: "assets/img/generos/Diphyscium.jpg"
            },
            {
                nombre: "Distichium",
                imagen: "assets/img/generos/Distichium.jpg"
            },
            {
                nombre: "Ditrichum",
                imagen: "assets/img/generos/Ditrichum.jpg"
            },
            {
                nombre: "Drepanocladus",
                imagen: "assets/img/generos/Drepanocladus.jpg"
            },
            {
                nombre: "Encalypta",
                imagen: "assets/img/generos/Encalypta.jpg"
            },
            {
                nombre: "Entodon",
                imagen: "assets/img/generos/Entodon.jpg"
            },
            {
                nombre: "Entosthodon",
                imagen: "assets/img/generos/Entosthodon.jpg"
            },
            {
                nombre: "Epipterygium",
                imagen: "assets/img/generos/Epipterygium.jpg"
            },
            {
                nombre: "Eustichia",
                imagen: "assets/img/generos/Eustichia.jpg"
            },
            {
                nombre: "Fabronia",
                imagen: "assets/img/generos/Fabronia.jpg"
            },
            {
                nombre: "Fissidens",
                imagen: "assets/img/generos/fissidens.jpg"
            },
            {
                nombre: "Flowersia",
                imagen: "assets/img/generos/"
            },
            {
                nombre: "Forstroemia",
                imagen: "assets/img/generos/Forstroemia.jpg"
            },
            {
                nombre: "Funari",
                imagen: "assets/img/generos/Funaria.jpg"
            },
            {
                nombre: "Gigaspermum",
                imagen: "assets/img/generos/Gigaspermum.jpg"
            },
            {
                nombre: "Globulinella",
                imagen: "assets/img/generos/Globulinella.jpg"
            },
            {
                nombre: "Grimmia",
                imagen: "assets/img/generos/Grimmia.jpg"
            },
            {
                nombre: "Gymnostomum",
                imagen: "assets/img/generos/Gymnostomum.jpg"
            },
            {
                nombre: "Haplocladium",
                imagen: "assets/img/generos/Haplocladium.jpg"
            },
            {
                nombre: "Hedwigia",
                imagen: "assets/img/generos/Hedwigia.jpg"
            },
            {
                nombre: "Hedwigidium",
                imagen: "assets/img/generos/Hedwigidium.jpg"
            },
            {
                nombre: "Hennediella",
                imagen: "assets/img/generos/Hennediella.jpg"
            },
            {
                nombre: "Herpetineuron",
                imagen: "assets/img/generos/Herpetineuron.jpg"
            },
            {
                nombre: "Herzogiella",
                imagen: "assets/img/generos/Herzogiella.jpg"
            },
            {
                nombre: "Heterophyllium",
                imagen: "assets/img/generos/Heterophyllium.jpg"
            },
            {
                nombre: "Homomallium",
                imagen: "assets/img/generos/Homomallium.jpg"
            },
            {
                nombre: "Horridohypnum",
                imagen: "assets/img/generos/Horridohypnum.jpg"
            },
            {
                nombre: "Hymenostylium",
                imagen: "assets/img/generos/Hymenostylium.jpg"
            },
            {
                nombre: "Hyophila",
                imagen: "assets/img/generos/Hyophila.jpg"
            },
            {
                nombre: "Hypnum",
                imagen: "assets/img/generos/Hypnum.jpg"
            },
            {
                nombre: "Isodrepanium",
                imagen: "assets/img/generos/Isodrepanium.jpg"
            },
            {
                nombre: "Isopterigiopsis",
                imagen: "assets/img/generos/Isopterigiopsis.jpg"
            },
            {
                nombre: "Isopterygium",
                imagen: "assets/img/generos/Isopterygium.jpg"
            },
            {
                nombre: "Kindbergia",
                imagen: "assets/img/generos/Kindbergia.jpg"
            },
            {
                nombre: "Leptodontium",
                imagen: "assets/img/generos/Leptodontium.jpg"
            },
            {
                nombre: "Leptopterigynandrum",
                imagen: "assets/img/generos/Leptopterigynandrum.jpg"
            },
            {
                nombre: "Leskea",
                imagen: "assets/img/generos/Leskea.jpg"
            },
            {
                nombre: "Leucodon",
                imagen: "assets/img/generos/Leucodon.jpg"
            },
            {
                nombre: "Leucoloma",
                imagen: "assets/img/generos/Leucoloma.jpg"
            },
            {
                nombre: "Lindbergia",
                imagen: "assets/img/generos/Lindbergia.jpg"
            },
            {
                nombre: "Lorentzeilla",
                imagen: "assets/img/generos/Lorentziella.jpg"
            },
            {
                nombre: "Macrocoma",
                imagen: "assets/img/generos/Macrocoma.jpg"
            },
            {
                nombre: "Meteorium",
                imagen: "assets/img/generos/Meteorium.jpg"
            },
            {
                nombre: "Micromitrium",
                imagen: "assets/img/generos/Micromitrium.jpg"
            },
            {
                nombre: "Mielichhoferia",
                imagen: "assets/img/generos/Mielichhoferia.jpg"
            },
            {
                nombre: "Mironia",
                imagen: "assets/img/generos/Mironia.jpg"
            },
            {
                nombre: "Mittenothamnium",
                imagen: "assets/img/generos/Mittenothamnium.jpg"
            },
            {
                nombre: "Mnium",
                imagen: "assets/img/generos/Mnium.jpg"
            },
            {
                nombre: "Molendoa",
                imagen: "assets/img/generos/Molendoa.jpg"
            },
            {
                nombre: "Neckera",
                imagen: "assets/img/generos/Neckera.jpg"
            },
            {
                nombre: "Neosharpiella",
                imagen: "assets/img/generos/Neosharpiella.jpg"
            },
            {
                nombre: "Notoligotrichum",
                imagen: "assets/img/generos/notoligotrichum_angulatum.jpg"
            },
            {
                nombre: "Oreoweisia",
                imagen: "assets/img/generos/Oreoweisia.jpg"
            },
            {
                nombre: "Orthodontium",
                imagen: "assets/img/generos/Orthodontium.jpg"
            },
            {
                nombre: "Orthotrichum",
                imagen: "assets/img/generos/Orthotrichum.jpg"
            },
            {
                nombre: "Palamocladium",
                imagen: "assets/img/generos/Palamocladium.jpg"
            },
            {
                nombre: "Paraleucobryum",
                imagen: "assets/img/generos/Paraleucobryum.jpg"
            },
            {
                nombre: "Phascum",
                imagen: "assets/img/generos/Phascum.jpg"
            },
            {
                nombre: "Philonotis",
                imagen: "assets/img/generos/Philonotis.jpg"
            },
            {
                nombre: "Physcomitrium",
                imagen: "assets/img/generos/Physcomitrium.jpg"
            },
            {
                nombre: "Pilopogon",
                imagen: "assets/img/generos/Pilopogon.jpg"
            },
            {
                nombre: "Pilotrichella",
                imagen: "assets/img/generos/Pilotrichella.jpg"
            },
            {
                nombre: "Pilotrichum",
                imagen: "assets/img/generos/Pilotrichum.jpg"
            },
            {
                nombre: "Pireella",
                imagen: "assets/img/generos/Pireella.jpg"
            },
            {
                nombre: "Plagiomnium",
                imagen: "assets/img/generos/Plagiomnium.jpg"
            },
            {
                nombre: "Plagiothecium",
                imagen: "assets/img/generos/Plagiothecium.jpg"
            },
            {
                nombre: "Platygyriella",
                imagen: "assets/img/generos/Platygyriella.jpg"
            },
            {
                nombre: "Platygyrium",
                imagen: "assets/img/generos/Platygyrium.jpg"
            },
            {
                nombre: "Pleuridium",
                imagen: "assets/img/generos/Pleuridium.jpg"
            },
            {
                nombre: "Pleuridium aurantiacum",
                imagen: "assets/img/generos/"
            },
            {
                nombre: "Pleurochaete",
                imagen: "assets/img/generos/Pleurochaete.jpg"
            },
            {
                nombre: "Pogonatum",
                imagen: "assets/img/generos/Pogonatum.jpg"
            },
            {
                nombre: "Pohlia",
                imagen: "assets/img/generos/Pohlia.jpg"
            },
            {
                nombre: "Polytrichastrum",
                imagen: "assets/img/generos/Polytrichastrum.jpg"
            },
            {
                nombre: "Polytrichum",
                imagen: "assets/img/generos/Polytrichum.jpg"
            },
            {
                nombre: "Porotrichum",
                imagen: "assets/img/generos/Porotrichum.jpg"
            },
            {
                nombre: "Prionodon",
                imagen: "assets/img/generos/Prionodon.jpg"
            },
            {
                nombre: "Pseudephemerum",
                imagen: "assets/img/generos/pseudephemerum.jpg"
            },
            {
                nombre: "Pseudocrossidium",
                imagen: "assets/img/generos/Pseudocrossidium.jpg"
            },
            {
                nombre: "Pterobryopsis",
                imagen: "assets/img/generos/Pterobryopsis.jpg"
            },
            {
                nombre: "Ptrychomitrium",
                imagen: "assets/img/generos/Ptrychomitrium.jpg"
            },
            {
                nombre: "Pylaisia",
                imagen: "assets/img/generos/Pylaisia.jpg"
            },
            {
                nombre: "Pylaisiadelpha",
                imagen: "assets/img/generos/Pylaisiadelpha.jpg"
            },
            {
                nombre: "Racomitrium",
                imagen: "assets/img/generos/Racomitrium.jpg"
            },
            {
                nombre: "Racopilum",
                imagen: "assets/img/generos/Racopilum.jpg"
            },
            {
                nombre: "Rauiella",
                imagen: "assets/img/generos/Rauiella.jpg"
            },
            {
                nombre: "Rhabdoweisia",
                imagen: "assets/img/generos/Rhabdoweisia.jpg"
            },
            {
                nombre: "Rhexophyllum",
                imagen: "assets/img/generos/Rhexophyllum.jpg"
            },
            {
                nombre: "Rhodobryum",
                imagen: "assets/img/generos/Rhodobryum.jpg"
            },
            {
                nombre: "Rhynchostegium",
                imagen: "assets/img/generos/Rhynchostegium.jpg"
            },
            {
                nombre: "Rhytidium",
                imagen: "assets/img/generos/Rhytidium.jpg"
            },
            {
                nombre: "Rozea",
                imagen: "assets/img/generos/"
            },
            {
                nombre: "Sagenotortula",
                imagen: "assets/img/generos/Sagenotortula.jpg"
            },
            {
                nombre: "Saitobryum",
                imagen: "assets/img/generos/Saitobryum.jpg"
            },
            {
                nombre: "Schistidium",
                imagen: "assets/img/generos/Schistidium.jpg"
            },
            {
                nombre: "Schizymenium",
                imagen: "assets/img/generos/Schizymenium.jpg"
            },
            {
                nombre: "Sematophyllum",
                imagen: "assets/img/generos/Sematophyllum.jpg"
            },
            {
                nombre: "Symblepharis",
                imagen: "assets/img/generos/Symblepharis.jpg"
            },
            {
                nombre: "Synthetodontium",
                imagen: "assets/img/generos/Synthetodontium.jpg"
            },
            {
                nombre: "Syntrichia",
                imagen: "assets/img/generos/Syntrichia.jpg"
            },
            {
                nombre: "Taxiphyllum",
                imagen: "assets/img/generos/Taxiphyllum.jpg"
            },
            {
                nombre: "Thuidium",
                imagen: "assets/img/generos/Thuidium.jpg"
            },
            {
                nombre: "Timmia",
                imagen: "assets/img/generos/Timmia.jpg"
            },
            {
                nombre: "Timmiella",
                imagen: "assets/img/generos/Timmiella.jpg"
            },
            {
                nombre: "Tortella",
                imagen: "assets/img/generos/Tortella.jpg"
            },
            {
                nombre: "Tortella fruchartii",
                imagen: "assets/img/generos/"
            },
            {
                nombre: "Trichostomum",
                imagen: "assets/img/generos/Trichostomum.jpg"
            },
            {
                nombre: "Uleobryum",
                imagen: "assets/img/generos/Uleobryum.jpg"
            },
            {
                nombre: "Weissia",
                imagen: "assets/img/generos/Weissia.jpg"
            },
            {
                nombre: "Zygodon",
                imagen: "assets/img/generos/Zygodon.jpg"
            }
        ];
    }
};
GenerosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GenerosService);



/***/ })

}]);
//# sourceMappingURL=genero-genero-module-es2015.js.map