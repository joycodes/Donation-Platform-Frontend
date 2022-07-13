import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeviewComponent } from './homeview/homeview.component';
import { AboutComponent } from './about/about.component';
import { CharitiesComponent } from './charities/charities.component';
import { CharitiesDetailsComponent } from './charities-details/charities-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
import { DonationsComponent } from './donations/donations.component';
import { PaymentComponent } from './payment/payment.component';





const routes: Routes = [
  { path:'', component:HomeviewComponent },
  { path:'login', component:LoginComponent },
  { path:'register', component:RegisterComponent },
  { path:'about', component:AboutComponent },
  { path:'charities', component:CharitiesComponent },
  { path:'charities-details', component:CharitiesDetailsComponent },
  { path:'donations', component:DonationsComponent },
  { path:'payment', component:PaymentComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }