import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppRoutingModule, routingComponents} from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule,  ReactiveFormsModule, AppRoutingModule],
  declarations: [ AppComponent, routingComponents  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
