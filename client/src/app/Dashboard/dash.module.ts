import { NgModule } from '@angular/core';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { LoginComponent } from './login/login.component';

import { NavComponent } from './nav/nav.component';
import { MessagesComponent } from './messages/messages.component';
import { ServiceComponent } from './service/service.component';
import { UpdateComponent } from './service/update/update.component';
import { AddProductComponent } from './Products/add-product/add-product.component';


@NgModule({
  declarations: [
 
    LoginComponent,
    NavComponent,
    MessagesComponent,
    ServiceComponent,
    UpdateComponent,
    AddProductComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DashRoutingModule
  ],
  providers: [],
  bootstrap: [NavComponent]
})
export class DashModule { }
