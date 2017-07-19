import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component'; 
import { SignupComponent } from './signup.component';

const routes : Routes =[
    { path : '', component : LoginComponent}, 
    { path : 'home', component : HomeComponent},
    { path : 'signup', component : SignupComponent}
]; 

@NgModule({
    imports : [
        RouterModule.forRoot(routes)
    ], 
    exports : [
        RouterModule
    ]
})

export class AppRoutingModule{}
export const routingComponents = [HomeComponent, SignupComponent, LoginComponent]



