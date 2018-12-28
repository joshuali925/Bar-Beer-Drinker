(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _barpage_barpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./barpage/barpage.component */ "./src/app/barpage/barpage.component.ts");
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _drinkerpage_drinkerpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drinkerpage/drinkerpage.component */ "./src/app/drinkerpage/drinkerpage.component.ts");
/* harmony import */ var _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drinker-details/drinker-details.component */ "./src/app/drinker-details/drinker-details.component.ts");
/* harmony import */ var _beerpage_beerpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./beerpage/beerpage.component */ "./src/app/beerpage/beerpage.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _querypage_querypage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./querypage/querypage.component */ "./src/app/querypage/querypage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { HashLocationStrategy, LocationStrategy } from '@angular/common';
var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'static', pathMatch: 'full', redirectTo: 'home' },
    { path: 'static/query', pathMatch: 'full', redirectTo: 'query' },
    { path: 'static/bars', pathMatch: 'full', redirectTo: 'bars' },
    { path: 'static/beers', pathMatch: 'full', redirectTo: 'beers' },
    { path: 'static/drinkers', pathMatch: 'full', redirectTo: 'drinkers' },
    { path: 'home', pathMatch: 'full', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"] },
    { path: 'bars', pathMatch: 'full', component: _barpage_barpage_component__WEBPACK_IMPORTED_MODULE_3__["BarpageComponent"] },
    { path: 'bars/:bar', pathMatch: 'full', component: _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_4__["BarDetailsComponent"] },
    { path: 'drinkers', pathMatch: 'full', component: _drinkerpage_drinkerpage_component__WEBPACK_IMPORTED_MODULE_5__["DrinkerpageComponent"] },
    { path: 'drinkers/:drinker', pathMatch: 'full', component: _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_6__["DrinkerDetailsComponent"] },
    { path: 'beers', pathMatch: 'full', component: _beerpage_beerpage_component__WEBPACK_IMPORTED_MODULE_7__["BeerpageComponent"] },
    { path: 'beers/:beer', pathMatch: 'full', component: _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_8__["BeerDetailsComponent"] },
    { path: 'query', pathMatch: 'full', component: _querypage_querypage_component__WEBPACK_IMPORTED_MODULE_9__["QuerypageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">Home</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n                                                                        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"/static/bars/index.html\">Bar</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"/static/beers/index.html\">Beer</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"/static/drinkers/index.html\">Drinker</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"/static/query/index.html\">Query</a>\n            </li>\n\n        </ul>\n    </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ui';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _barpage_barpage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./barpage/barpage.component */ "./src/app/barpage/barpage.component.ts");
/* harmony import */ var _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./drinker-details/drinker-details.component */ "./src/app/drinker-details/drinker-details.component.ts");
/* harmony import */ var _drinkerpage_drinkerpage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./drinkerpage/drinkerpage.component */ "./src/app/drinkerpage/drinkerpage.component.ts");
/* harmony import */ var _beerpage_beerpage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./beerpage/beerpage.component */ "./src/app/beerpage/beerpage.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _querypage_querypage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./querypage/querypage.component */ "./src/app/querypage/querypage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_7__["BarDetailsComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__["HomepageComponent"],
                _barpage_barpage_component__WEBPACK_IMPORTED_MODULE_9__["BarpageComponent"],
                _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_10__["DrinkerDetailsComponent"],
                _drinkerpage_drinkerpage_component__WEBPACK_IMPORTED_MODULE_11__["DrinkerpageComponent"],
                _beerpage_beerpage_component__WEBPACK_IMPORTED_MODULE_12__["BeerpageComponent"],
                _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_13__["BeerDetailsComponent"],
                _querypage_querypage_component__WEBPACK_IMPORTED_MODULE_14__["QuerypageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bar-details/bar-details.component.css":
/*!*******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.html":
/*!********************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n        <h1 class=\"display-4\">{{ barName }}</h1>\n        <p class=\"bar-details\" *ngIf=\"barDetails\">\n            {{ barDetails?.address + \", \" + barDetails?.state }}\n            <br>\n            {{ barDetails?.phone }}\n        </p>\n    </div>\n    <br>\n    <div class=\"container\">\n        <div id=\"squandergraph\"></div>\n    </div>\n    <br>\n    <div class=\"container\">\n        <div id=\"beergraph\"></div>\n    </div>\n    <br>\n    <div class=\"container\">\n        <div id=\"manfgraph\"></div>\n    </div>\n    <br>\n    <div class=\"container\">\n        <div id=\"salesvshourgraph\"></div>\n    </div>\n    <br>\n    <div class=\"container\">\n        <div id=\"salesvsdayofweekgraph\"></div>\n    </div>\n    <br>\n    <div class=\"container\">\n        <div id=\"salesvsmonthgraph\"></div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.ts ***!
  \******************************************************/
/*! exports provided: BarDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarDetailsComponent", function() { return BarDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarDetailsComponent = /** @class */ (function () {
    function BarDetailsComponent(barService, route) {
        var _this = this;
        this.barService = barService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.barName = paramMap.get('bar');
        });
        this.barService.findBars(this.barName).subscribe(function (data) {
            _this.barDetails = data[0];
        }, function (error) {
            if (error.status === 404) {
                alert('Bar not found');
            }
            else {
                console.error(error.status + ' - ' + error.body);
                alert('An error occurred on the server.');
            }
        });
        this.barService.getLargestSquanders(this.barName).subscribe(function (data) {
            var drinkers = [];
            var totals = [];
            data.forEach(function (drinker) {
                drinkers.push(drinker.drinker_name);
                totals.push(drinker.total_amount);
            });
            _this.renderGraph('squandergraph', drinkers, totals, 'Drinkers who are largest squanders', 'Drinker', 'Total');
        });
        this.barService.getPopularBeers(this.barName).subscribe(function (data) {
            var beers = [];
            var total_quantity = [];
            data.forEach(function (beer) {
                beers.push(beer.item_name);
                total_quantity.push(beer.total_quantity);
            });
            _this.renderGraph('beergraph', beers, total_quantity, 'Most popular beers', 'Beer', 'Total quantity');
        });
        this.barService.getPopularManfs(this.barName).subscribe(function (data) {
            var manfs = [];
            var total_quantity = [];
            data.forEach(function (manf) {
                manfs.push(manf.manufacture);
                total_quantity.push(manf.total_quantity);
            });
            _this.renderGraph('manfgraph', manfs, total_quantity, 'Manufactures who sell the most beers', 'Manufacture', 'Total');
        });
        this.barService.getSalesVsHour(this.barName).subscribe(function (data) {
            var hour = [];
            var total = [];
            data.forEach(function (x) {
                hour.push(x.hour);
                total.push(x.total);
            });
            _this.renderGraph('salesvshourgraph', hour, total, 'Sales on different periods of a day', 'Hour', 'Total');
        });
        this.barService.getSalesVsDayOfWeek(this.barName).subscribe(function (data) {
            var dayOfWeek = [];
            var total = [];
            data.forEach(function (x) {
                dayOfWeek.push(x.day_of_week);
                total.push(x.total);
            });
            _this.renderGraph('salesvsdayofweekgraph', dayOfWeek, total, 'Sales on different days of a week', 'Day of week', 'Total');
        });
        this.barService.getSalesVsMonth(this.barName).subscribe(function (data) {
            var month = [];
            var total = [];
            data.forEach(function (x) {
                month.push(x.month);
                total.push(x.total);
            });
            _this.renderGraph('salesvsmonthgraph', month, total, 'Sales on different months in a year', 'Month', 'Total');
        });
    }
    BarDetailsComponent.prototype.ngOnInit = function () {
    };
    BarDetailsComponent.prototype.renderGraph = function (id, x, y, title, x_legend, y_legend) {
        Highcharts.chart(id, {
            chart: {
                type: 'column'
            },
            title: {
                text: title
            },
            xAxis: {
                categories: x,
                title: {
                    text: x_legend
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: y_legend
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: y
                }]
        });
    };
    BarDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar-details',
            template: __webpack_require__(/*! ./bar-details.component.html */ "./src/app/bar-details/bar-details.component.html"),
            styles: [__webpack_require__(/*! ./bar-details.component.css */ "./src/app/bar-details/bar-details.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_2__["BarsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BarDetailsComponent);
    return BarDetailsComponent;
}());



/***/ }),

/***/ "./src/app/barpage/barpage.component.css":
/*!***********************************************!*\
  !*** ./src/app/barpage/barpage.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/barpage/barpage.component.html":
/*!************************************************!*\
  !*** ./src/app/barpage/barpage.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n        <h1 class=\"display-4\">Search bars</h1>\n        <p class=\"lead\">\n            Enter bar names to search, click on results to view details. \n        </p>\n        <form class=\"form-inline my-2 my-lg-0\">\n            <input class=\"form-control mr-sm-2\" type=\"search\" name=\"bar_name\" [(ngModel)]=\"bar_name\" placeholder=\"Search\"\n                aria-label=\"Search\">\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" (click)=\"findBars()\" type=\"submit\">Search</button>\n        </form>\n        <br>\n        <p-table [value]=\"bars\">\n            <ng-template pTemplate=\"header\">\n                <tr>\n                    <th>Name</th>\n                    <th>Phone</th>\n                    <th>Address</th>\n                    <th>State</th>\n                    <th>Open_hour</th>\n                    <th>Close_hour</th>\n                </tr>\n            </ng-template>\n            <ng-template pTemplate=\"body\" let-bar>\n                <tr>\n                    <td>\n                        <a routerLink=\"/bars/{{ bar.name }}\">\n                            {{ bar.name }}\n                        </a>\n                    </td>\n                    <th>{{ bar.phone }}</th>\n                    <th>{{ bar.address }}</th>\n                    <th>{{ bar.state }}</th>\n                    <th>{{ bar.open_hour }}</th>\n                    <th>{{ bar.close_hour }}</th>\n                </tr>\n            </ng-template>\n        </p-table>\n        <!-- <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Name</th>\n                    <th>Phone</th>\n                    <th>Address</th>\n                    <th>State</th>\n                    <th>Open_hour</th>\n                    <th>Close_hour</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let bar of bars; index as i\">\n                    <th>{{ i + 1 }}</th>\n                    <th>{{ bar.name }}</th>\n                    <th>{{ bar.phone }}</th>\n                    <th>{{ bar.address }}</th>\n                    <th>{{ bar.state }}</th>\n                    <th>{{ bar.open_hour }}</th>\n                    <th>{{ bar.close_hour }}</th>\n                </tr>\n            </tbody>\n        </table> -->\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/barpage/barpage.component.ts":
/*!**********************************************!*\
  !*** ./src/app/barpage/barpage.component.ts ***!
  \**********************************************/
/*! exports provided: BarpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarpageComponent", function() { return BarpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BarpageComponent = /** @class */ (function () {
    function BarpageComponent(barService) {
        this.barService = barService;
        this.bar_name = '';
    }
    BarpageComponent.prototype.ngOnInit = function () {
        this.getBars();
    };
    BarpageComponent.prototype.getBars = function () {
        var _this = this;
        this.barService.getBars().subscribe(function (data) {
            _this.bars = data;
        }, function (error) {
            alert('Could not retrieve a list of bars');
        });
    };
    BarpageComponent.prototype.findBars = function () {
        var _this = this;
        this.barService.findBars(this.bar_name).subscribe(function (data) {
            _this.bars = data;
        }, function (error) {
            alert('Could not retrieve a list of bars');
        });
    };
    BarpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-barpage',
            template: __webpack_require__(/*! ./barpage.component.html */ "./src/app/barpage/barpage.component.html"),
            styles: [__webpack_require__(/*! ./barpage.component.css */ "./src/app/barpage/barpage.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"]])
    ], BarpageComponent);
    return BarpageComponent;
}());



/***/ }),

/***/ "./src/app/bars.service.ts":
/*!*********************************!*\
  !*** ./src/app/bars.service.ts ***!
  \*********************************/
/*! exports provided: BarsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarsService", function() { return BarsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarsService = /** @class */ (function () {
    function BarsService(http) {
        this.http = http;
    }
    BarsService.prototype.anyQuery = function (query) {
        return this.http.get('/api/any-query/' + query);
    };
    BarsService.prototype.getBars = function () {
        return this.http.get('/api/bar');
    };
    BarsService.prototype.findBars = function (name) {
        return this.http.get('/api/bar/' + name);
    };
    BarsService.prototype.getDrinkers = function () {
        return this.http.get('/api/drinker');
    };
    BarsService.prototype.findDrinkers = function (name) {
        return this.http.get('/api/drinker/' + name);
    };
    BarsService.prototype.getBeers = function () {
        return this.http.get('/api/beer');
    };
    BarsService.prototype.findBeers = function (name) {
        return this.http.get('/api/beer/' + name);
    };
    BarsService.prototype.getFrequentCounts = function () {
        return this.http.get('/api/frequents-data');
    };
    BarsService.prototype.getBills = function (drinker_name) {
        return this.http.get('/api/bill/' + drinker_name);
    };
    BarsService.prototype.getBeersOrderedMost = function (drinker_name) {
        return this.http.get('/api/beers-ordered-most/' + drinker_name);
    };
    BarsService.prototype.getLargestSquanders = function (bar_name) {
        return this.http.get('/api/largest-squanders/' + bar_name);
    };
    BarsService.prototype.getPopularBeers = function (bar_name) {
        return this.http.get('/api/popular-beers/' + bar_name);
    };
    BarsService.prototype.getPopularManfs = function (bar_name) {
        return this.http.get('/api/popular-manfs/' + bar_name);
    };
    BarsService.prototype.getPopularBarsForBeer = function (beer_name) {
        return this.http.get('/api/popular-bars-for-beer/' + beer_name);
    };
    BarsService.prototype.getBiggestConsumers = function (beer_name) {
        return this.http.get('/api/biggest-consumers/' + beer_name);
    };
    BarsService.prototype.getSpendingInBars = function (drinker_name) {
        return this.http.get('/api/spending-in-bars/' + drinker_name);
    };
    BarsService.prototype.getSpendingVsHour = function (drinker_name) {
        return this.http.get('/api/spending-vs-hour/' + drinker_name);
    };
    BarsService.prototype.getSpendingVsDayOfWeek = function (drinker_name) {
        return this.http.get('/api/spending-vs-day-of-week/' + drinker_name);
    };
    BarsService.prototype.getSpendingVsMonth = function (drinker_name) {
        return this.http.get('/api/spending-vs-month/' + drinker_name);
    };
    BarsService.prototype.getSalesVsHour = function (bar_name) {
        return this.http.get('/api/sales-vs-hour/' + bar_name);
    };
    BarsService.prototype.getSalesVsDayOfWeek = function (bar_name) {
        return this.http.get('/api/sales-vs-day-of-week/' + bar_name);
    };
    BarsService.prototype.getSalesVsMonth = function (bar_name) {
        return this.http.get('/api/sales-vs-month/' + bar_name);
    };
    BarsService.prototype.getQuantityVsHour = function (beer_name) {
        return this.http.get('/api/quantity-vs-hour/' + beer_name);
    };
    BarsService.prototype.getQuantityVsDayOfWeek = function (beer_name) {
        return this.http.get('/api/quantity-vs-day-of-week/' + beer_name);
    };
    BarsService.prototype.getQuantityVsMonth = function (beer_name) {
        return this.http.get('/api/quantity-vs-month/' + beer_name);
    };
    BarsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BarsService);
    return BarsService;
}());



/***/ }),

/***/ "./src/app/beer-details/beer-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n        <h1 class=\"display-4\">{{ beerName }}</h1>\n    </div>\n    <br>\n    <div class=\"container\">\n        <div id=\"bargraph\"></div>\n    </div>\n    <br>\n    <div class=\"container\">\n        <div id=\"drinkergraph\"></div>\n    </div>\n    <br>\n    <div class=\"container\">\n        <div id=\"quantityvshourgraph\"></div>\n    </div>\n    <br>\n    <div class=\"container\">\n        <div id=\"quantityvsdayofweekgraph\"></div>\n    </div>\n    <br>\n    <div class=\"container\">\n        <div id=\"quantityvsmonthgraph\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.ts ***!
  \********************************************************/
/*! exports provided: BeerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerDetailsComponent", function() { return BeerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeerDetailsComponent = /** @class */ (function () {
    function BeerDetailsComponent(barService, route) {
        var _this = this;
        this.barService = barService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.beerName = paramMap.get('beer');
        });
        this.barService.getPopularBarsForBeer(this.beerName).subscribe(function (data) {
            var bars = [];
            var total_quantity = [];
            data.forEach(function (bar) {
                bars.push(bar.bar_name);
                total_quantity.push(bar.total_quantity);
            });
            _this.renderGraph('bargraph', bars, total_quantity, 'Bars where the item sells the most', 'Bar', 'Total quantity');
        });
        this.barService.getBiggestConsumers(this.beerName).subscribe(function (data) {
            var drinkers = [];
            var total_quantity = [];
            data.forEach(function (drinker) {
                drinkers.push(drinker.drinker_name);
                total_quantity.push(drinker.total_quantity);
            });
            _this.renderGraph('drinkergraph', drinkers, total_quantity, 'Biggest consumers of this item', 'Drinker', 'Total quantity');
        });
        this.barService.getQuantityVsHour(this.beerName).subscribe(function (data) {
            var hour = [];
            var total_quantity = [];
            data.forEach(function (x) {
                hour.push(x.hour);
                total_quantity.push(x.total_quantity);
            });
            _this.renderGraph('quantityvshourgraph', hour, total_quantity, 'Total quantity on different periods of a day', 'Hour', 'Total quantity');
        });
        this.barService.getQuantityVsDayOfWeek(this.beerName).subscribe(function (data) {
            var dayOfWeek = [];
            var total_quantity = [];
            data.forEach(function (x) {
                dayOfWeek.push(x.day_of_week);
                total_quantity.push(x.total_quantity);
            });
            _this.renderGraph('quantityvsdayofweekgraph', dayOfWeek, total_quantity, 'Total quantity on different days of a week', 'Day of Week', 'Total quantity');
        });
        this.barService.getQuantityVsMonth(this.beerName).subscribe(function (data) {
            var month = [];
            var total_quantity = [];
            data.forEach(function (x) {
                month.push(x.month);
                total_quantity.push(x.total_quantity);
            });
            _this.renderGraph('quantityvsmonthgraph', month, total_quantity, 'Total quantity on different months in a year', 'Month', 'Total quantity');
        });
    }
    BeerDetailsComponent.prototype.ngOnInit = function () {
    };
    BeerDetailsComponent.prototype.renderGraph = function (id, x, y, title, x_legend, y_legend) {
        Highcharts.chart(id, {
            chart: {
                type: 'column'
            },
            title: {
                text: title
            },
            xAxis: {
                categories: x,
                title: {
                    text: x_legend
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: y_legend
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: y
                }]
        });
    };
    BeerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beer-details',
            template: __webpack_require__(/*! ./beer-details.component.html */ "./src/app/beer-details/beer-details.component.html"),
            styles: [__webpack_require__(/*! ./beer-details.component.css */ "./src/app/beer-details/beer-details.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_2__["BarsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BeerDetailsComponent);
    return BeerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/beerpage/beerpage.component.css":
/*!*************************************************!*\
  !*** ./src/app/beerpage/beerpage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/beerpage/beerpage.component.html":
/*!**************************************************!*\
  !*** ./src/app/beerpage/beerpage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n        <h1 class=\"display-4\">Search beers</h1>\n        <p class=\"lead\">\n            Enter beer names to search, click on results to view details.\n        </p>\n        <form class=\"form-inline my-2 my-lg-0\">\n            <input class=\"form-control mr-sm-2\" type=\"search\" name=\"beer_name\" [(ngModel)]=\"beer_name\" placeholder=\"Search\"\n                aria-label=\"Search\">\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" (click)=\"findBeers()\" type=\"submit\">Search</button>\n        </form>\n        <br>\n        <p-table [value]=\"beers\">\n            <ng-template pTemplate=\"header\">\n                <tr>\n                    <th>Name</th>\n                    <th>Manufacture</th>\n\n                </tr>\n            </ng-template>\n            <ng-template pTemplate=\"body\" let-beer>\n                <tr>\n                    <td>\n                        <a routerLink=\"/beers/{{ beer.name }}\">\n                            {{ beer.name }}\n                        </a>\n                    </td>\n                    <th>{{ beer.manufacture }}</th>\n\n                </tr>\n            </ng-template>\n        </p-table>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/beerpage/beerpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/beerpage/beerpage.component.ts ***!
  \************************************************/
/*! exports provided: BeerpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerpageComponent", function() { return BeerpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BeerpageComponent = /** @class */ (function () {
    function BeerpageComponent(barService) {
        this.barService = barService;
        this.beer_name = '';
    }
    BeerpageComponent.prototype.ngOnInit = function () {
        this.getBeers();
    };
    BeerpageComponent.prototype.getBeers = function () {
        var _this = this;
        this.barService.getBeers().subscribe(function (data) {
            _this.beers = data;
        }, function (error) {
            alert('Could not retrieve a list of beers');
        });
    };
    BeerpageComponent.prototype.findBeers = function () {
        var _this = this;
        console.log(this.beer_name);
        this.barService.findBeers(this.beer_name).subscribe(function (data) {
            _this.beers = data;
        }, function (error) {
            alert('Could not retrieve a list of beers');
        });
    };
    BeerpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beerpage',
            template: __webpack_require__(/*! ./beerpage.component.html */ "./src/app/beerpage/beerpage.component.html"),
            styles: [__webpack_require__(/*! ./beerpage.component.css */ "./src/app/beerpage/beerpage.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"]])
    ], BeerpageComponent);
    return BeerpageComponent;
}());



/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n        <h1 class=\"display-4\">{{ drinkerName }}</h1>\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>Transaction ID</th>\n                    <th>Bar</th>\n                    <th>Time</th>\n                    <th>Total</th>\n                    <th>Tip</th>\n                    <th>Tax</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let bill of bills\">\n                    <th>{{ bill.transaction_id }}</th>\n                    <th>{{ bill.bar_name }}</th>\n                    <th>{{ bill.time }}</th>\n                    <th>{{ bill.total }}</th>\n                    <th>{{ bill.tip }}</th>\n                    <th>{{ bill.tax }}</th>\n                </tr>\n            </tbody>\n        </table>\n        <br>\n        <div class=\"container\">\n            <div id=\"ordergraph\"></div>\n        </div>\n        <br>\n        <div class=\"container\">\n            <div id=\"spendinginbarsgraph\"></div>\n        </div>\n        <br>\n        <div class=\"container\">\n            <div id=\"spendingvshourgraph\"></div>\n        </div>\n        <br>\n        <div class=\"container\">\n            <div id=\"spendingvsdayofweek\"></div>\n        </div>\n        <br>\n        <div class=\"container\">\n            <div id=\"spendingvsmonthgraph\"></div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.ts ***!
  \**************************************************************/
/*! exports provided: DrinkerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerDetailsComponent", function() { return DrinkerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DrinkerDetailsComponent = /** @class */ (function () {
    function DrinkerDetailsComponent(barService, route) {
        var _this = this;
        this.barService = barService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.drinkerName = paramMap.get('drinker');
        });
        this.barService.getBills(this.drinkerName).subscribe(function (data) {
            _this.bills = data;
        }, function (error) {
            if (error.status === 404) {
                alert('Drinker not found');
            }
            else {
                console.error(error.status + ' - ' + error.body);
                alert('An error occurred on the server.');
            }
        });
        this.barService.getBeersOrderedMost(this.drinkerName).subscribe(function (data) {
            var item_names = [];
            var item_quantities = [];
            data.forEach(function (item) {
                item_names.push(item.item_name);
                item_quantities.push(item.total_quantity);
            });
            _this.renderGraph('ordergraph', item_names, item_quantities, 'Items ordered the most', 'Items', 'Number of items');
        });
        this.barService.getSpendingInBars(this.drinkerName).subscribe(function (data) {
            var bar_name = [];
            var total = [];
            data.forEach(function (x) {
                bar_name.push(x.bar_name);
                total.push(x.total);
            });
            _this.renderGraph('spendinginbarsgraph', bar_name, total, 'Spending in different bars', 'Bar', 'Total spendings');
        });
        this.barService.getSpendingVsHour(this.drinkerName).subscribe(function (data) {
            var hour = [];
            var total = [];
            data.forEach(function (x) {
                hour.push(x.hour);
                total.push(x.total);
            });
            _this.renderGraph('spendingvshourgraph', hour, total, 'Spending on different periods of a day', 'Hour', 'Total spendings');
        });
        this.barService.getSpendingVsDayOfWeek(this.drinkerName).subscribe(function (data) {
            var day_of_week = [];
            var total = [];
            data.forEach(function (x) {
                day_of_week.push(x.day_of_week);
                total.push(x.total);
            });
            _this.renderGraph('spendingvsdayofweek', day_of_week, total, 'Spending on different days of a week', 'Day of week', 'Total spendings');
        });
        this.barService.getSpendingVsMonth(this.drinkerName).subscribe(function (data) {
            var month = [];
            var total = [];
            data.forEach(function (x) {
                month.push(x.month);
                total.push(x.total);
            });
            _this.renderGraph('spendingvsmonthgraph', month, total, 'Spending on different months in a year', 'Month', 'Total spendings');
        });
    }
    DrinkerDetailsComponent.prototype.ngOnInit = function () {
    };
    DrinkerDetailsComponent.prototype.renderGraph = function (id, x, y, title, x_legend, y_legend) {
        Highcharts.chart(id, {
            chart: {
                type: 'column'
            },
            title: {
                text: title
            },
            xAxis: {
                categories: x,
                title: {
                    text: x_legend
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: y_legend
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: y
                }]
        });
    };
    DrinkerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinker-details',
            template: __webpack_require__(/*! ./drinker-details.component.html */ "./src/app/drinker-details/drinker-details.component.html"),
            styles: [__webpack_require__(/*! ./drinker-details.component.css */ "./src/app/drinker-details/drinker-details.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DrinkerDetailsComponent);
    return DrinkerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/drinkerpage/drinkerpage.component.css":
/*!*******************************************************!*\
  !*** ./src/app/drinkerpage/drinkerpage.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/drinkerpage/drinkerpage.component.html":
/*!********************************************************!*\
  !*** ./src/app/drinkerpage/drinkerpage.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n      <h1 class=\"display-4\">Search drinkers</h1>\n      <p class=\"lead\">\n            Enter drinker names to search, click on results to view details. \n      </p>\n      <form class=\"form-inline my-2 my-lg-0\">\n          <input class=\"form-control mr-sm-2\" type=\"search\" name=\"drinker_name\" [(ngModel)]=\"drinker_name\" placeholder=\"Search\"\n              aria-label=\"Search\">\n          <button class=\"btn btn-outline-success my-2 my-sm-0\" (click)=\"findDrinkers()\" type=\"submit\">Search</button>\n      </form>\n      <br>\n      <p-table [value]=\"drinkers\">\n          <ng-template pTemplate=\"header\">\n              <tr>\n                  <th>Name</th>\n                  <th>Phone</th>\n                  <th>Address</th>\n                  <th>State</th>\n              </tr>\n          </ng-template>\n          <ng-template pTemplate=\"body\" let-drinker>\n              <tr>\n                  <td>\n                      <a routerLink=\"/drinkers/{{ drinker.name }}\">\n                          {{ drinker.name }}\n                      </a>\n                  </td>\n                  <th>{{ drinker.phone }}</th>\n                  <th>{{ drinker.address }}</th>\n                  <th>{{ drinker.state }}</th>\n\n              </tr>\n          </ng-template>\n      </p-table>\n      \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/drinkerpage/drinkerpage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/drinkerpage/drinkerpage.component.ts ***!
  \******************************************************/
/*! exports provided: DrinkerpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerpageComponent", function() { return DrinkerpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrinkerpageComponent = /** @class */ (function () {
    function DrinkerpageComponent(barService) {
        this.barService = barService;
        this.drinker_name = '';
    }
    DrinkerpageComponent.prototype.ngOnInit = function () {
        this.getDrinkers();
    };
    DrinkerpageComponent.prototype.getDrinkers = function () {
        var _this = this;
        this.barService.getDrinkers().subscribe(function (data) {
            _this.drinkers = data;
        }, function (error) {
            alert('Could not retrieve a list of drinkers');
        });
    };
    DrinkerpageComponent.prototype.findDrinkers = function () {
        var _this = this;
        console.log(this.drinker_name);
        this.barService.findDrinkers(this.drinker_name).subscribe(function (data) {
            _this.drinkers = data;
        }, function (error) {
            alert('Could not retrieve a list of drinkers');
        });
    };
    DrinkerpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinkerpage',
            template: __webpack_require__(/*! ./drinkerpage.component.html */ "./src/app/drinkerpage/drinkerpage.component.html"),
            styles: [__webpack_require__(/*! ./drinkerpage.component.css */ "./src/app/drinkerpage/drinkerpage.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"]])
    ], DrinkerpageComponent);
    return DrinkerpageComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n        <h1 class=\"display-4\">Bar-Beer-Drinker Project</h1>\n        <p class=\"lead\">--by group 88</p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/querypage/querypage.component.css":
/*!***************************************************!*\
  !*** ./src/app/querypage/querypage.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/querypage/querypage.component.html":
/*!****************************************************!*\
  !*** ./src/app/querypage/querypage.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n        <h1 class=\"display-4\">SQL Query Interface</h1>\n        <p class=\"lead\">\n            Enter any query to select or modify the database. \n        </p>\n        <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Query</span>\n            </div>\n            <input type=\"text\" name=\"query\" [(ngModel)]=\"query\" class=\"form-control\" aria-label=\"Sizing example input\"\n                aria-describedby=\"inputGroup-sizing-default\">\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" (click)=\"execute()\" type=\"submit\">Excecute</button>\n        </div>\n        <p class=\"lead\">\n            {{ message }}\n        </p>\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th *ngFor=\"let key of keys\">{{ key }}</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let val of vals\">\n                    <th *ngFor=\"let field of val\">{{ field }}</th>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/querypage/querypage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/querypage/querypage.component.ts ***!
  \**************************************************/
/*! exports provided: QuerypageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuerypageComponent", function() { return QuerypageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuerypageComponent = /** @class */ (function () {
    // vals: string;
    function QuerypageComponent(barService) {
        this.barService = barService;
        this.message = '';
    }
    QuerypageComponent.prototype.ngOnInit = function () {
    };
    QuerypageComponent.prototype.execute = function () {
        var _this = this;
        if (!this.query || this.query.trim().length == 0) {
            this.message = "Please enter a query.";
            this.keys = null;
            this.vals = null;
            return;
        }
        this.barService.anyQuery(this.query).subscribe(function (data) {
            if (!data[0])
                _this.message = "Error: " + data[1];
            else {
                if (data[1])
                    _this.message = "Returned " + data[2];
                else
                    _this.message = "Matched " + data[2];
                if (data[2] > 1)
                    _this.message += " rows.";
                else
                    _this.message += " row.";
            }
            _this.keys = data[3];
            _this.vals = data[4];
        });
    };
    QuerypageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-querypage',
            template: __webpack_require__(/*! ./querypage.component.html */ "./src/app/querypage/querypage.component.html"),
            styles: [__webpack_require__(/*! ./querypage.component.css */ "./src/app/querypage/querypage.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"]])
    ], QuerypageComponent);
    return QuerypageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\angular\project\ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map