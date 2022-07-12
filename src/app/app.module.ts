import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeviewComponent } from './homeview/homeview.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { CharitiesComponent } from './charities/charities.component';
import { CharitiesDetailsComponent } from './charities-details/charities-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeviewComponent,
    FooterComponent,
    AboutComponent,
    CharitiesComponent,
    CharitiesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
