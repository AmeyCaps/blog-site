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
var SignupComponent = (function () {
    function SignupComponent(_formBuilder, _router) {
        this._formBuilder = _formBuilder;
        this._router = _router;
        this.signup = this._formBuilder.group({
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(20)]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]]
        });
    }
    SignupComponent.prototype.OnSubmit = function () {
        this.route = this._router;
        this.route.navigateByUrl("/home");
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    core_1.Component({
        selector: 'signup',
        templateUrl: 'app/signup.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router])
], SignupComponent);
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map