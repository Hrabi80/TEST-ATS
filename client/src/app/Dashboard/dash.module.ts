//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';



import { DashRoutingModule } from './dash-routing.module';
import { LoginComponent } from './login/login.component';

import { NavComponent } from './nav/nav.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
 
    LoginComponent,
    NavComponent,
    MessagesComponent,
 //   DashRoutingModule,
   // FormsModule,
   // ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DashRoutingModule
    
   // ReactiveFormsModule
   // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [NavComponent]
})
export class DashModule { }
