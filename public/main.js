(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Freya\Desktop\team-main\Project-Shopping-Cart-Angular\client\src\main.ts */"zUnb");


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
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 29, vars: 0, consts: [["id", "background"], ["id", "placeholder"], ["id", "intro_h"], ["id", "int"], ["id", "sub_h"], ["id", "color_h"], ["href", "/login"], [1, "button_cont"], ["href", "/projects", "rel", "nofollow noopener", 1, "example_home"], ["id", "button_home"], ["target", "_blank", "href", "./assets/images/portfolio.pdf", "rel", "nofollow noopener", 1, "example_home"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Welcome to my profolio,");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " for full authentication. (User: guest / Password: password2021)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " VIEW\u00A0\u00A0PROJECT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " CO-OP\u00A0\u00A0RESUME ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["/* Div alignment */\r\n#background {\r\n  height: 100%;\r\n  min-height: 90vh;\r\n  margin: 0;\r\n  padding: 0;\r\n  background: url(/assets/images/cover.jpg) no-repeat center center fixed;\r\n  background-size: cover;\r\n}\r\n#placeholder {\r\n  height: 90px;\r\n}\r\n/* Content styles */\r\n#intro_h {\r\n  background-color: rgba(255, 255, 255, 0.637);\r\n  color: rgb(49, 48, 48);\r\n  text-shadow: shadow1, shadow2, shadow3;\r\n  text-shadow: 1px 1px 0px rgb(165, 165, 165), 3px 8px 0px rgba(0, 0, 0, 0);\r\n  border-style: solid;\r\n  border-color: white;\r\n  border-width: 1px;\r\n\r\n  width: 60%;\r\n  min-width: 730px;\r\n  height: auto;\r\n  padding: 30px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n\r\n  font-family: \"Helvetica Neue\", sans-serif;\r\n  font-size: 50px;\r\n  font-weight: bold;\r\n  letter-spacing: 3px;\r\n  line-height: 1;\r\n  text-align: center;\r\n  text-align: left;\r\n}\r\n#color_h {\r\n  font-size: 20px;\r\n  font-weight: light;\r\n  letter-spacing: 2px;\r\n  line-height: 0.2;\r\n}\r\n#sub_h {\r\n  font-size: 20px;\r\n  font-weight: lighter;\r\n  letter-spacing: 2px;\r\n  line-height: 0.2;\r\n}\r\n.button_cont {\r\n  text-align: center;\r\n  color: rgb(49, 48, 48);\r\n  text-shadow: shadow1, shadow2, shadow3;\r\n  text-shadow: 0px 0px 0px rgb(165, 165, 165), 3px 8px 0px rgba(0, 0, 0, 0);\r\n}\r\n#sideNav:before {\r\n  opacity: 0.4;\r\n}\r\n#sideNav {\r\n  background-color: #252934e0;\r\n}\r\n.example_home {\r\n  color: #494949 !important;\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  background: #ffffff;\r\n  margin-top: 10px;\r\n  margin-left: 5px;\r\n  margin-right: 5px;\r\n  padding: 20px;\r\n  border: 4px solid #494949 !important;\r\n  display: inline-block;\r\n  transition: all 0.4s ease 0s;\r\n  font-size: 12px;\r\n}\r\n.example_home:hover {\r\n  color: #ffffff !important;\r\n  background: #f6b93b;\r\n  border-color: #f6b93b !important;\r\n  transition: all 0.4s ease 0s;\r\n}\r\n/*[ Responsive ]*/\r\n/*smaller screen*/\r\n@media only screen and (min-width: 750px) and (max-width: 1190px) {\r\n  #intro_h {\r\n    background-color: rgba(255, 255, 255, 0.699);\r\n    color: rgb(49, 48, 48);\r\n  }\r\n}\r\n@media only screen and (min-width: 1px) and (max-width: 749px) {\r\n  #intro_h {\r\n    background-color: rgba(255, 255, 255, 0.699);\r\n    color: rgb(49, 48, 48);\r\n    width: 80%;\r\n    height: auto;\r\n    min-width: 1px;\r\n    font-size: 35px;\r\n  }\r\n  #sub_h,\r\n  #color_h {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCO0FBQ2xCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHVFQUF1RTtFQUl2RSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLDRDQUE0QztFQUM1QyxzQkFBc0I7RUFDdEIsc0NBQXNDO0VBQ3RDLHlFQUF5RTtFQUN6RSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjs7RUFFakIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7O0VBRWpCLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsc0NBQXNDO0VBQ3RDLHlFQUF5RTtBQUMzRTtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsNEJBQTRCO0FBQzlCO0FBRUEsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQjtFQUNFO0lBQ0UsNENBQTRDO0lBQzVDLHNCQUFzQjtFQUN4QjtBQUNGO0FBQ0E7RUFDRTtJQUNFLDRDQUE0QztJQUM1QyxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtFQUNqQjtFQUNBOztJQUVFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRGl2IGFsaWdubWVudCAqL1xyXG4jYmFja2dyb3VuZCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2NvdmVyLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuI3BsYWNlaG9sZGVyIHtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbn1cclxuXHJcbi8qIENvbnRlbnQgc3R5bGVzICovXHJcbiNpbnRyb19oIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjM3KTtcclxuICBjb2xvcjogcmdiKDQ5LCA0OCwgNDgpO1xyXG4gIHRleHQtc2hhZG93OiBzaGFkb3cxLCBzaGFkb3cyLCBzaGFkb3czO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDBweCByZ2IoMTY1LCAxNjUsIDE2NSksIDNweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG5cclxuICB3aWR0aDogNjAlO1xyXG4gIG1pbi13aWR0aDogNzMwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cclxuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbiNjb2xvcl9oIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0O1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDAuMjtcclxufVxyXG4jc3ViX2gge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjI7XHJcbn1cclxuLmJ1dHRvbl9jb250IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHJnYig0OSwgNDgsIDQ4KTtcclxuICB0ZXh0LXNoYWRvdzogc2hhZG93MSwgc2hhZG93Miwgc2hhZG93MztcclxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAwcHggcmdiKDE2NSwgMTY1LCAxNjUpLCAzcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDApO1xyXG59XHJcbiNzaWRlTmF2OmJlZm9yZSB7XHJcbiAgb3BhY2l0eTogMC40O1xyXG59XHJcbiNzaWRlTmF2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyOTM0ZTA7XHJcbn1cclxuLmV4YW1wbGVfaG9tZSB7XHJcbiAgY29sb3I6ICM0OTQ5NDkgIWltcG9ydGFudDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkICM0OTQ5NDkgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmV4YW1wbGVfaG9tZTpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjZjZiOTNiO1xyXG4gIGJvcmRlci1jb2xvcjogI2Y2YjkzYiAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XHJcbn1cclxuXHJcbi8qWyBSZXNwb25zaXZlIF0qL1xyXG4vKnNtYWxsZXIgc2NyZWVuKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCkgYW5kIChtYXgtd2lkdGg6IDExOTBweCkge1xyXG4gICNpbnRyb19oIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OTkpO1xyXG4gICAgY29sb3I6IHJnYig0OSwgNDgsIDQ4KTtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxcHgpIGFuZCAobWF4LXdpZHRoOiA3NDlweCkge1xyXG4gICNpbnRyb19oIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OTkpO1xyXG4gICAgY29sb3I6IHJnYig0OSwgNDgsIDQ4KTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDFweDtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICB9XHJcbiAgI3N1Yl9oLFxyXG4gICNjb2xvcl9oIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuIl19 */"], encapsulation: 2 });
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
// ======Sorting book data model (front end)======
class Book {
    constructor(
    // tslint:disable-next-line: variable-name
    _id, name, author, published, description, originalPrice, price, store, imagePath) {
        this._id = _id;
        this.name = name;
        this.author = author;
        this.published = published;
        this.description = description;
        this.originalPrice = originalPrice;
        this.price = price;
        this.store = store;
        this.imagePath = imagePath;
    }
    toString() {
        return `
    Book
    -------------------------
    Name:       ${this.name}
    Author:     ${this.author}
    Published:  ${this.published}
    Description:${this.description}
    Original$:  ${this.originalPrice}
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






function HeaderComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_19_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onLogoutClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_20_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_20_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onLoginClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["active"]; };
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
    onLoginClick() {
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
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 34, vars: 12, consts: [[2, "min-width", "500px"], ["id", "sideNav", 1, "navbar-expand-xl", "navbar-dark"], ["id", "pictureDiv", 3, "routerLinkActive", "routerLinkActiveOptions"], ["routerLink", "/home", 2, "text-decoration", "none"], ["id", "navClass", 1, "navbar-brand", "js-scroll-trigger"], ["src", "../../assets/images/picture.jpg", "width", "160", "height", "160", "id", "profilePicture", "loading", "lazy"], ["id", "name"], ["id", "title"], ["id", "hamburgerDiv"], ["id", "contactInfo"], ["type", "button", "data-container", "body", "data-trigger", "hover", "data-toggle", "popover", "data-placement", "top", "data-content", "Open GitHub in new Tab", "onclick", " window.open('https://github.com/FreyaKim0','_blank')", 1, "contactButton"], [1, "fab", "fa-github"], ["type", "button", "data-container", "body", "data-trigger", "hover", "data-toggle", "popover", "data-placement", "top", "data-content", "Open LinkedIn in new Tab", "onclick", " window.open('http://www.linkedin.com/in/xutungjin','_blank')", 1, "contactButton"], [1, "fab", "fa-linkedin"], ["routerLink", "/logout", "class", "contactButton", "type", "button", 3, "click", 4, "ngIf"], ["class", "contactButton", "type", "button", "routerLink", "/login", 3, "click", 4, "ngIf"], ["id", "hamburger_btn", "type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 2, "float", "right"], [1, "navbar-toggler-icon", "btn-sm", 2, "float", "right"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "justify-content-center"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", 3, "routerLinkActive"], ["routerLink", "/services", 1, "nav-link"], ["id", "projectDropDown", "routerLink", "/projects", 1, "nav-link"], ["routerLink", "/about", 1, "nav-link"], ["routerLink", "/logout", "type", "button", 1, "contactButton", 3, "click"], [1, "fas", "fa-sign-out-alt", 2, "padding-left", "5px"], [1, "words"], ["type", "button", "routerLink", "/login", 1, "contactButton", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HeaderComponent_a_20_Template, 4, 0, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["body[_ngcontent-%COMP%] {\r\n  background-color: #f3f4f5;\r\n  height: 100%;\r\n}\r\n#contactWrap[_ngcontent-%COMP%] {\r\n  width: 250px;\r\n  float: left;\r\n  text-align: left;\r\n}\r\n#contactInfo[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n.main_grid_constraint[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  text-align: center;\r\n  font-weight: verdana;\r\n  font-size: 17px;\r\n  line-height: 40px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:focus {\r\n  outline: 0;\r\n}\r\n#nameBanner[_ngcontent-%COMP%] {\r\n  background-color: #f3f4f5;\r\n  color: rgb(129, 125, 125);\r\n  font-family: \"Helvetica Neue\", sans-serif;\r\n  font-size: 40px;\r\n  margin-top: 60px;\r\n  font-weight: bold;\r\n  letter-spacing: 3px;\r\n  line-height: 0.2;\r\n  text-align: center;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  text-align: center;\r\n}\r\n.words[_ngcontent-%COMP%] {\r\n  margin-left: -10px;\r\n  color: white;\r\n  float: left;\r\n  overflow: hidden;\r\n  line-height: 20px;\r\n  letter-spacing: 0.8px;\r\n  font-size: 12px;\r\n}\r\n\r\n.main_wrapper[_ngcontent-%COMP%] {\r\n  grid-template-columns: 100% 0%;\r\n  display: grid;\r\n}\r\n#header_in_main_wrapper[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n#content[_ngcontent-%COMP%] {\r\n  background-color: black;\r\n}\r\n#content_in_main_wrapper[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin: 0;\r\n  padding: 0;\r\n  position: relative;\r\n}\r\n\r\n*[_ngcontent-%COMP%]:focus {\r\n  outline: 0 !important;\r\n}\r\n\r\n.popover-header[_ngcontent-%COMP%] {\r\n  outline: none;\r\n  border: none;\r\n  background-color: #eaeded;\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n  color: black;\r\n}\r\n.popover[_ngcontent-%COMP%] {\r\n  outline: none;\r\n  border: none;\r\n  font-weight: normal;\r\n  font-size: 12px;\r\n}\r\n\r\n#navClass[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  text-align: center;\r\n}\r\n#profilePicture[_ngcontent-%COMP%] {\r\n  border-radius: 90px;\r\n}\r\n\r\n#pictureDiv[_ngcontent-%COMP%] {\r\n  padding-top: 30px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n#name[_ngcontent-%COMP%] {\r\n  color: #ffffff;\r\n  letter-spacing: 0.1rem;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  margin-top: 20px;\r\n}\r\n#title[_ngcontent-%COMP%] {\r\n  color: #ffffff;\r\n  font-size: 12px;\r\n  letter-spacing: 0.1rem;\r\n  margin-top: -25px;\r\n}\r\n#welcomeUser[_ngcontent-%COMP%] {\r\n  color: #ffffff;\r\n  font-size: 13px;\r\n  float: left;\r\n  margin-top: 10px;\r\n  line-height: 0.1px;\r\n\r\n  text-transform: uppercase;\r\n}\r\n#login_button[_ngcontent-%COMP%] {\r\n  float: left;\r\n  margin-top: 0px;\r\n}\r\n\r\n#hamburgerDiv[_ngcontent-%COMP%] {\r\n  margin-top: -20px;\r\n  display: block;\r\n  height: 40px;\r\n  padding: 10px;\r\n  border-style: solid;\r\n  border-width: 0.01px;\r\n  border-bottom-color: gray;\r\n  border-top-color: gray;\r\n}\r\n.fas[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-size: 20px;\r\n  float: left;\r\n  margin-left: 0px;\r\n  opacity: 0.5;\r\n}\r\n.fab[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-size: 20px;\r\n  float: left;\r\n  margin-left: 0px;\r\n  opacity: 0.5;\r\n}\r\n.navbar-toggler[_ngcontent-%COMP%] {\r\n  padding: 2px;\r\n}\r\n.navbar-toggler-icon[_ngcontent-%COMP%] {\r\n  width: 15px;\r\n  height: 15px;\r\n}\r\n\r\n#sideNav[_ngcontent-%COMP%] {\r\n  background-color: #252934f8;\r\n  width: auto;\r\n  position: relative;\r\n  z-index: 1;\r\n  overflow: hidden; \r\n}\r\n#sideNav[_ngcontent-%COMP%]:before {\r\n  z-index: -1;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  content: url(\"/assets/images/background.jpg\");\r\n  opacity: 0.4;\r\n  background-color: #252934c4;\r\n}\r\n#sideNav[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 12px;\r\n  letter-spacing: 0.6rem;\r\n  text-transform: uppercase;\r\n  line-height: 1cm;\r\n}\r\n#sideNav[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]:focus {\r\n  outline-color: teal;\r\n}\r\n#navbarDropdown[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   dropdown-toggle[_ngcontent-%COMP%] {\r\n  color: pink;\r\n}\r\n.contactButton[_ngcontent-%COMP%] {\r\n  opacity: 0.5;\r\n  background-color: transparent;\r\n  border-width: 0px;\r\n  margin-right: 5px;\r\n  float: left;\r\n}\r\n.contactButton[_ngcontent-%COMP%]:hover {\r\n  opacity: 1;\r\n}\r\n.contactButton[_ngcontent-%COMP%]:focus {\r\n  opacity: 1;\r\n  border-width: 0px;\r\n}\r\n#hamburger_btn[_ngcontent-%COMP%] {\r\n  margin-right: 15px !important;\r\n}\r\n\r\n@media (min-width: 1190px) {\r\n  #nameBanner[_ngcontent-%COMP%] {\r\n    color: rgb(88, 86, 86);\r\n  }\r\n  #grid_placeholder[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n  }\r\n  #content[_ngcontent-%COMP%] {\r\n    overflow: auto;\r\n    background-color: #f2f4f5;\r\n    position: relative;\r\n  }\r\n  #main[_ngcontent-%COMP%] {\r\n    display: grid;\r\n  }\r\n  .main_wrapper[_ngcontent-%COMP%] {\r\n    grid-template-columns: 20% 80%;\r\n    display: grid;\r\n  }\r\n  .main_grid_constraint[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    line-height: 40px;\r\n  }\r\n  #navbarSupportedContent[_ngcontent-%COMP%] {\r\n    padding-top: 15px;\r\n  }\r\n  #pictureDiv[_ngcontent-%COMP%] {\r\n    padding-left: 13px;\r\n    padding-top: 30px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    text-align: center;\r\n  }\r\n  #hamburgerDiv[_ngcontent-%COMP%] {\r\n    border-width: 0px;\r\n    text-align: center;\r\n    display: block;\r\n    position: absolute;\r\n    bottom: 30px;\r\n    width: 100%;\r\n  }\r\n  #sideNav[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 20%;\r\n    height: 100%;\r\n    min-width: 250px;\r\n    min-height: 650px;\r\n  }\r\n  #sideNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    padding: 0.5rem;\r\n  }\r\n  #sideNav[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\r\n    padding-left: 0;\r\n    text-align: center;\r\n    display: flex;\r\n    align-items: flex-start;\r\n    flex-grow: 0;\r\n    width: 100%;\r\n    margin-bottom: auto;\r\n    margin-top: -20px;\r\n  }\r\n  #sideNav[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    width: 100%;\r\n  }\r\n  #sideNav[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  #sideNav[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  #header_in_main_wrapper[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  .contactButton[_ngcontent-%COMP%] {\r\n    float: none;\r\n  }\r\n  #hamburger_btn[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  #pictureDiv[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydGlhbHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhCQUE4QjtBQUM5QixrQkFBa0I7QUFDbEI7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6Qix5Q0FBeUM7RUFDekMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQSxpQkFBaUI7QUFDakI7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7O0VBRWxCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFFQSxhQUFhO0FBQ2I7RUFDRSwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZ0JBQWdCLEVBQUUsZ0NBQWdDO0FBQ3BEO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sNkNBQTZDO0VBQzdDLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsV0FBVztBQUNiO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUVBLGlCQUFpQjtBQUNqQjtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsV0FBVztFQUNiO0VBQ0E7SUFDRSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsYUFBYTtFQUNmO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztFQUNiO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGFBQWE7SUFDYixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsV0FBVztFQUNiO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYXJ0aWFscy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLSBCb2R5IHNlY3Rpb25zIC0tLS0tLSovXHJcbi8qIERpdiBhbGlnbm1lbnQgKi9cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuI2NvbnRhY3RXcmFwIHtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4jY29udGFjdEluZm8ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5tYWluX2dyaWRfY29uc3RyYWludCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiB2ZXJkYW5hO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG5cclxuLyogQ29udGVudCBzdHlsZXMgKi9cclxuYnV0dG9uOmZvY3VzIHtcclxuICBvdXRsaW5lOiAwO1xyXG59XHJcbiNuYW1lQmFubmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY1O1xyXG4gIGNvbG9yOiByZ2IoMTI5LCAxMjUsIDEyNSk7XHJcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLndvcmRzIHtcclxuICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLypoZWFkZXIrY29udGVudCovXHJcbi5tYWluX3dyYXBwZXIge1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJSAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG59XHJcbiNoZWFkZXJfaW5fbWFpbl93cmFwcGVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiNjb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG4jY29udGVudF9pbl9tYWluX3dyYXBwZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4vKi0tLS0tLWhlYWRlciBzZWN0aW9ucy0tLS0tLSovXHJcbio6Zm9jdXMge1xyXG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcclxufVxyXG4vKkhlYWRlci1Qb3BvdmVyKi9cclxuLnBvcG92ZXItaGVhZGVyIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlZGVkO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4ucG9wb3ZlciB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi8qSGVhZGVyLVBpY3V0cmVzKi9cclxuI25hdkNsYXNzIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jcHJvZmlsZVBpY3R1cmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbn1cclxuXHJcbi8qSGVhZGVyLU5hbWUgc2VjdGlvbiovXHJcbiNwaWN0dXJlRGl2IHtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuI25hbWUge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4jdGl0bGUge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gIG1hcmdpbi10b3A6IC0yNXB4O1xyXG59XHJcbiN3ZWxjb21lVXNlciB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDAuMXB4O1xyXG5cclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbiNsb2dpbl9idXR0b24ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLypIZWFkZXItSGFtZ3VyZ2VyKi9cclxuI2hhbWJ1cmdlckRpdiB7XHJcbiAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDAuMDFweDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiBncmF5O1xyXG4gIGJvcmRlci10b3AtY29sb3I6IGdyYXk7XHJcbn1cclxuLmZhcyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG4uZmFiIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbi5uYXZiYXItdG9nZ2xlciB7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcbi5uYXZiYXItdG9nZ2xlci1pY29uIHtcclxuICB3aWR0aDogMTVweDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi8qSGVhZGVyLU5hdiovXHJcbiNzaWRlTmF2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyOTM0Zjg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgLyppZiB5b3Ugd2FudCB0byBjcm9wIHRoZSBpbWFnZSovXHJcbn1cclxuI3NpZGVOYXY6YmVmb3JlIHtcclxuICB6LWluZGV4OiAtMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgY29udGVudDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIik7XHJcbiAgb3BhY2l0eTogMC40O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTI5MzRjNDtcclxufVxyXG4jc2lkZU5hdiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC42cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGluZS1oZWlnaHQ6IDFjbTtcclxufVxyXG4jc2lkZU5hdiAubmF2YmFyLXRvZ2dsZXI6Zm9jdXMge1xyXG4gIG91dGxpbmUtY29sb3I6IHRlYWw7XHJcbn1cclxuI25hdmJhckRyb3Bkb3duIC5uYXYtbGluayBkcm9wZG93bi10b2dnbGUge1xyXG4gIGNvbG9yOiBwaW5rO1xyXG59XHJcbi5jb250YWN0QnV0dG9uIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmNvbnRhY3RCdXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLmNvbnRhY3RCdXR0b246Zm9jdXMge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbn1cclxuI2hhbWJ1cmdlcl9idG4ge1xyXG4gIG1hcmdpbi1yaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKlsgUmVzcG9uc2l2ZSBdKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDExOTBweCkge1xyXG4gICNuYW1lQmFubmVyIHtcclxuICAgIGNvbG9yOiByZ2IoODgsIDg2LCA4Nik7XHJcbiAgfVxyXG4gICNncmlkX3BsYWNlaG9sZGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gICNjb250ZW50IHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjRmNTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgI21haW4ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICB9XHJcbiAgLm1haW5fd3JhcHBlciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gIH1cclxuICAubWFpbl9ncmlkX2NvbnN0cmFpbnQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuICAjbmF2YmFyU3VwcG9ydGVkQ29udGVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICB9XHJcbiAgI3BpY3R1cmVEaXYge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxM3B4O1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgI2hhbWJ1cmdlckRpdiB7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gICNzaWRlTmF2IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICAgbWluLWhlaWdodDogNjUwcHg7XHJcbiAgfVxyXG4gICNzaWRlTmF2IC5uYXZiYXItYnJhbmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICB9XHJcbiAgI3NpZGVOYXYgLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICB9XHJcbiAgI3NpZGVOYXYgLm5hdmJhci1jb2xsYXBzZSAubmF2YmFyLW5hdiB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gICNzaWRlTmF2IC5uYXZiYXItY29sbGFwc2UgLm5hdmJhci1uYXYgLm5hdi1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAjc2lkZU5hdiAubmF2YmFyLWNvbGxhcHNlIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gICNoZWFkZXJfaW5fbWFpbl93cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAuY29udGFjdEJ1dHRvbiB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcbiAgI2hhbWJ1cmdlcl9idG4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgI3BpY3R1cmVEaXYge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
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
const environment = {
    production: false
};


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
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, consts: [["id", "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " - Copyright \u00A9 2020 by Freya Kim All rights reserved -\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#footer[_ngcontent-%COMP%] {\r\n  background-color: #f2f4f5;\r\n  width: 80%;\r\n  font-size: 10px;\r\n  color: grey;\r\n  text-align: center;\r\n  display: block;\r\n  letter-spacing: 3px;\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n  position: fixed;\r\n  bottom: 0;\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 1px) and (max-width: 1189px) {\r\n  #footer[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydGlhbHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQSxpQkFBaUI7O0FBQ2pCO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWxzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmY0ZjU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbn1cclxuXHJcbi8qIFtyZXNwb25zaXZlXSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDFweCkgYW5kIChtYXgtd2lkdGg6IDExODlweCkge1xyXG4gICNmb290ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-slider/ngx-slider */ "mgaL");
/* harmony import */ var _counter_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./counter.directive */ "1h7W");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../partials/partials.module */ "rERZ");
/* harmony import */ var _cart_detail_cart_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart-detail/cart-detail.component */ "wZ8A");
/* harmony import */ var _book_store_book_store_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../book-store/book-store.component */ "QnNB");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkout/checkout.component */ "S4ta");












const routingS = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
    { path: 'all', component: _book_store_book_store_component__WEBPACK_IMPORTED_MODULE_8__["BookStoreComponent"] },
    { path: '**', redirectTo: 'all' },
]);
class BookStoreModule {
}
BookStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BookStoreModule });
BookStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function BookStoreModule_Factory(t) { return new (t || BookStoreModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_4__["NgxSliderModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            routingS,
            _partials_partials_module__WEBPACK_IMPORTED_MODULE_6__["PartialsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BookStoreModule, { declarations: [_book_store_book_store_component__WEBPACK_IMPORTED_MODULE_8__["BookStoreComponent"],
        _counter_directive__WEBPACK_IMPORTED_MODULE_5__["CounterDirective"],
        _cart_detail_cart_detail_component__WEBPACK_IMPORTED_MODULE_7__["CartDetailComponent"],
        _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__["CheckoutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_4__["NgxSliderModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _partials_partials_module__WEBPACK_IMPORTED_MODULE_6__["PartialsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BookStoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_4__["NgxSliderModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    routingS,
                    _partials_partials_module__WEBPACK_IMPORTED_MODULE_6__["PartialsModule"]],
                declarations: [_book_store_book_store_component__WEBPACK_IMPORTED_MODULE_8__["BookStoreComponent"],
                    _counter_directive__WEBPACK_IMPORTED_MODULE_5__["CounterDirective"],
                    _cart_detail_cart_detail_component__WEBPACK_IMPORTED_MODULE_7__["CartDetailComponent"],
                    _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__["CheckoutComponent"]]
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
    ngOnInit() { }
}
ServiceComponent.ɵfac = function ServiceComponent_Factory(t) { return new (t || ServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ServiceComponent, selectors: [["app-service"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 69, vars: 0, consts: [["id", "service_whole"], ["id", "intro_s"], [1, "service_div"], [1, "service_image_wrap"], ["src", "./assets/images/s3.jpg", 1, "service_img"], [1, "service_content"], [1, "title_s"], ["id", "wrapper"], ["id", "c1", 1, "text_s"], ["href", "/book-list/all"], ["id", "c2"], ["id", "c3", 1, "text_s"], [1, "grey_service"], ["src", "./assets/images/s1.jpg", 1, "service_img"], ["src", "./assets/images/s2.jpg", 1, "service_img"], ["href", "https://github.com/FreyaKim0/Exercises-Android-Studio", "target", "_blank"], ["id", "c3"], ["src", "./assets/images/s4.jpg", 1, "service_img"], ["id", "wrapper2"], ["href", "https://www.figma.com/file/bU87uuAoSWBq9L8kzGTUag/Coffee-Crunch-Code", "target", "_blank"], [1, "divider1"], [1, "divider2"], [2, "float", "left", "height", "60px", "margin-top", "-10px", "width", "100%", "background-color", "#f2f4f5"]], template: function ServiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-base-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " The below are my skill sets and the fields that I want to work in. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Front-end web development");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " I have a basic understanding of Angular. Recently I just finished a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "shopping cart project");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " from scratch and I am looking forward to try working with React and Vue. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " I can help the team with TypeScript/JavaScript development: bootstraping, layouts, refactoring and build setup with good sense of design. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Back-end web development");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " For back-end, my current experience is using MongoDB. I also have done two SQL courses (basic / advanced) at Centennial College. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " I can help with developing APIs, cloud servers, remote data synchronizations or simply data entry/orgnizing. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Mobile app development");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " During my time I have built several simple ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "android mobile applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " by using tool box such as gridview. I can complete form contraints and components base on design wireframes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " I can help the team with basic intents and activities implementation, or making responsive layouts. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "UX/UI design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " Since I am experienced in graphic design, I can produce consistency ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "wireframe template");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " design and typography that base on the team's needs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " I care about good UI and concern about other team member's point of view when processing group project. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_0__["BasePageComponent"]], styles: [".service_img[_ngcontent-%COMP%] {\r\n  border-top-left-radius: 20px;\r\n  border-bottom-left-radius: 20px;\r\n  height: 190px;\r\n  max-width: 200px;\r\n}\r\n\r\n.text_s[_ngcontent-%COMP%] {\r\n  padding-left: 7px;\r\n  font-weight: lighter;\r\n  line-height: 18px;\r\n  font-family: \"Open sans\", sans-serif;\r\n  color: #292828;\r\n  font-size: 12px;\r\n  text-align: left;\r\n  text-justify: inter-word;\r\n}\r\n.grey_service[_ngcontent-%COMP%] {\r\n  background-color: #ffffff;\r\n  padding-left: 7px;\r\n  font-weight: lighter;\r\n  line-height: 18px;\r\n  font-family: \"Open sans\", sans-serif;\r\n  color: #292828;\r\n  font-size: 12px;\r\n  text-align: left;\r\n  text-justify: inter-word;\r\n}\r\n#intro_s[_ngcontent-%COMP%] {\r\n  margin-left: 60px;\r\n  margin-right: 60px;\r\n  font-size: 14px;\r\n}\r\n\r\n#wrapper[_ngcontent-%COMP%], #wrapper2[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  padding-left: 0px;\r\n  display: flex;\r\n  width: auto;\r\n}\r\n#c1[_ngcontent-%COMP%], #c3[_ngcontent-%COMP%] {\r\n  width: 49%;\r\n  height: 130px;\r\n}\r\n#c2[_ngcontent-%COMP%] {\r\n  margin-top: 5px;\r\n  margin-top: 5px;\r\n  margin-right: 20px;\r\n  margin-left: 20px;\r\n  border-left: 1px solid gray;\r\n  height: 110px;\r\n}\r\n\r\n\r\n@media (min-width: 850px) {\r\n  .service_div[_ngcontent-%COMP%] {\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    width: 800px;\r\n  }\r\n  .service_image_wrap[_ngcontent-%COMP%] {\r\n    border-top-left-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n    margin-top: 35px;\r\n    float: right;\r\n    width: 200px;\r\n  }\r\n  .divider1[_ngcontent-%COMP%] {\r\n    float: right;\r\n    height: 35px;\r\n    width: 200px;\r\n  }\r\n  .divider2[_ngcontent-%COMP%] {\r\n    float: left;\r\n    height: 35px;\r\n    width: 600px;\r\n  }\r\n  .service_content[_ngcontent-%COMP%] {\r\n    border-top-left-radius: 20px;\r\n    border-bottom-left-radius: 20px;\r\n    letter-spacing: 0.1rem;\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    margin-top: 35px;\r\n    float: left;\r\n    width: 600px;\r\n    height: 190px;\r\n    text-align: left;\r\n    padding: 10px 30px 10px 30px;\r\n    background-color: rgb(255, 255, 255);\r\n  }\r\n  .service_img[_ngcontent-%COMP%] {\r\n    border-top-left-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n    border-top-right-radius: 20px;\r\n    border-bottom-right-radius: 20px;\r\n    height: 190px;\r\n    max-width: 200px;\r\n    overflow: hidden;\r\n  }\r\n}\r\n\r\n#service_whole[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  min-height: 175vh;\r\n  background-color: #f2f4f5;\r\n  width: 100%;\r\n}\r\n\r\n@media only screen and (min-width: 850px) and (max-width: 1189px) {\r\n  #service_whole[_ngcontent-%COMP%] {\r\n    min-height: 230vh;\r\n  }\r\n}\r\n@media only screen and (min-width: 1px) and (max-width: 849px) {\r\n  .service_img[_ngcontent-%COMP%] {\r\n    border-top-left-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n    height: 150px;\r\n    max-width: 100%;\r\n  }\r\n  #c1[_ngcontent-%COMP%], #c2[_ngcontent-%COMP%], #c3[_ngcontent-%COMP%], #wrapper[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    height: auto;\r\n  }\r\n  #wrapper[_ngcontent-%COMP%], #wrapper2[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    margin-bottom: 40px;\r\n    padding-bottom: 20px;\r\n    background-color: white;\r\n  }\r\n  #wrapper2[_ngcontent-%COMP%] {\r\n    margin-bottom: 0px;\r\n  }\r\n  .service_image_wrap[_ngcontent-%COMP%] {\r\n    border-top-left-radius: 20px;\r\n    border-top-right-radius: 20px;\r\n    background-color: #8fa26b;\r\n    margin-top: 50px;\r\n    margin-right: 10%;\r\n    margin-left: 10%;\r\n  }\r\n  .service_content[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    margin-right: 10%;\r\n    margin-left: 10%;\r\n    margin-bottom: 10px;\r\n    background-color: white;\r\n  }\r\n  .title_s[_ngcontent-%COMP%] {\r\n    color: #000000;\r\n    letter-spacing: 0.1rem;\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    margin-top: 20px;\r\n  }\r\n  #intro_s[_ngcontent-%COMP%] {\r\n    margin-left: 60px;\r\n    margin-right: 60px;\r\n    font-size: 14px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VydmljZS9zZXJ2aWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYztBQUNkO0VBQ0UsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCO0FBRUEsT0FBTztBQUNQO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUVBLGVBQWU7QUFDZjs7RUFFRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixXQUFXO0FBQ2I7QUFDQTs7RUFFRSxVQUFVO0VBQ1YsYUFBYTtBQUNmO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZjtBQUVBLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEI7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtFQUNkO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7RUFDZDtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0VBQ2Q7RUFDQTtJQUNFLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7QUFDRjtBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjtBQUNBLG1CQUFtQjtBQUNuQjtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsZUFBZTtFQUNqQjtFQUNBOzs7O0lBSUUsdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZDtFQUNBOztJQUVFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VydmljZS9zZXJ2aWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKmljb24gaW1hZ2VzKi9cclxuLnNlcnZpY2VfaW1nIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgaGVpZ2h0OiAxOTBweDtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4vKnRleHQqL1xyXG4udGV4dF9zIHtcclxuICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICBmb250LWZhbWlseTogXCJPcGVuIHNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzI5MjgyODtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XHJcbn1cclxuLmdyZXlfc2VydmljZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICBmb250LWZhbWlseTogXCJPcGVuIHNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzI5MjgyODtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XHJcbn1cclxuI2ludHJvX3Mge1xyXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNjBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi8qdGV4dCBjb2x1bW5zKi9cclxuI3dyYXBwZXIsXHJcbiN3cmFwcGVyMiB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcbiNjMSxcclxuI2MzIHtcclxuICB3aWR0aDogNDklO1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbn1cclxuI2MyIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XHJcbiAgaGVpZ2h0OiAxMTBweDtcclxufVxyXG5cclxuLypbIFJlc3BvbnNpdmUgXSovXHJcbi8qYmlnZ2VyIHNjcmVlbiovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA4NTBweCkge1xyXG4gIC5zZXJ2aWNlX2RpdiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICB9XHJcbiAgLnNlcnZpY2VfaW1hZ2Vfd3JhcCB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gIH1cclxuICAuZGl2aWRlcjEge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gIH1cclxuICAuZGl2aWRlcjIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgfVxyXG4gIC5zZXJ2aWNlX2NvbnRlbnQge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGhlaWdodDogMTkwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4IDEwcHggMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB9XHJcbiAgLnNlcnZpY2VfaW1nIHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG4vKiBbcmVzcG9uc2l2ZV0gKi9cclxuI3NlcnZpY2Vfd2hvbGUge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxNzV2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmNGY1O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi8qIHNtYWxsZXIgc2NyZWVuICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODUwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTg5cHgpIHtcclxuICAjc2VydmljZV93aG9sZSB7XHJcbiAgICBtaW4taGVpZ2h0OiAyMzB2aDtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxcHgpIGFuZCAobWF4LXdpZHRoOiA4NDlweCkge1xyXG4gIC5zZXJ2aWNlX2ltZyB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAjYzEsXHJcbiAgI2MyLFxyXG4gICNjMyxcclxuICAjd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgI3dyYXBwZXIsXHJcbiAgI3dyYXBwZXIyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gICN3cmFwcGVyMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgfVxyXG4gIC5zZXJ2aWNlX2ltYWdlX3dyYXAge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhmYTI2YjtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgfVxyXG4gIC5zZXJ2aWNlX2NvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAudGl0bGVfcyB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgI2ludHJvX3Mge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
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
/* Online Middleware To Backend */






class RestDataSource {
    constructor(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
        this.temp = [];
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            })
        };
        this.user = new _user_model__WEBPACK_IMPORTED_MODULE_2__["User"]();
        //this.baseUrl = `http://localhost:3500/`; // + /api/ for product phase
        this.baseUrl = `https://xu-tung-jin.herokuapp.com/api/`;
    }
    // ====== get, add, update user (registration) ======
    getUser() {
        return this.http.get(this.baseUrl + 'users');
    }
    addUser(user) {
        this.loadToken();
        return this.http.post(this.baseUrl + 'register', user, this.httpOptions);
    }
    updateUser(user) {
        this.loadToken();
        return this.http.post(this.baseUrl + 'register', this.httpOptions);
    }
    // ====== login (storeUserData + authenticate) , logout ======
    storeUserData(token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }
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
    // ====== CRUD books ======
    getBooks() {
        return this.http.get(this.baseUrl + 'book-list');
    }
    addBook(bookData) {
        this.loadToken();
        return this.http.post(this.baseUrl + 'book-list/add', bookData, this.httpOptions);
    }
    updateBook(bookData, _id) {
        this.loadToken();
        return this.http.post(`${this.baseUrl}book-list/edit/${_id}`, bookData, this.httpOptions);
    }
    updateBookWithSameImage(bookData, _id) {
        this.loadToken();
        return this.http.post(`${this.baseUrl}book-list/editWithSameImage/${_id}`, bookData, this.httpOptions);
    }
    deleteBook(id) {
        this.loadToken();
        return this.http.get(`${this.baseUrl}book-list/delete/${id}`, this.httpOptions);
    }
    // ====== CRUD orders ======
    getOrders() {
        return this.http.get(this.baseUrl + 'orders');
    }
    saveOrder(order) {
        return this.http.post(this.baseUrl + 'orders/add', order);
    }
    updateOrderShipping(id, store, originalShipping, changedShipped) {
        this.loadToken();
        console.log('id ' + id);
        console.log('store ' + store);
        console.log('before ' + originalShipping);
        console.log('after ' + changedShipped);
        return this.http.post(`${this.baseUrl}orders/edit/${id}/${store}/${originalShipping}/${changedShipped}`, this.httpOptions);
    }
    deleteOrder(id) {
        this.loadToken();
        return this.http.get(`${this.baseUrl}orders/delete/${id}`, this.httpOptions);
    }
    // load Token
    // the token be sent back to server side
    // each time when requiring some personal data from backend
    loadToken() {
        const token = localStorage.getItem('id_token');
        this.authToken = 'bearer ' + token;
        this.httpOptions.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', this.authToken);
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
    // tslint:disable-next-line: variable-name
    constructor(user_dataSource) {
        this.user_dataSource = user_dataSource;
        this.user = [];
    }
    getUser(username = null) {
        return this.user.filter(b => username == null || username === b.username);
    }
    addUser(thisUser) {
        return this.user_dataSource.addUser(thisUser);
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
/* harmony import */ var _book_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book.model */ "47DY");
/* harmony import */ var _rest_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.datasource */ "DZdm");




class BookRepository {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.books = [];
        this.authors = [];
        this.price = [];
        dataSource.getBooks().subscribe(data => {
            this.books = data;
            this.authors = data.map(b => b.author)
                .filter((a, index, array) => array.indexOf(a) === index).sort();
            this.price = data.map(b => b.originalPrice)
                .filter((a, index, array) => array.indexOf(a) > index).sort();
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
    saveBook(_id, name, author, published, description, originalPrice, price, store, image0) {
        // add book
        if (_id === null || _id == 'undefined' || _id === '') {
            const bookData = new FormData();
            bookData.append("name", name);
            bookData.append("author", author);
            bookData.append("published", published);
            bookData.append("description", description);
            bookData.append("originalPrice", originalPrice);
            bookData.append("price", price);
            bookData.append("store", store);
            bookData.append("image0", image0, name);
            // Sent this new data to backend,
            // then update it into front-end array if successd
            this.dataSource.addBook(bookData).subscribe(res => {
                this.book = new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](res.id, name, author, published, description, Number(originalPrice), Number(price), store, res.imagePath);
                this.books.push(this.book);
            });
        }
        // update book (with image change)
        else {
            const bookData = new FormData();
            bookData.append("name", name);
            bookData.append("author", author);
            bookData.append("published", published);
            bookData.append("description", description);
            bookData.append("originalPrice", originalPrice);
            bookData.append("price", price);
            bookData.append("store", store);
            bookData.append("image0", image0, name);
            // Sent this update data to back-end,
            // then update it into front-end array if successd
            this.dataSource.updateBook(bookData, _id).subscribe(book => {
                this.book = new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](_id, name, author, published, description, Number(originalPrice), Number(price), store, book.imagePath);
                this.books.splice(this.books.findIndex(b => b._id === _id), 1, this.book);
            });
        }
    }
    // update book (without image change)
    editBookWithoutChangePicture(_id, name, author, published, description, originalPrice, price, store, image0) {
        console.log('image0: ' + image0);
        console.log("name: " + name);
        const bookData = new FormData();
        bookData.append("name", name);
        bookData.append("author", author);
        bookData.append("published", published);
        bookData.append("description", description);
        bookData.append("originalPrice", originalPrice);
        bookData.append("price", price);
        bookData.append("store", store);
        bookData.append("image0", image0);
        this.dataSource.updateBookWithSameImage(bookData, _id).subscribe(res => {
            console.log(res.success);
            console.log(res.id);
            if (res.success === true) {
                this.book = new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](_id, name, author, published, description, Number(originalPrice), Number(price), store, image0);
                this.books.splice(this.books.findIndex(b => b._id === _id), 1, this.book);
            }
        });
    }
    deleteBook(deletedBookID) {
        let x = String(deletedBookID);
        this.dataSource.deleteBook(x).subscribe(book => {
            this.books.splice(this.books.findIndex(b => b._id === x), 1);
        });
    }
}
BookRepository.ɵfac = function BookRepository_Factory(t) { return new (t || BookRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_rest_datasource__WEBPACK_IMPORTED_MODULE_2__["RestDataSource"])); };
BookRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BookRepository, factory: BookRepository.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookRepository, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _rest_datasource__WEBPACK_IMPORTED_MODULE_2__["RestDataSource"] }]; }, null); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function BasePageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
} }
function BasePageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.title);
} }
class BasePageComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.title = this.route.snapshot.data.title;
    }
}
BasePageComponent.ɵfac = function BasePageComponent_Factory(t) { return new (t || BasePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
BasePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasePageComponent, selectors: [["app-base-page"]], decls: 2, vars: 2, consts: [["id", "content", 4, "ngIf"], ["id", "content", "style", "background-color: #f7f6f7", 4, "ngIf"], ["id", "content"], ["id", "nameBanner"], [2, "width", "400px"], ["id", "content", 2, "background-color", "#f7f6f7"]], template: function BasePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BasePageComponent_div_0_Template, 5, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BasePageComponent_div_1_Template, 5, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title !== "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title === "ABOUT");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["#content[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n  background-color: #f2f4f5;\r\n  position: relative;\r\n  padding-top: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydGlhbHMvYmFzZS1wYWdlL2Jhc2UtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGFydGlhbHMvYmFzZS1wYWdlL2Jhc2UtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRlbnQge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmY0ZjU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-base-page',
                templateUrl: './base-page.component.html',
                styleUrls: ['./base-page.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "NFVY":
/*!***************************************************************************!*\
  !*** ./src/app/book-store/book-store-login/book-store-login.component.ts ***!
  \***************************************************************************/
/*! exports provided: BookStoreLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookStoreLoginComponent", function() { return BookStoreLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_model_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/auth.service */ "hO0c");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function BookStoreLoginComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.user.displayName, " ");
} }
function BookStoreLoginComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BookStoreLoginComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() { }
    isLoggedIn() {
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.user !== null) {
            return true;
        }
        else {
            return false;
        }
    }
}
BookStoreLoginComponent.ɵfac = function BookStoreLoginComponent_Factory(t) { return new (t || BookStoreLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_model_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
BookStoreLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookStoreLoginComponent, selectors: [["app-book-store-login"]], decls: 6, vars: 2, consts: [[1, "adminButton"], [1, "admin"], ["routerLink", "/admin/main/mycart"], [1, "fas", "fa-user-shield"], ["class", "words_item", 4, "ngIf"], [1, "words_item"], [2, "font-size", "16px"]], template: function BookStoreLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BookStoreLoginComponent_div_4_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BookStoreLoginComponent_div_5_Template, 3, 0, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["button[_ngcontent-%COMP%] {\r\n  border-width: 0em;\r\n  background-color: rgba(240, 248, 255, 0);\r\n}\r\nbutton[_ngcontent-%COMP%]:focus {\r\n  outline: 0;\r\n}\r\n\r\n.adminButton[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  z-index: 10;\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 50px;\r\n  background-color: rgb(90, 11, 11);\r\n}\r\n.admin[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n  margin-left: 8px;\r\n  position: absolute;\r\n}\r\n.fas[_ngcontent-%COMP%] {\r\n  padding-left: 3px;\r\n  color: rgb(224, 216, 216);\r\n  font-size: 30px;\r\n  float: left;\r\n}\r\n.words_empty[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: rgb(109, 5, 5);\r\n  font-size: 14px;\r\n  margin-top: 10px;\r\n}\r\n.words_item[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: rgb(109, 5, 5);\r\n  font-size: 14px;\r\n  margin-top: 10px;\r\n}\r\n.contactButton[_ngcontent-%COMP%] {\r\n  opacity: 0.5;\r\n  background-color: transparent;\r\n  border-width: 0px;\r\n  margin-right: 5px;\r\n  float: left;\r\n}\r\n.contactButton[_ngcontent-%COMP%]:hover {\r\n  opacity: 1;\r\n}\r\n.contactButton[_ngcontent-%COMP%]:focus {\r\n  opacity: 1;\r\n  border-width: 0px;\r\n}\r\n\r\n@media (min-width: 1190px) {\r\n  .contactButton[_ngcontent-%COMP%] {\r\n    float: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1zdG9yZS9ib29rLXN0b3JlLWxvZ2luL2Jvb2stc3RvcmUtbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUI7QUFDbkI7RUFDRSxpQkFBaUI7RUFDakIsd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsV0FBVztBQUNiO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7QUFFQSxpQkFBaUI7QUFDakI7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYm9vay1zdG9yZS9ib29rLXN0b3JlLWxvZ2luL2Jvb2stc3RvcmUtbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qY2FydCBpY29uIGJ1dHRvbiovXHJcbmJ1dHRvbiB7XHJcbiAgYm9yZGVyLXdpZHRoOiAwZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0OCwgMjU1LCAwKTtcclxufVxyXG5idXR0b246Zm9jdXMge1xyXG4gIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbi8qYmFja2dyb3VuZCBkaXYqL1xyXG4uYWRtaW5CdXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB6LWluZGV4OiAxMDtcclxuICB3aWR0aDogNzBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTAsIDExLCAxMSk7XHJcbn1cclxuLmFkbWluIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5mYXMge1xyXG4gIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gIGNvbG9yOiByZ2IoMjI0LCAyMTYsIDIxNik7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi53b3Jkc19lbXB0eSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiByZ2IoMTA5LCA1LCA1KTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4ud29yZHNfaXRlbSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiByZ2IoMTA5LCA1LCA1KTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uY29udGFjdEJ1dHRvbiB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci13aWR0aDogMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5jb250YWN0QnV0dG9uOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5jb250YWN0QnV0dG9uOmZvY3VzIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJvcmRlci13aWR0aDogMHB4O1xyXG59XHJcblxyXG4vKlsgUmVzcG9uc2l2ZSBdKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDExOTBweCkge1xyXG4gIC5jb250YWN0QnV0dG9uIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookStoreLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-book-store-login',
                templateUrl: './book-store-login.component.html',
                styleUrls: ['./book-store-login.component.css']
            }]
    }], function () { return [{ type: src_app_model_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


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





function CartSummaryComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.cart.itemCount, " books\u00A0-\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](4, 2, ctx_r0.cart.cartPrice, "USD", "symbol", "2.2-2"), " ");
} }
function CartSummaryComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.cart.itemCount, " book\u00A0-\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](4, 2, ctx_r1.cart.cartPrice, "USD", "symbol", "2.2-2"), " ");
} }
function CartSummaryComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "empty cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CartSummaryComponent {
    constructor(cart) {
        this.cart = cart;
    }
    ngOnInit() { }
}
CartSummaryComponent.ɵfac = function CartSummaryComponent_Factory(t) { return new (t || CartSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_model_cart_model__WEBPACK_IMPORTED_MODULE_1__["Cart"])); };
CartSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartSummaryComponent, selectors: [["app-cart-summary"]], decls: 7, vars: 4, consts: [[1, "cartButton"], [1, "cart"], ["routerLink", "/admin/main/mycart", 3, "disabled"], [1, "fa", "fa-shopping-cart"], ["class", "words_item", 4, "ngIf"], ["class", "words_empty", 4, "ngIf"], [1, "words_item"], [2, "color", "grey", "font-size", "12px"], [1, "words_empty"]], template: function CartSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CartSummaryComponent_div_4_Template, 5, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CartSummaryComponent_div_5_Template, 5, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CartSummaryComponent_div_6_Template, 2, 0, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.cart.itemCount == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cart.itemCount > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cart.itemCount == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cart.itemCount == 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: ["button[_ngcontent-%COMP%] {\r\n  border-width: 0em;\r\n  background-color: rgba(240, 248, 255, 0);\r\n}\r\n\r\n.cartButton[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  z-index: 10;\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 50px;\r\n  background-color: rgb(90, 11, 11);\r\n}\r\n.cart[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n  margin-left: 8px;\r\n  position: absolute;\r\n}\r\n.fa[_ngcontent-%COMP%] {\r\n  padding-left: 3px;\r\n  color: rgb(224, 216, 216);\r\n  font-size: 30px;\r\n  float: left;\r\n}\r\n.words_empty[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: rgb(109, 5, 5);\r\n  font-size: 14px;\r\n  margin-top: 10px;\r\n}\r\n.words_item[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: rgb(109, 5, 5);\r\n  font-size: 14px;\r\n  margin-top: 10px;\r\n}\r\n.contactButton[_ngcontent-%COMP%] {\r\n  opacity: 0.5;\r\n  background-color: transparent;\r\n  border-width: 0px;\r\n  margin-right: 5px;\r\n  float: left;\r\n}\r\n.contactButton[_ngcontent-%COMP%]:hover {\r\n  opacity: 1;\r\n}\r\n.contactButton[_ngcontent-%COMP%]:focus {\r\n  opacity: 1;\r\n  border-width: 0px;\r\n}\r\n\r\n@media (min-width: 1190px) {\r\n  .contactButton[_ngcontent-%COMP%] {\r\n    float: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1zdG9yZS9jYXJ0LXN1bW1hcnkvY2FydC1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CO0FBQ25CO0VBQ0UsaUJBQWlCO0VBQ2pCLHdDQUF3QztBQUMxQztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjtBQUVBLGlCQUFpQjtBQUNqQjtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ib29rLXN0b3JlL2NhcnQtc3VtbWFyeS9jYXJ0LXN1bW1hcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qY2FydCBpY29uIGJ1dHRvbiovXHJcbmJ1dHRvbiB7XHJcbiAgYm9yZGVyLXdpZHRoOiAwZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0OCwgMjU1LCAwKTtcclxufVxyXG5cclxuLypiYWNrZ3JvdW5kIGRpdiovXHJcbi5jYXJ0QnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgei1pbmRleDogMTA7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkwLCAxMSwgMTEpO1xyXG59XHJcbi5jYXJ0IHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5mYSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgY29sb3I6IHJnYigyMjQsIDIxNiwgMjE2KTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLndvcmRzX2VtcHR5IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHJnYigxMDksIDUsIDUpO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi53b3Jkc19pdGVtIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHJnYigxMDksIDUsIDUpO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5jb250YWN0QnV0dG9uIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmNvbnRhY3RCdXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLmNvbnRhY3RCdXR0b246Zm9jdXMge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbn1cclxuXHJcbi8qWyBSZXNwb25zaXZlIF0qL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMTE5MHB4KSB7XHJcbiAgLmNvbnRhY3RCdXR0b24ge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
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
/*! exports provided: modalComponentBook, BookStoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalComponentBook", function() { return modalComponentBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookStoreComponent", function() { return BookStoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_book_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/book.model */ "47DY");
/* harmony import */ var _model_book_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../model/book.repository */ "EnQi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _model_cart_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/cart.model */ "b/QR");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _partials_book_store_header_book_store_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../partials/book-store-header/book-store-header.component */ "jcQv");
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular-slider/ngx-slider */ "mgaL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _counter_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./counter.directive */ "1h7W");












function BookStoreComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookStoreComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const author_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.changeAuthor(author_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const author_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", author_r3 == ctx_r0.selectedAuthor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", author_r3, " ");
} }
function BookStoreComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookStoreComponent_div_45_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const book_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.viewBook(book_r6._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " View Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", book_r6.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", book_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", book_r6.name, " \u00A0-\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("sale by ", book_r6.store, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](14, 6, book_r6.originalPrice, "USD", "symbol", "2.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](18, 11, book_r6.price, "USD", "symbol", "2.2-2"));
} }
function BookStoreComponent_button_47_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookStoreComponent_button_47_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const page_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.changePage(page_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", page_r9 == ctx_r2.selectedPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", page_r9, " ");
} }
// ModalPage(Child)
class modalComponentBook {
    constructor(repository, route, cart, router, activeModal) {
        this.repository = repository;
        this.cart = cart;
        this.router = router;
        this.activeModal = activeModal;
        this.book = new _model_book_model__WEBPACK_IMPORTED_MODULE_1__["Book"]();
    }
    ngOnInit() {
        console.log('model id: ' + this.orderId);
        Object.assign(this.book, this.repository.getBook(String(this.orderId)));
    }
    addBookToCart(book) {
        this.cart.addLine(book, 1, false);
        this.router.navigateByUrl('admin/main/mycart');
        this.activeModal.dismiss('Cross click');
    }
    closepage() {
        this.activeModal.dismiss('Cross click');
    }
}
modalComponentBook.ɵfac = function modalComponentBook_Factory(t) { return new (t || modalComponentBook)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_model_book_repository__WEBPACK_IMPORTED_MODULE_2__["BookRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_model_cart_model__WEBPACK_IMPORTED_MODULE_4__["Cart"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"])); };
modalComponentBook.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: modalComponentBook, selectors: [["modalpage"]], inputs: { orderId: "orderId" }, decls: 86, vars: 18, consts: [[1, "displaySetting", "mt-5"], [1, "modal-title", "text-right"], [2, "outline", "0px", "background", "#ffffff", "border", "0px", 3, "click"], [1, "fas", "fa-times-circle", 2, "color", "gray", "font-size", "30px"], ["id", "big_window", 1, "modal-body"], ["rowspan", "6"], [1, "image_display"], [1, "d-flex", "justify-content-center"], [2, "max-width", "400px", "max-height", "350px", 3, "src", "alt"], [2, "color", "grey", "font-size", "14px"], [2, "font-size", "14px", "color", "grey"], [2, "color", "red", "font-size", "18px", "font-weight", "600"], [1, "addtoCart", 3, "click"], ["colspan", "2"], ["id", "small_window"], [1, "container"], [1, "row"], [1, "col-sm"], [1, "col-sm", "text-left"], [1, "text-left"]], template: function modalComponentBook_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function modalComponentBook_Template_button_click_2_listener() { return ctx.closepage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function modalComponentBook_Template_button_click_38_listener() { return ctx.addBookToCart(ctx.book); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Add To Shopping Cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function modalComponentBook_Template_button_click_76_listener() { return ctx.addBookToCart(ctx.book); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Add To Shopping Cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.book.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.book.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Author\u00A0:\u00A0", ctx.book.author, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Published\u00A0:\u00A0", ctx.book.published, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Sale by \u00A0:\u00A0", ctx.book.store, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Price \u00A0:\u00A0 USD $ ", ctx.book.price, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Buy now for USD $ ", ctx.book.originalPrice, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", ctx.book.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.book.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.book.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Author\u00A0:\u00A0", ctx.book.author, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Published\u00A0:\u00A0", ctx.book.published, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Sale by \u00A0:\u00A0", ctx.book.store, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Price \u00A0:\u00A0 $ ", ctx.book.originalPrice, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Buy now for $ ", ctx.book.price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ", ctx.book.description, " ");
    } }, styles: [".buttonS[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  border: 0px solid grey;\r\n  margin: 20px 10px;\r\n  width: 30%;\r\n  color: rgb(46, 45, 45);\r\n  background-color: #d8d5d5;\r\n  font-size: 14px;\r\n}\r\n\r\n.buttonS[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  border: 0px solid grey;\r\n  margin: 20px 10px;\r\n  width: 30%;\r\n  color: rgb(46, 45, 45);\r\n  background-color: #d8d5d5;\r\n  font-size: 14px;\r\n}\r\n\r\n.fas[_ngcontent-%COMP%] {\r\n  color: seashell;\r\n  font-size: 15px;\r\n  padding-right: 15px;\r\n}\r\n\r\n.addtoCart[_ngcontent-%COMP%] {\r\n  outline: 0px;\r\n  font-weight: 600;\r\n  border: 0px solid rgb(155, 155, 155);\r\n  padding: 20px 20px;\r\n  width: 200px;\r\n  color: rgb(233, 230, 230);\r\n  background-color: #9b0606;\r\n  font-size: 14px;\r\n}\r\n\r\n.fas[_ngcontent-%COMP%] {\r\n  color: seashell;\r\n  font-size: 15px;\r\n  padding-right: 15px;\r\n}\r\n\r\n\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  min-width: 300px;\r\n  width: 80%;\r\n  text-align: left;\r\n  font-size: 16px;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  width: 50%;\r\n  padding-left: 30px;\r\n  padding-top: 20px;\r\n}\r\n\r\n\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.input-control[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n}\r\n\r\n\r\n\r\n.displaySetting[_ngcontent-%COMP%] {\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  text-align: center;\r\n  width: 80%;\r\n}\r\n\r\n.imageDiv[_ngcontent-%COMP%] {\r\n  background-color: #d8d5d5;\r\n  width: 100%;\r\n  height: 280px;\r\n}\r\n\r\n#big_window[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n#big_window[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n#small_window[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n@media (min-width: 1190px) {\r\n  #big_window[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  #small_window[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1zdG9yZS9ib29rLWRldGFpbC9ib29rLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdEQUFnRDs7QUFFaEQsWUFBWTs7QUFDWjtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBLFFBQVE7O0FBQ1I7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUEsUUFBUTs7QUFDUjtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSxpQkFBaUI7O0FBQ2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stc3RvcmUvYm9vay1kZXRhaWwvYm9vay1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT1DU1MgZm9yIG1vZGFsIGJvb2sgZGV0YWlsIHBhZ2U9PT09PT0gKi9cclxuXHJcbi8qIEJ1dHRvbnMgKi9cclxuLmJ1dHRvblMge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyOiAwcHggc29saWQgZ3JleTtcclxuICBtYXJnaW46IDIwcHggMTBweDtcclxuICB3aWR0aDogMzAlO1xyXG4gIGNvbG9yOiByZ2IoNDYsIDQ1LCA0NSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDVkNTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmJ1dHRvblMge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyOiAwcHggc29saWQgZ3JleTtcclxuICBtYXJnaW46IDIwcHggMTBweDtcclxuICB3aWR0aDogMzAlO1xyXG4gIGNvbG9yOiByZ2IoNDYsIDQ1LCA0NSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDVkNTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmZhcyB7XHJcbiAgY29sb3I6IHNlYXNoZWxsO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcbi5hZGR0b0NhcnQge1xyXG4gIG91dGxpbmU6IDBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkIHJnYigxNTUsIDE1NSwgMTU1KTtcclxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGNvbG9yOiByZ2IoMjMzLCAyMzAsIDIzMCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzliMDYwNjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmZhcyB7XHJcbiAgY29sb3I6IHNlYXNoZWxsO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4vKlRhYmxlKi9cclxudGFibGUge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxudGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogNTAlO1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLypJbnB1dCovXHJcbmlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uaW5wdXQtY29udHJvbCB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4vKlsgUmVzcG9uc2l2ZSBdKi9cclxuLmRpc3BsYXlTZXR0aW5nIHtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuLmltYWdlRGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkNWQ1O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjgwcHg7XHJcbn1cclxuI2JpZ193aW5kb3cge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuI2JpZ193aW5kb3cge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuI3NtYWxsX3dpbmRvdyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDExOTBweCkge1xyXG4gICNiaWdfd2luZG93IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAjc21hbGxfd2luZG93IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](modalComponentBook, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'modalpage',
                // ======TEMPLATE HTML CODE STARTS======
                template: `
  <div class="displaySetting mt-5">
    <!--Close button-->
    <div class="modal-title text-right">
      <button style="outline:0px; background:#ffffff; border:0px;" (click)="closepage()" >
          <i class="fas fa-times-circle" style=" color:gray; font-size:30px;"></i>
      </button>
    </div>

    <div id="big_window" class="modal-body">
      <table>
      <tr>
        <!--Picture-->
        <td rowspan="6">

          <!--Display Picture-->
          <div class="image_display">
            <div class="d-flex justify-content-center">
              <div>
                <img
                  [src]="book.imagePath"
                  [alt]="book.name"
                  style="max-width: 400px; max-height: 350px"
                />
              </div>
            </div>
          </div>
        </td>

        <td>
          <!--Book Name-->
          <h4>{{ book.name }}</h4>
        </td>
      </tr>
      <tr>
        <td>
          <!--Author-->
          <span style="color: grey; font-size: 14px">
            Author&nbsp;:&nbsp;{{ book.author }}
          </span>
        </td>
      </tr>
      <tr>
        <td>
          <!--Publish date-->
          <span style="color: grey; font-size: 14px">
            Published&nbsp;:&nbsp;{{ book.published }}
          </span>
        </td>
      </tr>
      <tr>
        <td>
          <!--Store-->
          <span style="font-size: 14px; color: grey">
            Sale by &nbsp;:&nbsp;{{ book.store }}</span
          >
          <br /><br />
          <!--Price-->
          <span style="font-size: 14px; color: grey">
            Price  &nbsp;:&nbsp; USD $ {{
              book.price
            }}
          </span>
        </td>
      </tr>
      <tr>
        <td>
          <span style="color: red; font-size: 18px; font-weight: 600">
            Buy now for USD $ {{ book.originalPrice }}</span
          ><br />
        </td>
      </tr>
      <tr>
        <td>
          <!--Add to cart-->
          <button class="addtoCart" (click)="addBookToCart(book)">
            Add To Shopping Cart
          </button>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <!--Description-->
          <span style="font-size: 14px; color: grey"
            ><hr />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
              book.description
            }}
            <hr /></span
          ><br />
        </td>
        <td></td>
      </tr>
    </table>
    </div>
      <div id="small_window">
        <div class="container">
          <div class="row">
            <div class="col-sm">
               <!--Display Picture-->
              <div class="image_display">
                <div class="d-flex justify-content-center">
                  <div>
                    <img
                      [src]="book.imagePath"
                      [alt]="book.name"
                      style="max-width: 400px; max-height: 350px"
                    />
                  </div>
                </div>
              </div>
            </div>
          <div class="col-sm text-left">

            <!--Book Name-->
            <h4>{{ book.name }}</h4>

            <!--Author-->
            <span style="color: grey; font-size: 14px">
              Author&nbsp;:&nbsp;{{ book.author }}
            </span><br>

            <!--Publish date-->
            <span style="color: grey; font-size: 14px">
              Published&nbsp;:&nbsp;{{ book.published }}
            </span><br>

            <!--Store-->
            <span style="font-size: 14px; color: grey">
              Sale by &nbsp;:&nbsp;{{ book.store }}</span
            >
            <br />

            <!--Price-->
            <span style="font-size: 14px; color: grey">
              Price  &nbsp;:&nbsp; $ {{
                book.originalPrice
              }}
            </span><br><br>

            <span style="color: red; font-size: 18px; font-weight: 600">
              Buy now for $ {{ book.price }}</span
            ><br /><br>

            <!--Add to cart-->
            <button class="addtoCart" (click)="addBookToCart(book)">
              Add To Shopping Cart
            </button>
          </div>
        </div>
      </div>
      <div class="text-left">
         <!--Description-->
          <span style="font-size: 14px; color: grey"><hr />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {{book.description}}
            <hr />
          </span><br />
      </div>
    </div>
  </div>
  <br /><br />`,
                styleUrls: ['./book-detail/book-detail.component.css']
            }]
    }], function () { return [{ type: _model_book_repository__WEBPACK_IMPORTED_MODULE_2__["BookRepository"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _model_cart_model__WEBPACK_IMPORTED_MODULE_4__["Cart"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"] }]; }, { orderId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
// BasePage(Parent)
class BookStoreComponent {
    constructor(repository, route, router, modalService) {
        this.repository = repository;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        // Page filter
        this.selectedAuthor = null;
        this.booksPerPage = 12;
        this.selectedPage = 1;
        // Price filter
        this.value = 0;
        this.highValue = 100;
        this.options = {
            floor: 0,
            ceil: 100,
        };
    }
    get books() {
        const pageIndex = (this.selectedPage - 1) * this.booksPerPage;
        return this.repository.getBooks(this.selectedAuthor)
            .slice(pageIndex, pageIndex + this.booksPerPage)
            .filter(book => {
            return book.price >= this.value &&
                book.price <= this.highValue;
        });
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
        return Math.ceil(this.repository.getBooks(this.selectedAuthor).length / this.booksPerPage);
    }
    // Open Modal page
    viewBook(id) {
        // Open modal window
        const ModalRef = this.modalService.open(modalComponentBook, {
            windowClass: 'this_modal',
            scrollable: false,
        });
        // Assign value
        ModalRef.componentInstance.orderId = id;
    }
}
BookStoreComponent.ɵfac = function BookStoreComponent_Factory(t) { return new (t || BookStoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_model_book_repository__WEBPACK_IMPORTED_MODULE_2__["BookRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"])); };
BookStoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookStoreComponent, selectors: [["app-book-store"]], decls: 50, vars: 7, consts: [[2, "min-width", "500px"], ["routerLink", "/book-list/all", 1, "buttonS"], [1, "fas", "fa-eye"], ["routerLink", "/admin/main/books", 1, "buttonS"], [1, "fas", "fa-plus-circle"], [1, "main_wrap"], [1, "row", "d-flex", "justify-content-center", "m-0"], ["id", "filter_book"], [2, "margin-top", "0px"], [1, "filterTitle"], [1, "custom-slider"], [3, "value", "highValue", "options", "valueChange", "highValueChange"], [2, "font-size", "14px", "margin-top", "10px", "color", "rgb(70, 62, 62)", "width", "90%", "background-color", "white", "border", "solid 1px grey", 3, "click"], ["style", "\n          font-size: 14px;\n          margin-top: 10px;\n          color: rgb(70, 62, 62);\n          width: 90%;\n          background-color: white;\n          border: solid 1px grey;\n        ", 3, "active", "click", 4, "ngFor", "ngForOf"], [2, "margin-top", "10px"], [2, "width", "90%", 3, "value", "change"], ["value", "12"], ["value", "24"], ["value", "36"], ["value", "48"], ["id", "bookDivs_wrap"], ["class", "ngContent text-center", 4, "ngFor", "ngForOf"], ["class", "pageNumber", 3, "active", "click", 4, "counter", "counterOf"], [1, "ngContent", "text-center"], [1, "bookDiv"], [1, "imageDiv", 3, "click"], [2, "padding", "10px", "max-width", "200px", "max-height", "200px", 3, "src", "alt"], [1, "edit_dialog"], [1, "bookName"], [2, "color", "gray"], [2, "text-decoration", "line-through", "font-size", "12px"], [2, "font-size", "12px", "color", "red"], [1, "pageNumber", 3, "click"]], template: function BookStoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-book-store-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u00A0 Buy Books ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0 Sale Books ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Filter by");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Price ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ngx-slider", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function BookStoreComponent_Template_ngx_slider_valueChange_20_listener($event) { return ctx.value = $event; })("highValueChange", function BookStoreComponent_Template_ngx_slider_highValueChange_20_listener($event) { return ctx.highValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Authors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookStoreComponent_Template_button_click_25_listener() { return ctx.changeAuthor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, BookStoreComponent_button_28_Template, 2, 3, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Page Length");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BookStoreComponent_Template_select_change_33_listener($event) { return ctx.changePageSize($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "12 per page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "24 per page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "36 per page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "48 per page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, BookStoreComponent_div_45_Template, 19, 16, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, BookStoreComponent_button_47_Template, 2, 3, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value)("highValue", ctx.highValue)("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.authors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.booksPerPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.books);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("counterOf", ctx.pageCount);
    } }, directives: [_partials_book_store_header_book_store_header_component__WEBPACK_IMPORTED_MODULE_6__["BookStoreHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_7__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _counter_directive__WEBPACK_IMPORTED_MODULE_10__["CounterDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"]], styles: [".main_wrap[_ngcontent-%COMP%] {\n  min-width: 500px;\n}\n.bookDiv[_ngcontent-%COMP%] {\n  width: 232px;\n  height: 350px;\n  border: 1px solid rgba(255, 255, 255, 0);\n  margin: 10px;\n}\n#bookDivs_wrap[_ngcontent-%COMP%] {\n  width: 70%;\n  margin-top: 50px;\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n}\n#filter_book[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 17px;\n  width: 20%;\n  min-width: 250px;\n  max-width: 250px;\n  padding-top: 20px;\n  padding-left: 50px;\n  padding-right: 30px;\n}\n.imageDiv[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-right: auto;\n  margin-left: auto;\n  width: 229px;\n  height: 230px;\n  background-color: white;\n  overflow: hidden;\n  cursor: pointer;\n}\n.imageDiv[_ngcontent-%COMP%]:hover   .edit_dialog[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.edit_dialog[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 229px;\n  height: 0px;\n  padding-top: 10px;\n  z-index: 10;\n  transition: height 0.7s;\n  font-size: 12px;\n  background-color: rgba(226, 109, 26, 0.082);\n}\n\n.buttonS[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  margin-top: 10px;\n  border: 1px solid grey;\n  width: 90%;\n  background-color: #ffffff;\n  font-size: 14px;\n}\n.editButton[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-left: 180px;\n  position: absolute;\n  z-index: 10;\n  width: 30px;\n  height: 30px;\n  border-radius: 50px;\n  background-color: #81817a;\n}\n.buttonS[_ngcontent-%COMP%] {\n  font-weight: 600;\n  border: 0px solid grey;\n  margin: 20px 10px;\n  width: 30%;\n  color: #2e2d2d;\n  background-color: #d8d5d5;\n  font-size: 14px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 14px;\n  letter-spacing: 5px;\n}\nselect[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.filterTitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.bookName[_ngcontent-%COMP%] {\n  margin-top: 235px;\n  margin-right: auto;\n  margin-left: auto;\n  font-size: 14px;\n  font-weight: 600;\n  width: 180px;\n  text-align: left;\n}\n.pageNumber[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  font-size: 12px;\n  border-width: 0px;\n  background-color: rgba(255, 255, 255, 0);\n  margin-bottom: 10px;\n}\n.pageNumber.a[_ngcontent-%COMP%] {\n  transition: border-radius 10px background-color silver;\n}\n.pageNumber.active[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: silver;\n}\n.buy_books[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  width: 200px;\n  height: auto;\n}\n.buy_book_subtitle[_ngcontent-%COMP%] {\n  color: gray;\n  margin-top: 10px;\n  font-size: 12px;\n  width: 50%;\n  margin-right: auto;\n  margin-left: auto;\n}\n.readit[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 40px;\n}\n\n  .custom-slider .ngx-slider .ngx-slider-selection {\n  background: rgba(128, 0, 0, 0.452) !important;\n}\n  .custom-slider .ngx-slider .ngx-slider-left-out-selection,   .custom-slider .ngx-slider .ngx-slider-right-out-selection {\n  background: #460909 !important;\n}\n  .custom-slider .ngx-slider .ngx-slider-selected {\n  background: darkgoldenrod;\n}\n  .custom-slider .ngx-slider .ngx-slider-pointer {\n  background: rgba(128, 0, 0, 0.109) !important;\n}\n  .custom-slider .ngx-slider .ngx-slider-pointer::after {\n  background: maroon !important;\n}\n  .custom-slider .ngx-slider .ngx-slider-pointer:focus {\n  outline: 0 !important;\n}\n  .custom-slider .ngx-slider .ngx-slider-bubble {\n  font-size: 12px;\n  color: grey;\n}\n\n\n@media only screen and (min-width: 1px) and (max-width: 833px) {\n  #filter_book[_ngcontent-%COMP%] {\n    text-align: center;\n    min-width: 400px;\n    max-width: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1zdG9yZS9ib29rLXN0b3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFBO0FBQ0E7RUFDRSxnQkFBQTtBQUNGO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtBQUVGO0FBQUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBR0Y7QUFEQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSUY7QUFGQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFLRjtBQUhBO0VBQ0UsWUFBQTtBQU1GO0FBSkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLDJDQUFBO0FBT0Y7QUFKQSxZQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBT0Y7QUFMQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFRRjtBQU5BO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFTRjtBQU5BLG1CQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFTRjtBQVBBO0VBQ0UsZUFBQTtBQVVGO0FBUkE7RUFDRSxlQUFBO0FBV0Y7QUFUQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQVlGO0FBVkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7QUFhRjtBQVhBO0VBQ0Usc0RBQUE7QUFjRjtBQVpBO0VBQ0UsbUJBQUE7RUFDQSx3QkFBQTtBQWVGO0FBYkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFnQkY7QUFkQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQWlCRjtBQWZBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFrQkY7QUFmQSxXQUFBO0FBSU07RUFDRSw2Q0FBQTtBQWVSO0FBYk07O0VBRUUsOEJBQUE7QUFlUjtBQWJNO0VBQ0UseUJBQUE7QUFlUjtBQWJNO0VBQ0UsNkNBQUE7QUFlUjtBQWJNO0VBQ0UsNkJBQUE7QUFlUjtBQWJNO0VBQ0UscUJBQUE7QUFlUjtBQWJNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFlUjtBQVRBLGlCQUFBO0FBQ0EsbUJBQUE7QUFDQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUFZRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYm9vay1zdG9yZS9ib29rLXN0b3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRGl2IGFsaWdubWVudCAqL1xyXG4ubWFpbl93cmFwIHtcclxuICBtaW4td2lkdGg6IDUwMHB4O1xyXG59XHJcbi5ib29rRGl2IHtcclxuICB3aWR0aDogMjMycHg7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG4jYm9va0RpdnNfd3JhcCB7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuI2ZpbHRlcl9ib29rIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICB3aWR0aDogMjAlO1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgbWF4LXdpZHRoOiAyNTBweDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDtcclxufVxyXG4uaW1hZ2VEaXYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgd2lkdGg6IDIyOXB4O1xyXG4gIGhlaWdodDogMjMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5pbWFnZURpdjpob3ZlciAuZWRpdF9kaWFsb2cge1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG4uZWRpdF9kaWFsb2cge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDIyOXB4O1xyXG4gIGhlaWdodDogMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjdzO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNiwgMTA5LCAyNiwgMC4wODIpO1xyXG59XHJcblxyXG4vKiBCdXR0b25zICovXHJcbi5idXR0b25TIHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICB3aWR0aDogOTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5lZGl0QnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxODBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOSwgMTI5LCAxMjIpO1xyXG59XHJcbi5idXR0b25TIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkIGdyZXk7XHJcbiAgbWFyZ2luOiAyMHB4IDEwcHg7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBjb2xvcjogcmdiKDQ2LCA0NSwgNDUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGQ1ZDU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4vKiBDb250ZW50IHN0eWxlcyAqL1xyXG5wIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxufVxyXG5zZWxlY3Qge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uZmlsdGVyVGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uYm9va05hbWUge1xyXG4gIG1hcmdpbi10b3A6IDIzNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4ucGFnZU51bWJlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5wYWdlTnVtYmVyLmEge1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1yYWRpdXMgMTBweCBiYWNrZ3JvdW5kLWNvbG9yIHNpbHZlcjtcclxufVxyXG4ucGFnZU51bWJlci5hY3RpdmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xyXG59XHJcbi5idXlfYm9va3Mge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5idXlfYm9va19zdWJ0aXRsZSB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuLnJlYWRpdCB7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLyogU2lsZGVyICovXHJcbjo6bmctZGVlcCB7XHJcbiAgLmN1c3RvbS1zbGlkZXIge1xyXG4gICAgLm5neC1zbGlkZXIge1xyXG4gICAgICAubmd4LXNsaWRlci1zZWxlY3Rpb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAwLCAwLCAwLjQ1MikgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAubmd4LXNsaWRlci1sZWZ0LW91dC1zZWxlY3Rpb24sXHJcbiAgICAgIC5uZ3gtc2xpZGVyLXJpZ2h0LW91dC1zZWxlY3Rpb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM0NjA5MDkgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAubmd4LXNsaWRlci1zZWxlY3RlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogZGFya2dvbGRlbnJvZDtcclxuICAgICAgfVxyXG4gICAgICAubmd4LXNsaWRlci1wb2ludGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMCwgMCwgMC4xMDkpICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLm5neC1zbGlkZXItcG9pbnRlcjo6YWZ0ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG1hcm9vbiAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5uZ3gtc2xpZGVyLXBvaW50ZXI6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IDAgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAubmd4LXNsaWRlci1idWJibGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLypbIFJlc3BvbnNpdmUgXSovXHJcbi8qIFNtYWxsZXIgc2NyZWVuICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMXB4KSBhbmQgKG1heC13aWR0aDogODMzcHgpIHtcclxuICAjZmlsdGVyX2Jvb2sge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWluLXdpZHRoOiA0MDBweDtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookStoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-book-store',
                templateUrl: './book-store.component.html',
                styleUrls: ['./book-store.component.scss']
            }]
    }], function () { return [{ type: _model_book_repository__WEBPACK_IMPORTED_MODULE_2__["BookRepository"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }]; }, null); })();


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
/* harmony import */ var src_app_model_cart_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/cart.model */ "b/QR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function CheckoutComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Your payment has been succeed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " You can trace all orders at Purchase history. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Purchase history ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Return to store");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_form_2_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter your name. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_form_2_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter your address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_form_2_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter your city ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_form_2_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter your province ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_form_2_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter your postal code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_form_2_span_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter your country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CheckoutComponent_form_2_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.submitOrder(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Shipping Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_form_2_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.order.buyer = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 16, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_form_2_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.order.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CheckoutComponent_form_2_span_16_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_form_2_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.order.address = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CheckoutComponent_form_2_span_23_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_form_2_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.order.city = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CheckoutComponent_form_2_span_30_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Province");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_form_2_Template_input_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.order.province = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, CheckoutComponent_form_2_span_37_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "postalCode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_form_2_Template_input_ngModelChange_42_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.order.postalCode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, CheckoutComponent_form_2_span_44_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_form_2_Template_input_ngModelChange_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.order.country = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, CheckoutComponent_form_2_span_51_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "table", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Shipping");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "$15.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](80, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Process to payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.order.buyer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.order.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.submitted && _r3.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.order.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.submitted && _r6.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.order.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.submitted && _r8.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.order.province);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.submitted && _r10.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.order.postalCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.submitted && _r12.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.order.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.submitted && _r14.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](63, 15, ctx_r1.cart.cartPrice, "USD", "symbol", "2.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](80, 20, ctx_r1.cart.cartPrice + 15, "USD", "symbol", "2.2-2"), " ");
} }
class CheckoutComponent {
    constructor(repository, order, cart) {
        this.repository = repository;
        this.order = order;
        this.cart = cart;
        this.orderSent = false;
        this.submitted = false;
        // Assign buyer's name
        const userInfo = JSON.parse(localStorage.getItem('user'));
        const thisUserDisplayName = userInfo.displayName;
        this.order.buyer = thisUserDisplayName;
    }
    ngOnInit() { }
    submitOrder(form) {
        this.submitted = true;
        if (form.valid) {
            if (this.repository.saveOrder(this.order)) {
                this.order.clear();
                this.orderSent = true;
                this.submitted = false;
            }
        }
    }
}
CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_model_order_repository__WEBPACK_IMPORTED_MODULE_1__["OrderRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_model_order_model__WEBPACK_IMPORTED_MODULE_2__["Order"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_model_cart_model__WEBPACK_IMPORTED_MODULE_3__["Cart"])); };
CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckoutComponent, selectors: [["app-checkout"]], decls: 3, vars: 2, consts: [[1, "container-fluid"], ["class", "m-5 text-center", 4, "ngIf"], ["novalidate", "", 3, "ngSubmit", 4, "ngIf"], [1, "m-5", "text-center"], [2, "font-size", "14px", "color", "grey"], ["routerLink", "/admin/main/manage-order", 1, "buttonS"], ["routerLink", "/book-list", 1, "buttonE"], ["novalidate", "", 3, "ngSubmit"], ["form", "ngForm"], [1, "d-flex", "justify-content-center", 2, "min-width", "400px"], [1, "left"], [1, "border", "p-3"], [1, "line_title"], ["type", "text", "name", "buyer", "required", "", 2, "display", "none", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], [1, "form-group"], ["type", "text", "name", "name", "required", "", 3, "ngModel", "ngModelChange"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "name", "address", "required", "", 1, "", 3, "ngModel", "ngModelChange"], ["address", "ngModel"], ["for", ""], ["type", "text", "name", "city", "required", "", 1, "", 3, "ngModel", "ngModelChange"], ["city", "ngModel"], ["type", "text", "name", "province", "required", "", 1, "", 3, "ngModel", "ngModelChange"], ["province", "ngModel"], ["type", "text", "name", "postalCode", "required", "", 1, "", 3, "ngModel", "ngModelChange"], ["postalCode", "ngModel"], ["type", "text", "name", "country", "required", "", 1, "", 3, "ngModel", "ngModelChange"], ["country", "ngModel"], [1, "right"], [1, "mt-3", "border", "h-50", "p-3"], [1, "summary"], [1, "text-left", "w-50", "p-0"], [1, "text-right", "w-50", "p-0"], [1, "text-left", "w-100"], [2, "color", "maroon"], [1, "text-center"], ["type", "submit", 1, "buttonP"], [1, "text-danger"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CheckoutComponent_div_1_Template, 11, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CheckoutComponent_form_2_Template, 86, 25, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderSent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.orderSent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: ["input.ng-dirty.ng-invalid[_ngcontent-%COMP%] {\r\n  border: 2px solid #ff0000;\r\n}\r\ninput.ng-dirty.ng-valid[_ngcontent-%COMP%] {\r\n  border: 2px solid #6bc502;\r\n}\r\n.form-group[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  font-size: 14px;\r\n  font-weight: 800;\r\n}\r\n.buttonS[_ngcontent-%COMP%], .buttonP[_ngcontent-%COMP%], .buttonE[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  font-weight: 600;\r\n  border: 0px solid grey;\r\n  margin: 20px 10px;\r\n\r\n  font-size: 14px;\r\n  width: 90%;\r\n  background-color: maroon;\r\n  color: beige;\r\n}\r\n.buttonE[_ngcontent-%COMP%] {\r\n  background-color: #646262;\r\n}\r\n#right[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n  padding: 20px;\r\n}\r\n.line_title[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n  margin-bottom: -20px;\r\n  font-size: 17px;\r\n  text-align: left;\r\n}\r\n.summary[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n.checkout[_ngcontent-%COMP%] {\r\n  background-color: rgb(158, 51, 51);\r\n  color: #f1f1f1;\r\n}\r\n\r\ninput[type=\"text\"][_ngcontent-%COMP%] {\r\n  padding-left: 15px;\r\n  width: 100%;\r\n  border: 1px solid #eeeeee;\r\n  background-color: seashell;\r\n  height: 40px;\r\n}\r\n.left[_ngcontent-%COMP%] {\r\n  width: 500px;\r\n  margin: 10px;\r\n}\r\n.right[_ngcontent-%COMP%] {\r\n  width: 250px;\r\n  margin-top: -20px;\r\n  margin-left: 10px;\r\n}\r\n@media (min-width: 1190px) {\r\n  .left[_ngcontent-%COMP%] {\r\n    width: 350px;\r\n    margin: 40px;\r\n  }\r\n  .right[_ngcontent-%COMP%] {\r\n    width: 250px;\r\n    margin-top: 15px;\r\n    margin-left: 0px;\r\n  }\r\n  .buttonS[_ngcontent-%COMP%], .buttonP[_ngcontent-%COMP%], .buttonE[_ngcontent-%COMP%] {\r\n    width: 180px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1zdG9yZS9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7OztFQUdFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjs7RUFFakIsZUFBZTtFQUNmLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGNBQWM7QUFDaEI7QUFDQSxRQUFRO0FBQ1I7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjtFQUNBOzs7SUFHRSxZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stc3RvcmUvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLWRpcnR5Lm5nLWludmFsaWQge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZjAwMDA7XHJcbn1cclxuaW5wdXQubmctZGlydHkubmctdmFsaWQge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM2YmM1MDI7XHJcbn1cclxuLmZvcm0tZ3JvdXAge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuLmJ1dHRvblMsXHJcbi5idXR0b25QLFxyXG4uYnV0dG9uRSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkIGdyZXk7XHJcbiAgbWFyZ2luOiAyMHB4IDEwcHg7XHJcblxyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjtcclxuICBjb2xvcjogYmVpZ2U7XHJcbn1cclxuLmJ1dHRvbkUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDYyNjI7XHJcbn1cclxuI3JpZ2h0IHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4ubGluZV90aXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAtMjBweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uc3VtbWFyeSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uY2hlY2tvdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTgsIDUxLCA1MSk7XHJcbiAgY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuLypJbnB1dCovXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzZWFzaGVsbDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuLmxlZnQge1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLnJpZ2h0IHtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDExOTBweCkge1xyXG4gIC5sZWZ0IHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIG1hcmdpbjogNDBweDtcclxuICB9XHJcbiAgLnJpZ2h0IHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIH1cclxuICAuYnV0dG9uUyxcclxuICAuYnV0dG9uUCxcclxuICAuYnV0dG9uRSB7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-checkout',
                templateUrl: './checkout.component.html',
                styleUrls: ['./checkout.component.css']
            }]
    }], function () { return [{ type: _model_order_repository__WEBPACK_IMPORTED_MODULE_1__["OrderRepository"] }, { type: _model_order_model__WEBPACK_IMPORTED_MODULE_2__["Order"] }, { type: src_app_model_cart_model__WEBPACK_IMPORTED_MODULE_3__["Cart"] }]; }, null); })();


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
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [[2, "min-width", "500px"], ["id", "main", 1, "main_wrapper"], ["id", "grid_placeholder", 1, "main_grid_constraint"], ["id", "content_in_main_wrapper", 1, "main_grid_constraint"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_partials_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["#grid_placeholder[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n#content_in_main_wrapper[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin: 0;\r\n  padding: 0;\r\n  position: relative;\r\n}\r\n\r\n\r\n@media (min-width: 1190px) {\r\n  #content_in_main_wrapper[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n  }\r\n  #grid_placeholder[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n  }\r\n  .main_wrapper[_ngcontent-%COMP%] {\r\n    grid-template-columns: 20% 80%;\r\n    display: grid;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCO0FBQ2xCO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjtBQUVBLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEI7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsY0FBYztJQUNkLFdBQVc7RUFDYjtFQUNBO0lBQ0UsOEJBQThCO0lBQzlCLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBEaXYgYWxpZ25tZW50ICovXHJcbiNncmlkX3BsYWNlaG9sZGVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiNjb250ZW50X2luX21haW5fd3JhcHBlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi8qWyBSZXNwb25zaXZlIF0qL1xyXG4vKkJpZ2dlciBzY3JlZW4qL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMTE5MHB4KSB7XHJcbiAgI2NvbnRlbnRfaW5fbWFpbl93cmFwcGVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gICNncmlkX3BsYWNlaG9sZGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5tYWluX3dyYXBwZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICB9XHJcbn1cclxuIl19 */"] });
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _book_store_book_store_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book-store/book-store.module */ "Blh2");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");










function jwtTokenGetter() {
    return localStorage.getItem('id_token');
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _book_store_book_store_module__WEBPACK_IMPORTED_MODULE_6__["BookStoreModule"],
            _partials_partials_module__WEBPACK_IMPORTED_MODULE_3__["PartialsModule"],
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__["PagesModule"],
            _model_model_module__WEBPACK_IMPORTED_MODULE_1__["ModelModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtModule"].forRoot({
                config: {
                    tokenGetter: jwtTokenGetter
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _book_store_book_store_module__WEBPACK_IMPORTED_MODULE_6__["BookStoreModule"],
        _partials_partials_module__WEBPACK_IMPORTED_MODULE_3__["PartialsModule"],
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__["PagesModule"],
        _model_model_module__WEBPACK_IMPORTED_MODULE_1__["ModelModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ],
                imports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _book_store_book_store_module__WEBPACK_IMPORTED_MODULE_6__["BookStoreModule"],
                    _partials_partials_module__WEBPACK_IMPORTED_MODULE_3__["PartialsModule"],
                    _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__["PagesModule"],
                    _model_model_module__WEBPACK_IMPORTED_MODULE_1__["ModelModule"],
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtModule"].forRoot({
                        config: {
                            tokenGetter: jwtTokenGetter
                        }
                    })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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
    addLine(book, quantity = 1, shipping) {
        const line = this.lines.find(l => l.book._id === book._id);
        // If there is no duplicated _id
        if (line !== undefined) {
            line.quantity += quantity;
        }
        else {
            this.lines.push(new CartLine(book, quantity, shipping));
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
        const index = this.lines.findIndex(l => l.book._id === String(id));
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
    }], function () { return []; }, null); })();
// CartLine for recording each books
class CartLine {
    constructor(book, quantity, shipping) {
        this.book = book;
        this.quantity = quantity;
        this.shipping = shipping;
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
/* LOCAL MOCK DATA -  BOOKS */




class StaticDataSource {
    constructor() {
        this.books = [
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"]("1", 'Book 1', 'Author 1', 'Year 1', 'Short Description 1', 10),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"]("2", 'Book 2', 'Author 1', 'Year 2', 'Short Description 2', 10),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"]("3", 'Book 3', 'Author 1', 'Year 3', 'Short Description 3', 10),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"]("4", 'Book 4', 'Author 2', 'Year 4', 'Short Description 4', 10),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"]("5", 'Book 5', 'Author 2', 'Year 5', 'Short Description 5', 10),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"]("6", 'Book 6', 'Author 2', 'Year 6', 'Short Description 6', 10),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"]("7", 'Book 7', 'Author 2', 'Year 7', 'Short Description 7', 10),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"]("8", 'Book 8', 'Author 3', 'Year 8', 'Short Description 8', 10),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"]("9", 'Book 9', 'Author 3', 'Year 9', 'Short Description 9', 10),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"]("10", 'Book 10', 'Author 4', 'Year 10', 'Short Description 10', 10),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"]("11", 'Book 11', 'Author 4', 'Year 11', 'Short Description 11', 10),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"]("12", 'Book 12', 'Author 5', 'Year 12', 'Short Description 12', 10),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"]("13", 'Book 13', 'Author 5', 'Year 13', 'Short Description 13', 10),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"]("14", 'Book 14', 'Author 5', 'Year 14', 'Short Description 14', 10),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"]("15", 'Book 15', 'Author 5', 'Year 15', 'Short Description 15', 10),
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










class PagesModule {
}
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _partials_partials_module__WEBPACK_IMPORTED_MODULE_0__["PartialsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
        _service_service_component__WEBPACK_IMPORTED_MODULE_8__["ServiceComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _partials_partials_module__WEBPACK_IMPORTED_MODULE_0__["PartialsModule"]], exports: [_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
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
                    _service_service_component__WEBPACK_IMPORTED_MODULE_8__["ServiceComponent"]
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

/***/ "hN/g":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_localize_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/localize/init */ "N/DB");
/* harmony import */ var _angular_localize_init__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_localize_init__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zone.js/dist/zone */ "pDpN");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__);




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
    // Initial constructor
    constructor(datasource) {
        this.datasource = datasource;
        this.user = new _user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    // login
    authenticate(user) {
        return this.datasource.authenticate(user);
    }
    // local storage
    storeUserData(token, user) {
        this.datasource.storeUserData(token, user);
    }
    // is logged in
    get authenticated() {
        return this.datasource.loggedIn();
    }
    // is logged out
    logout() {
        return this.datasource.logout();
    }
    // rigister new user
    // tslint:disable-next-line: typedef
    createUser() {
        console.log('IN auth.service.ts creat() ...');
        return this.datasource.addUser(this.user);
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
        this.temp = [];
        this.loaded = false;
    }
    loadOrders() {
        this.loaded = true;
        this.dataSource.getOrders().subscribe(orders => {
            this.orders = orders;
        });
    }
    getOrders() {
        if (!this.loaded) {
            this.loadOrders();
        }
        return this.orders;
    }
    // Get orders filter by specific buyer
    getOneOrder(id) {
        if (!this.loaded) {
            this.loadOrders();
        }
        return this.orders.filter(p => p._id === id);
    }
    saveOrder(order) {
        this.dataSource.saveOrder(order).subscribe(res => {
            this.tempOrder = res.order;
            this.orders.push(this.tempOrder);
        });
        return true;
    }
    updateOrderShipping(store, originalShipping, changedShipping, id) {
        this.dataSource.updateOrderShipping(id, store, originalShipping, changedShipping)
            .subscribe(res => {
            if (res.success) {
                this.orders.forEach(function (order) {
                    if (order._id === id) {
                        for (let line of order.cart.lines) {
                            if (line.book.store === store && line.shipping === originalShipping) {
                                line.shipping = changedShipping;
                            }
                        }
                    }
                });
            }
        });
    }
    checkShipping(id) {
        let totalCount = 0;
        let trueCount = 0;
        this.orders.forEach(function (order) {
            if (order._id === id) {
                for (let line of order.cart.lines) {
                    totalCount += line.quantity;
                    if (line.shipping === true) {
                        trueCount += line.quantity;
                    }
                }
            }
        });
        return [totalCount, trueCount];
    }
    deleteOrder(id) {
        return this.dataSource.deleteOrder(id);
    }
}
OrderRepository.ɵfac = function OrderRepository_Factory(t) { return new (t || OrderRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_rest_datasource__WEBPACK_IMPORTED_MODULE_1__["RestDataSource"])); };
OrderRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderRepository, factory: OrderRepository.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderRepository, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _rest_datasource__WEBPACK_IMPORTED_MODULE_1__["RestDataSource"] }]; }, null); })();


/***/ }),

/***/ "jcQv":
/*!***************************************************************************!*\
  !*** ./src/app/partials/book-store-header/book-store-header.component.ts ***!
  \***************************************************************************/
/*! exports provided: BookStoreHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookStoreHeaderComponent", function() { return BookStoreHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _book_store_cart_summary_cart_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../book-store/cart-summary/cart-summary.component */ "PbUm");
/* harmony import */ var _book_store_book_store_login_book_store_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../book-store/book-store-login/book-store-login.component */ "NFVY");





class BookStoreHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
BookStoreHeaderComponent.ɵfac = function BookStoreHeaderComponent_Factory(t) { return new (t || BookStoreHeaderComponent)(); };
BookStoreHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookStoreHeaderComponent, selectors: [["app-book-store-header"]], decls: 17, vars: 0, consts: [[1, "container-fluid", "m-0", 2, "min-width", "500px"], [1, "justify-content-center"], [1, "mt-5"], [1, "nav", "nav-pills", "nav-fill"], [1, "nav-item"], ["routerLink", "/admin/main/mycart", 1, "nav-link"], [1, "nav-link", "disabled"], ["src", "../../assets/images/readit.JPG", 1, "readit"], [2, "color", "rgb(80, 79, 79)"], ["routerLink", "/admin/main/books", 1, "nav-link"]], template: function BookStoreHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-cart-summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "TORONTO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-book-store-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _book_store_cart_summary_cart_summary_component__WEBPACK_IMPORTED_MODULE_2__["CartSummaryComponent"], _book_store_book_store_login_book_store_login_component__WEBPACK_IMPORTED_MODULE_3__["BookStoreLoginComponent"]], styles: ["p[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  letter-spacing: 5px;\r\n}\r\n.readit[_ngcontent-%COMP%] {\r\n  width: 180px;\r\n  height: 40px;\r\n}\r\n.buttonS[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  border: 0px solid grey;\r\n  margin: 10px 10px;\r\n  width: 30%;\r\n  color: rgb(46, 45, 45);\r\n  background-color: #d8d5d5;\r\n  font-size: 14px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydGlhbHMvYm9vay1zdG9yZS1oZWFkZXIvYm9vay1zdG9yZS1oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYXJ0aWFscy9ib29rLXN0b3JlLWhlYWRlci9ib29rLXN0b3JlLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbn1cclxuLnJlYWRpdCB7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG4uYnV0dG9uUyB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXI6IDBweCBzb2xpZCBncmV5O1xyXG4gIG1hcmdpbjogMTBweCAxMHB4O1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgY29sb3I6IHJnYig0NiwgNDUsIDQ1KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkNWQ1O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookStoreHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-book-store-header',
                templateUrl: './book-store-header.component.html',
                styleUrls: ['./book-store-header.component.css']
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
/* harmony import */ var _book_store_book_store_login_book_store_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../book-store/book-store-login/book-store-login.component */ "NFVY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _base_page_base_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base-page/base-page.component */ "FFTb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "Be/C");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "4JXc");
/* harmony import */ var _book_store_header_book_store_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./book-store-header/book-store-header.component */ "jcQv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











class PartialsModule {
}
PartialsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PartialsModule });
PartialsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function PartialsModule_Factory(t) { return new (t || PartialsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PartialsModule, { declarations: [_book_store_book_store_login_book_store_login_component__WEBPACK_IMPORTED_MODULE_2__["BookStoreLoginComponent"],
        _book_store_cart_summary_cart_summary_component__WEBPACK_IMPORTED_MODULE_1__["CartSummaryComponent"],
        _base_page_base_page_component__WEBPACK_IMPORTED_MODULE_5__["BasePageComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _book_store_header_book_store_header_component__WEBPACK_IMPORTED_MODULE_8__["BookStoreHeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_book_store_header_book_store_header_component__WEBPACK_IMPORTED_MODULE_8__["BookStoreHeaderComponent"],
        _base_page_base_page_component__WEBPACK_IMPORTED_MODULE_5__["BasePageComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](PartialsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]],
                declarations: [
                    _book_store_book_store_login_book_store_login_component__WEBPACK_IMPORTED_MODULE_2__["BookStoreLoginComponent"],
                    _book_store_cart_summary_cart_summary_component__WEBPACK_IMPORTED_MODULE_1__["CartSummaryComponent"],
                    _base_page_base_page_component__WEBPACK_IMPORTED_MODULE_5__["BasePageComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _book_store_header_book_store_header_component__WEBPACK_IMPORTED_MODULE_8__["BookStoreHeaderComponent"]
                ],
                exports: [
                    _book_store_header_book_store_header_component__WEBPACK_IMPORTED_MODULE_8__["BookStoreHeaderComponent"],
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
    ngOnInit() { }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 0, consts: [[2, "min-height", "170vh", "width", "100%", "height", "100%", "background-color", "#f7f6f7"], ["id", "words"], ["id", "resume"], ["target", "_blank", "href", "./assets/images/portfolio.pdf"], ["id", "study", "src", "./assets/images/study_scope.jpg"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-base-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Hello! My full name is Freya. I am a second-year computer science student at Centennial College in Toronto Canada and I am excited to develope my career as web-developer. Below is the courses I have taken in the school. Please Click here to view my ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "co-op resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "In addition for CS degree, I also have finished a BA of Design in Taiwan. My personal hobby are music, painting ,exercise and travel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " My email is xutungjin@gmail.com, you can also add me through linkedIn https://www.linkedin.com/in/xutungjin/. I am looking for a coop for the next 3 semester (2021 FALL / 2021 WINTER / 2021 SUMMER) Looking forward to hearing from you. Thank you!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_0__["BasePageComponent"]], styles: [".wrap[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 0;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  width: auto;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  display: block;\r\n}\r\n.itemA[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 350px;\r\n}\r\n.itemB[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 350px;\r\n  margin-top: 20px;\r\n}\r\n#words[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n}\r\n#study[_ngcontent-%COMP%] {\r\n  height: auto;\r\n  max-width: 100%;\r\n}\r\n\r\n@media only screen and (min-width: 765px) and (max-width: 999px) {\r\n  .wrap[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: auto;\r\n  }\r\n  .container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n  .itemA[_ngcontent-%COMP%] {\r\n    width: 350px;\r\n  }\r\n  .itemB[_ngcontent-%COMP%] {\r\n    width: 350px;\r\n    margin-top: 0px;\r\n  }\r\n  #words[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n  }\r\n  #study[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    max-width: 70%;\r\n  }\r\n}\r\n\r\n@media (min-width: 1000px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: 800px;\r\n  }\r\n  .itemA[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n  }\r\n  .itemB[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n    margin-top: 0px;\r\n  }\r\n  #words[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n  }\r\n  #study[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    max-width: 700px;\r\n  }\r\n}\r\n\r\n.iconTable[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n  margin: auto;\r\n  border-radius: 0px;\r\n  background-color: #bfc0c2;\r\n}\r\n\r\n.about[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  color: #000000;\r\n  font-size: 60px;\r\n  padding-left: 35px;\r\n  margin-top: 20px;\r\n  margin-bottom: 10px;\r\n}\r\n#i_DESI[_ngcontent-%COMP%] {\r\n  padding-left: 45px;\r\n}\r\n\r\n.font_awsome_title[_ngcontent-%COMP%] {\r\n  opacity: 0.5;\r\n  width: 150px;\r\n  padding-top: 10px;\r\n  color: #000000;\r\n  font-family: \"Helvetica Neue\", sans-serif;\r\n  font-size: 20px;\r\n  margin-top: 60px;\r\n  font-weight: bold;\r\n  letter-spacing: 1px;\r\n  line-height: 0.2;\r\n  text-align: center;\r\n}\r\n\r\n.font_awsome_content[_ngcontent-%COMP%] {\r\n  opacity: 0.5;\r\n  width: 150px;\r\n  padding-bottom: 10px;\r\n  font-family: \"Open sans\", sans-serif;\r\n  color: #000000;\r\n  font-size: 13px;\r\n}\r\n\r\n#words[_ngcontent-%COMP%] {\r\n  font-family: \"Open sans\", sans-serif;\r\n  color: #000000;\r\n  font-size: 15px;\r\n  padding-top: 10px;\r\n\r\n  width: 50%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 10px;\r\n  text-align: left;\r\n}\r\n#resume[_ngcontent-%COMP%] {\r\n  font-family: \"Open sans\", sans-serif;\r\n  color: #d85656;\r\n  text-decoration: underline;\r\n  font-size: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0I7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUVBLDhCQUE4QjtBQUM5QjtFQUNFO0lBQ0UsYUFBYTtJQUNiLFdBQVc7RUFDYjtFQUNBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFlBQVk7SUFDWixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFlBQVk7SUFDWixjQUFjO0VBQ2hCO0FBQ0Y7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7RUFDakI7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtBQUNGO0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCO0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBLGFBQWE7QUFDYjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx5Q0FBeUM7RUFDekMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixvQ0FBb0M7RUFDcEMsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxvQ0FBb0M7RUFDcEMsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7O0VBRWpCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyppY29uIGxheW91dCAtIHNtYWxsIHNjcmVlbiovXHJcbi53cmFwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLml0ZW1BIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAzNTBweDtcclxufVxyXG4uaXRlbUIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuI3dvcmRzIHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcbiNzdHVkeSB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyppY29uIGxheW91dCAtIG1lZGl1bSBzY3JlZW4qL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2NXB4KSBhbmQgKG1heC13aWR0aDogOTk5cHgpIHtcclxuICAud3JhcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5pdGVtQSB7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgfVxyXG4gIC5pdGVtQiB7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG4gICN3b3JkcyB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gIH1cclxuICAjc3R1ZHkge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgfVxyXG59XHJcblxyXG4vKmljb24gbGF5b3V0IC0gYmlnZ2VyIHNjcmVlbiovXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgfVxyXG4gIC5pdGVtQSB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgfVxyXG4gIC5pdGVtQiB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG4gICN3b3JkcyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICAjc3R1ZHkge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICB9XHJcbn1cclxuXHJcbi8qaWNvbiBiYWNrZ3JvdW5kKi9cclxuLmljb25UYWJsZSB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmYzBjMjtcclxufVxyXG5cclxuLyppY29uIHBhdHRlcm5zKi9cclxuLmFib3V0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMzVweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuI2lfREVTSSB7XHJcbiAgcGFkZGluZy1sZWZ0OiA0NXB4O1xyXG59XHJcblxyXG4vKmljb24gdGl0bGUqL1xyXG4uZm9udF9hd3NvbWVfdGl0bGUge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKmljb24gc3VidGl0bGUqL1xyXG4uZm9udF9hd3NvbWVfY29udGVudCB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBmb250LWZhbWlseTogXCJPcGVuIHNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi8qc2VsZiBpbnRyb2R1Y3Rpb24gbGluZXMqL1xyXG4jd29yZHMge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gc2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuXHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbiNyZXN1bWUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gc2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjZDg1NjU2O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4iXX0= */"] });
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
    }
    clear() {
        // ====Address====
        this._id = null;
        this.name = null;
        this.address = null;
        this.city = null;
        this.province = null;
        this.postalCode = null;
        this.country = null;
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








function ProjectsComponent_div_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "SHOPPING WEBSITE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Solution:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u00A0\u00A0MongoDB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u00A0\u00A0Node.js");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u00A0\u00A0Express.js");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u00A0\u00A0Angular");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Editor:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\u00A0\u00A0VScode");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Collection:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\u00A0\u00A0Fontawsome");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "\u00A0\u00A0Bootstrap");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Middleware:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "\u00A0\u00A0Multer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "\u00A0\u00A0Morgan");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "\u00A0\u00A0Passport");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "\u00A0\u00A0Cookie-parser");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "\u00A0\u00A0Mongoose");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Component:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "\u00A0\u00A0NgxSlider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "\u00A0\u00A0Modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, " Functionality:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, " As buyer, end-users can filter authors by name using buttons. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, " As buyer, end-users can filter the number of items displayed per ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, " As buyer, end-users can filter the price range using the slider. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, " As seller, end-users can create, update and delete products. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, " As seller, end-users can check order details from the 'Manage Product' page. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, " As seller, end-users can toggle shipping status at the 'Manage Product' page. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, " As seller, end-users can remove orders from the 'Manage Product' page. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, " View Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, " View Website ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "GPA CALCULATOR");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Solution:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u00A0\u00A0C#-WPF");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u00A0\u00A0SQL Server Profiler");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Editor:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\u00A0\u00A0Visual Studio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Practice scope:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\u00A0\u00A0Binding gridview");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "\u00A0\u00A0TableLayout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "\u00A0\u00A0Loading page");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "\u00A0\u00A0Material skin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "\u00A0\u00A0Queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "\u00A0\u00A0Dictionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "\u00A0\u00A0Buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "\u00A0\u00A0ComboBox");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "\u00A0\u00A0Textboxes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "\u00A0\u00A0Labels");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "\u00A0\u00A0Radio Buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "\u00A0\u00A0PictureBox");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, " This is a WPF project for calculating college GPA. In this app:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, " User can create, read, update and delete courses related values in grid. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "User can calculate GPA.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "User can store value by SQL Server Profiler.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, " Code / Demo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "PORTFOLIO TEMPLATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Solution:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u00A0\u00A0Node.js");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u00A0\u00A0Express.js");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u00A0\u00A0Ejs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Editor:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\u00A0\u00A0VScode");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Collection:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\u00A0\u00A0Fontawsome");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "\u00A0\u00A0Bootstrap");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Practice scope:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "\u00A0\u00A0Responsive web");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "\u00A0\u00A0MVC framework");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "\u00A0\u00A0Render page by ejs templates");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " This is a 5 pages website project:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, " Home - display greeting message and link to resume. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Service - display skills.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Project - display selected study projects.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, " About - display course and personal related experience. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Contact - display form to contact by email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, " Code / Demo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, " View Website ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "PROPERTY MANAGEMENT WEBSITE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Language:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u00A0\u00A0HTML");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u00A0\u00A0CSS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u00A0\u00A0Javascipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Editor:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\u00A0\u00A0VScode");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\u00A0\u00A0MS Expression Web4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\u00A0\u00A0Adobe photoshop");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "\u00A0\u00A0Adobe illustrator");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Practice scope:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Embed third-party Code (google map)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Form constraint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Website layout design");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, " This is a 4 page website project: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " Home - display the agent's certification and customer reviews. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, " See Properties - display a list of available properties and details. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " Contact me - customer can fill up form and send it to agent. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Site map - tour of this webpage.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, " Code / Demo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "PIZZA ORDER MOBILE APP");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Language:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u00A0\u00A0JAVA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Editor:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u00A0\u00A0Android Studio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\u00A0\u00A0Practice scope:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\u00A0\u00A0JAVA form controls");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\u00A0\u00A0Menu control");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\u00A0\u00A0Intent");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\u00A0\u00A0Serialize and deserialize object");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\u00A0\u00A0Radio group");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\u00A0\u00A0number picker");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "\u00A0\u00A0Spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " Funcionality: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " End user may view photos, ingredients of 5 different type of pizzas. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " End user may choose various types of pizzas , toppings , payment method and contact information as they wish. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " Order variables will be stored and passed through 6 different activities and will be presented at the last activity. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " Form Controls will be performed on customer information page. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " Code / Demo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "VOTING WEBSITE - WIREFRAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Editor:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u00A0\u00A0Figma");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Team Role:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u00A0\u00A0Web Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Scopes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\u00A0\u00A0Desgin templates");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\u00A0\u00A0Color plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\u00A0\u00A0RWD layouts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\u00A0\u00A0UI Mockups");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "\u00A0\u00A0Logo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\u00A0\u00A0Practice scope:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "\u00A0\u00A0Cloud design platform");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "\u00A0\u00A0Block components");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "\u00A0\u00A0Adobe illustrator");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "\u00A0\u00A0Adobe photoshop");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " This is a wireframe for survey website: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Home - display the list of all on-going surveys.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Login/Register - login and register account.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, " Manage Surverys - as hoster, end-user can edit their survey objects. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, " View result - as hoster, end-user can see and import the current votoing result.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, " Voting - as voter, end-user can view details and vote for one survey. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Page not found - display 404 error.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, " View Design ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "OTHER EXERCIESE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Language:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u00A0\u00A0Python");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u00A0\u00A0SQL");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Editor:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u00A0\u00A0Pycharm");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\u00A0\u00A0SQL developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\u00A0\u00A0Practice scope:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\u00A0\u00A0Python");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\u00A0\u00A0Responsive frame");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\u00A0\u00A0Tkinter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\u00A0\u00A0Multiple treads");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\u00A0\u00A0Constructor");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "\u00A0\u00A0Practice scope:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "\u00A0\u00A0SQL");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\u00A0\u00A0Sequence");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "\u00A0\u00A0Trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "\u00A0\u00A0Group by");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "\u00A0\u00A0Index");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "\u00A0\u00A0Declare,Begine,End");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "\u00A0\u00A0Joins");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "\u00A0\u00A0min and max");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "\u00A0\u00A0average");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, " These are some simple programs that demostrate the languages I have learned. Please click links below to my github account for results. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " Python Exercise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, " SQL Exercise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "SHOPPING WEBSITE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Solution:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u00A0\u00A0MongoDB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u00A0\u00A0Node.js");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u00A0\u00A0Express.js");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u00A0\u00A0Angular");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Editor:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\u00A0\u00A0VScode");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Collection:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\u00A0\u00A0Fontawsome");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "\u00A0\u00A0Bootstrap");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Middleware:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "\u00A0\u00A0Multer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "\u00A0\u00A0Morgan");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "\u00A0\u00A0Passport");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "\u00A0\u00A0Cookie-parser");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "\u00A0\u00A0Mongoose");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Component:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "\u00A0\u00A0NgxSlider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "\u00A0\u00A0Modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, " Functionality:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, " As buyer, end-users can filter authors by name using buttons. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, " As buyer, end-users can filter the number of items displayed per ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, " As buyer, end-users can filter the price range using the slider. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, " As seller, end-users can create, update and delete products. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, " As seller, end-users can check order details from the 'Manage Product' page. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, " As seller, end-users can toggle shipping status at the 'Manage Product' page. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, " As seller, end-users can remove orders from the 'Manage Product' page. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, " View Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, " View Website ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "GPA CALCULATOR");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Solution:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u00A0\u00A0C#-WPF");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u00A0\u00A0SQL Server Profiler");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Editor:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\u00A0\u00A0Visual Studio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Practice scope:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\u00A0\u00A0Binding gridview");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "\u00A0\u00A0TableLayout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "\u00A0\u00A0Loading page");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "\u00A0\u00A0Material skin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "\u00A0\u00A0Queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "\u00A0\u00A0Dictionary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "\u00A0\u00A0Buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "\u00A0\u00A0ComboBox");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "\u00A0\u00A0Textboxes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "\u00A0\u00A0Labels");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "\u00A0\u00A0Radio Buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "\u00A0\u00A0PictureBox");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, " This is a WPF project for calculating college GPA. In this app:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, " User can create, read, update and delete courses related values in grid. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "User can calculate GPA.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "User can store value by SQL Server Profiler.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, " Code / Demo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "PORTFOLIO TEMPLATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Solution:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u00A0\u00A0Node.js");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u00A0\u00A0Express.js");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u00A0\u00A0Ejs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Editor:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\u00A0\u00A0VScode");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Collection:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\u00A0\u00A0Fontawsome");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "\u00A0\u00A0Bootstrap");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Practice scope:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "\u00A0\u00A0Responsive web");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "\u00A0\u00A0MVC framework");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "\u00A0\u00A0Render page by ejs templates");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " This is a 5 pages website project:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Home - display greeting message and link to resume.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Service - display skills.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Project - display selected study projects.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, " About - display course and personal related experience. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Contact - display form to contact by email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, " Code / Demo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, " View Website ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "PROPERTY MANAGEMENT WEBSITE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Language:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u00A0\u00A0HTML");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u00A0\u00A0CSS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u00A0\u00A0Javascipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Editor:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\u00A0\u00A0VScode");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\u00A0\u00A0MS Expression Web4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\u00A0\u00A0Adobe photoshop");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "\u00A0\u00A0Adobe illustrator");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Practice scope:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Embed third-party Code (google map)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Form constraint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Website layout design");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, " This is a 4 page website project: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " Home - display the agent's certification and customer reviews. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, " See Properties - display a list of available properties and details. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " Contact me - customer can fill up form and send it to agent. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Site map - tour of this webpage.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, " Code / Demo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_143_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "PIZZA ORDER MOBILE APP");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Language:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u00A0\u00A0JAVA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Editor:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u00A0\u00A0Android Studio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\u00A0\u00A0Practice scope:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\u00A0\u00A0JAVA form controls");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\u00A0\u00A0Menu control");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\u00A0\u00A0Intent");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\u00A0\u00A0Serialize and deserialize object");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\u00A0\u00A0Radio group");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\u00A0\u00A0number picker");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "\u00A0\u00A0Spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " Funcionality: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " End user may view photos, ingredients of 5 different type of pizzas. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " End user may choose various types of pizzas , toppings , payment method and contact information as they wish. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " Order variables will be stored and passed through 6 different activities and will be presented at the last activity. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " Form Controls will be performed on customer information page. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " Code / Demo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "VOTING WEBSITE - WIREFRAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Editor:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u00A0\u00A0Figma");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Team Role:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u00A0\u00A0Web Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Scopes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\u00A0\u00A0Desgin templates");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\u00A0\u00A0Color plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\u00A0\u00A0RWD layouts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\u00A0\u00A0UI Mockups");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "\u00A0\u00A0Logo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\u00A0\u00A0Practice scope:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "\u00A0\u00A0Cloud design platform");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "\u00A0\u00A0Block components");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "\u00A0\u00A0Adobe illustrator");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "\u00A0\u00A0Adobe photoshop");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " This is a wireframe for survey website: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Home - display the list of all on-going surveys.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Login/Register - login and register account.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, " Manage Surverys - as hoster, end-user can edit their survey objects. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, " View result - as hoster, end-user can see and import the current votoing result.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, " Voting - as voter, end-user can view details and vote for one survey. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Page not found - display 404 error.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, " View Design ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "OTHER EXERCIESE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Language:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u00A0\u00A0Python");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u00A0\u00A0SQL");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Editor:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u00A0\u00A0Pycharm");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\u00A0\u00A0SQL developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\u00A0\u00A0Practice scope:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\u00A0\u00A0Python");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\u00A0\u00A0Responsive frame");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\u00A0\u00A0Tkinter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\u00A0\u00A0Multiple treads");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\u00A0\u00A0Constructor");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "\u00A0\u00A0Practice scope:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "\u00A0\u00A0SQL");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\u00A0\u00A0Sequence");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "\u00A0\u00A0Trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "\u00A0\u00A0Group by");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "\u00A0\u00A0Index");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "\u00A0\u00A0Declare,Begine,End");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "\u00A0\u00A0Joins");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "\u00A0\u00A0min and max");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "\u00A0\u00A0average");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, " These are some simple programs that demostrate the languages I have learned. Please click links below to my github account for results. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " Python Exercise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, " SQL Exercise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ProjectsComponent extends _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_0__["BasePageComponent"] {
    constructor(route, _document) {
        super(route);
        this._document = _document;
        // Button filter
        this.web = true;
        this.pc = true;
        this.mobile = true;
        this.uxui = true;
        this.exercise = true;
        // Check Box filter
        this.angular = false;
        this.mongodb = false;
        this.ejs = false;
        this.bootstrap = false;
        this.wireframe = false;
        this.Csharp = false;
        this.js = false;
        this.java = false;
        this.sql = false;
        this.python = false;
        this.android = false;
    }
    ngOnInit() {
        this._document.body.classList.remove('homebd-color');
        this._document.body.classList.add('bodybg-color');
    }
    ngOnDestroy() {
        this._document.body.classList.remove('bodybd-color');
    }
    changeFilter(s) {
        // Clean all filters before assign
        this.web = false;
        this.mongodb = false;
        this.ejs = false;
        this.bootstrap = false;
        this.wireframe = false;
        this.Csharp = false;
        this.js = false;
        this.java = false;
        this.sql = false;
        this.python = false;
        this.angular = false;
        this.pc = false;
        this.mobile = false;
        this.uxui = false;
        this.exercise = false;
        this.android = false;
        switch (s) {
            case 'web':
                this.web = true;
                break;
            case 'pc':
                this.pc = true;
                break;
            case 'mobile':
                this.mobile = true;
                break;
            case 'uxui':
                this.uxui = true;
                break;
            case 'exercise':
                this.exercise = true;
                break;
        }
        window.scroll(0, 0);
    }
    checkboxFilter(checked, s) {
        if (!checked) {
            // Clean all filters
            this.web = true;
            this.pc = true;
            this.mobile = true;
            this.uxui = true;
            this.exercise = true;
            this.angular = false;
            this.mongodb = false;
            this.ejs = false;
            this.bootstrap = false;
            this.wireframe = false;
            this.Csharp = false;
            this.js = false;
            this.java = false;
            this.sql = false;
            this.python = false;
            this.android = false;
        }
        else {
            // Clean all filters before assign
            this.web = false;
            this.mongodb = false;
            this.ejs = false;
            this.bootstrap = false;
            this.wireframe = false;
            this.Csharp = false;
            this.js = false;
            this.java = false;
            this.sql = false;
            this.python = false;
            this.angular = false;
            this.pc = false;
            this.mobile = false;
            this.uxui = false;
            this.exercise = false;
            switch (s) {
                case 'angular':
                    this.angular = true;
                    break;
                case 'mongodb':
                    this.mongodb = true;
                    break;
                case 'ejs':
                    this.ejs = true;
                    break;
                case 'bootstrap':
                    this.bootstrap = true;
                    break;
                case 'wireframe':
                    this.wireframe = true;
                    break;
                case 'android':
                    this.mobile = true;
                    break;
                case 'csharp':
                    this.Csharp = true;
                    break;
                case 'js':
                    this.js = true;
                    break;
                case 'java':
                    this.java = true;
                    break;
                case 'sql':
                    this.sql = true;
                    break;
                case 'python':
                    this.python = true;
                    break;
                case 'android':
                    this.android = true;
                    break;
            }
            window.scroll(0, 0);
        }
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 150, vars: 39, consts: [["id", "whole_wrap", 1, "container-fluid", "p-0"], [1, "row-bigger"], [1, "row", "m-0"], [1, "col-2", "p-0", 2, "min-width", "260px", "margin-right", "20px"], ["id", "sticky"], [1, "button", "nav-link", "p-0", 2, "cursor", "pointer", 3, "click"], [1, "d-flex", "flex-row", "p-0"], ["id", "tag3", 1, "cube"], ["id", "tag4", 1, "arrow"], [1, "cube"], [1, "arrow"], ["id", "tag5", 1, "cube"], ["id", "tag6", 1, "arrow"], ["id", "tag1", 1, "cube"], ["id", "tag2", 1, "arrow"], [1, "td_s"], ["uncheck", "", "id", "angularCheck", "type", "checkbox", 3, "checked", "click"], ["angularCheck", ""], ["id", "csharpCheck", "uncheck", "", "type", "checkbox", 3, "checked", "click"], ["csharpCheck", ""], ["id", "mongodbCheck", "uncheck", "", "type", "checkbox", 3, "checked", "click"], ["mongodbCheck", ""], ["id", "jsCheck", "uncheck", "", "type", "checkbox", 3, "checked", "click"], ["jsCheck", ""], ["id", "ejsCheck", "uncheck", "", "type", "checkbox", 3, "checked", "click"], ["ejsCheck", ""], ["id", "javaCheck", "uncheck", "", "type", "checkbox", 3, "checked", "click"], ["javaCheck", ""], ["id", "bootstrapCheck", "uncheck", "", "type", "checkbox", 3, "checked", "click"], ["bootstrapCheck", ""], ["id", "sqlCheck", "uncheck", "", "type", "checkbox", 3, "checked", "click"], ["sqlCheck", ""], ["id", "wireframeCheck", "uncheck", "", "type", "checkbox", 3, "checked", "click"], ["wireframeCheck", ""], ["id", "pythonCheck", "uncheck", "", "type", "checkbox", 3, "checked", "click"], ["pythonCheck", ""], ["colspan", "td_s"], ["id", "androidCheck", "uncheck", "", "type", "checkbox", 3, "checked", "click"], ["androidCheck", ""], [1, "col-8", "p-0"], [1, "whole"], ["id", "sub", 2, "font-size", "14px", "margin-top", "10px"], ["class", "service_div", 4, "ngIf"], [1, "row-smaller"], [1, "p-0"], ["id", "smaller_screen"], [1, "container"], [1, "row"], [1, "col", "text-center", "p-1"], [1, "d-flex", "flex-row", "justify-content-center", "p-0"], [1, "service_div"], [1, "left", 2, "height", "571px"], ["src", "./assets/images/readit.png", 1, "project_img", 2, "max-height", "571px"], [1, "right", 2, "height", "571px"], [1, "title_s"], ["id", "wrapper"], ["id", "c1", 1, "text_s"], ["id", "c2"], ["id", "c3", 1, "text_s"], ["id", "c4", 1, "text_s"], [1, "grey"], [1, "text-center"], ["href", "https://github.com/FreyaKim0/Project-Shopping-Cart-Angular", "target", "_blank", 1, "example_c"], ["id", "button_s"], ["href", "/book-list/all", "rel", "nofollow noopener", 1, "example_c"], [1, "left"], [1, "divider"], [1, "left", 2, "height", "475px"], ["src", "./assets/images/gpaCal.jpg", 1, "project_img", 2, "max-height", "475px"], [1, "right", 2, "height", "475px"], ["href", "https://github.com/FreyaKim0/Project-GPA-calculator", "target", "_blank", 1, "example_c"], [1, "left", 2, "height", "511px"], ["src", "./assets/images/ejstemplate.jpg", "max-style", "height: 511px", 1, "project_img"], [1, "right", 2, "height", "511px"], ["href", "https://github.com/FreyaKim0/Project-Portfolio-EJS", "target", "_blank", 1, "example_c"], ["href", "https://portfolio-ejs-template.herokuapp.com/", "target", "_blank", 1, "example_c"], [1, "left", 2, "height", "493px"], ["src", "./assets/images/realestate.jpg", "max-style", "height: 493px", 1, "project_img"], [1, "right", 2, "height", "493px"], ["href", "https://github.com/FreyaKim0/Exercises-Web-Designs", "target", "_blank", 1, "example_c"], [1, "left", 2, "height", "529px"], ["src", "./assets/images/orderPizza.jpg", "max-style", "height: 529px", 1, "project_img"], [1, "right", 2, "height", "529px"], ["href", "https://github.com/FreyaKim0/Exercises-Android-Studio", "target", "_blank", 1, "example_c"], ["src", "./assets/images/wireframe.png", "max-style", "height: 529px", 1, "project_img"], ["href", "https://www.figma.com/file/bU87uuAoSWBq9L8kzGTUag/Coffee-Crunch-Code?node-id=266269%3A0", "target", "_blank", 1, "example_c"], [1, "left", 2, "height", "415px"], ["src", "./assets/images/exercise.png", 1, "project_img", 2, "max-height", "415px"], [1, "right", 2, "height", "415px"], ["href", "https://github.com/FreyaKim0/Exercises-Python", "target", "_blank", 1, "example_c"], ["href", "https://github.com/FreyaKim0/Exercises-SQL", "target", "_blank", 1, "example_c"], ["src", "./assets/images/readit.png", 1, "project_img", 2, "height", "571px"], ["src", "./assets/images/gpaCal.jpg", 1, "project_img", 2, "height", "475px"], ["src", "./assets/images/ejstemplate.jpg", 1, "project_img", 2, "height", "511px"], ["src", "./assets/images/realestate.jpg", 1, "project_img", 2, "height", "493px"], ["src", "./assets/images/orderPizza.jpg", 1, "project_img", 2, "height", "529px"], ["src", "./assets/images/wireframe.png", 1, "project_img", 2, "height", "529px"], ["src", "./assets/images/exercise.png", 1, "project_img", 2, "height", "415px"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-base-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " SORT BY : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_a_click_7_listener() { return ctx.changeFilter("web"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "WEB APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_a_click_12_listener() { return ctx.changeFilter("pc"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "PC APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_a_click_17_listener() { return ctx.changeFilter("mobile"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "MOBILE APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_a_click_22_listener() { return ctx.changeFilter("uxui"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "UX/UI");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_input_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](33); return ctx.checkboxFilter(_r0.checked, "angular"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\u00A0Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_input_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](37); return ctx.checkboxFilter(_r1.checked, "csharp"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\u00A0C# ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_input_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](42); return ctx.checkboxFilter(_r2.checked, "mongodb"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\u00A0MongoDB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_input_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](46); return ctx.checkboxFilter(_r3.checked, "js"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\u00A0JavaScript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_input_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](51); return ctx.checkboxFilter(_r4.checked, "ejs"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\u00A0Ejs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_input_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](55); return ctx.checkboxFilter(_r5.checked, "java"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\u00A0Java ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "input", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_input_click_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](60); return ctx.checkboxFilter(_r6.checked, "bootstrap"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\u00A0Bootstrap ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_input_click_63_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](64); return ctx.checkboxFilter(_r7.checked, "sql"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\u00A0SQL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "input", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_input_click_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](69); return ctx.checkboxFilter(_r8.checked, "wireframe"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "\u00A0Wireframe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "input", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_input_click_72_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](73); return ctx.checkboxFilter(_r9.checked, "python"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "\u00A0Python ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "td", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "input", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_input_click_77_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](78); return ctx.checkboxFilter(_r10.checked, "android"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "\u00A0Android Studio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "The below are my projects and exercises. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, ProjectsComponent_div_86_Template, 127, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, ProjectsComponent_div_87_Template, 3, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, ProjectsComponent_div_88_Template, 111, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, ProjectsComponent_div_89_Template, 3, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](90, ProjectsComponent_div_90_Template, 105, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, ProjectsComponent_div_91_Template, 3, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](92, ProjectsComponent_div_92_Template, 99, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](93, ProjectsComponent_div_93_Template, 3, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](94, ProjectsComponent_div_94_Template, 75, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](95, ProjectsComponent_div_95_Template, 3, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](96, ProjectsComponent_div_96_Template, 102, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](97, ProjectsComponent_div_97_Template, 3, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](98, ProjectsComponent_div_98_Template, 96, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, ProjectsComponent_div_99_Template, 3, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_a_click_106_listener() { return ctx.changeFilter("web"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "WEB APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_a_click_112_listener() { return ctx.changeFilter("pc"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "PC APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](116, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_a_click_118_listener() { return ctx.changeFilter("mobile"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "MOBILE APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_a_click_124_listener() { return ctx.changeFilter("uxui"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "UX / UI");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "The below are my projects and exercises. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](136, ProjectsComponent_div_136_Template, 127, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](137, ProjectsComponent_div_137_Template, 3, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](138, ProjectsComponent_div_138_Template, 111, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](139, ProjectsComponent_div_139_Template, 3, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](140, ProjectsComponent_div_140_Template, 105, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](141, ProjectsComponent_div_141_Template, 3, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](142, ProjectsComponent_div_142_Template, 99, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](143, ProjectsComponent_div_143_Template, 3, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](144, ProjectsComponent_div_144_Template, 75, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](145, ProjectsComponent_div_145_Template, 3, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](146, ProjectsComponent_div_146_Template, 102, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](147, ProjectsComponent_div_147_Template, 3, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](148, ProjectsComponent_div_148_Template, 96, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](149, ProjectsComponent_div_149_Template, 3, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.angular);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.Csharp);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.mongodb);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.js);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.ejs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.java);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.bootstrap);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.sql);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.wireframe);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.python);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.android);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.web || ctx.angular || ctx.mongodb || ctx.js || ctx.bootstrap);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.web || ctx.angular || ctx.mongodb || ctx.js || ctx.bootstrap);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pc || ctx.Csharp);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pc || ctx.Csharp);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.web || ctx.ejs || ctx.js || ctx.bootstrap);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.web || ctx.ejs || ctx.js || ctx.bootstrap);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.web || ctx.js);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.web || ctx.js);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mobile || ctx.java || ctx.android);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mobile || ctx.java || ctx.android);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.uxui || ctx.wireframe);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.uxui || ctx.wireframe);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.exercise || ctx.python || ctx.sql);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.exercise || ctx.python || ctx.sql);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.web || ctx.angular || ctx.mongodb || ctx.js || ctx.bootstrap);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.web || ctx.angular || ctx.mongodb || ctx.js || ctx.bootstrap);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pc || ctx.Csharp);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pc || ctx.Csharp);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.web || ctx.ejs || ctx.js || ctx.bootstrap);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.web || ctx.ejs || ctx.js || ctx.bootstrap);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.web || ctx.js);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.web || ctx.js);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mobile || ctx.java || ctx.android);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mobile || ctx.java || ctx.android);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.uxui || ctx.wireframe);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.uxui || ctx.wireframe);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.exercise || ctx.python || ctx.sql);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.exercise || ctx.python || ctx.sql);
    } }, directives: [_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_0__["BasePageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["/*smaller screen*/\r\n.row-smaller {\r\n  background-color: #f2f4f5;\r\n  height: 100%;\r\n  display: block;\r\n}\r\n.row-bigger {\r\n  display: none;\r\n}\r\n/*bigger screen*/\r\n@media (min-width: 1190px) {\r\n  .row-bigger {\r\n    background-color: #f2f4f5;\r\n    height: 100%;\r\n    display: block;\r\n  }\r\n  .row-smaller {\r\n    display: none;\r\n  }\r\n}\r\n/*project filter*/\r\n/* place holder */\r\n#filter_wrapper {\r\n  text-align: left;\r\n  height: 100%;\r\n  padding-top: 200px;\r\n  background-color: #f2f4f5;\r\n}\r\n#smaller_screen {\r\n  display: block;\r\n  width: 80%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n#sticky {\r\n  display: none;\r\n  position: fixed;\r\n  top: 260px;\r\n  overflow: hidden;\r\n  letter-spacing: 0.1em;\r\n  padding-left: 30px;\r\n  margin-left: 15px;\r\n  font-size: 12px;\r\n  text-align: left;\r\n  color: grey;\r\n}\r\n/* filter labels - color*/\r\n#tag1 {\r\n  background-color: rgba(214, 150, 55, 0.8);\r\n  border-left: 25px solid rgb(236, 202, 147);\r\n}\r\n#tag2 {\r\n  border-left-color: rgba(214, 150, 55, 0.8);\r\n}\r\n#tag3 {\r\n  background-color: rgba(22, 121, 167, 0.699);\r\n  border-left: 25px solid rgb(103, 203, 233);\r\n}\r\n#tag4 {\r\n  border-left-color: rgba(22, 121, 167, 0.699);\r\n}\r\n#tag5 {\r\n  background-color: rgba(170, 27, 134, 0.705);\r\n  border-left: 25px solid rgb(231, 130, 206);\r\n}\r\n#tag6 {\r\n  border-left-color: rgba(170, 27, 134, 0.705);\r\n}\r\n/* filter labels - form*/\r\n.arrow {\r\n  margin-top: 10px;\r\n  width: 0;\r\n  height: 0;\r\n  border-color: transparent;\r\n  border-style: solid;\r\n  border-left-color: #97b60f70;\r\n  border-width: 20px;\r\n  position: relative;\r\n}\r\n.cube {\r\n  margin-top: 10px;\r\n  padding-top: 15px;\r\n  padding-right: 20px;\r\n  font-family: sans-serif;\r\n  font-weight: 300;\r\n  font-size: 12px;\r\n  color: #ffffffc5;\r\n  font-size: 12px;\r\n  line-height: 110%;\r\n  letter-spacing: 2px;\r\n  text-align: right;\r\n  text-transform: uppercase;\r\n  width: 160px;\r\n  height: 40px;\r\n  background-color: #97b60f70;\r\n  border-left: 25px solid #d5f544;\r\n}\r\n.cube:hover {\r\n  color: white;\r\n}\r\n/* Table */\r\n.td_s {\r\n  padding-bottom: 5px;\r\n}\r\ninput[type=\"checkbox\"]:checked + label {\r\n  color: maroon;\r\n}\r\n@media (min-width: 1190px) {\r\n  #smaller_screen {\r\n    display: none;\r\n  }\r\n  #sticky {\r\n    display: block;\r\n  }\r\n}\r\n/*project items*/\r\n.whole {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  background-color: #f2f4f5;\r\n}\r\n.button_s {\r\n  text-align: center;\r\n  color: rgb(49, 48, 48);\r\n  text-shadow: shadow1, shadow2, shadow3;\r\n  text-shadow: 0px 0px 0px rgb(165, 165, 165), 3px 8px 0px rgba(0, 0, 0, 0);\r\n}\r\n.example_c {\r\n  color: #ffffff !important;\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  background: #858484;\r\n  margin-top: 10px;\r\n  margin-left: 15px;\r\n  margin-right: 15px;\r\n  padding: 5px;\r\n  border: 4px solid #d6d6d6 !important;\r\n  display: inline-block;\r\n  transition: all 0.4s ease 0s;\r\n  font-size: 12px;\r\n}\r\n.example_c:hover {\r\n  color: #ffffff !important;\r\n  background: #f6b93b;\r\n  border-color: #f6b93b !important;\r\n  transition: all 0.4s ease 0s;\r\n}\r\n/*icon images*/\r\n.project_img {\r\n  border-top-left-radius: 0px;\r\n  border-bottom-left-radius: 0px;\r\n}\r\n/*text*/\r\n.text_s {\r\n  padding-left: 7px;\r\n  font-weight: lighter;\r\n  line-height: 18px;\r\n  font-family: \"Open sans\", sans-serif;\r\n  color: #292828;\r\n  font-size: 12px;\r\n  text-align: justify;\r\n  text-justify: inter-word;\r\n}\r\n.grey {\r\n  background-color: #d3caca4d;\r\n  margin-top: -20px;\r\n  margin-bottom: 20px;\r\n  padding: 15px 15px;\r\n  font-weight: lighter;\r\n  line-height: 18px;\r\n  font-family: \"Open sans\", sans-serif;\r\n  color: #292828;\r\n  font-size: 12px;\r\n  text-align: justify;\r\n  text-justify: inter-word;\r\n}\r\n/*text columns*/\r\n#wrapper {\r\n  padding: 10px;\r\n  display: flex;\r\n  width: auto;\r\n}\r\n#c1,\r\n#c3 {\r\n  text-align: left;\r\n  width: 49%;\r\n  height: 130px;\r\n}\r\n#c2 {\r\n  margin-top: 5px;\r\n  margin-top: 5px;\r\n  margin-right: 20px;\r\n  margin-left: 20px;\r\n  border-left: 1px solid gray;\r\n  height: 180px;\r\n}\r\n#c4 {\r\n  margin-top: 30px;\r\n}\r\n#sub {\r\n  display: none;\r\n}\r\n/* [responsive] */\r\n/*bigger screen*/\r\n@media (min-width: 968px) {\r\n  #sub {\r\n    display: none;\r\n  }\r\n  .service_div {\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    width: 800px;\r\n  }\r\n  .left {\r\n    border-top-right-radius: 20px;\r\n    border-bottom-right-radius: 20px;\r\n    border-top-left-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n\r\n    margin-top: 35px;\r\n    float: right;\r\n    width: 30%;\r\n  }\r\n  .divider {\r\n    height: 35px;\r\n  }\r\n  .right {\r\n    border-top-right-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    float: left;\r\n    width: 70%;\r\n    margin-top: 35px;\r\n    height: auto;\r\n    text-align: left;\r\n    padding: 10px 30px 10px 30px;\r\n    background-color: rgb(255, 255, 255);\r\n  }\r\n  .divider {\r\n    float: left;\r\n    width: 60%;\r\n  }\r\n  .project_img {\r\n    border-top-left-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n    max-width: 500px;\r\n    overflow: hidden;\r\n    display: block;\r\n  }\r\n}\r\n/*hide image*/\r\n@media only screen and (min-width: 1190px) and (max-width: 1500px) {\r\n  #sub {\r\n    display: none;\r\n  }\r\n  .project_img {\r\n    display: none;\r\n  }\r\n}\r\n@media only screen and (min-width: 968px) and (max-width: 1189px) {\r\n  .whole {\r\n    height: 780vh;\r\n  }\r\n}\r\n/*smaller screen*/\r\n@media only screen and (min-width: 1px) and (max-width: 967px) {\r\n  #sub {\r\n    display: block;\r\n  }\r\n  .project_img {\r\n    border-top-left-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    height: auto;\r\n    width: auto;\r\n    display: block;\r\n  }\r\n  .text_s {\r\n    padding-right: 5px;\r\n  }\r\n  #c1,\r\n  #c2,\r\n  #c3,\r\n  #wrapper {\r\n    height: auto;\r\n  }\r\n  #wrapper {\r\n    margin-top: 10px;\r\n    background-color: white;\r\n    padding: 0px;\r\n  }\r\n  .divider {\r\n    margin-left: 3%;\r\n    margin-right: 3%;\r\n    height: 30px;\r\n  }\r\n  .right {\r\n    border-bottom-left-radius: 20px;\r\n    border-bottom-right-radius: 20px;\r\n    background-color: white;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding: 20px;\r\n    height: auto;\r\n    width: 90%;\r\n    min-width: 380px;\r\n  }\r\n  .left {\r\n    border-top-left-radius: 20px;\r\n    border-top-right-radius: 20px;\r\n    margin-top: 20px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    height: auto;\r\n    overflow: hidden;\r\n    background-color: rgb(231, 230, 228);\r\n    min-width: 380px;\r\n    width: 90%;\r\n  }\r\n  .title_s {\r\n    color: #000000;\r\n    letter-spacing: 0.1rem;\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n  }\r\n  #intro_s {\r\n    margin-left: 60px;\r\n    margin-right: 60px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUFDakI7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUVBLGdCQUFnQjtBQUNoQjtFQUNFO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRjtBQUVBLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakI7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0UseUNBQXlDO0VBQ3pDLDBDQUEwQztBQUM1QztBQUNBO0VBQ0UsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRSwyQ0FBMkM7RUFDM0MsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRSw0Q0FBNEM7QUFDOUM7QUFDQTtFQUNFLDJDQUEyQztFQUMzQywwQ0FBMEM7QUFDNUM7QUFDQTtFQUNFLDRDQUE0QztBQUM5QztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLGdCQUFnQjtFQUNoQixRQUFRO0VBQ1IsU0FBUztFQUNULHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBRUEsVUFBVTtBQUNWO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFDdEMseUVBQXlFO0FBQzNFO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtBQUM5QjtBQUVBLGNBQWM7QUFDZDtFQUNFLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7QUFFQSxPQUFPO0FBQ1A7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsd0JBQXdCO0FBQzFCO0FBRUEsZUFBZTtBQUNmO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixXQUFXO0FBQ2I7QUFDQTs7RUFFRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBRUEsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQywyQkFBMkI7SUFDM0IsOEJBQThCOztJQUU5QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFVBQVU7RUFDWjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsK0JBQStCOztJQUUvQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLG9DQUFvQztFQUN0QztFQUNBO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjtBQUNGO0FBRUEsYUFBYTtBQUNiO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBOzs7O0lBSUUsWUFBWTtFQUNkO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7RUFDQTtJQUNFLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixVQUFVO0VBQ1o7RUFDQTtJQUNFLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qc21hbGxlciBzY3JlZW4qL1xyXG4ucm93LXNtYWxsZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmY0ZjU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5yb3ctYmlnZ2VyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKmJpZ2dlciBzY3JlZW4qL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMTE5MHB4KSB7XHJcbiAgLnJvdy1iaWdnZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjRmNTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAucm93LXNtYWxsZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi8qcHJvamVjdCBmaWx0ZXIqL1xyXG4vKiBwbGFjZSBob2xkZXIgKi9cclxuI2ZpbHRlcl93cmFwcGVyIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMjAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjRmNTtcclxufVxyXG4jc21hbGxlcl9zY3JlZW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4jc3RpY2t5IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDI2MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuLyogZmlsdGVyIGxhYmVscyAtIGNvbG9yKi9cclxuI3RhZzEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE0LCAxNTAsIDU1LCAwLjgpO1xyXG4gIGJvcmRlci1sZWZ0OiAyNXB4IHNvbGlkIHJnYigyMzYsIDIwMiwgMTQ3KTtcclxufVxyXG4jdGFnMiB7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYmEoMjE0LCAxNTAsIDU1LCAwLjgpO1xyXG59XHJcbiN0YWczIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyLCAxMjEsIDE2NywgMC42OTkpO1xyXG4gIGJvcmRlci1sZWZ0OiAyNXB4IHNvbGlkIHJnYigxMDMsIDIwMywgMjMzKTtcclxufVxyXG4jdGFnNCB7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYmEoMjIsIDEyMSwgMTY3LCAwLjY5OSk7XHJcbn1cclxuI3RhZzUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcwLCAyNywgMTM0LCAwLjcwNSk7XHJcbiAgYm9yZGVyLWxlZnQ6IDI1cHggc29saWQgcmdiKDIzMSwgMTMwLCAyMDYpO1xyXG59XHJcbiN0YWc2IHtcclxuICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSgxNzAsIDI3LCAxMzQsIDAuNzA1KTtcclxufVxyXG5cclxuLyogZmlsdGVyIGxhYmVscyAtIGZvcm0qL1xyXG4uYXJyb3cge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItbGVmdC1jb2xvcjogIzk3YjYwZjcwO1xyXG4gIGJvcmRlci13aWR0aDogMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmN1YmUge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogI2ZmZmZmZmM1O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMTEwJTtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTdiNjBmNzA7XHJcbiAgYm9yZGVyLWxlZnQ6IDI1cHggc29saWQgI2Q1ZjU0NDtcclxufVxyXG4uY3ViZTpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBUYWJsZSAqL1xyXG4udGRfcyB7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgY29sb3I6IG1hcm9vbjtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDExOTBweCkge1xyXG4gICNzbWFsbGVyX3NjcmVlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAjc3RpY2t5IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLypwcm9qZWN0IGl0ZW1zKi9cclxuLndob2xlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmNGY1O1xyXG59XHJcblxyXG4uYnV0dG9uX3Mge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogcmdiKDQ5LCA0OCwgNDgpO1xyXG4gIHRleHQtc2hhZG93OiBzaGFkb3cxLCBzaGFkb3cyLCBzaGFkb3czO1xyXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDBweCByZ2IoMTY1LCAxNjUsIDE2NSksIDNweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMCk7XHJcbn1cclxuLmV4YW1wbGVfYyB7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjODU4NDg0O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXI6IDRweCBzb2xpZCAjZDZkNmQ2ICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5leGFtcGxlX2M6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogI2Y2YjkzYjtcclxuICBib3JkZXItY29sb3I6ICNmNmI5M2IgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xyXG59XHJcblxyXG4vKmljb24gaW1hZ2VzKi9cclxuLnByb2plY3RfaW1nIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xyXG59XHJcblxyXG4vKnRleHQqL1xyXG4udGV4dF9zIHtcclxuICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICBmb250LWZhbWlseTogXCJPcGVuIHNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzI5MjgyODtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XHJcbn1cclxuLmdyZXkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2NhY2E0ZDtcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHggMTVweDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICBmb250LWZhbWlseTogXCJPcGVuIHNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzI5MjgyODtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XHJcbn1cclxuXHJcbi8qdGV4dCBjb2x1bW5zKi9cclxuI3dyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG4jYzEsXHJcbiNjMyB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB3aWR0aDogNDklO1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbn1cclxuI2MyIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XHJcbiAgaGVpZ2h0OiAxODBweDtcclxufVxyXG4jYzQge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuI3N1YiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogW3Jlc3BvbnNpdmVdICovXHJcbi8qYmlnZ2VyIHNjcmVlbiovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5NjhweCkge1xyXG4gICNzdWIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnNlcnZpY2VfZGl2IHtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gIH1cclxuICAubGVmdCB7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gIH1cclxuICAuZGl2aWRlciB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgfVxyXG4gIC5yaWdodCB7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcclxuXHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luLXRvcDogMzVweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHggMTBweCAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIH1cclxuICAuZGl2aWRlciB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgfVxyXG4gIC5wcm9qZWN0X2ltZyB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG4vKmhpZGUgaW1hZ2UqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExOTBweCkgYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xyXG4gICNzdWIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnByb2plY3RfaW1nIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2OHB4KSBhbmQgKG1heC13aWR0aDogMTE4OXB4KSB7XHJcbiAgLndob2xlIHtcclxuICAgIGhlaWdodDogNzgwdmg7XHJcbiAgfVxyXG59XHJcblxyXG4vKnNtYWxsZXIgc2NyZWVuKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxcHgpIGFuZCAobWF4LXdpZHRoOiA5NjdweCkge1xyXG4gICNzdWIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5wcm9qZWN0X2ltZyB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnRleHRfcyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gICNjMSxcclxuICAjYzIsXHJcbiAgI2MzLFxyXG4gICN3cmFwcGVyIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgI3dyYXBwZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuICAuZGl2aWRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxuICAucmlnaHQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWluLXdpZHRoOiAzODBweDtcclxuICB9XHJcbiAgLmxlZnQge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDIzMCwgMjI4KTtcclxuICAgIG1pbi13aWR0aDogMzgwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuICAudGl0bGVfcyB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICAjaW50cm9fcyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNjBweDtcclxuICB9XHJcbn1cclxuIl19 */"], encapsulation: 2 });
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
    // portfolio
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], data: { title: 'HOME' } },
    { path: 'login', data: { title: 'Login' }, redirectTo: '/admin/auth', pathMatch: 'full' },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], data: { title: 'ABOUT' } },
    { path: 'services', component: _pages_service_service_component__WEBPACK_IMPORTED_MODULE_9__["ServiceComponent"], data: { title: 'SERVICE' } },
    { path: 'projects', component: _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"], data: { title: 'PROJECT' } },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"], data: { title: 'CONTACT' } },
    // Book store
    { path: 'book-list', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./book-store/book-store.module */ "Blh2")).then(m => m.BookStoreModule) },
    { path: 'cart', component: _book_store_cart_detail_cart_detail_component__WEBPACK_IMPORTED_MODULE_2__["CartDetailComponent"], data: { title: 'Shopping Cart' }, canActivate: [_guard_storeFirst_guard__WEBPACK_IMPORTED_MODULE_0__["StoreFirstGuard"]] },
    { path: 'checkout', component: _book_store_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_1__["CheckoutComponent"], data: { title: 'Checkout' }, canActivate: [_guard_storeFirst_guard__WEBPACK_IMPORTED_MODULE_0__["StoreFirstGuard"]] },
    { path: 'admin', loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "jkDv")).then(m => m.AdminModule) },
    // Redirect
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The cart is empty.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartDetailComponent_table_7_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your cart is empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartDetailComponent_table_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartDetailComponent_table_7_th_2_Template, 2, 0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CartDetailComponent_table_7_Template_input_change_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const line_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.cart.updateQuantity(line_r2.book, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartDetailComponent_table_7_Template_a_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const line_r2 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.cart.removeLine(line_r2.book._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const line_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.cart.lines.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", line_r2.book.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", line_r2.book.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", line_r2.book.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](13, 7, line_r2.book.price, "USD", "symbol", "2.2-2"), "\u00A0x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", line_r2.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](19, 12, line_r2.lineTotal, "USD", "symbol", "2.2-2"));
} }
class CartDetailComponent {
    constructor(cart) {
        this.cart = cart;
    }
    ngOnInit() { }
}
CartDetailComponent.ɵfac = function CartDetailComponent_Factory(t) { return new (t || CartDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_model_cart_model__WEBPACK_IMPORTED_MODULE_1__["Cart"])); };
CartDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartDetailComponent, selectors: [["app-cart-detail"]], decls: 41, vars: 15, consts: [[1, "wrap"], ["id", "left"], [1, "line_title"], ["class", "letter", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["id", "right"], [1, "summary"], [1, "text-left", "w-50", "p-0"], [1, "text-right", "w-50", "p-0"], ["routerLink", "/book-list", 1, "buttonS"], ["routerLink", "/admin/main/checkout", 1, "buttonS", "checkout", 3, "disabled"], [1, "letter"], [4, "ngIf"], [2, "width", "120px"], [1, "itemPicture"], [2, "max-width", "100px", "max-height", "100px", 3, "src", "alt"], [2, "text-align", "left", "width", "250px", "margin-bottom", "10px"], [2, "color", "grey", "width", "250px", "font-size", "10px"], ["type", "number", 2, "width", "2.5em", 3, "value", "change"], [2, "color", "red"], [2, "cursor", "pointer", 3, "click"], [1, "far", "fa-times-circle"]], template: function CartDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Shopping Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CartDetailComponent_p_6_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CartDetailComponent_table_7_Template, 23, 17, "table", 4);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "$15.00");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Continue Shopping");
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: [".wrap[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 100%;\r\n}\r\n#left[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n  margin-right: 40px;\r\n  margin-left: 0px;\r\n}\r\n#right[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n  vertical-align: top;\r\n}\r\nth[_ngcontent-%COMP%] {\r\n  vertical-align: top;\r\n  padding: 0px;\r\n  font-size: 15px;\r\n  text-align: left;\r\n  font-weight: 400;\r\n}\r\n.itemPicture[_ngcontent-%COMP%] {\r\n  background-color: rgb(255, 255, 255);\r\n  width: 100px;\r\n  height: 100px;\r\n}\r\n.line_title[_ngcontent-%COMP%] {\r\n  margin-top: 40px;\r\n  margin-bottom: -15px;\r\n  font-size: 17px;\r\n  text-align: left;\r\n  font-weight: 700;\r\n}\r\n.ordersTable[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  text-align: left;\r\n}\r\n.buttonS[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  font-weight: 600;\r\n  border: 0px solid grey;\r\n  margin: 20px 10px;\r\n  width: 120px;\r\n  color: rgb(46, 45, 45);\r\n  background-color: #d8d5d5;\r\n  font-size: 14px;\r\n}\r\n.checkout[_ngcontent-%COMP%] {\r\n  background-color: rgb(158, 51, 51);\r\n  color: #f1f1f1;\r\n}\r\n.letter[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n  color: rgb(109, 34, 47);\r\n}\r\n.summary[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n\r\n@media only screen and (min-width: 1px) and (max-width: 1189px) {\r\n  .line_title[_ngcontent-%COMP%] {\r\n    margin-top: 0px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1zdG9yZS9jYXJ0LWRldGFpbC9jYXJ0LWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjtBQUNsQjtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stc3RvcmUvY2FydC1kZXRhaWwvY2FydC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERpdiBhbGlnbm1lbnQgKi9cclxuLndyYXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuI2xlZnQge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuI3JpZ2h0IHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4vKiBDb250ZW50IHN0eWxlcyAqL1xyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcbnRoIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5pdGVtUGljdHVyZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbi5saW5lX3RpdGxlIHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IC0xNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLm9yZGVyc1RhYmxlIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uYnV0dG9uUyB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkIGdyZXk7XHJcbiAgbWFyZ2luOiAyMHB4IDEwcHg7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGNvbG9yOiByZ2IoNDYsIDQ1LCA0NSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDVkNTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmNoZWNrb3V0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU4LCA1MSwgNTEpO1xyXG4gIGNvbG9yOiAjZjFmMWYxO1xyXG59XHJcbi5sZXR0ZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiByZ2IoMTA5LCAzNCwgNDcpO1xyXG59XHJcbi5zdW1tYXJ5IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi8qIFNtYWxsZXIgc2NyZWVuICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMXB4KSBhbmQgKG1heC13aWR0aDogMTE4OXB4KSB7XHJcbiAgLmxpbmVfdGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./polyfills */ "hN/g");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .then(ref => {
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
})
    .catch(err => console.error(err));


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