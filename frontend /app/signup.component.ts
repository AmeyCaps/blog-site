import { Component } from '@angular/core'; 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector : 'signup',
    templateUrl : 'app/signup.component.html'
})

export class SignupComponent{
	route : Router; 
	signup  : FormGroup;

	constructor(private _formBuilder : FormBuilder, private _router : Router){
		this.signup = this._formBuilder.group({
			name  : ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
			email : ['', [Validators.required, Validators.minLength(5)]], 
			password : ['', [Validators.required, Validators.minLength(6)]]
		})
	}

	OnSubmit(){
	 	this.route = this._router; 
	 	this.route.navigateByUrl("/home");
	}

}