import { Component } from '@angular/core'; 
import { Router } from '@angular/router';

@Component({
    selector : 'home',
    templateUrl : 'app/home.component.html', 
    styles : [`

    			.container{
    				position  : fixed; 
    		    	top : 0; 
    		    	width :100%;
    		    	height : 5px;
    		    	margin :0;
    		    	padding :0;
    			}

    		    .topnav {
				    background-color: #A9A9A9;
				    overflow: hidden;	
				}

				/* Style the links inside the navigation bar */
				.topnav a {
				    float: right;
				    display: block;
				    color: #f2f2f2;
				    text-align: center;
				    padding: 20px 16px;
				    text-decoration: none;
				    font-size: 17px;
				}

				/* Change the color of links on hover */
				.topnav a:hover {
				    background-color: #696969;
				    color: white;
				}

				/* Add a color to the active/current link */
				.topnav a.active {
				    background-color: #4CAF50;
				    color: white;
				}
    `]
})

export class HomeComponent{
	router : Router; 
	constructor(private _router : Router){}

	logout(){
		this.router = this._router;
		this.router.navigateByUrl('');
	}

}