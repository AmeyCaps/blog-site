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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(_formBuilder, _router) {
        this._formBuilder = _formBuilder;
        this._router = _router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this._formBuilder.group({
            username: ['username', [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            pass: ['password', [forms_1.Validators.required, forms_1.Validators.minLength(6)]]
        });
    };
    LoginComponent.prototype.OnSubmit = function () {
        this.usr = this.loginForm.controls.username.value;
        this.pass = this.loginForm.controls.pass.value;
        this.rout = this._router;
        if (this.usr === "user1" && this.pass === "123P@ss") {
            this.rout.navigateByUrl("/home");
            console.log(this.loginForm.value);
        }
        else {
            console.log("Incorrect credentials !!");
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: 'app/login.component.html',
        styles: ["\n\n                .container{\n                  position : absolute;    \n                  width    : 200px;\n                  height   : 200px;\n                  left     : 45%;\n                  top      : 35%;\n                  margin-left : -80px; \n                  margin-top  : -80px;\n                }\n                .form-control{\n                  width : 200px;\n                  padding : 10px; \n                }\n\n                label{\n                  padding : 5px;\n                }\n\n                .sub{\n                  padding: 10px;\n                }\n\n              a{\n                padding-left : 8px;\n              }\n  "],
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map