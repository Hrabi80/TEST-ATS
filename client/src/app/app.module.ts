import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Client/header/header.component';
import { FooterComponent } from './Client/footer/footer.component';
import { WelcomeComponent } from './Client/welcome/welcome.component';
import { LoginComponent } from './Dashboard/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
