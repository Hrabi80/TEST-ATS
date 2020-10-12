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
import { ListeComponent } from './Products/liste/liste.component';
import { CategoryComponent } from './category/category.component';
import { UpdateComponent2 } from './category/update/update.component';
import { AddTechnicComponent } from './technics/add-technic/add-technic.component';
import { ListTechnicsComponent } from './technics/list-technics/list-technics.component';
import { AddGalleryComponent } from './gallery/add-gallery/add-gallery.component';
import { ListGalleryComponent } from './gallery/list-gallery/list-gallery.component';


@NgModule({
  declarations: [
 
    LoginComponent,
    NavComponent,
    MessagesComponent,
    ServiceComponent,
    UpdateComponent,
    AddProductComponent,
    ListeComponent,
    CategoryComponent,
    UpdateComponent2,
    AddTechnicComponent,
    ListTechnicsComponent,
    AddGalleryComponent,
    ListGalleryComponent,
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
