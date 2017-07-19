import { Component } from '@angular/core'; 
import { Router } from '@angular/router';

@Component({
    selector : 'home',
    template : `
        <h3>Login Succesfull!!</h3>
        <button class="btn btn-primary" (click)="logout()">Logout</button> 
    `
})

export class HomeComponent{
	router : Router; 
	constructor(private _router : Router){}

	logout(){
		this.router = this._router;
		this.router.navigateByUrl('');
	}

}