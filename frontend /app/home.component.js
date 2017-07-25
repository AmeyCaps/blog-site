"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(_router) {
        this._router = _router;
    }
    HomeComponent.prototype.logout = function () {
        this.router = this._router;
        this.router.navigateByUrl('');
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: 'app/home.component.html',
        styles: ["\n\n    \t\t\t.container{\n    \t\t\t\tposition  : fixed; \n    \t\t    \ttop : 0; \n    \t\t    \twidth :100%;\n    \t\t    \theight : 5px;\n    \t\t    \tmargin :0;\n    \t\t    \tpadding :0;\n    \t\t\t}\n\n    \t\t    .topnav {\n\t\t\t\t    background-color: #A9A9A9;\n\t\t\t\t    overflow: hidden;\t\n\t\t\t\t}\n\n\t\t\t\t/* Style the links inside the navigation bar */\n\t\t\t\t.topnav a {\n\t\t\t\t    float: right;\n\t\t\t\t    display: block;\n\t\t\t\t    color: #f2f2f2;\n\t\t\t\t    text-align: center;\n\t\t\t\t    padding: 20px 16px;\n\t\t\t\t    text-decoration: none;\n\t\t\t\t    font-size: 17px;\n\t\t\t\t}\n\n\t\t\t\t/* Change the color of links on hover */\n\t\t\t\t.topnav a:hover {\n\t\t\t\t    background-color: #696969;\n\t\t\t\t    color: white;\n\t\t\t\t}\n\n\t\t\t\t/* Add a color to the active/current link */\n\t\t\t\t.topnav a.active {\n\t\t\t\t    background-color: #4CAF50;\n\t\t\t\t    color: white;\n\t\t\t\t}\n    "]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map