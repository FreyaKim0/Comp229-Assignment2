(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Freya\Desktop\Centennial College\semester3\Web Application\assignment\lab WEEK8\client\src\main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../partials/base-page/base-page.component */ "FFTb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






class HomeComponent extends _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_0__["BasePageComponent"] {
    constructor(route, _document) {
        super(route);
        this._document = _document;
    }
    ngOnInit() {
        this._document.body.classList.remove('bodybg-color');
        this._document.body.classList.add('homebg-color');
    }
    ngOnDestroy() {
        this._document.body.classList.remove('homebd-color');
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 28, vars: 0, consts: [["id", "background"], ["id", "placeholder"], ["id", "intro_h"], ["id", "int"], ["id", "sub_h"], ["id", "color_h"], [1, "button_cont"], ["href", "/project", "rel", "nofollow noopener", 1, "example_c"], ["id", "button_s"], ["href", "./assets/images/part-time.pdf", "rel", "nofollow noopener", 1, "example_c"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Welcome to my profolio,");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " I am a CS undergraduate focused in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " web development ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " . Please ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " for full authentication. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " VIEW\u00A0\u00A0PROJECT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " CO-OP\u00A0\u00A0RESUME ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["/*-----XuTung Jin 301111889--------*/\r\n/*-------Home page css-------------*/\r\n/*---------2020-10-09--------------*/\r\n#background{\r\n     height: 100%;\r\n     margin:0;\r\n     padding:0;\r\n     background: url(/assets/images/cover.jpg) no-repeat center center fixed;\r\n     background-size: cover;\r\n}\r\n#placeholder{\r\n  height:90px;\r\n}\r\n#intro_h{\r\n    background-color:rgba(255, 255, 255, 0.637) ;\r\n    color:rgb(49, 48, 48);\r\n    text-shadow: shadow1, shadow2, shadow3;\r\n    text-shadow: 1px 1px 0px rgb(165, 165, 165), 3px 8px 0px rgba(0, 0, 0, 0);\r\n    border-style: solid;\r\n    border-color: white;\r\n    border-width: 1px;\r\n\r\n    width:60%;\r\n    min-width: 730px;\r\n    height: auto;\r\n    padding:30px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n\r\n    font-family: \"Helvetica Neue\", sans-serif;\r\n    font-size: 50px;\r\n    font-weight: bold;\r\n    letter-spacing: 3px;\r\n    line-height: 1;\r\n    text-align: center;\r\n    text-align: left;\r\n  }\r\n#color_h{\r\n      font-size: 20px;\r\n      font-weight:light;\r\n      letter-spacing: 2px;\r\n      line-height: 0.2;\r\n  }\r\n#sub_h{\r\n      font-size: 20px;\r\n      font-weight:lighter;\r\n      letter-spacing: 2px;\r\n      line-height: 0.2;\r\n  }\r\n.button_cont{\r\n      text-align:center;\r\n      color:rgb(49, 48, 48);\r\n      text-shadow: shadow1, shadow2, shadow3;\r\n      text-shadow: 0px 0px 0px rgb(165, 165, 165), 3px 8px 0px rgba(0, 0, 0, 0);\r\n  }\r\n#sideNav:before{\r\n    opacity: 0.4;\r\n  }\r\n#sideNav {\r\n    background-color:#252934e0;\r\n  }\r\n.example_c {\r\n      color: #494949 !important;\r\n      text-transform: uppercase;\r\n      text-decoration: none;\r\n      background: #ffffff;\r\n      margin-top:10px;\r\n      margin-left:5px;\r\n      margin-right:5px;\r\n      padding: 20px;\r\n      border: 4px solid #494949 !important;\r\n      display: inline-block;\r\n      transition: all 0.4s ease 0s;\r\n      font-size: 12px;\r\n   }\r\n.example_c:hover {\r\n      color: #ffffff !important;\r\n      background: #f6b93b;\r\n      border-color: #f6b93b !important;\r\n      transition: all 0.4s ease 0s;\r\n  }\r\n/*smaller screen*/\r\n@media only screen and (min-width: 750px) and (max-width: 1190px) {\r\n      #intro_h{\r\n          background-color:rgba(255, 255, 255, 0.699) ;\r\n          color:rgb(49, 48, 48);\r\n  }\r\n  }\r\n@media only screen and (min-width: 1px) and (max-width: 749px) {\r\n      #intro_h{\r\n          background-color:rgba(255, 255, 255, 0.699) ;\r\n          color:rgb(49, 48, 48);\r\n          width:80%;\r\n          height: auto;\r\n          min-width: 1px;\r\n          font-size: 35px;\r\n  }\r\n  #sub_h,#color_h{\r\n      font-size: 16px;\r\n  }\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DO0FBQ3BDLG9DQUFvQztBQUNwQyxvQ0FBb0M7QUFFcEM7S0FDSyxZQUFZO0tBQ1osUUFBUTtLQUNSLFNBQVM7S0FDVCx1RUFBdUU7S0FJdkUsc0JBQXNCO0FBQzNCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxxQkFBcUI7SUFDckIsc0NBQXNDO0lBQ3RDLHlFQUF5RTtJQUN6RSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjs7SUFFakIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7O0lBRWpCLHlDQUF5QztJQUN6QyxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtBQUVBO01BQ0ksZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsZ0JBQWdCO0VBQ3BCO0FBQ0E7TUFDSSxlQUFlO01BQ2YsbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQixnQkFBZ0I7RUFDcEI7QUFDQTtNQUNJLGlCQUFpQjtNQUNqQixxQkFBcUI7TUFDckIsc0NBQXNDO01BQ3RDLHlFQUF5RTtFQUM3RTtBQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7QUFDQTtNQUNJLHlCQUF5QjtNQUN6Qix5QkFBeUI7TUFDekIscUJBQXFCO01BQ3JCLG1CQUFtQjtNQUNuQixlQUFlO01BQ2YsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixhQUFhO01BQ2Isb0NBQW9DO01BQ3BDLHFCQUFxQjtNQUNyQiw0QkFBNEI7TUFDNUIsZUFBZTtHQUNsQjtBQUNEO01BQ0kseUJBQXlCO01BQ3pCLG1CQUFtQjtNQUNuQixnQ0FBZ0M7TUFDaEMsNEJBQTRCO0VBQ2hDO0FBRUEsaUJBQWlCO0FBQ2pCO01BQ0k7VUFDSSw0Q0FBNEM7VUFDNUMscUJBQXFCO0VBQzdCO0VBQ0E7QUFDQTtNQUNJO1VBQ0ksNENBQTRDO1VBQzVDLHFCQUFxQjtVQUNyQixTQUFTO1VBQ1QsWUFBWTtVQUNaLGNBQWM7VUFDZCxlQUFlO0VBQ3ZCO0VBQ0E7TUFDSSxlQUFlO0VBQ25CO0VBQ0EiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS1YdVR1bmcgSmluIDMwMTExMTg4OS0tLS0tLS0tKi9cclxuLyotLS0tLS0tSG9tZSBwYWdlIGNzcy0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLTIwMjAtMTAtMDktLS0tLS0tLS0tLS0tLSovXHJcblxyXG4jYmFja2dyb3VuZHtcclxuICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgbWFyZ2luOjA7XHJcbiAgICAgcGFkZGluZzowO1xyXG4gICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9jb3Zlci5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xyXG4gICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4jcGxhY2Vob2xkZXJ7XHJcbiAgaGVpZ2h0OjkwcHg7XHJcbn1cclxuXHJcbiNpbnRyb19oe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjM3KSA7XHJcbiAgICBjb2xvcjpyZ2IoNDksIDQ4LCA0OCk7XHJcbiAgICB0ZXh0LXNoYWRvdzogc2hhZG93MSwgc2hhZG93Miwgc2hhZG93MztcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDBweCByZ2IoMTY1LCAxNjUsIDE2NSksIDNweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG5cclxuICAgIHdpZHRoOjYwJTtcclxuICAgIG1pbi13aWR0aDogNzMwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOjMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuXHJcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgI2NvbG9yX2h7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6bGlnaHQ7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAwLjI7XHJcbiAgfVxyXG4gICNzdWJfaHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBmb250LXdlaWdodDpsaWdodGVyO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMC4yO1xyXG4gIH1cclxuICAuYnV0dG9uX2NvbnR7XHJcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICBjb2xvcjpyZ2IoNDksIDQ4LCA0OCk7XHJcbiAgICAgIHRleHQtc2hhZG93OiBzaGFkb3cxLCBzaGFkb3cyLCBzaGFkb3czO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAwcHggcmdiKDE2NSwgMTY1LCAxNjUpLCAzcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIH1cclxuICAjc2lkZU5hdjpiZWZvcmV7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgfVxyXG4gICNzaWRlTmF2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzI1MjkzNGUwO1xyXG4gIH1cclxuICAuZXhhbXBsZV9jIHtcclxuICAgICAgY29sb3I6ICM0OTQ5NDkgIWltcG9ydGFudDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OjVweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OjVweDtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgYm9yZGVyOiA0cHggc29saWQgIzQ5NDk0OSAhaW1wb3J0YW50O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgfVxyXG4gIC5leGFtcGxlX2M6aG92ZXIge1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjZiOTNiO1xyXG4gICAgICBib3JkZXItY29sb3I6ICNmNmI5M2IgIWltcG9ydGFudDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcclxuICB9XHJcblxyXG4gIC8qc21hbGxlciBzY3JlZW4qL1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTkwcHgpIHtcclxuICAgICAgI2ludHJvX2h7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OTkpIDtcclxuICAgICAgICAgIGNvbG9yOnJnYig0OSwgNDgsIDQ4KTtcclxuICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMXB4KSBhbmQgKG1heC13aWR0aDogNzQ5cHgpIHtcclxuICAgICAgI2ludHJvX2h7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OTkpIDtcclxuICAgICAgICAgIGNvbG9yOnJnYig0OSwgNDgsIDQ4KTtcclxuICAgICAgICAgIHdpZHRoOjgwJTtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIG1pbi13aWR0aDogMXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gIH1cclxuICAjc3ViX2gsI2NvbG9yX2h7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgfVxyXG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "1h7W":
/*!*************************************************!*\
  !*** ./src/app/book-store/counter.directive.ts ***!
  \*************************************************/
/*! exports provided: CounterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterDirective", function() { return CounterDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CounterDirective {
    constructor(container, template) {
        this.container = container;
        this.template = template;
    }
    // tslint:disable-next-line: use-lifecycle-interface
    ngOnChanges(changes) {
        this.container.clear();
        for (let index = 0; index < this.counter; index++) {
            this.container.createEmbeddedView(this.template, new CounterDirectiveContext(index + 1));
        }
    }
}
CounterDirective.ɵfac = function CounterDirective_Factory(t) { return new (t || CounterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
CounterDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CounterDirective, selectors: [["", "counterOf", ""]], inputs: { counter: ["counterOf", "counter"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[counterOf]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, { counter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['counterOf']
        }] }); })();
class CounterDirectiveContext {
    constructor($implicit) {
        this.$implicit = $implicit;
    }
}


/***/ }),

/***/ "47DY":
/*!*************************************!*\
  !*** ./src/app/model/book.model.ts ***!
  \*************************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
class Book {
    constructor(
    // tslint:disable-next-line: variable-name
    _id, name, author, published, description, originalPrice, price, store) {
        this._id = _id;
        this.name = name;
        this.author = author;
        this.published = published;
        this.description = description;
        this.originalPrice = originalPrice;
        this.price = price;
        this.store = store;
    }
    toString() {
        return `
    Book (${this.store})
    -------------------------
    Name:       ${this.name}
    Author:     ${this.author}
    Published:  ${this.published}
    Description:${this.description}
    Ogirinal:   ${this.originalPrice}
    Price:      ${this.price}
    -------------------------
    `;
    }
}


/***/ }),

/***/ "4JXc":
/*!*****************************************************!*\
  !*** ./src/app/partials/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_model_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/user.model */ "UbF0");
/* harmony import */ var src_app_model_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/auth.service */ "hO0c");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _book_store_cart_summary_cart_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../book-store/cart-summary/cart-summary.component */ "PbUm");







function HeaderComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_19_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onLogoutClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["active"]; };
function HeaderComponent_a_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.user.displayName, "'s account ");
} }
const _c1 = function () { return { exact: true }; };
class HeaderComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.user = new src_app_model_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    onLogoutClick() {
        this.authService.logout().subscribe(data => {
            this.router.navigate(['/login']);
        });
    }
    isLoggedIn() {
        const result = this.authService.authenticated;
        if (result) {
            this.user = JSON.parse(localStorage.getItem('user'));
        }
        return result;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_model_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 39, vars: 15, consts: [[1, "box"], ["id", "sideNav", 1, "navbar-expand-xl", "navbar-dark"], ["id", "pictureDiv", 3, "routerLinkActive", "routerLinkActiveOptions"], ["routerLink", "/home", 2, "text-decoration", "none"], ["id", "navClass", 1, "navbar-brand", "js-scroll-trigger"], ["src", "../../assets/images/picture.jpg", "width", "160", "height", "160", "id", "profilePicture", "loading", "lazy"], ["id", "name"], ["id", "title"], ["id", "hamburgerDiv"], ["id", "contactInfo"], ["type", "button", "data-container", "body", "data-trigger", "hover", "data-toggle", "popover", "data-placement", "top", "data-content", "Open GitHub in new Tab", "onclick", " window.open('https://github.com/FreyaKim0','_blank')", 1, "contactButton"], [1, "fab", "fa-github"], ["type", "button", "data-container", "body", "data-trigger", "hover", "data-toggle", "popover", "data-placement", "top", "data-content", "Open LinkedIn in new Tab", "onclick", " window.open('http://www.linkedin.com/in/xutungjin','_blank')", 1, "contactButton"], [1, "fab", "fa-linkedin"], ["routerLink", "/logout", "class", "contactButton", "type", "button", "routerLink", "/login", 3, "click", 4, "ngIf"], ["class", "contactButton", "type", "button", "routerLink", "/login", 4, "ngIf"], ["class", "contactButton", "type", "button", "routerLink", "/admin/main", 3, "routerLinkActive", 4, "ngIf"], ["id", "hamburger_btn", "type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 2, "float", "right"], [1, "navbar-toggler-icon", "btn-sm", 2, "float", "right"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "justify-content-center"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", 3, "routerLinkActive"], ["routerLink", "/service", 1, "nav-link"], ["id", "projectDropDown", "routerLink", "/projects", 1, "nav-link"], ["routerLink", "/about", 1, "nav-link"], ["routerLink", "/contact", 1, "nav-link"], ["routerLink", "/logout", "type", "button", "routerLink", "/login", 1, "contactButton", 3, "click"], ["id", "login_icon", 1, "fas", "fa-sign-out-alt"], [1, "words"], ["type", "button", "routerLink", "/login", 1, "contactButton"], ["id", "login_icon", 1, "fas", "fa-sign-in-alt"], ["type", "button", "routerLink", "/admin/main", 1, "contactButton", 3, "routerLinkActive"], ["id", "login_icon", 1, "fas", "fa-user-shield"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "FREYA\u00A0\u00A0KIM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "SOFTWARE\u00A0\u00A0ENGINEER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HeaderComponent_a_19_Template, 4, 0, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HeaderComponent_a_20_Template, 2, 0, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HeaderComponent_a_21_Template, 4, 3, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-cart-summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _book_store_cart_summary_cart_summary_component__WEBPACK_IMPORTED_MODULE_5__["CartSummaryComponent"]], styles: ["body[_ngcontent-%COMP%] {\r\n  background-color:#F3F4F5;\r\n  height: 100%;\r\n}\r\n#nameBanner[_ngcontent-%COMP%] {\r\n  background-color: #F3F4F5;\r\n  color: rgb(129, 125, 125);\r\n  font-family: \"Helvetica Neue\", sans-serif;\r\n  font-size: 40px;\r\n  margin-top: 60px;\r\n  font-weight: bold;\r\n  letter-spacing: 3px;\r\n  line-height: 0.2;\r\n  text-align: center;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  text-align: center;\r\n}\r\n\r\n.main_wrapper[_ngcontent-%COMP%] {\r\n  grid-template-columns: 100% 0%;\r\n  display: grid;\r\n}\r\n#header_in_main_wrapper[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n#content[_ngcontent-%COMP%]{\r\n  background-color: black;\r\n}\r\n#content_in_main_wrapper[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin:0;\r\n  padding:0;\r\n  position: relative;\r\n}\r\n#contactWrap[_ngcontent-%COMP%] {\r\n  width: 250px;\r\n  float: left;\r\n  text-align: left;\r\n}\r\n#contactInfo[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n.main_grid_constraint[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  text-align: center;\r\n  font-weight: verdana;\r\n  font-size: 17px;\r\n  line-height: 40px;\r\n}\r\n.words[_ngcontent-%COMP%]{\r\n  color:white;\r\n  float: left;\r\n  overflow: hidden;\r\n  line-height: 20px;\r\n  letter-spacing: 0.8px;\r\n  font-size: 12px;\r\n }\r\n\r\n*[_ngcontent-%COMP%]:focus {\r\n  outline: 0 !important;\r\n}\r\n\r\n.popover-header[_ngcontent-%COMP%] {\r\n\toutline: none;\r\n\tborder: none;\r\n  background-color: #eaeded;\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n  color: black;\r\n}\r\n.popover[_ngcontent-%COMP%] {\r\n  outline: none;\r\n\tborder: none;\r\n  font-weight: normal;\r\n  font-size: 12px;\r\n}\r\n\r\n#navClass[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  text-align: center;\r\n}\r\n#profilePicture[_ngcontent-%COMP%] {\r\n  border-radius: 90px;\r\n}\r\n\r\n#pictureDiv[_ngcontent-%COMP%] {\r\n  padding-top: 30px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n#name[_ngcontent-%COMP%] {\r\n  color: #ffffff;\r\n  letter-spacing: 0.1rem;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  margin-top: 20px;\r\n}\r\n#title[_ngcontent-%COMP%] {\r\n  color: #ffffff;\r\n  font-size: 12px;\r\n  letter-spacing: 0.1rem;\r\n  margin-top: -25px;\r\n}\r\n#welcomeUser[_ngcontent-%COMP%]{\r\n  color: #ffffff;\r\n  font-size: 13px;\r\n  float: left;\r\n  margin-top: 10px;\r\n  line-height: 0.1px;\r\n\r\n  text-transform: uppercase;\r\n}\r\n#login_button[_ngcontent-%COMP%]{\r\n  float: left;\r\n  margin-top:0px;\r\n}\r\n\r\n#hamburgerDiv[_ngcontent-%COMP%] {\r\n  margin-top: -20px;\r\n  display: block;\r\n  height: 40px;\r\n  padding: 10px;\r\n  border-style: solid;\r\n  border-width: 0.01px;\r\n  border-bottom-color: gray;\r\n  border-top-color: gray;\r\n}\r\n.fas[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-size: 20px;\r\n  float: left;\r\n  margin-left: 0px;\r\n  opacity: 0.5;\r\n}\r\n.fab[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-size: 20px;\r\n  float: left;\r\n  margin-left: 0px;\r\n  opacity: 0.5;\r\n}\r\n.navbar-toggler[_ngcontent-%COMP%] {\r\n  padding: 2px;\r\n}\r\n.navbar-toggler-icon[_ngcontent-%COMP%] {\r\n  width: 15px;\r\n  height: 15px;\r\n}\r\n\r\n#sideNav[_ngcontent-%COMP%] {\r\n  background-color:#252934f8;\r\n  width: auto;\r\n  position: relative;\r\n  z-index: 1;\r\n  overflow: hidden; \r\n}\r\n#sideNav[_ngcontent-%COMP%]:before{\r\n  z-index: -1;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  content: url(\"/assets/images/background.jpg\");\r\n  opacity:0.4;;\r\n  background-color: #252934c4;\r\n}\r\n#sideNav[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 12px;\r\n  letter-spacing: 0.6rem;\r\n  text-transform: uppercase;\r\n  line-height: 1cm;\r\n}\r\n#sideNav[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]:focus {\r\n  outline-color: teal;\r\n}\r\n#navbarDropdown[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   dropdown-toggle[_ngcontent-%COMP%] {\r\n  color: pink;\r\n}\r\n.contactButton[_ngcontent-%COMP%] {\r\n  opacity: 0.5;\r\n  background-color: transparent;\r\n  border-width: 0px;\r\n  margin-right: 5px;\r\n  float: left;\r\n}\r\n.contactButton[_ngcontent-%COMP%]:hover {\r\n  opacity: 1;\r\n}\r\n.contactButton[_ngcontent-%COMP%]:focus {\r\n  opacity: 1;\r\n  border-width: 0px;\r\n}\r\n\r\n\r\n\r\n@media (min-width: 1190px) {\r\n  #nameBanner[_ngcontent-%COMP%] {\r\n    color: rgb(88, 86, 86);\r\n  }\r\n  #grid_placeholder[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n  }\r\n  #content[_ngcontent-%COMP%] {\r\n    overflow: auto;\r\n    background-color: #F2F4F5;\r\n    position: relative;\r\n  }\r\n  #main[_ngcontent-%COMP%] {\r\n    display: grid;\r\n  }\r\n  .main_wrapper[_ngcontent-%COMP%] {\r\n    grid-template-columns: 20% 80%;\r\n    display: grid;\r\n  }\r\n  .main_grid_constraint[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    line-height: 40px;\r\n  }\r\n  #navbarSupportedContent[_ngcontent-%COMP%] {\r\n    padding-top: 15px;\r\n  }\r\n  #pictureDiv[_ngcontent-%COMP%] {\r\n    padding-left: 13px;\r\n    padding-top: 30px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    text-align: center;\r\n  }\r\n  #hamburgerDiv[_ngcontent-%COMP%] {\r\n    border-width: 0px;\r\n    text-align: center;\r\n    display: block;\r\n    position: absolute;\r\n    bottom: 30px;\r\n    width: 100%;\r\n  }\r\n  #sideNav[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 20%;\r\n    height: 100%;\r\n    min-width: 250px;\r\n    min-height: 650px;\r\n  }\r\n  #sideNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    padding: 0.5rem;\r\n  }\r\n  #sideNav[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\r\n    padding-left: 0;\r\n    text-align: center;\r\n    display: flex;\r\n    align-items: flex-start;\r\n    flex-grow: 0;\r\n    width: 100%;\r\n    margin-bottom: auto;\r\n    margin-top: -20px;\r\n  }\r\n  #sideNav[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    width: 100%;\r\n  }\r\n  #sideNav[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  #sideNav[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  #header_in_main_wrapper[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  .contactButton[_ngcontent-%COMP%] {\r\n    float: none;\r\n  }\r\n  #hamburger_btn[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  #pictureDiv[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydGlhbHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFDbEMsa0NBQWtDO0FBR2xDLDRCQUE0QjtBQUM1QjtFQUNFLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIseUNBQXlDO0VBQ3pDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsOEJBQThCO0VBQzlCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixlQUFlO0NBQ2hCO0FBRUQsOEJBQThCO0FBQzlCO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUEsaUJBQWlCO0FBQ2pCO0NBQ0MsYUFBYTtDQUNiLFlBQVk7RUFDWCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7Q0FDZCxZQUFZO0VBQ1gsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCOztFQUVsQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0FBR0EsbUJBQW1CO0FBQ25CO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBRUEsYUFBYTtBQUNiO0VBQ0UsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQixFQUFFLGdDQUFnQztBQUNwRDtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLDZDQUE2QztFQUM3QyxXQUFXO0VBQ1gsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25CO0FBR0EsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQywyQ0FBMkM7QUFFM0M7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsY0FBYztJQUNkLFdBQVc7RUFDYjtFQUNBO0lBQ0UsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsOEJBQThCO0lBQzlCLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7RUFDYjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFydGlhbHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLVh1VHVuZyBKaW4gMzAxMTExODg5LS0tLS0tKi9cclxuLyotLS0tLS0tRnJhbWV3b3JrIGNzcy0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0yMDIwLTEwLTA5LS0tLS0tLS0tLS0tKi9cclxuXHJcblxyXG4vKi0tLS0tLWJvZHkgc2VjdGlvbnMtLS0tLS0qL1xyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNGM0Y0RjU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jbmFtZUJhbm5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjRGNTtcclxuICBjb2xvcjogcmdiKDEyOSwgMTI1LCAxMjUpO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICBsaW5lLWhlaWdodDogMC4yO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKmhlYWRlcitjb250ZW50Ki9cclxuLm1haW5fd3JhcHBlciB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlIDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbn1cclxuI2hlYWRlcl9pbl9tYWluX3dyYXBwZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuI2NvbnRlbnR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuI2NvbnRlbnRfaW5fbWFpbl93cmFwcGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjowO1xyXG4gIHBhZGRpbmc6MDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNjb250YWN0V3JhcCB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbiNjb250YWN0SW5mbyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5tYWluX2dyaWRfY29uc3RyYWludCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiB2ZXJkYW5hO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG4ud29yZHN7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gfVxyXG5cclxuLyotLS0tLS1oZWFkZXIgc2VjdGlvbnMtLS0tLS0qL1xyXG4qOmZvY3VzIHtcclxuICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qSGVhZGVyLVBvcG92ZXIqL1xyXG4ucG9wb3Zlci1oZWFkZXIge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0Ym9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVkZWQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5wb3BvdmVyIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLypIZWFkZXItUGljdXRyZXMqL1xyXG4jbmF2Q2xhc3Mge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiNwcm9maWxlUGljdHVyZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogOTBweDtcclxufVxyXG5cclxuLypIZWFkZXItTmFtZSBzZWN0aW9uKi9cclxuI3BpY3R1cmVEaXYge1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4jbmFtZSB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbiN0aXRsZSB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbiAgbWFyZ2luLXRvcDogLTI1cHg7XHJcbn1cclxuI3dlbGNvbWVVc2Vye1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjFweDtcclxuXHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4jbG9naW5fYnV0dG9ue1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6MHB4O1xyXG59XHJcblxyXG5cclxuLypIZWFkZXItSGFtZ3VyZ2VyKi9cclxuI2hhbWJ1cmdlckRpdiB7XHJcbiAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDAuMDFweDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiBncmF5O1xyXG4gIGJvcmRlci10b3AtY29sb3I6IGdyYXk7XHJcbn1cclxuLmZhcyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG4uZmFiIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbi5uYXZiYXItdG9nZ2xlciB7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcbi5uYXZiYXItdG9nZ2xlci1pY29uIHtcclxuICB3aWR0aDogMTVweDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi8qSGVhZGVyLU5hdiovXHJcbiNzaWRlTmF2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMyNTI5MzRmODtcclxuICB3aWR0aDogYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBvdmVyZmxvdzogaGlkZGVuOyAvKmlmIHlvdSB3YW50IHRvIGNyb3AgdGhlIGltYWdlKi9cclxufVxyXG4jc2lkZU5hdjpiZWZvcmV7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGNvbnRlbnQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuanBnXCIpO1xyXG4gIG9wYWNpdHk6MC40OztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyOTM0YzQ7XHJcbn1cclxuI3NpZGVOYXYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxpbmUtaGVpZ2h0OiAxY207XHJcbn1cclxuI3NpZGVOYXYgLm5hdmJhci10b2dnbGVyOmZvY3VzIHtcclxuICBvdXRsaW5lLWNvbG9yOiB0ZWFsO1xyXG59XHJcbiNuYXZiYXJEcm9wZG93biAubmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlIHtcclxuICBjb2xvcjogcGluaztcclxufVxyXG4uY29udGFjdEJ1dHRvbiB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci13aWR0aDogMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5jb250YWN0QnV0dG9uOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5jb250YWN0QnV0dG9uOmZvY3VzIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJvcmRlci13aWR0aDogMHB4O1xyXG59XHJcblxyXG5cclxuLyotLS0tLVh1VHVuZyBKaW4gMzAxMTExODg5LS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLUhlYWRlciBjc3MgZm9yIHNjcmVlbiB3aWR0aCA+IDExOTBweC0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tMjAyMC0xMC0wOS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMTkwcHgpIHtcclxuICAjbmFtZUJhbm5lciB7XHJcbiAgICBjb2xvcjogcmdiKDg4LCA4NiwgODYpO1xyXG4gIH1cclxuICAjZ3JpZF9wbGFjZWhvbGRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAjY29udGVudCB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkY0RjU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gICNtYWluIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgfVxyXG4gIC5tYWluX3dyYXBwZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICB9XHJcbiAgLm1haW5fZ3JpZF9jb25zdHJhaW50IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICB9XHJcbiAgI25hdmJhclN1cHBvcnRlZENvbnRlbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgfVxyXG4gICNwaWN0dXJlRGl2IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTNweDtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gICNoYW1idXJnZXJEaXYge1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAjc2lkZU5hdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAyNTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDY1MHB4O1xyXG4gIH1cclxuICAjc2lkZU5hdiAubmF2YmFyLWJyYW5kIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgfVxyXG4gICNzaWRlTmF2IC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZmxleC1ncm93OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgfVxyXG4gICNzaWRlTmF2IC5uYXZiYXItY29sbGFwc2UgLm5hdmJhci1uYXYge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAjc2lkZU5hdiAubmF2YmFyLWNvbGxhcHNlIC5uYXZiYXItbmF2IC5uYXYtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgI3NpZGVOYXYgLm5hdmJhci1jb2xsYXBzZSAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAjaGVhZGVyX2luX21haW5fd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmNvbnRhY3RCdXR0b24ge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG4gICNoYW1idXJnZXJfYnRuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gICNwaWN0dXJlRGl2IHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: src_app_model_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Be/C":
/*!*****************************************************!*\
  !*** ./src/app/partials/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, consts: [["id", "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " - Copyright \u00A9 2020 by Freya Kim All rights reserved -\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#footer[_ngcontent-%COMP%] {\r\n\r\n  width: 100%;\r\n  font-size: 10px;\r\n  color:grey;\r\n  text-align: center;\r\n  display: block;\r\n  bottom: 0;\r\n  letter-spacing: 3px;\r\n  padding-top:5px;\r\n  padding-bottom: 5px;\r\n}\r\n#grid_placeholder[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydGlhbHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhCQUE4QjtBQUM5Qjs7RUFFRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvcGFydGlhbHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS1mb290ZXIgc2VjdGlvbnMtLS0tLS0qL1xyXG4jZm9vdGVyIHtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGNvbG9yOmdyZXk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gIHBhZGRpbmctdG9wOjVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4jZ3JpZF9wbGFjZWhvbGRlciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Blh2":
/*!*************************************************!*\
  !*** ./src/app/book-store/book-store.module.ts ***!
  \*************************************************/
/*! exports provided: BookStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookStoreModule", function() { return BookStoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book-detail/book-detail.component */ "zYZ4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _book_store_book_store_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../book-store/book-store.component */ "QnNB");
/* harmony import */ var _counter_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./counter.directive */ "1h7W");
/* harmony import */ var _cart_detail_cart_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart-detail/cart-detail.component */ "wZ8A");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkout/checkout.component */ "S4ta");











const routingS = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
    { path: 'all', component: _book_store_book_store_component__WEBPACK_IMPORTED_MODULE_5__["BookStoreComponent"] },
    { path: 'detail',
        children: [
            { path: ':id', component: _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_1__["BookDetailComponent"], data: { title: 'Product Details' } },
            { path: '**', redirectTo: 'all' }
        ]
    },
    { path: '**', redirectTo: 'all' },
]);
class BookStoreModule {
}
BookStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: BookStoreModule });
BookStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function BookStoreModule_Factory(t) { return new (t || BookStoreModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], routingS]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BookStoreModule, { declarations: [_book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_1__["BookDetailComponent"], _book_store_book_store_component__WEBPACK_IMPORTED_MODULE_5__["BookStoreComponent"], _counter_directive__WEBPACK_IMPORTED_MODULE_6__["CounterDirective"], _cart_detail_cart_detail_component__WEBPACK_IMPORTED_MODULE_7__["CartDetailComponent"], _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](BookStoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], routingS],
                declarations: [_book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_1__["BookDetailComponent"], _book_store_book_store_component__WEBPACK_IMPORTED_MODULE_5__["BookStoreComponent"], _counter_directive__WEBPACK_IMPORTED_MODULE_6__["CounterDirective"], _cart_detail_cart_detail_component__WEBPACK_IMPORTED_MODULE_7__["CartDetailComponent"], _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "CaxY":
/*!****************************************************!*\
  !*** ./src/app/pages/service/service.component.ts ***!
  \****************************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../partials/base-page/base-page.component */ "FFTb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





class ServiceComponent extends _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_0__["BasePageComponent"] {
    constructor(route) {
        super(route);
    }
    ngOnInit() {
    }
}
ServiceComponent.ɵfac = function ServiceComponent_Factory(t) { return new (t || ServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ServiceComponent, selectors: [["app-service"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, template: function ServiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-base-page");
    } }, directives: [_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_0__["BasePageComponent"]], styles: [".service_img[_ngcontent-%COMP%] {\r\n  border-top-left-radius: 20px;\r\n  border-bottom-left-radius: 20px;\r\n  height: 190px;\r\n  max-width: 200px;\r\n}\r\n\r\n.text_s[_ngcontent-%COMP%] {\r\n  padding-left: 7px;\r\n  font-weight: lighter;\r\n  line-height: 18px;\r\n  font-family: \"Open sans\", sans-serif;\r\n  color: #292828;\r\n  font-size: 12px;\r\n  text-align: justify;\r\n  text-justify: inter-word;\r\n}\r\n.grey[_ngcontent-%COMP%] {\r\n  background-color: #d3caca4d;\r\n  padding-left: 7px;\r\n\r\n  font-weight: lighter;\r\n  line-height: 18px;\r\n  font-family: \"Open sans\", sans-serif;\r\n  color: #292828;\r\n  font-size: 12px;\r\n  text-align: justify;\r\n  text-justify: inter-word;\r\n}\r\n\r\n#wrapper[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  padding-left: 0px;\r\n  display: flex;\r\n  width: auto;\r\n}\r\n#c1[_ngcontent-%COMP%], #c3[_ngcontent-%COMP%] {\r\n  width: 49%;\r\n  height: 130px;\r\n}\r\n#c2[_ngcontent-%COMP%] {\r\n  margin-top: 5px;\r\n  margin-top: 5px;\r\n  margin-right: 20px;\r\n  margin-left: 20px;\r\n  border-left: 1px solid gray;\r\n  height: 110px;\r\n}\r\n\r\n\r\n@media (min-width: 850px) {\r\n  .service_div[_ngcontent-%COMP%] {\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    width: 800px;\r\n  }\r\n  .left[_ngcontent-%COMP%] {\r\n    border-top-left-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n    margin-top: 35px;\r\n    float: right;\r\n    width: 200px;\r\n  }\r\n  .divider1[_ngcontent-%COMP%] {\r\n    float: right;\r\n    height: 35px;\r\n    width: 200px;\r\n  }\r\n  .divider2[_ngcontent-%COMP%] {\r\n    float: left;\r\n    height: 35px;\r\n    width: 600px;\r\n  }\r\n  .right[_ngcontent-%COMP%] {\r\n    border-top-left-radius: 20px;\r\n    border-bottom-left-radius: 20px;\r\n    letter-spacing: 0.1rem;\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    margin-top: 35px;\r\n    float: left;\r\n    width: 600px;\r\n    height: 190px;\r\n    text-align: left;\r\n    padding: 10px 30px 10px 30px;\r\n    background-color: rgb(255, 255, 255);\r\n  }\r\n  .service_img[_ngcontent-%COMP%] {\r\n    border-top-left-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n    border-top-right-radius: 20px;\r\n    border-bottom-right-radius: 20px;\r\n    height: 190px;\r\n    max-width: 200px;\r\n    overflow: hidden;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1px) and (max-width: 849px) {\r\n  .service_img[_ngcontent-%COMP%] {\r\n    border-top-left-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n    height: 150px;\r\n    max-width: 100%;\r\n  }\r\n  #c1[_ngcontent-%COMP%], #c2[_ngcontent-%COMP%], #c3[_ngcontent-%COMP%], #wrapper[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    height: auto;\r\n  }\r\n  #wrapper[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    margin-bottom: 40px;\r\n    padding-bottom: 20px;\r\n    background-color: white;\r\n  }\r\n  .left[_ngcontent-%COMP%] {\r\n    border-top-left-radius: 20px;\r\n    border-top-right-radius: 20px;\r\n    background-color: #8fa26b;\r\n\r\n    margin-top: 50px;\r\n    margin-right: 10%;\r\n    margin-left: 10%;\r\n  }\r\n  .right[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    margin-right: 10%;\r\n    margin-left: 10%;\r\n    margin-bottom: 10px;\r\n    background-color: white;\r\n  }\r\n  .title_s[_ngcontent-%COMP%] {\r\n    color: #000000;\r\n    letter-spacing: 0.1rem;\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    margin-top: 20px;\r\n  }\r\n  #intro_s[_ngcontent-%COMP%] {\r\n    margin-left: 60px;\r\n    margin-right: 60px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VydmljZS9zZXJ2aWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DO0FBQ3BDLG9DQUFvQztBQUNwQyxvQ0FBb0M7QUFFcEMsY0FBYztBQUNkO0VBQ0UsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCO0FBRUEsT0FBTztBQUNQO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLGlCQUFpQjs7RUFFakIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsd0JBQXdCO0FBQzFCO0FBRUEsZUFBZTtBQUNmO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsV0FBVztBQUNiO0FBQ0E7O0VBRUUsVUFBVTtFQUNWLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7QUFFQSxRQUFRO0FBQ1IsZ0JBQWdCO0FBQ2hCO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7RUFDZDtFQUNBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0VBQ2Q7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtFQUNkO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLG9DQUFvQztFQUN0QztFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFFQSxpQkFBaUI7QUFDakI7RUFDRTtJQUNFLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLGVBQWU7RUFDakI7RUFDQTs7OztJQUlFLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IseUJBQXlCOztJQUV6QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VydmljZS9zZXJ2aWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tWHVUdW5nIEppbiAzMDExMTE4ODktLS0tLS0tLSovXHJcbi8qLS0tLS0tLXNlcnZpY2UgcGFnZSBjc3MtLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0yMDIwLTEwLTA5LS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLyppY29uIGltYWdlcyovXHJcbi5zZXJ2aWNlX2ltZyB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGhlaWdodDogMTkwcHg7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLyp0ZXh0Ki9cclxuLnRleHRfcyB7XHJcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBzYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICMyOTI4Mjg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xyXG59XHJcbi5ncmV5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNjYWNhNGQ7XHJcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcblxyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gc2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjMjkyODI4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcclxufVxyXG5cclxuLyp0ZXh0IGNvbHVtbnMqL1xyXG4jd3JhcHBlciB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcbiNjMSxcclxuI2MzIHtcclxuICB3aWR0aDogNDklO1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbn1cclxuI2MyIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XHJcbiAgaGVpZ2h0OiAxMTBweDtcclxufVxyXG5cclxuLypib3hlcyovXHJcbi8qYmlnZ2VyIHNjcmVlbiovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA4NTBweCkge1xyXG4gIC5zZXJ2aWNlX2RpdiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICB9XHJcbiAgLmxlZnQge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzVweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbiAgLmRpdmlkZXIxIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbiAgLmRpdmlkZXIyIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gIH1cclxuICAucmlnaHQge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGhlaWdodDogMTkwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4IDEwcHggMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB9XHJcbiAgLnNlcnZpY2VfaW1nIHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG4vKnNtYWxsZXIgc2NyZWVuKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxcHgpIGFuZCAobWF4LXdpZHRoOiA4NDlweCkge1xyXG4gIC5zZXJ2aWNlX2ltZyB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAjYzEsXHJcbiAgI2MyLFxyXG4gICNjMyxcclxuICAjd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgI3dyYXBwZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLmxlZnQge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhmYTI2YjtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIH1cclxuICAucmlnaHQge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAudGl0bGVfcyB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgI2ludHJvX3Mge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ServiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-service',
                templateUrl: './service.component.html',
                styleUrls: ['./service.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "DIJg":
/*!***************************************!*\
  !*** ./src/app/model/model.module.ts ***!
  \***************************************/
/*! exports provided: ModelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelModule", function() { return ModelModule; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "hO0c");
/* harmony import */ var _order_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.repository */ "hf/X");
/* harmony import */ var _rest_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.datasource */ "DZdm");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _static_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./static.datasource */ "cPHl");
/* harmony import */ var _book_repository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book.repository */ "EnQi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cart_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart.model */ "b/QR");
/* harmony import */ var _order_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order.model */ "sKKC");
/* harmony import */ var _user_repository__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user.repository */ "DoVm");











class ModelModule {
}
ModelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ModelModule });
ModelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function ModelModule_Factory(t) { return new (t || ModelModule)(); }, providers: [_book_repository__WEBPACK_IMPORTED_MODULE_5__["BookRepository"],
        _user_repository__WEBPACK_IMPORTED_MODULE_9__["UserRepository"],
        _static_datasource__WEBPACK_IMPORTED_MODULE_4__["StaticDataSource"],
        _cart_model__WEBPACK_IMPORTED_MODULE_7__["Cart"],
        _order_model__WEBPACK_IMPORTED_MODULE_8__["Order"],
        _order_repository__WEBPACK_IMPORTED_MODULE_1__["OrderRepository"],
        { provide: _static_datasource__WEBPACK_IMPORTED_MODULE_4__["StaticDataSource"],
            useClass: _rest_datasource__WEBPACK_IMPORTED_MODULE_2__["RestDataSource"] },
        _rest_datasource__WEBPACK_IMPORTED_MODULE_2__["RestDataSource"],
        _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]], imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ModelModule, { imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](ModelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
        args: [{
                imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
                providers: [_book_repository__WEBPACK_IMPORTED_MODULE_5__["BookRepository"],
                    _user_repository__WEBPACK_IMPORTED_MODULE_9__["UserRepository"],
                    _static_datasource__WEBPACK_IMPORTED_MODULE_4__["StaticDataSource"],
                    _cart_model__WEBPACK_IMPORTED_MODULE_7__["Cart"],
                    _order_model__WEBPACK_IMPORTED_MODULE_8__["Order"],
                    _order_repository__WEBPACK_IMPORTED_MODULE_1__["OrderRepository"],
                    { provide: _static_datasource__WEBPACK_IMPORTED_MODULE_4__["StaticDataSource"],
                        useClass: _rest_datasource__WEBPACK_IMPORTED_MODULE_2__["RestDataSource"] },
                    _rest_datasource__WEBPACK_IMPORTED_MODULE_2__["RestDataSource"],
                    _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "DZdm":
/*!******************************************!*\
  !*** ./src/app/model/rest.datasource.ts ***!
  \******************************************/
/*! exports provided: RestDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestDataSource", function() { return RestDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.model */ "UbF0");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");






const PROTOCOL = 'https';
const PORT = 3500;
class RestDataSource {
    constructor(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            })
        };
        this.user = new _user_model__WEBPACK_IMPORTED_MODULE_2__["User"]();
        // this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api/`;
        this.baseUrl = `https://xu-tung-jin-assignment2.herokuapp.com/api/`;
    }
    // loggin, authenticate, loggout
    authenticate(user) {
        return this.http.post(this.baseUrl + 'login', user, this.httpOptions);
    }
    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
        return this.http.get(this.baseUrl + 'logout', this.httpOptions);
    }
    loggedIn() {
        return !this.jwtService.isTokenExpired(this.authToken);
    }
    // get, add, edit, update user (registration)
    storeUserData(token, user) {
        localStorage.setItem('id_token', 'Bearer ' + token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }
    getUser() {
        // this url?
        return this.http.get(this.baseUrl + 'register');
    }
    getUserbyId(id) {
        // this url?
        return this.http.get(this.baseUrl + 'register');
    }
    addUser(user) {
        console.log('addUser@ rest.datasources.ts');
        // this.loadToken();
        return this.http.post(this.baseUrl + 'register', user, this.httpOptions);
    }
    updateUser(user) {
        // this url?
        this.loadToken();
        return this.http.post(`${this.baseUrl}book-list/edit/${user.username}`, user, this.httpOptions);
    }
    // get, add, update, delete books
    getBooks() {
        return this.http.get(this.baseUrl + 'book-list');
    }
    addBook(book) {
        this.loadToken();
        return this.http.post(this.baseUrl + 'book-list/add', book, this.httpOptions);
    }
    updateBook(book) {
        this.loadToken();
        return this.http.post(`${this.baseUrl}book-list/edit/${book._id}`, book, this.httpOptions);
    }
    deleteBook(id) {
        this.loadToken();
        console.log(id);
        return this.http.get(`${this.baseUrl}book-list/delete/${id}`, this.httpOptions);
    }
    // save, get, delete, update orders
    saveOrder(order) {
        console.log(JSON.stringify(order));
        return this.http.post(this.baseUrl + 'orders/add', order);
    }
    getOrders() {
        this.loadToken();
        return this.http.get(this.baseUrl + 'orders');
    }
    deleteOrder(id) {
        this.loadToken();
        return this.http.get(`${this.baseUrl}orders/delete/${id}`, this.httpOptions);
    }
    updateOrder(order) {
        this.loadToken();
        return this.http.post(`${this.baseUrl}orders/edit/${order._id}`, order, this.httpOptions);
    }
    // load Token
    loadToken() {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    }
}
RestDataSource.ɵfac = function RestDataSource_Factory(t) { return new (t || RestDataSource)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"])); };
RestDataSource.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RestDataSource, factory: RestDataSource.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RestDataSource, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"] }]; }, null); })();


/***/ }),

/***/ "DoVm":
/*!******************************************!*\
  !*** ./src/app/model/user.repository.ts ***!
  \******************************************/
/*! exports provided: UserRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRepository", function() { return UserRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rest_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rest.datasource */ "DZdm");



class UserRepository {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.user = [];
        dataSource.getUser().subscribe(data => {
            this.user = data;
            this.username = data.map(b => b.username)
                .filter((a, index, array) => array.indexOf(a) === index).sort();
        });
    }
    getUser(username = null) {
        return this.user
            .filter(b => username == null || username === b.username);
    }
    // add or edit user
    addUser(thisUser) {
        if (thisUser.username === null || thisUser.username === '' || thisUser.username === undefined) {
            console.log('if...username:' + thisUser.username);
            this.dataSource.addUser(thisUser).subscribe(b => {
                this.user.push(thisUser);
            });
        }
        else {
            console.log('username:      ' + thisUser.username + '\n' +
                'email:         ' + thisUser.email + '\n' +
                'password:      ' + thisUser.password + '\n' +
                'display name:  ' + thisUser.displayName);
            this.dataSource.updateUser(thisUser).subscribe(book => {
                this.user.splice(this.user.findIndex(b => b.username === thisUser.username), 1, thisUser);
            });
        }
    }
}
UserRepository.ɵfac = function UserRepository_Factory(t) { return new (t || UserRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_rest_datasource__WEBPACK_IMPORTED_MODULE_1__["RestDataSource"])); };
UserRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserRepository, factory: UserRepository.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRepository, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _rest_datasource__WEBPACK_IMPORTED_MODULE_1__["RestDataSource"] }]; }, null); })();


/***/ }),

/***/ "EnQi":
/*!******************************************!*\
  !*** ./src/app/model/book.repository.ts ***!
  \******************************************/
/*! exports provided: BookRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookRepository", function() { return BookRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rest_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rest.datasource */ "DZdm");



class BookRepository {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.books = [];
        this.authors = [];
        dataSource.getBooks().subscribe(data => {
            this.books = data;
            this.authors = data.map(b => b.author)
                .filter((a, index, array) => array.indexOf(a) === index).sort();
        });
    }
    getBooks(author = null) {
        return this.books
            .filter(b => author == null || author === b.author);
    }
    getBook(id) {
        return this.books.find(b => b._id === id);
    }
    getAuthors() {
        return this.authors;
    }
    saveBook(savedBook) {
        if (savedBook._id === null || savedBook._id === 0 || savedBook._id === undefined) {
            this.dataSource.addBook(savedBook).subscribe(b => {
                this.books.push(savedBook);
            });
        }
        else {
            this.dataSource.updateBook(savedBook).subscribe(book => {
                this.books.splice(this.books.findIndex(b => b._id === savedBook._id), 1, savedBook);
            });
        }
    }
    deleteBook(deletedBookID) {
        this.dataSource.deleteBook(deletedBookID).subscribe(book => {
            this.books.splice(this.books.findIndex(b => b._id === deletedBookID), 1);
        });
    }
}
BookRepository.ɵfac = function BookRepository_Factory(t) { return new (t || BookRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_rest_datasource__WEBPACK_IMPORTED_MODULE_1__["RestDataSource"])); };
BookRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BookRepository, factory: BookRepository.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookRepository, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _rest_datasource__WEBPACK_IMPORTED_MODULE_1__["RestDataSource"] }]; }, null); })();


/***/ }),

/***/ "FFTb":
/*!***********************************************************!*\
  !*** ./src/app/partials/base-page/base-page.component.ts ***!
  \***********************************************************/
/*! exports provided: BasePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePageComponent", function() { return BasePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class BasePageComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.title = this.route.snapshot.data.title;
    }
}
BasePageComponent.ɵfac = function BasePageComponent_Factory(t) { return new (t || BasePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
BasePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasePageComponent, selectors: [["app-base-page"]], decls: 5, vars: 1, consts: [["id", "content"], ["id", "nameBanner"], [2, "width", "400px"]], template: function BasePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, "");
    } }, styles: ["#content[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n  background-color: #F2F4F5;\r\n  position: relative;\r\n  padding-top: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydGlhbHMvYmFzZS1wYWdlL2Jhc2UtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGFydGlhbHMvYmFzZS1wYWdlL2Jhc2UtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRlbnQge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkY0RjU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-base-page',
                templateUrl: './base-page.component.html',
                styleUrls: ['./base-page.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "PbUm":
/*!*******************************************************************!*\
  !*** ./src/app/book-store/cart-summary/cart-summary.component.ts ***!
  \*******************************************************************/
/*! exports provided: CartSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartSummaryComponent", function() { return CartSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_model_cart_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/cart.model */ "b/QR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CartSummaryComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.cart.itemCount, " item(s) ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](2, 2, ctx_r0.cart.cartPrice, "USD", "symbol", "2.2-2"), " ");
} }
function CartSummaryComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " (empty) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CartSummaryComponent {
    constructor(cart) {
        this.cart = cart;
    }
    ngOnInit() {
    }
}
CartSummaryComponent.ɵfac = function CartSummaryComponent_Factory(t) { return new (t || CartSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_model_cart_model__WEBPACK_IMPORTED_MODULE_1__["Cart"])); };
CartSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartSummaryComponent, selectors: [["app-cart-summary"]], decls: 4, vars: 3, consts: [["type", "button", "data-container", "body", "data-trigger", "hover", "data-toggle", "popover", "data-placement", "top", "data-content", "Open LinkedIn in new Tab", "routerLink", "/cart", 1, "contactButton", 3, "disabled"], [1, "fa", "fa-shopping-cart"], ["class", "words", 4, "ngIf"], [1, "words"]], template: function CartSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartSummaryComponent_div_2_Template, 3, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CartSummaryComponent_div_3_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.cart.itemCount == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cart.itemCount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cart.itemCount == 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: [".fa[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-size: 18px;\r\n  float: left;\r\n  margin-top:2px;\r\n  margin-left: 0px;\r\n  opacity: 0.5;\r\n}\r\n\r\n.words[_ngcontent-%COMP%]{\r\n color:white;\r\n float: left;\r\n overflow: hidden;\r\n height:20px;\r\n line-height: 20px;\r\n padding-left: 5px;\r\n}\r\n\r\n.contactButton[_ngcontent-%COMP%] {\r\n  opacity: 0.5;\r\n  background-color: transparent;\r\n  border-width: 0px;\r\n  margin-right: 5px;\r\n  float: left;\r\n}\r\n\r\n.contactButton[_ngcontent-%COMP%]:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.contactButton[_ngcontent-%COMP%]:focus {\r\n  opacity: 1;\r\n  border-width: 0px;\r\n}\r\n\r\n@media (min-width: 1190px) {\r\n.contactButton[_ngcontent-%COMP%] {\r\n  float: none;\r\n}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1zdG9yZS9jYXJ0LXN1bW1hcnkvY2FydC1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsaUJBQWlCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFDQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBIiwiZmlsZSI6InNyYy9hcHAvYm9vay1zdG9yZS9jYXJ0LXN1bW1hcnkvY2FydC1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXRvcDoycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi53b3Jkc3tcclxuIGNvbG9yOndoaXRlO1xyXG4gZmxvYXQ6IGxlZnQ7XHJcbiBvdmVyZmxvdzogaGlkZGVuO1xyXG4gaGVpZ2h0OjIwcHg7XHJcbiBsaW5lLWhlaWdodDogMjBweDtcclxuIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcblxyXG4uY29udGFjdEJ1dHRvbiB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci13aWR0aDogMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5jb250YWN0QnV0dG9uOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5jb250YWN0QnV0dG9uOmZvY3VzIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJvcmRlci13aWR0aDogMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTE5MHB4KSB7XHJcbi5jb250YWN0QnV0dG9uIHtcclxuICBmbG9hdDogbm9uZTtcclxufVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartSummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart-summary',
                templateUrl: './cart-summary.component.html',
                styleUrls: ['./cart-summary.component.css']
            }]
    }], function () { return [{ type: src_app_model_cart_model__WEBPACK_IMPORTED_MODULE_1__["Cart"] }]; }, null); })();


/***/ }),

/***/ "QnNB":
/*!****************************************************!*\
  !*** ./src/app/book-store/book-store.component.ts ***!
  \****************************************************/
/*! exports provided: BookStoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookStoreComponent", function() { return BookStoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_book_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../model/book.repository */ "EnQi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _counter_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./counter.directive */ "1h7W");







function BookStoreComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookStoreComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const author_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.changeAuthor(author_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const author_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", author_r3 == ctx_r0.selectedAuthor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", author_r3, " ");
} }
function BookStoreComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookStoreComponent_div_38_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const book_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.viewBook(book_r6._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " View Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", book_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](11, 3, book_r6.originalPrice, "USD", "symbol", "2.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](15, 8, book_r6.price, "USD", "symbol", "2.2-2"));
} }
function BookStoreComponent_button_40_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookStoreComponent_button_40_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const page_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.changePage(page_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", page_r9 == ctx_r2.selectedPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", page_r9, " ");
} }
class BookStoreComponent {
    constructor(repository, router) {
        this.repository = repository;
        this.router = router;
        this.selectedAuthor = null;
        this.booksPerPage = 8;
        this.selectedPage = 1;
    }
    get books() {
        const pageIndex = (this.selectedPage - 1) * this.booksPerPage;
        return this.repository.getBooks(this.selectedAuthor)
            .slice(pageIndex, pageIndex + this.booksPerPage);
    }
    get authors() {
        return this.repository.getAuthors();
    }
    changeAuthor(newAuthor) {
        this.selectedAuthor = newAuthor;
    }
    changePage(newPage) {
        this.selectedPage = newPage;
    }
    changePageSize(newSize) {
        this.booksPerPage = Number(newSize);
        this.changePage(1);
    }
    get pageCount() {
        return Math.ceil(this.repository
            .getBooks(this.selectedAuthor).length / this.booksPerPage);
    }
    viewBook(id) {
        console.log('this id is... ' + id);
        this.router.navigateByUrl('book-list/detail/' + id);
    }
}
BookStoreComponent.ɵfac = function BookStoreComponent_Factory(t) { return new (t || BookStoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_model_book_repository__WEBPACK_IMPORTED_MODULE_1__["BookRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
BookStoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookStoreComponent, selectors: [["app-book-store"]], decls: 41, vars: 4, consts: [[1, "container-fluid"], [1, "row"], ["id", "filter", 1, "col-2", "ml-5"], [2, "font-size", "25px"], [1, "buttonS", 3, "click"], ["class", "buttonS", 3, "active", "click", 4, "ngFor", "ngForOf"], [2, "width", "90%", 3, "value", "change"], ["value", "12"], ["value", "24"], ["value", "36"], ["value", "48"], ["id", "wrapper", 1, "col-9"], ["class", "ngContent", 4, "ngFor", "ngForOf"], ["class", "pageNumber", 3, "active", "click", 4, "counter", "counterOf"], [1, "ngContent"], [1, "bookDiv"], [1, "imageDiv"], [1, "edit_dialog"], [3, "click"], [1, "bookName"], [2, "text-decoration", "line-through", "font-size", "12px"], [2, "font-size", "12px", "color", "red"], [1, "pageNumber", 3, "click"]], template: function BookStoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filter by");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Authors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookStoreComponent_Template_button_click_12_listener() { return ctx.changeAuthor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BookStoreComponent_button_15_Template, 2, 3, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Publish Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BookStoreComponent_Template_select_change_26_listener($event) { return ctx.changePageSize($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "12 per page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "24 per page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "36 per page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "48 per page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, BookStoreComponent_div_38_Template, 16, 13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, BookStoreComponent_button_40_Template, 2, 3, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.authors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.booksPerPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.books);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("counterOf", ctx.pageCount);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _counter_directive__WEBPACK_IMPORTED_MODULE_5__["CounterDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: ["#filter[_ngcontent-%COMP%]{\r\n  margin-top:200px;\r\n  padding: 5px 10px;\r\n  text-align: left;\r\n  font-size:14px;\r\n}\r\n\r\n.buttonS[_ngcontent-%COMP%]{\r\n  margin-left:5px;\r\n  margin-top:10px;\r\n  border: 1px solid grey;\r\n  width:90%;\r\n  background-color: #ffffff;\r\n  font-size: 14px;\r\n}\r\n#wrapper[_ngcontent-%COMP%]{\r\n  margin-top: 50px;\r\n  display: flex;\r\n  flex-wrap:wrap;\r\n  list-style: none;\r\n }\r\n.bookDiv[_ngcontent-%COMP%]{\r\n   width: 231px;\r\n   height:350px;\r\n   border: 1px solid grey;\r\n   margin: 10px;\r\n }\r\n.editButton[_ngcontent-%COMP%]{\r\n  margin-top:20px;\r\n  margin-left: 180px;\r\n  position: absolute;\r\n  z-index: 10;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50px;\r\n  background-color: rgb(129, 129, 122);\r\n}\r\n.imageDiv[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  width:229px;\r\n  height:230px;\r\n  background-color: rgb(238, 235, 235);\r\n}\r\n.edit_dialog[_ngcontent-%COMP%]{\r\n  width:229px;\r\n  height:40px;\r\n  position: absolute;\r\n  bottom: 0;\r\n  font-size:12px;\r\n  padding-top: 10px;\r\n  background-color: rgba(255, 245, 238, 0.863);\r\n}\r\n.bookName[_ngcontent-%COMP%]{\r\n  margin-top:235px;\r\n  margin-right: auto;\r\n  margin-left:auto;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  width:180px;\r\n  text-align: left;\r\n}\r\n.pageNumber[_ngcontent-%COMP%]{\r\n  margin-left: 5px;\r\n  font-size: 12px;\r\n  border-width: 0px;\r\n  background-color: rgba(255, 255, 255, 0);\r\n  margin-bottom: 10px;\r\n}\r\n.pageNumber.a[_ngcontent-%COMP%]{\r\n  transition:border-radius 10px\r\n             background-color silver;\r\n}\r\n.pageNumber.active[_ngcontent-%COMP%]{\r\n  border-radius: 10px;\r\n  background-color: silver;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1zdG9yZS9ib29rLXN0b3JlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0EsWUFBWTtBQUNaO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsU0FBUztFQUNULHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7Q0FDakI7QUFDQTtHQUNFLFlBQVk7R0FDWixZQUFZO0dBQ1osc0JBQXNCO0dBQ3RCLFlBQVk7Q0FDZDtBQUNBO0VBQ0MsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLDRDQUE0QztBQUM5QztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix3Q0FBd0M7RUFDeEMsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRTtvQ0FDa0M7QUFDcEM7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix3QkFBd0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9ib29rLXN0b3JlL2Jvb2stc3RvcmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmaWx0ZXJ7XHJcbiAgbWFyZ2luLXRvcDoyMDBweDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZToxNHB4O1xyXG59XHJcbi8qIEJ1dHRvbnMgKi9cclxuLmJ1dHRvblN7XHJcbiAgbWFyZ2luLWxlZnQ6NXB4O1xyXG4gIG1hcmdpbi10b3A6MTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gIHdpZHRoOjkwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4jd3JhcHBlcntcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOndyYXA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuIH1cclxuIC5ib29rRGl2e1xyXG4gICB3aWR0aDogMjMxcHg7XHJcbiAgIGhlaWdodDozNTBweDtcclxuICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgbWFyZ2luOiAxMHB4O1xyXG4gfVxyXG4gLmVkaXRCdXR0b257XHJcbiAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxODBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOSwgMTI5LCAxMjIpO1xyXG59XHJcbi5pbWFnZURpdntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIHdpZHRoOjIyOXB4O1xyXG4gIGhlaWdodDoyMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzUsIDIzNSk7XHJcbn1cclxuLmVkaXRfZGlhbG9ne1xyXG4gIHdpZHRoOjIyOXB4O1xyXG4gIGhlaWdodDo0MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgZm9udC1zaXplOjEycHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI0NSwgMjM4LCAwLjg2Myk7XHJcbn1cclxuLmJvb2tOYW1le1xyXG4gIG1hcmdpbi10b3A6MjM1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgd2lkdGg6MTgwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4ucGFnZU51bWJlcntcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBib3JkZXItd2lkdGg6IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnBhZ2VOdW1iZXIuYXtcclxuICB0cmFuc2l0aW9uOmJvcmRlci1yYWRpdXMgMTBweFxyXG4gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciBzaWx2ZXI7XHJcbn1cclxuLnBhZ2VOdW1iZXIuYWN0aXZle1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookStoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-book-store',
                templateUrl: './book-store.component.html',
                styleUrls: ['./book-store.component.css']
            }]
    }], function () { return [{ type: _model_book_repository__WEBPACK_IMPORTED_MODULE_1__["BookRepository"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "S4ta":
/*!***********************************************************!*\
  !*** ./src/app/book-store/checkout/checkout.component.ts ***!
  \***********************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_order_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../model/order.repository */ "hf/X");
/* harmony import */ var _model_order_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/order.model */ "sKKC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function CheckoutComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Thanks message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Thanks for placing your order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " we will ship it soon. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Return to store");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_form_2_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter your name. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_form_2_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter your address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_form_2_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter your city");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_form_2_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter your province");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_form_2_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter your postal code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_form_2_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter your country");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CheckoutComponent_form_2_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.submitOrder(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_form_2_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.order.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CheckoutComponent_form_2_span_7_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_form_2_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.order.address = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CheckoutComponent_form_2_span_13_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_form_2_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.order.city = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CheckoutComponent_form_2_span_19_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Province");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_form_2_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.order.province = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CheckoutComponent_form_2_span_25_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "postalCode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_form_2_Template_input_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.order.postalCode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CheckoutComponent_form_2_span_31_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_form_2_Template_input_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.order.country = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, CheckoutComponent_form_2_span_37_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Complete Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.order.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.submitted && _r3.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.order.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.submitted && _r5.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.order.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.submitted && _r7.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.order.province);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.submitted && _r9.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.order.postalCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.submitted && _r11.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.order.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.submitted && _r13.invalid);
} }
class CheckoutComponent {
    constructor(repository, order) {
        this.repository = repository;
        this.order = order;
        this.orderSent = false;
        this.submitted = false;
    }
    ngOnInit() { }
    submitOrder(form) {
        this.submitted = true;
        if (form.valid) {
            this.repository.saveOrder(this.order).subscribe(order => {
                this.order.clear();
                this.orderSent = true;
                this.submitted = false;
            });
        }
    }
}
CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_model_order_repository__WEBPACK_IMPORTED_MODULE_1__["OrderRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_model_order_model__WEBPACK_IMPORTED_MODULE_2__["Order"])); };
CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckoutComponent, selectors: [["app-checkout"]], decls: 3, vars: 2, consts: [[1, "container-fluid"], ["class", "m-2 text-center", 4, "ngIf"], ["novalidate", "", "class", "m-2", 3, "ngSubmit", 4, "ngIf"], [1, "m-2", "text-center"], ["routerLink", "/book-list", 1, "btn", "btn-priamry"], ["novalidate", "", 1, "m-2", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["for", ""], ["name", "name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "name", "address", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["address", "ngModel"], ["type", "text", "name", "city", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["city", "ngModel"], ["type", "text", "name", "province", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["province", "ngModel"], ["type", "text", "name", "postalCode", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["postalCode", "ngModel"], ["type", "text", "name", "country", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["country", "ngModel"], [1, "text-center"], ["routerLink", "/cart", 1, "btn", "btn-secondary", "m-1"], ["type", "submit", 1, "btn", "btn-primary", "m-1"], [1, "text-danger"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CheckoutComponent_div_1_Template, 8, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CheckoutComponent_form_2_Template, 43, 12, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderSent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.orderSent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["input.ng-dirty.ng-invalid[_ngcontent-%COMP%]\r\n{\r\n  border:2px solid #ff0000;\r\n}\r\ninput.ng-dirty.ng-valid[_ngcontent-%COMP%]\r\n{\r\n  border:2px solid #6bc502;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1zdG9yZS9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLHdCQUF3QjtBQUMxQjtBQUNBOztFQUVFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stc3RvcmUvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLWRpcnR5Lm5nLWludmFsaWRcclxue1xyXG4gIGJvcmRlcjoycHggc29saWQgI2ZmMDAwMDtcclxufVxyXG5pbnB1dC5uZy1kaXJ0eS5uZy12YWxpZFxyXG57XHJcbiAgYm9yZGVyOjJweCBzb2xpZCAjNmJjNTAyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-checkout',
                templateUrl: './checkout.component.html',
                styleUrls: ['./checkout.component.css']
            }]
    }], function () { return [{ type: _model_order_repository__WEBPACK_IMPORTED_MODULE_1__["OrderRepository"] }, { type: _model_order_model__WEBPACK_IMPORTED_MODULE_2__["Order"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _partials_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/header/header.component */ "4JXc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partials/footer/footer.component */ "Be/C");





class AppComponent {
    constructor() {
        this.title = 'BookStore';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [["id", "main", 1, "main_wrapper"], ["id", "grid_placeholder", 1, "main_grid_constraint"], ["id", "content_in_main_wrapper", 1, "main_grid_constraint"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_partials_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["#grid_placeholder[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n\r\n#content_in_main_wrapper[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin:0;\r\n  padding:0;\r\n  position: relative;\r\n}\r\n\r\n\r\n@media (min-width: 1190px) {\r\n  #content_in_main_wrapper[_ngcontent-%COMP%] {\r\n  height:100vh;\r\n}\r\n\r\n  #grid_placeholder[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n  }\r\n  .main_wrapper[_ngcontent-%COMP%] {\r\n    grid-template-columns: 20% 80%;\r\n    display: grid;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EseURBQXlEOzs7QUFHekQ7RUFDRSxhQUFhO0FBQ2Y7OztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0U7RUFDQSxZQUFZO0FBQ2Q7O0VBRUU7SUFDRSxjQUFjO0lBQ2QsV0FBVztFQUNiO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi8qZm9yIG1ha2luZyBhbGwgcGFnZXMnIGJhY2tncm91bmQgYXJlIHRoZSBjb3JyZWN0IGNvbG9yKi9cclxuXHJcblxyXG4jZ3JpZF9wbGFjZWhvbGRlciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4jY29udGVudF9pbl9tYWluX3dyYXBwZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOjA7XHJcbiAgcGFkZGluZzowO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDExOTBweCkge1xyXG4gICNjb250ZW50X2luX21haW5fd3JhcHBlciB7XHJcbiAgaGVpZ2h0OjEwMHZoO1xyXG59XHJcblxyXG4gICNncmlkX3BsYWNlaG9sZGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5tYWluX3dyYXBwZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "UbF0":
/*!*************************************!*\
  !*** ./src/app/model/user.model.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "XEn3":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../partials/base-page/base-page.component */ "FFTb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





class ContactComponent extends _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_0__["BasePageComponent"] {
    constructor(route) {
        super(route);
    }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-base-page");
    } }, directives: [_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_0__["BasePageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: jwtTokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtTokenGetter", function() { return jwtTokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_model_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/model.module */ "DIJg");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/pages.module */ "dgmN");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partials/partials.module */ "rERZ");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _book_store_book_store_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./book-store/book-store.module */ "Blh2");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");











function jwtTokenGetter() {
    return localStorage.getItem('id_token');
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _book_store_book_store_module__WEBPACK_IMPORTED_MODULE_7__["BookStoreModule"],
            _partials_partials_module__WEBPACK_IMPORTED_MODULE_3__["PartialsModule"],
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__["PagesModule"],
            _model_model_module__WEBPACK_IMPORTED_MODULE_1__["ModelModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__["JwtModule"].forRoot({
                config: {
                    tokenGetter: jwtTokenGetter
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _book_store_book_store_module__WEBPACK_IMPORTED_MODULE_7__["BookStoreModule"],
        _partials_partials_module__WEBPACK_IMPORTED_MODULE_3__["PartialsModule"],
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__["PagesModule"],
        _model_model_module__WEBPACK_IMPORTED_MODULE_1__["ModelModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__["JwtModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _book_store_book_store_module__WEBPACK_IMPORTED_MODULE_7__["BookStoreModule"],
                    _partials_partials_module__WEBPACK_IMPORTED_MODULE_3__["PartialsModule"],
                    _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__["PagesModule"],
                    _model_model_module__WEBPACK_IMPORTED_MODULE_1__["ModelModule"],
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__["JwtModule"].forRoot({
                        config: {
                            tokenGetter: jwtTokenGetter
                        }
                    })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "b/QR":
/*!*************************************!*\
  !*** ./src/app/model/cart.model.ts ***!
  \*************************************/
/*! exports provided: Cart, CartLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartLine", function() { return CartLine; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class Cart {
    constructor() {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }
    addLine(book, quantity = 1) {
        const line = this.lines.find(l => l.book._id === book._id);
        if (line !== undefined) {
            line.quantity += quantity;
        }
        else {
            this.lines.push(new CartLine(book, quantity));
        }
        this.recalculate();
    }
    updateQuantity(book, quantity) {
        const line = this.lines.find(l => l.book._id === book._id);
        if (line !== undefined) {
            line.quantity = Number(quantity);
        }
        this.recalculate();
    }
    removeLine(id) {
        const index = this.lines.findIndex(l => l.book._id === id);
        this.lines.splice(index, 1);
        this.recalculate();
    }
    clear() {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }
    recalculate() {
        this.itemCount = 0;
        this.cartPrice = 0;
        this.lines.forEach(l => {
            this.itemCount += l.quantity;
            this.cartPrice += (l.quantity * l.book.price);
        });
    }
}
Cart.ɵfac = function Cart_Factory(t) { return new (t || Cart)(); };
Cart.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Cart, factory: Cart.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cart, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
class CartLine {
    constructor(book, quantity) {
        this.book = book;
        this.quantity = quantity;
    }
    get lineTotal() {
        return this.quantity * this.book.price;
    }
}


/***/ }),

/***/ "cPHl":
/*!********************************************!*\
  !*** ./src/app/model/static.datasource.ts ***!
  \********************************************/
/*! exports provided: StaticDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticDataSource", function() { return StaticDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _book_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book.model */ "47DY");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");




class StaticDataSource {
    constructor() {
        this.books = [
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](1, 'Book 1', 'Author 1', 'Year 1', 'Short Description 1', 10),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](2, 'Book 2', 'Author 1', 'Year 2', 'Short Description 2', 10),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](3, 'Book 3', 'Author 1', 'Year 3', 'Short Description 3', 10),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](4, 'Book 4', 'Author 2', 'Year 4', 'Short Description 4', 10),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](5, 'Book 5', 'Author 2', 'Year 5', 'Short Description 5', 10),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](6, 'Book 6', 'Author 2', 'Year 6', 'Short Description 6', 10),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](7, 'Book 7', 'Author 2', 'Year 7', 'Short Description 7', 10),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](8, 'Book 8', 'Author 3', 'Year 8', 'Short Description 8', 10),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](9, 'Book 9', 'Author 3', 'Year 9', 'Short Description 9', 10),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](10, 'Book 10', 'Author 4', 'Year 10', 'Short Description 10', 10),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](11, 'Book 11', 'Author 4', 'Year 11', 'Short Description 11', 10),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](12, 'Book 12', 'Author 5', 'Year 12', 'Short Description 12', 10),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](13, 'Book 13', 'Author 5', 'Year 13', 'Short Description 13', 10),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](14, 'Book 14', 'Author 5', 'Year 14', 'Short Description 14', 10),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](15, 'Book 15', 'Author 5', 'Year 15', 'Short Description 15', 10),
        ];
    }
    getBooks() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([this.books]);
    }
    saveOrder(order) {
        console.log(JSON.stringify(order));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([order]);
    }
}
StaticDataSource.ɵfac = function StaticDataSource_Factory(t) { return new (t || StaticDataSource)(); };
StaticDataSource.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StaticDataSource, factory: StaticDataSource.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StaticDataSource, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../partials/partials.module */ "rERZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "rVrE");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "XEn3");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "1LmZ");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects.component */ "u/sh");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/service.component */ "CaxY");
/* harmony import */ var _projects_project_filter_project_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects/project-filter/project-filter.component */ "frJS");
/* harmony import */ var _projects_project_items_project_items_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects/project-items/project-items.component */ "nucg");












class PagesModule {
}
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _partials_partials_module__WEBPACK_IMPORTED_MODULE_0__["PartialsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
        _service_service_component__WEBPACK_IMPORTED_MODULE_8__["ServiceComponent"],
        _projects_project_filter_project_filter_component__WEBPACK_IMPORTED_MODULE_9__["ProjectFilterComponent"],
        _projects_project_items_project_items_component__WEBPACK_IMPORTED_MODULE_10__["ProjectItemsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _partials_partials_module__WEBPACK_IMPORTED_MODULE_0__["PartialsModule"]], exports: [_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
        _service_service_component__WEBPACK_IMPORTED_MODULE_8__["ServiceComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _partials_partials_module__WEBPACK_IMPORTED_MODULE_0__["PartialsModule"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
                declarations: [
                    _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
                    _service_service_component__WEBPACK_IMPORTED_MODULE_8__["ServiceComponent"],
                    _projects_project_filter_project_filter_component__WEBPACK_IMPORTED_MODULE_9__["ProjectFilterComponent"],
                    _projects_project_items_project_items_component__WEBPACK_IMPORTED_MODULE_10__["ProjectItemsComponent"]
                ],
                exports: [
                    _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
                    _service_service_component__WEBPACK_IMPORTED_MODULE_8__["ServiceComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "f3vO":
/*!*******************************************!*\
  !*** ./src/app/guard/storeFirst.guard.ts ***!
  \*******************************************/
/*! exports provided: StoreFirstGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFirstGuard", function() { return StoreFirstGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _book_store_book_store_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../book-store/book-store.component */ "QnNB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class StoreFirstGuard {
    constructor(router) {
        this.router = router;
        this.firstNavigation = true;
    }
    canActivate(route, state) {
        if (this.firstNavigation) {
            this.firstNavigation = false;
            if (route.component !== _book_store_book_store_component__WEBPACK_IMPORTED_MODULE_1__["BookStoreComponent"]) {
                this.router.navigateByUrl('/');
                return false;
            }
        }
        return true;
    }
}
StoreFirstGuard.ɵfac = function StoreFirstGuard_Factory(t) { return new (t || StoreFirstGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
StoreFirstGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StoreFirstGuard, factory: StoreFirstGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreFirstGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "frJS":
/*!***************************************************************************!*\
  !*** ./src/app/pages/projects/project-filter/project-filter.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProjectFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectFilterComponent", function() { return ProjectFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProjectFilterComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectFilterComponent.ɵfac = function ProjectFilterComponent_Factory(t) { return new (t || ProjectFilterComponent)(); };
ProjectFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectFilterComponent, selectors: [["app-project-filter"]], decls: 64, vars: 0, consts: [["id", "sticky"], ["href", "#", 1, "button", "nav-link", "p-0"], [1, "d-flex", "flex-row", "p-0"], ["id", "tag3", 1, "cube"], ["id", "tag4", 1, "arrow"], [1, "cube"], [1, "arrow"], ["id", "tag5", 1, "cube"], ["id", "tag6", 1, "arrow"], ["id", "tag1", 1, "cube"], ["id", "tag2", 1, "arrow"], [1, "td_s"], ["checked", "checked", "name", "react", "type", "checkbox", "value", "react"], ["checked", "checked", "name", "python", "type", "checkbox", "value", "python"], ["checked", "checked", "name", "java", "type", "checkbox", "value", "java"], ["checked", "checked", "name", "Radio4", "type", "checkbox", "value", "V1"], ["checked", "checked", "name", "Radio9", "type", "checkbox", "value", "V1"], ["checked", "checked", "name", "Radio13", "type", "checkbox", "value", "V1"], ["checked", "checked", "name", "Radio14", "type", "checkbox", "value", "V1"], ["checked", "checked", "name", "Radio15", "type", "checkbox", "value", "V1"], ["checked", "checked", "name", "Radio16", "type", "checkbox", "value", "V1"], ["colspan", "td_s"], ["checked", "checked", "name", "Radio17", "type", "checkbox", "value", "V1"]], template: function ProjectFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " SORT BY : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "MOBILE APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "pc APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "UX / UI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "WEB APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u00A0Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u00A0React ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u00A0Python ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u00A0JAVA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u00A0Go ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u00A0C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u00A0SQL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u00A0Bootstrap ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u00A0JavaScript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\u00A0MongoDB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\u00A0Ruby on Rails ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#filter_wrapper[_ngcontent-%COMP%]\r\n{\r\n  text-align: left;\r\n  height:100%;\r\n  padding-top:200px;\r\n  background-color: #F2F4F5;\r\n}\r\n#sticky[_ngcontent-%COMP%]{\r\n  position:fixed;\r\n  top:380px;\r\n  width: 15%;\r\n  overflow: hidden;\r\n\r\n  letter-spacing: 0.1em;\r\n  padding-left: 30px;\r\n  font-size: 12px;\r\n  text-align: left;\r\n  color: grey;\r\n}\r\n\r\n#tag1[_ngcontent-%COMP%]{\r\n  background-color: rgba(214, 150, 55, 0.8);\r\n  border-left:25px solid rgb(236, 202, 147);\r\n}\r\n#tag2[_ngcontent-%COMP%]{\r\n  border-left-color:  rgba(214, 150, 55, 0.8);\r\n}\r\n#tag3[_ngcontent-%COMP%]{\r\n  background-color: rgba(22, 121, 167, 0.699);\r\n  border-left:25px solid  rgb(103, 203, 233);\r\n}\r\n#tag4[_ngcontent-%COMP%]{\r\n  border-left-color:  rgba(22, 121, 167, 0.699);\r\n}\r\n#tag5[_ngcontent-%COMP%]{\r\n  background-color: rgba(170, 27, 134, 0.705);\r\n  border-left:25px solid  rgb(231, 130, 206);\r\n}\r\n#tag6[_ngcontent-%COMP%]{\r\n  border-left-color: rgba(170, 27, 134, 0.705);\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  width: 0;\r\n  height: 0;\r\n  border-color: transparent;\r\n  border-style: solid;\r\n  border-left-color: #97b60f70;\r\n  border-width: 20px;\r\n  position: relative;\r\n}\r\n.cube[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n  padding-top:15px;\r\n  padding-right:20px;\r\n  font-family: sans-serif;\r\n  font-weight: 300;\r\n  font-size:12px;\r\n  color: #ffffffef;\r\n  font-size: 12px;\r\n  line-height: 110%;\r\n  letter-spacing: 2px;\r\n  text-align: right;\r\n  text-transform: uppercase;\r\n  width: 160px;\r\n  height: 40px;\r\n  background-color: #97b60f70;\r\n  border-left:25px solid  #d5f544;\r\n}\r\n\r\n.td_s[_ngcontent-%COMP%]{\r\n  padding-bottom: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdC1maWx0ZXIvcHJvamVjdC1maWx0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUFDakI7O0VBRUUsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7O0VBRWhCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFFQSx5QkFBeUI7QUFDekI7RUFDRSx5Q0FBeUM7RUFDekMseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRSwyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLDJDQUEyQztFQUMzQywwQ0FBMEM7QUFDNUM7QUFDQTtFQUNFLDZDQUE2QztBQUMvQztBQUNBO0VBQ0UsMkNBQTJDO0VBQzNDLDBDQUEwQztBQUM1QztBQUNBO0VBQ0UsNENBQTRDO0FBQzlDO0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsK0JBQStCO0FBQ2pDO0FBRUEsVUFBVTtBQUNWO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdC1maWx0ZXIvcHJvamVjdC1maWx0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHBsYWNlIGhvbGRlciAqL1xyXG4jZmlsdGVyX3dyYXBwZXJcclxue1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgcGFkZGluZy10b3A6MjAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjRGNTtcclxufVxyXG4jc3RpY2t5e1xyXG4gIHBvc2l0aW9uOmZpeGVkO1xyXG4gIHRvcDozODBweDtcclxuICB3aWR0aDogMTUlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbi8qIGZpbHRlciBsYWJlbHMgLSBjb2xvciovXHJcbiN0YWcxe1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE0LCAxNTAsIDU1LCAwLjgpO1xyXG4gIGJvcmRlci1sZWZ0OjI1cHggc29saWQgcmdiKDIzNiwgMjAyLCAxNDcpO1xyXG59XHJcbiN0YWcye1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAgcmdiYSgyMTQsIDE1MCwgNTUsIDAuOCk7XHJcbn1cclxuI3RhZzN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMiwgMTIxLCAxNjcsIDAuNjk5KTtcclxuICBib3JkZXItbGVmdDoyNXB4IHNvbGlkICByZ2IoMTAzLCAyMDMsIDIzMyk7XHJcbn1cclxuI3RhZzR7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICByZ2JhKDIyLCAxMjEsIDE2NywgMC42OTkpO1xyXG59XHJcbiN0YWc1e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcwLCAyNywgMTM0LCAwLjcwNSk7XHJcbiAgYm9yZGVyLWxlZnQ6MjVweCBzb2xpZCAgcmdiKDIzMSwgMTMwLCAyMDYpO1xyXG59XHJcbiN0YWc2e1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2JhKDE3MCwgMjcsIDEzNCwgMC43MDUpO1xyXG59XHJcblxyXG4vKiBmaWx0ZXIgbGFiZWxzIC0gZm9ybSovXHJcbi5hcnJvdyB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjOTdiNjBmNzA7XHJcbiAgYm9yZGVyLXdpZHRoOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY3ViZXtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOjE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDoyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOjEycHg7XHJcbiAgY29sb3I6ICNmZmZmZmZlZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDExMCU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHdpZHRoOiAxNjBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk3YjYwZjcwO1xyXG4gIGJvcmRlci1sZWZ0OjI1cHggc29saWQgICNkNWY1NDQ7XHJcbn1cclxuXHJcbi8qIFRhYmxlICovXHJcbi50ZF9ze1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-filter',
                templateUrl: './project-filter.component.html',
                styleUrls: ['./project-filter.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hO0c":
/*!***************************************!*\
  !*** ./src/app/model/auth.service.ts ***!
  \***************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.model */ "UbF0");
/* harmony import */ var _rest_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.datasource */ "DZdm");




class AuthService {
    constructor(datasource) {
        this.datasource = datasource;
        this.user = new _user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    authenticate(user) {
        return this.datasource.authenticate(user);
    }
    storeUserData(token, user) {
        this.datasource.storeUserData(token, user);
    }
    get authenticated() {
        return this.datasource.loggedIn();
    }
    logout() {
        return this.datasource.logout();
    }
    // tslint:disable-next-line: typedef
    create(user) {
        console.log('IN auth.service.ts creat(user) ...');
        return this.datasource.addUser(user);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_rest_datasource__WEBPACK_IMPORTED_MODULE_2__["RestDataSource"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _rest_datasource__WEBPACK_IMPORTED_MODULE_2__["RestDataSource"] }]; }, null); })();


/***/ }),

/***/ "hf/X":
/*!*******************************************!*\
  !*** ./src/app/model/order.repository.ts ***!
  \*******************************************/
/*! exports provided: OrderRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRepository", function() { return OrderRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rest_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rest.datasource */ "DZdm");



class OrderRepository {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.orders = [];
        this.loaded = false;
    }
    loadOrders() {
        this.loaded = true;
        this.dataSource.getOrders().subscribe(orders => this.orders = orders);
    }
    getOrders() {
        if (!this.loaded) {
            this.loadOrders();
        }
        return this.orders;
    }
    saveOrder(order) {
        return this.dataSource.saveOrder(order);
    }
    updateOrder(updatedOrder) {
        this.dataSource.updateOrder(updatedOrder).subscribe(order => {
            this.orders.splice(this.orders.findIndex(o => o._id === order._id), 1, order);
        });
    }
    deleteOrder(id) {
        this.dataSource.deleteOrder(id).subscribe(order => {
            this.orders.splice(this.orders.findIndex(o => id === o._id), 1);
        });
    }
}
OrderRepository.ɵfac = function OrderRepository_Factory(t) { return new (t || OrderRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_rest_datasource__WEBPACK_IMPORTED_MODULE_1__["RestDataSource"])); };
OrderRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderRepository, factory: OrderRepository.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderRepository, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _rest_datasource__WEBPACK_IMPORTED_MODULE_1__["RestDataSource"] }]; }, null); })();


/***/ }),

/***/ "nucg":
/*!*************************************************************************!*\
  !*** ./src/app/pages/projects/project-items/project-items.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProjectItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectItemsComponent", function() { return ProjectItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProjectItemsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectItemsComponent.ɵfac = function ProjectItemsComponent_Factory(t) { return new (t || ProjectItemsComponent)(); };
ProjectItemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectItemsComponent, selectors: [["app-project-items"]], decls: 258, vars: 0, consts: [[1, "service_div"], [1, "left"], ["src", "./assets/images/p1.jpg", 1, "service_img"], [1, "right"], [1, "title_s"], ["id", "wrapper"], ["id", "c1", 1, "text_s"], ["id", "c2"], ["id", "c3", 1, "text_s"], ["id", "c4", 1, "text_s"], [1, "grey"], [1, "text-center"], ["href", "/project", "rel", "nofollow noopener", 1, "example_c"], ["id", "button_s"], ["routerLink", "/login", "rel", "nofollow noopener", 1, "example_c"], [1, "divider"], ["src", "./assets/images/p3.JPG", 1, "service_img"]], template: function ProjectItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "E-Commerce Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Published:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u00A0\u00A02021 winter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Track:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u00A0\u00A0MongoDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00A0\u00A0Node.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u00A0\u00A0Express.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u00A0\u00A0Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Framework:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u00A0\u00A0VScode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Others:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u00A0\u00A0Fontawsome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u00A0\u00A0Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " This website shows the understaing of Angular module, and the shpify processure. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Highlight Functions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Private Shopping Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Display good base on perference");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Register / login / logout authentication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Profucts CURD function");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " View Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " View Website ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "GPA calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Published:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\u00A0\u00A02021 winter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Track:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\u00A0\u00A0MongoDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\u00A0\u00A0Node.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\u00A0\u00A0Express.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\u00A0\u00A0Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Framework:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "\u00A0\u00A0VScode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Others:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "\u00A0\u00A0Fontawsome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\u00A0\u00A0Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " This website shows the understaing of Angular module, and the shpify processure. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Highlight Functions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Private Shopping Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Display good base on perference");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Register / login / logout authentication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Profucts CURD function");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " View Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " View Website ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Profolio Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " Lorem ipsum dolor sit amet, vim enim tollit quaeque cu, quo ea aperiam dolorum singulis. Pri ad brute diceret alterum, per no esse nobis putant. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " Lorem ipsum dolor sit amet, vim enim tollit quaeque cu, quo ea aperiam dolorum singulis. Pri ad brute diceret alterum, per no esse nobis putant. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " Mea corpora ocurreret in, mea te clita aeterno quaeque.Eum te audire adolescens. Iudico feugiat temporibus ius ne, eos nisl nullam disputationi cu. Et eos errem phaedrum referrentur. Ex liber labores usu, meliore consulatu per at.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Ad mea labitur efficiendi. Vix an unum adhuc contentiones, ex vis purto cibo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Real Estate Webpage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Published:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "\u00A0\u00A02021 winter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Track:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "\u00A0\u00A0React");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "\u00A0\u00A0Node.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "\u00A0\u00A0Express.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "\u00A0\u00A0Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Framework:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "\u00A0\u00A0VScode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Others:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "\u00A0\u00A0Fontawsome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "\u00A0\u00A0Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " This website shows the understaing of Angular module, and the shpify processure. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, " Highlight Functions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Private Shopping Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Display good base on perference");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Register / login / logout authentication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Profucts CURD function");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, " View Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, " View Website ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".button_s[_ngcontent-%COMP%]{\r\n  text-align:center;\r\n  color:rgb(49, 48, 48);\r\n  text-shadow: shadow1, shadow2, shadow3;\r\n  text-shadow: 0px 0px 0px rgb(165, 165, 165), 3px 8px 0px rgba(0, 0, 0, 0);\r\n}\r\n.example_c[_ngcontent-%COMP%] {\r\n  color: #ffffff !important;\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  background: #858484;\r\n  margin-top:10px;\r\n  margin-left:15px;\r\n  margin-right:15px;\r\n  padding: 5px;\r\n  border: 4px solid #d6d6d6 !important;\r\n  display: inline-block;\r\n  transition: all 0.4s ease 0s;\r\n  font-size: 12px;\r\n}\r\n.example_c[_ngcontent-%COMP%]:hover {\r\n  color: #ffffff !important;\r\n  background: #f6b93b;\r\n  border-color: #f6b93b !important;\r\n  transition: all 0.4s ease 0s;\r\n}\r\n\r\n.service_img[_ngcontent-%COMP%] {\r\n  border-top-left-radius: 0px;\r\n  border-bottom-left-radius: 0px;\r\n  height: 450px;\r\n  width: 320px;\r\n}\r\n\r\n.text_s[_ngcontent-%COMP%] {\r\n  padding-left: 7px;\r\n  font-weight: lighter;\r\n  line-height: 18px;\r\n  font-family: \"Open sans\", sans-serif;\r\n  color: #292828;\r\n  font-size: 12px;\r\n  text-align: justify;\r\n  text-justify: inter-word;\r\n}\r\n.grey[_ngcontent-%COMP%] {\r\n  background-color: #d3caca4d;\r\n  padding: 15px 15px ;\r\n  font-weight: lighter;\r\n  line-height: 18px;\r\n  font-family: \"Open sans\", sans-serif;\r\n  color: #292828;\r\n  font-size: 12px;\r\n  text-align: justify;\r\n  text-justify: inter-word;\r\n}\r\n\r\n#wrapper[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  display: flex;\r\n  width: auto;\r\n}\r\n#c1[_ngcontent-%COMP%], #c3[_ngcontent-%COMP%] {\r\n  text-align:left;\r\n  width: 49%;\r\n  height: 130px;\r\n}\r\n#c2[_ngcontent-%COMP%] {\r\n  margin-top: 5px;\r\n  margin-top: 5px;\r\n  margin-right: 20px;\r\n  margin-left: 20px;\r\n  border-left: 1px solid gray;\r\n  height: 150px;\r\n}\r\n#c4[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n}\r\n\r\n\r\n@media (min-width: 850px) {\r\n\r\n  .service_div[_ngcontent-%COMP%] {\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    width: 800px;\r\n  }\r\n  .left[_ngcontent-%COMP%] {\r\n    border-top-left-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n\r\n    margin-top: 35px;\r\n    float: right;\r\n    width: 40%;\r\n  }\r\n  .divider[_ngcontent-%COMP%] {\r\n    height: 35px;\r\n  }\r\n  .right[_ngcontent-%COMP%] {\r\n    border-top-right-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n\r\n    letter-spacing: 0.1rem;\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n\r\n    margin-top: 35px;\r\n    float: left;\r\n    width: 60%;\r\n\r\n    height: 500px;\r\n    text-align: left;\r\n    padding: 10px 30px 10px 30px;\r\n    background-color: rgb(255, 255, 255);\r\n  }\r\n  .divider[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 60%;\r\n  }\r\n  .service_img[_ngcontent-%COMP%] {\r\n    border-top-left-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n    height: 500px;\r\n    max-width: 500px;\r\n    overflow: hidden;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1px) and (max-width: 849px) {\r\n\r\n  .service_img[_ngcontent-%COMP%] {\r\n    border-top-left-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n  .text_s[_ngcontent-%COMP%] {\r\n    padding-right: 5px;\r\n  }\r\n  #c1[_ngcontent-%COMP%], #c2[_ngcontent-%COMP%], #c3[_ngcontent-%COMP%], #wrapper[_ngcontent-%COMP%] {\r\n    height: auto;\r\n  }\r\n  #wrapper[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    background-color: white;\r\n    padding: 0px;\r\n  }\r\n  .divider[_ngcontent-%COMP%] {\r\n    margin-left: 3%;\r\n    margin-right: 3%;\r\n    height: 30px;\r\n  }\r\n  .right[_ngcontent-%COMP%] {\r\n    border-bottom-left-radius: 20px;\r\n    border-bottom-right-radius: 20px;\r\n    background-color: white;\r\n    margin-left: 15%;\r\n    margin-right: 15%;\r\n    padding: 20px;\r\n    height: auto;\r\n  }\r\n  .left[_ngcontent-%COMP%] {\r\n    border-top-left-radius: 20px;\r\n    border-top-right-radius: 20px;\r\n    padding-top: 25px;\r\n    margin-top: 20px;\r\n    margin-left: 15%;\r\n    margin-right: 15%;\r\n    height: auto;\r\n    overflow: hidden;\r\n  }\r\n  .title_s[_ngcontent-%COMP%] {\r\n    color: #000000;\r\n    letter-spacing: 0.1rem;\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    margin-top: 20px;\r\n  }\r\n  #intro_s[_ngcontent-%COMP%] {\r\n    margin-left: 60px;\r\n    margin-right: 60px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdC1pdGVtcy9wcm9qZWN0LWl0ZW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DO0FBQ3BDLG9DQUFvQztBQUNwQyxvQ0FBb0M7QUFHcEM7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHNDQUFzQztFQUN0Qyx5RUFBeUU7QUFDM0U7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsNEJBQTRCO0FBQzlCO0FBRUEsY0FBYztBQUVkO0VBQ0UsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBRUEsT0FBTztBQUNQO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix3QkFBd0I7QUFDMUI7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUNBOztFQUVFLGVBQWU7RUFDZixVQUFVO0VBQ1YsYUFBYTtBQUNmO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUEsUUFBUTtBQUNSLGdCQUFnQjtBQUNoQjs7RUFFRTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtFQUNkO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsOEJBQThCOztJQUU5QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFVBQVU7RUFDWjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsK0JBQStCOztJQUUvQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGdCQUFnQjs7SUFFaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxVQUFVOztJQUVWLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLG9DQUFvQztFQUN0QztFQUNBO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFFQSxpQkFBaUI7QUFDakI7O0VBRUU7SUFDRSwyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLFdBQVc7RUFDYjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7Ozs7SUFJRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsWUFBWTtFQUNkO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9qZWN0cy9wcm9qZWN0LWl0ZW1zL3Byb2plY3QtaXRlbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS1YdVR1bmcgSmluIDMwMTExMTg4OS0tLS0tLS0tKi9cclxuLyotLS0tLS0tcHJvamVjdCBwYWdlIGNzcy0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLTIwMjAtMTAtMDktLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuLmJ1dHRvbl9ze1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGNvbG9yOnJnYig0OSwgNDgsIDQ4KTtcclxuICB0ZXh0LXNoYWRvdzogc2hhZG93MSwgc2hhZG93Miwgc2hhZG93MztcclxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAwcHggcmdiKDE2NSwgMTY1LCAxNjUpLCAzcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDApO1xyXG59XHJcbi5leGFtcGxlX2Mge1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogIzg1ODQ4NDtcclxuICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICBtYXJnaW4tcmlnaHQ6MTVweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgI2Q2ZDZkNiAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uZXhhbXBsZV9jOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICNmNmI5M2I7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjZiOTNiICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcclxufVxyXG5cclxuLyppY29uIGltYWdlcyovXHJcblxyXG4uc2VydmljZV9pbWcge1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICB3aWR0aDogMzIwcHg7XHJcbn1cclxuXHJcbi8qdGV4dCovXHJcbi50ZXh0X3Mge1xyXG4gIHBhZGRpbmctbGVmdDogN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gc2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjMjkyODI4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcclxufVxyXG4uZ3JleSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzY2FjYTRkO1xyXG4gIHBhZGRpbmc6IDE1cHggMTVweCA7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBzYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICMyOTI4Mjg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xyXG59XHJcblxyXG4vKnRleHQgY29sdW1ucyovXHJcbiN3cmFwcGVyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuI2MxLFxyXG4jYzMge1xyXG4gIHRleHQtYWxpZ246bGVmdDtcclxuICB3aWR0aDogNDklO1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbn1cclxuI2MyIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG4jYzQge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi8qYm94ZXMqL1xyXG4vKmJpZ2dlciBzY3JlZW4qL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogODUwcHgpIHtcclxuXHJcbiAgLnNlcnZpY2VfZGl2IHtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gIH1cclxuICAubGVmdCB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMzVweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG4gIC5kaXZpZGVyIHtcclxuICAgIGhlaWdodDogMzVweDtcclxuICB9XHJcbiAgLnJpZ2h0IHtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xyXG5cclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA2MCU7XHJcblxyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHggMTBweCAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIH1cclxuICAuZGl2aWRlciB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgfVxyXG4gIC5zZXJ2aWNlX2ltZyB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuXHJcbi8qc21hbGxlciBzY3JlZW4qL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDFweCkgYW5kIChtYXgtd2lkdGg6IDg0OXB4KSB7XHJcblxyXG4gIC5zZXJ2aWNlX2ltZyB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAudGV4dF9zIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgI2MxLFxyXG4gICNjMixcclxuICAjYzMsXHJcbiAgI3dyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAjd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG4gIC5kaXZpZGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gIC5yaWdodCB7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5sZWZ0IHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC50aXRsZV9zIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICAjaW50cm9fcyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNjBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectItemsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-items',
                templateUrl: './project-items.component.html',
                styleUrls: ['./project-items.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rERZ":
/*!*********************************************!*\
  !*** ./src/app/partials/partials.module.ts ***!
  \*********************************************/
/*! exports provided: PartialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartialsModule", function() { return PartialsModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _book_store_cart_summary_cart_summary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../book-store/cart-summary/cart-summary.component */ "PbUm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _base_page_base_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base-page/base-page.component */ "FFTb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "Be/C");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "4JXc");









class PartialsModule {
}
PartialsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PartialsModule });
PartialsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function PartialsModule_Factory(t) { return new (t || PartialsModule)(); }, imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PartialsModule, { declarations: [_book_store_cart_summary_cart_summary_component__WEBPACK_IMPORTED_MODULE_1__["CartSummaryComponent"],
        _base_page_base_page_component__WEBPACK_IMPORTED_MODULE_5__["BasePageComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_5__["BasePageComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PartialsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
                declarations: [
                    _book_store_cart_summary_cart_summary_component__WEBPACK_IMPORTED_MODULE_1__["CartSummaryComponent"],
                    _base_page_base_page_component__WEBPACK_IMPORTED_MODULE_5__["BasePageComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]
                ],
                exports: [
                    _base_page_base_page_component__WEBPACK_IMPORTED_MODULE_5__["BasePageComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "rVrE":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../partials/base-page/base-page.component */ "FFTb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AboutComponent extends _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_0__["BasePageComponent"] {
    constructor(route) {
        super(route);
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-base-page");
    } }, directives: [_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_0__["BasePageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "sKKC":
/*!**************************************!*\
  !*** ./src/app/model/order.model.ts ***!
  \**************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cart_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.model */ "b/QR");



class Order {
    constructor(cart) {
        this.cart = cart;
        this.shipped = false;
    }
    clear() {
        this._id = null;
        this.name = null;
        this.address = null;
        this.city = null;
        this.province = null;
        this.country = null;
        this.shipped = null;
        this.cart.clear();
    }
}
Order.ɵfac = function Order_Factory(t) { return new (t || Order)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_cart_model__WEBPACK_IMPORTED_MODULE_1__["Cart"])); };
Order.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Order, factory: Order.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Order, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _cart_model__WEBPACK_IMPORTED_MODULE_1__["Cart"] }]; }, null); })();


/***/ }),

/***/ "u/sh":
/*!******************************************************!*\
  !*** ./src/app/pages/projects/projects.component.ts ***!
  \******************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../partials/base-page/base-page.component */ "FFTb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _project_filter_project_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-filter/project-filter.component */ "frJS");
/* harmony import */ var _project_items_project_items_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-items/project-items.component */ "nucg");









class ProjectsComponent extends _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_0__["BasePageComponent"] {
    constructor(route, _document) {
        super(route);
        this._document = _document;
    }
    ngOnInit() {
        this._document.body.classList.remove('homebd-color');
        this._document.body.classList.add('bodybg-color');
    }
    ngOnDestroy() {
        this._document.body.classList.remove('bodybd-color');
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 0, consts: [[1, "container-fluid", "p-0"], [1, "row"], [1, "col-2", "p-0"], ["id", "back", 1, "col-8", "p-0"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-base-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-project-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-project-items");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_0__["BasePageComponent"], _project_filter_project_filter_component__WEBPACK_IMPORTED_MODULE_4__["ProjectFilterComponent"], _project_items_project_items_component__WEBPACK_IMPORTED_MODULE_5__["ProjectItemsComponent"]], styles: [".row{\r\n\r\n    background-color: #F2F4F5;\r\n    height:100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3d7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjRGNTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG59XHJcbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _guard_storeFirst_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guard/storeFirst.guard */ "f3vO");
/* harmony import */ var _book_store_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book-store/checkout/checkout.component */ "S4ta");
/* harmony import */ var _book_store_cart_detail_cart_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book-store/cart-detail/cart-detail.component */ "wZ8A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/about/about.component */ "rVrE");
/* harmony import */ var _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/projects/projects.component */ "u/sh");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/contact/contact.component */ "XEn3");
/* harmony import */ var _pages_service_service_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/service/service.component */ "CaxY");












const routes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], data: { title: 'HOME' } },
    { path: 'login', data: { title: 'Login' }, redirectTo: '/admin/auth', pathMatch: 'full' },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], data: { title: 'ABOUT' } },
    { path: 'services', component: _pages_service_service_component__WEBPACK_IMPORTED_MODULE_9__["ServiceComponent"], data: { title: 'SERVICE' } },
    { path: 'projects', component: _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"], data: { title: 'PROJECT' } },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"], data: { title: 'CONTACT' } },
    /*{path: 'book-list', component: BookStoreComponent, data: { title: 'Book Store'}, canActivate: [StoreFirstGuard]},*/
    { path: 'book-list', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./book-store/book-store.module */ "Blh2")).then(m => m.BookStoreModule) },
    { path: 'cart', component: _book_store_cart_detail_cart_detail_component__WEBPACK_IMPORTED_MODULE_2__["CartDetailComponent"], data: { title: 'Shopping Cart' }, canActivate: [_guard_storeFirst_guard__WEBPACK_IMPORTED_MODULE_0__["StoreFirstGuard"]] },
    { path: 'checkout', component: _book_store_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_1__["CheckoutComponent"], data: { title: 'Checkout' }, canActivate: [_guard_storeFirst_guard__WEBPACK_IMPORTED_MODULE_0__["StoreFirstGuard"]] },
    { path: 'admin', loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "jkDv")).then(m => m.AdminModule) },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [_guard_storeFirst_guard__WEBPACK_IMPORTED_MODULE_0__["StoreFirstGuard"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
                providers: [_guard_storeFirst_guard__WEBPACK_IMPORTED_MODULE_0__["StoreFirstGuard"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wZ8A":
/*!*****************************************************************!*\
  !*** ./src/app/book-store/cart-detail/cart-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: CartDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDetailComponent", function() { return CartDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_model_cart_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/cart.model */ "b/QR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CartDetailComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The cart is empty. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartDetailComponent_table_7_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your cart is empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartDetailComponent_table_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartDetailComponent_table_7_th_2_Template, 2, 0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CartDetailComponent_table_7_Template_input_change_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const line_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.cart.updateQuantity(line_r2.book, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartDetailComponent_table_7_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const line_r2 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.cart.removeLine(line_r2.book._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const line_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.cart.lines.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", line_r2.book.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](12, 5, line_r2.book.price, "USD", "symbol", "2.2-2"), "\u00A0x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", line_r2.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](18, 10, line_r2.lineTotal, "USD", "symbol", "2.2-2"));
} }
class CartDetailComponent {
    constructor(cart) {
        this.cart = cart;
    }
    ngOnInit() {
    }
}
CartDetailComponent.ɵfac = function CartDetailComponent_Factory(t) { return new (t || CartDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_model_cart_model__WEBPACK_IMPORTED_MODULE_1__["Cart"])); };
CartDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartDetailComponent, selectors: [["app-cart-detail"]], decls: 41, vars: 15, consts: [[1, "wrap"], ["id", "left"], [1, "line_title"], ["class", "letter", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["id", "right"], [1, "summary"], [1, "text-left", "w-50", "p-0"], [1, "text-right", "w-50", "p-0"], ["routerLink", "/book-list", 1, "buttonS"], ["routerLink", "/checkout", 1, "buttonS", "checkout", 3, "disabled"], [1, "letter"], [4, "ngIf"], [1, "itemPicture"], [2, "max-width", "250px", "margin-bottom", "10px"], [2, "color", "grey", "font-size", "10px"], ["type", "number", 2, "width", "2.5em", 3, "value", "change"], [2, "color", "red"], ["clsdd", "buttonS", 3, "click"], [1, "far", "fa-times-circle"]], template: function CartDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CartDetailComponent_p_6_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CartDetailComponent_table_7_Template, 22, 15, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Subtotal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Shipping ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " $15.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Total ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Continue Shopping ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Checkout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cart.lines.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cart.lines);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](19, 5, ctx.cart.cartPrice, "USD", "symbol", "2.2-2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](35, 10, ctx.cart.cartPrice + 15, "USD", "symbol", "2.2-2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.cart.lines.length == 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: [".line_title[_ngcontent-%COMP%]{\r\n  margin-top:40px;\r\n  margin-bottom: -20px;\r\n  font-size: 17px;\r\n  text-align: left;\r\n}\r\n.ordersTable[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n  text-align:left;\r\n}\r\n.itemPicture[_ngcontent-%COMP%]{\r\n  background-color: sienna;\r\n  width: 100px;\r\n  height: 100px;\r\n}\r\nth[_ngcontent-%COMP%]{\r\n  vertical-align: top;\r\n  padding:0px;\r\n  font-size: 15px;\r\n  text-align: left;\r\n  font-weight: 400;\r\n}\r\n.buttonS[_ngcontent-%COMP%]{\r\n    padding:10px;\r\n    font-weight: 600;\r\n    border: 0px solid grey;\r\n    margin: 20px 10px;\r\n    width:120px;\r\n    color:rgb(46, 45, 45);\r\n    background-color: #d8d5d5;\r\n    font-size: 14px;\r\n}\r\n.checkout[_ngcontent-%COMP%]{\r\n  background-color: rgb(158, 51, 51);\r\n  color:#f1f1f1;\r\n}\r\n.wrap[_ngcontent-%COMP%]{\r\n  display:flex;\r\n  width:80%;\r\n}\r\n#left[_ngcontent-%COMP%]{\r\n  width:70%;\r\n  margin-right:40px;\r\n  margin-left:40px;\r\n}\r\n#right[_ngcontent-%COMP%]{\r\n  width:20%;\r\n}\r\n.letter[_ngcontent-%COMP%]{\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n  color:rgb(109, 34, 47);\r\n}\r\ntable[_ngcontent-%COMP%]{\r\n  width:100%;\r\n  margin-bottom: 20px;\r\n  vertical-align: top;\r\n}\r\n.summary[_ngcontent-%COMP%]{\r\n\r\n  font-size: 14px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1zdG9yZS9jYXJ0LWRldGFpbC9jYXJ0LWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0VBQ1osU0FBUztBQUNYO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYm9vay1zdG9yZS9jYXJ0LWRldGFpbC9jYXJ0LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmVfdGl0bGV7XHJcbiAgbWFyZ2luLXRvcDo0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IC0yMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5vcmRlcnNUYWJsZXtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjpsZWZ0O1xyXG59XHJcbi5pdGVtUGljdHVyZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWVubmE7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbn1cclxudGh7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBwYWRkaW5nOjBweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5idXR0b25Te1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkIGdyZXk7XHJcbiAgICBtYXJnaW46IDIwcHggMTBweDtcclxuICAgIHdpZHRoOjEyMHB4O1xyXG4gICAgY29sb3I6cmdiKDQ2LCA0NSwgNDUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDVkNTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uY2hlY2tvdXR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OCwgNTEsIDUxKTtcclxuICBjb2xvcjojZjFmMWYxO1xyXG59XHJcbi53cmFwe1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICB3aWR0aDo4MCU7XHJcbn1cclxuI2xlZnR7XHJcbiAgd2lkdGg6NzAlO1xyXG4gIG1hcmdpbi1yaWdodDo0MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OjQwcHg7XHJcbn1cclxuI3JpZ2h0e1xyXG4gIHdpZHRoOjIwJTtcclxufVxyXG4ubGV0dGVye1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOnJnYigxMDksIDM0LCA0Nyk7XHJcbn1cclxudGFibGV7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuLnN1bW1hcnl7XHJcblxyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart-detail',
                templateUrl: './cart-detail.component.html',
                styleUrls: ['./cart-detail.component.css']
            }]
    }], function () { return [{ type: src_app_model_cart_model__WEBPACK_IMPORTED_MODULE_1__["Cart"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zYZ4":
/*!*****************************************************************!*\
  !*** ./src/app/book-store/book-detail/book-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: BookDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailComponent", function() { return BookDetailComponent; });
/* harmony import */ var src_app_model_book_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/model/book.model */ "47DY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_model_book_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/book.repository */ "EnQi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_model_cart_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/cart.model */ "b/QR");






class BookDetailComponent {
    constructor(repository, route, cart, router) {
        this.repository = repository;
        this.cart = cart;
        this.router = router;
        this.book = new src_app_model_book_model__WEBPACK_IMPORTED_MODULE_0__["Book"]();
        Object.assign(this.book, repository.getBook(route.snapshot.params.id));
    }
    ngOnInit() {
    }
    addBookToCart(book) {
        this.cart.addLine(book);
        this.router.navigateByUrl('admin/main/mycart');
    }
}
BookDetailComponent.ɵfac = function BookDetailComponent_Factory(t) { return new (t || BookDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_model_book_repository__WEBPACK_IMPORTED_MODULE_2__["BookRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_model_cart_model__WEBPACK_IMPORTED_MODULE_4__["Cart"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
BookDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BookDetailComponent, selectors: [["app-book-detail"]], decls: 42, vars: 6, consts: [[1, "text-center", "mt-3"], [1, "displaySetting"], ["type", "reset", "routerLink", "/book-list", 1, "buttonS"], [1, "fas", "fa-undo"], ["rowspan", "6"], [1, "imageDiv"], [1, "addtoCart", 3, "click"], ["rowspan", "2"]], template: function BookDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "MOCK BOOK STORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Back To Store ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Quantity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookDetailComponent_Template_button_click_33_listener() { return ctx.addBookToCart(ctx.book); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Add To Shopping Cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.book.originalPrice, "<=original price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.book.price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.book.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.book.author, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.book.published, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.book.description, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".buttonS[_ngcontent-%COMP%]{\r\n  font-weight: 600;\r\n  border: 0px solid grey;\r\n  margin: 20px 10px;\r\n  width:30%;\r\n  color:rgb(46, 45, 45);\r\n  background-color: #d8d5d5;\r\n  font-size: 14px;\r\n}\r\n.fas[_ngcontent-%COMP%]{\r\n  color:seashell;\r\n  font-size: 15px;\r\n  padding-right:15px;\r\n}\r\n.displaySetting[_ngcontent-%COMP%]{\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  text-align:center;\r\n  width:80%;\r\n}\r\n.input-control[_ngcontent-%COMP%]{\r\n  width: 200px;\r\n}\r\n.imageDiv[_ngcontent-%COMP%]{\r\n  background-color: #d8d5d5;\r\n  width:100%;\r\n  height: 280px;\r\n}\r\n\r\n.buttonS[_ngcontent-%COMP%]{\r\n  font-weight: 600;\r\n  border: 0px solid grey;\r\n  margin: 20px 10px;\r\n  width:30%;\r\n  color:rgb(46, 45, 45);\r\n  background-color: #d8d5d5;\r\n  font-size: 14px;\r\n}\r\n.addtoCart[_ngcontent-%COMP%]{\r\n  font-weight: 600;\r\n  border: 0px solid rgb(155, 155, 155);\r\n  padding: 20px 20px;\r\n  width:60%;\r\n  color:rgb(233, 230, 230);\r\n  background-color: #9b0606;\r\n  font-size: 14px;\r\n}\r\n.fas[_ngcontent-%COMP%]{\r\n  color:seashell;\r\n  font-size: 15px;\r\n  padding-right:15px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]{\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  min-width: 300px;\r\n  width: 80%;\r\n  text-align: left;\r\n  font-size: 16px;\r\n}\r\ntd[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n  width: 50%;\r\n  padding-left: 30px;\r\n  padding-top: 20px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1zdG9yZS9ib29rLWRldGFpbC9ib29rLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsU0FBUztFQUNULHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGFBQWE7QUFDZjtBQUVBLFlBQVk7QUFDWjtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCx3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUEsUUFBUTtBQUNSO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFFQSxRQUFRO0FBQ1I7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9ib29rLXN0b3JlL2Jvb2stZGV0YWlsL2Jvb2stZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uU3tcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkIGdyZXk7XHJcbiAgbWFyZ2luOiAyMHB4IDEwcHg7XHJcbiAgd2lkdGg6MzAlO1xyXG4gIGNvbG9yOnJnYig0NiwgNDUsIDQ1KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkNWQ1O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uZmFze1xyXG4gIGNvbG9yOnNlYXNoZWxsO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcbn1cclxuLmRpc3BsYXlTZXR0aW5ne1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICB3aWR0aDo4MCU7XHJcbn1cclxuLmlucHV0LWNvbnRyb2x7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbi5pbWFnZURpdntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkNWQ1O1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OiAyODBweDtcclxufVxyXG5cclxuLyogQnV0dG9ucyAqL1xyXG4uYnV0dG9uU3tcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkIGdyZXk7XHJcbiAgbWFyZ2luOiAyMHB4IDEwcHg7XHJcbiAgd2lkdGg6MzAlO1xyXG4gIGNvbG9yOnJnYig0NiwgNDUsIDQ1KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkNWQ1O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uYWRkdG9DYXJ0e1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyOiAwcHggc29saWQgcmdiKDE1NSwgMTU1LCAxNTUpO1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICB3aWR0aDo2MCU7XHJcbiAgY29sb3I6cmdiKDIzMywgMjMwLCAyMzApO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YjA2MDY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5mYXN7XHJcbiAgY29sb3I6c2Vhc2hlbGw7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6MTVweDtcclxufVxyXG5cclxuLypUYWJsZSovXHJcbnRhYmxle1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxudGR7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4vKklucHV0Ki9cclxuaW5wdXR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BookDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-book-detail',
                templateUrl: './book-detail.component.html',
                styleUrls: ['./book-detail.component.css']
            }]
    }], function () { return [{ type: src_app_model_book_repository__WEBPACK_IMPORTED_MODULE_2__["BookRepository"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_model_cart_model__WEBPACK_IMPORTED_MODULE_4__["Cart"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map