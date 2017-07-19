import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: 'app/login.component.html',
  styles : [`

                .container{
                  position : absolute;    
                  width    : 200px;
                  height   : 200px;
                  left     : 45%;
                  top      : 35%;
                  margin-left : -80px; 
                  margin-top  : -80px;
                }
                .form-control{
                  width : 200px;
                  padding : 10px; 
                }

                label{
                  padding : 5px;
                }

                .sub{
                  padding: 10px;
                }

              a{
                padding-left : 8px;
              }
  `],  
})


export class LoginComponent implements OnInit{
  
  loginForm : FormGroup; 
  usr : string;
  pass : string; 
  rout : Router; 
  constructor(private _formBuilder : FormBuilder, private _router : Router){}

  ngOnInit(){
    this.loginForm = this._formBuilder.group({
      username : ['username', [Validators.required, Validators.minLength(1)]], 
      pass : ['password', [Validators.required, Validators.minLength(6)]] 
    })
  }

  OnSubmit(){
   this.usr = this.loginForm.controls.username.value; 
   this.pass = this.loginForm.controls.pass.value;
   this.rout = this._router;
   if(this.usr ==="user1" && this.pass === "123P@ss"){
      this.rout.navigateByUrl("/home");
      console.log(this.loginForm.value);
   }else{
      console.log("Incorrect credentials !!");
   }
   

  }


 }