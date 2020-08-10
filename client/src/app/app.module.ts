import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashModule } from './Dashboard/dash.module';
import { FormGroup, FormControl } from '@angular/forms'
import { JwtInterceptor } from './_helper/jwt.interceptor';
import { ErrorInterceptor } from './_helper/error.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { DashRoutingModule } from './Dashboard/dash-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Client/header/header.component';
import { FooterComponent } from './Client/footer/footer.component';
import { WelcomeComponent } from './Client/welcome/welcome.component';
//import { LoginComponent } from './Dashboard/login/login.component';
import { AuthGuard } from './_helper/auth.guard'; 
import { ContactComponent } from './Client/contact/contact.component';
//import { NavComponent } from './Dashboard/nav/nav.component';
//import { MessagesComponent } from './Dashboard/messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    //LoginComponent,
    ContactComponent,
   // NavComponent,
   // MessagesComponent,
   
    
  ],
  imports: [
 //   DashModule,
    BrowserModule,
    AppRoutingModule,
    DashRoutingModule,
    HttpClientModule,
   // ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,

   // FontAwesomeModule
  ],
  providers: [
    AuthGuard,
    JwtInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
