import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeviewComponent } from './homeview/homeview.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { CharitiesComponent } from './charities/charities.component';
import { CharitiesDetailsComponent } from './charities-details/charities-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRegisterService } from './service/user-register.service';
import { DonationsapiservicesService } from './service/donationsapiservices.service';
import { CharitiesService } from './service/charities.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeviewComponent,
    FooterComponent,
    AboutComponent,
    CharitiesComponent,
    CharitiesDetailsComponent, 
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  

  ],
  providers: [
    DonationsapiservicesService,
    UserRegisterService,
    CharitiesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }