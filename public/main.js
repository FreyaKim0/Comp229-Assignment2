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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





class HomeComponent extends _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_0__["BasePageComponent"] {
    constructor(route) {
        super(route);
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-base-page");
    } }, directives: [_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_0__["BasePageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


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
    _id, name, author, published, description, price) {
        this._id = _id;
        this.name = name;
        this.author = author;
        this.published = published;
        this.description = description;
        this.price = price;
    }
    toString() {
        return `
    Book
    -------------------------
    Name:       ${this.name}
    Author:     ${this.author}
    Published:  ${this.published}
    Description:${this.description}
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "XUTUNG\u00A0\u00A0JIN");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " - Copyright \u00A9 2020 by XuTung Jin All rights reserved -\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#footer[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  color:grey;\r\n  text-align: center;\r\n  display: block;\r\n  position: relative;\r\n  bottom: 0;\r\n  letter-spacing: 3px;\r\n  background-color: #F2F4F5;\r\n}\r\n#grid_placeholder[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydGlhbHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhCQUE4QjtBQUM5QjtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWxzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tZm9vdGVyIHNlY3Rpb25zLS0tLS0tKi9cclxuI2Zvb3RlciB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGNvbG9yOmdyZXk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGNEY1O1xyXG59XHJcblxyXG4jZ3JpZF9wbGFjZWhvbGRlciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iXX0= */"] });
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _model_model_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/model.module */ "DIJg");
/* harmony import */ var _book_store_book_store_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../book-store/book-store.component */ "QnNB");
/* harmony import */ var _counter_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./counter.directive */ "1h7W");
/* harmony import */ var _cart_detail_cart_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart-detail/cart-detail.component */ "wZ8A");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkout/checkout.component */ "S4ta");










class BookStoreModule {
}
BookStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BookStoreModule });
BookStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function BookStoreModule_Factory(t) { return new (t || BookStoreModule)(); }, imports: [[_model_model_module__WEBPACK_IMPORTED_MODULE_4__["ModelModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BookStoreModule, { declarations: [_book_store_book_store_component__WEBPACK_IMPORTED_MODULE_5__["BookStoreComponent"], _counter_directive__WEBPACK_IMPORTED_MODULE_6__["CounterDirective"], _cart_detail_cart_detail_component__WEBPACK_IMPORTED_MODULE_7__["CartDetailComponent"], _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"]], imports: [_model_model_module__WEBPACK_IMPORTED_MODULE_4__["ModelModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_book_store_book_store_component__WEBPACK_IMPORTED_MODULE_5__["BookStoreComponent"], _counter_directive__WEBPACK_IMPORTED_MODULE_6__["CounterDirective"], _cart_detail_cart_detail_component__WEBPACK_IMPORTED_MODULE_7__["CartDetailComponent"], _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BookStoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_model_model_module__WEBPACK_IMPORTED_MODULE_4__["ModelModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
                declarations: [_book_store_book_store_component__WEBPACK_IMPORTED_MODULE_5__["BookStoreComponent"], _counter_directive__WEBPACK_IMPORTED_MODULE_6__["CounterDirective"], _cart_detail_cart_detail_component__WEBPACK_IMPORTED_MODULE_7__["CartDetailComponent"], _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"]],
                exports: [_book_store_book_store_component__WEBPACK_IMPORTED_MODULE_5__["BookStoreComponent"], _counter_directive__WEBPACK_IMPORTED_MODULE_6__["CounterDirective"], _cart_detail_cart_detail_component__WEBPACK_IMPORTED_MODULE_7__["CartDetailComponent"], _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"]]
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
    } }, directives: [_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_0__["BasePageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlcnZpY2Uvc2VydmljZS5jb21wb25lbnQuY3NzIn0= */"] });
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










class ModelModule {
}
ModelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ModelModule });
ModelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function ModelModule_Factory(t) { return new (t || ModelModule)(); }, providers: [_book_repository__WEBPACK_IMPORTED_MODULE_5__["BookRepository"], _static_datasource__WEBPACK_IMPORTED_MODULE_4__["StaticDataSource"], _cart_model__WEBPACK_IMPORTED_MODULE_7__["Cart"], _order_model__WEBPACK_IMPORTED_MODULE_8__["Order"], _order_repository__WEBPACK_IMPORTED_MODULE_1__["OrderRepository"],
        { provide: _static_datasource__WEBPACK_IMPORTED_MODULE_4__["StaticDataSource"], useClass: _rest_datasource__WEBPACK_IMPORTED_MODULE_2__["RestDataSource"] },
        _rest_datasource__WEBPACK_IMPORTED_MODULE_2__["RestDataSource"], _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]], imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ModelModule, { imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](ModelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
        args: [{
                imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
                providers: [_book_repository__WEBPACK_IMPORTED_MODULE_5__["BookRepository"], _static_datasource__WEBPACK_IMPORTED_MODULE_4__["StaticDataSource"], _cart_model__WEBPACK_IMPORTED_MODULE_7__["Cart"], _order_model__WEBPACK_IMPORTED_MODULE_8__["Order"], _order_repository__WEBPACK_IMPORTED_MODULE_1__["OrderRepository"],
                    { provide: _static_datasource__WEBPACK_IMPORTED_MODULE_4__["StaticDataSource"], useClass: _rest_datasource__WEBPACK_IMPORTED_MODULE_2__["RestDataSource"] },
                    _rest_datasource__WEBPACK_IMPORTED_MODULE_2__["RestDataSource"], _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]]
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
    getBooks() {
        return this.http.get(this.baseUrl + 'book-list');
    }
    saveOrder(order) {
        console.log(JSON.stringify(order));
        return this.http.post(this.baseUrl + 'orders/add', order);
    }
    authenticate(user) {
        return this.http.post(this.baseUrl + 'login', user, this.httpOptions);
    }
    storeUserData(token, user) {
        localStorage.setItem('id_token', 'Bearer ' + token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
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
    } }, styles: ["#content[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n  background-color: #F2F4F5;\r\n  position: relative;\r\n  margin-top: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydGlhbHMvYmFzZS1wYWdlL2Jhc2UtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcGFydGlhbHMvYmFzZS1wYWdlL2Jhc2UtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRlbnQge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkY0RjU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuIl19 */"] });
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
/* harmony import */ var _model_cart_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/cart.model */ "b/QR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _counter_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./counter.directive */ "1h7W");








function BookStoreComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookStoreComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const author_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.changeAuthor(author_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const author_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", author_r3 == ctx_r0.selectedAuthor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", author_r3, " ");
} }
function BookStoreComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookStoreComponent_div_7_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const book_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.addBookToCart(book_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Add To Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", book_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](5, 3, book_r6.price, "USD", "symbol", "2.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", book_r6.desciprtion, " ");
} }
function BookStoreComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookStoreComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const page_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.changePage(page_r9); });
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
    constructor(repository, cart, router) {
        this.repository = repository;
        this.cart = cart;
        this.router = router;
        this.selectedAuthor = null;
        this.booksPerPage = 4;
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
    addBookToCart(book) {
        this.cart.addLine(book);
        this.router.navigateByUrl('/cart');
    }
}
BookStoreComponent.ɵfac = function BookStoreComponent_Factory(t) { return new (t || BookStoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_model_book_repository__WEBPACK_IMPORTED_MODULE_1__["BookRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_model_cart_model__WEBPACK_IMPORTED_MODULE_2__["Cart"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
BookStoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookStoreComponent, selectors: [["app-book-store"]], decls: 20, vars: 4, consts: [[1, "container-fluid"], [1, "row"], [1, "col-3", "bg-info", "p-2"], [1, "btn", "btn-block", "btn-outline-primary", 3, "click"], ["class", "btn btn-outline-primary btn-block", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "col-9", "p-2", "text-black"], ["class", "card m-1 p-1 bg-light", 4, "ngFor", "ngForOf"], [1, "form-inline", "float-left", "mr-1"], [1, "form-control", 3, "value", "change"], ["value", "3"], ["value", "4"], ["value", "6"], ["value", "8"], [1, "btn-group", "float-right"], ["class", "btn btn-outline-primary", 3, "active", "click", 4, "counter", "counterOf"], [1, "btn", "btn-outline-primary", "btn-block", 3, "click"], [1, "card", "m-1", "p-1", "bg-light"], [1, "badge", "badge-pill", "badge-primary", "float-right"], [1, "card-text", "bg-white", "p-1"], [1, "btn", "btn-success", "btn-sm", "float-right", 3, "click"], [1, "btn", "btn-outline-primary", 3, "click"]], template: function BookStoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookStoreComponent_Template_button_click_3_listener() { return ctx.changeAuthor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " All Authors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BookStoreComponent_button_5_Template, 2, 3, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BookStoreComponent_div_7_Template, 10, 8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BookStoreComponent_Template_select_change_9_listener($event) { return ctx.changePageSize($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "3 per page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "4 per page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "6 per page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "8 per page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, BookStoreComponent_button_19_Template, 2, 3, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.authors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.books);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.booksPerPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("counterOf", ctx.pageCount);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _counter_directive__WEBPACK_IMPORTED_MODULE_6__["CounterDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stc3RvcmUvYm9vay1zdG9yZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookStoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-book-store',
                templateUrl: './book-store.component.html',
                styleUrls: ['./book-store.component.css']
            }]
    }], function () { return [{ type: _model_book_repository__WEBPACK_IMPORTED_MODULE_1__["BookRepository"] }, { type: _model_cart_model__WEBPACK_IMPORTED_MODULE_2__["Cart"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


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
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [["id", "background_wrap"], ["id", "main", 1, "main_wrapper"], ["id", "grid_placeholder", 1, "main_grid_constraint"], ["id", "content_in_main_wrapper", 1, "main_grid_constraint"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_partials_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["#background_wrap[_ngcontent-%COMP%]{\r\n  background-color: #F2F4F5;\r\n  height: 100vh;\r\n}\r\n#grid_placeholder[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n#content_in_main_wrapper[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin:0;\r\n  padding:0;\r\n  position: relative;\r\n}\r\n@media (min-width: 1190px) {\r\n\r\n  #grid_placeholder[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n  }\r\n  .main_wrapper[_ngcontent-%COMP%] {\r\n    grid-template-columns: 20% 80%;\r\n    display: grid;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCO0FBRUE7O0VBRUU7SUFDRSxjQUFjO0lBQ2QsV0FBVztFQUNiO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNrZ3JvdW5kX3dyYXB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjRGNTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbiNncmlkX3BsYWNlaG9sZGVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiNjb250ZW50X2luX21haW5fd3JhcHBlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW46MDtcclxuICBwYWRkaW5nOjA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTE5MHB4KSB7XHJcblxyXG4gICNncmlkX3BsYWNlaG9sZGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5tYWluX3dyYXBwZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICB9XHJcbn1cclxuIl19 */"] });
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





class ProjectsComponent extends _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_0__["BasePageComponent"] {
    constructor(route) {
        super(route);
    }
    ngOnInit() {
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-base-page");
    } }, directives: [_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_0__["BasePageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


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
/* harmony import */ var _book_store_book_store_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./book-store/book-store.component */ "QnNB");













const routes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], data: { title: 'HOME' } },
    { path: 'login', data: { title: 'Login' }, redirectTo: '/admin/auth', pathMatch: 'full' },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], data: { title: 'ABOUT' } },
    { path: 'services', component: _pages_service_service_component__WEBPACK_IMPORTED_MODULE_9__["ServiceComponent"], data: { title: 'SERVICE' } },
    { path: 'projects', component: _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"], data: { title: 'PROJECT' } },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"], data: { title: 'CONTACT' } },
    { path: 'book-list', component: _book_store_book_store_component__WEBPACK_IMPORTED_MODULE_10__["BookStoreComponent"], data: { title: 'Book Store' }, canActivate: [_guard_storeFirst_guard__WEBPACK_IMPORTED_MODULE_0__["StoreFirstGuard"]] },
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function CartDetailComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your cart is empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartDetailComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CartDetailComponent_tr_19_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const line_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.cart.updateQuantity(line_r2.book, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartDetailComponent_tr_19_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const line_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.cart.removeLine(line_r2.book._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const line_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", line_r2.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", line_r2.book.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](7, 4, line_r2.book.price, "USD", "symbol", "2.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](10, 9, line_r2.lineTotal, "USD", "symbol", "2.2-2"), " ");
} }
class CartDetailComponent {
    constructor(cart) {
        this.cart = cart;
    }
    ngOnInit() {
    }
}
CartDetailComponent.ɵfac = function CartDetailComponent_Factory(t) { return new (t || CartDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_model_cart_model__WEBPACK_IMPORTED_MODULE_1__["Cart"])); };
CartDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartDetailComponent, selectors: [["app-cart-detail"]], decls: 34, vars: 9, consts: [[1, "container-fluid"], [1, "row"], [1, "mt-2"], [1, "text-center"], [1, "table", "table-border", "table-striped", "p-2"], [1, "text-right"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["colspan", "3", 1, "text-right"], [1, "col"], ["routerLink", "/book-list", 1, "btn", "btn-primary", "m-1"], ["routerLink", "/checkout", 1, "tbn", "btn-secondary", "m-1", 3, "disabled"], ["colspan", "4", 1, "text-center"], ["type", "number", 1, "form-control.sm", 2, "width", "5em", 3, "value", "change"], [1, "btn", "btn-sm", "btn-danger", 3, "click"]], template: function CartDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Your Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CartDetailComponent_tr_18_Template, 3, 0, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CartDetailComponent_tr_19_Template, 14, 14, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Continue Shopping ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " checkout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cart.lines.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cart.lines);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](26, 4, ctx.cart.cartPrice, "USD", "symbol", "2.2-2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.cart.lines.length == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stc3RvcmUvY2FydC1kZXRhaWwvY2FydC1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"] });
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