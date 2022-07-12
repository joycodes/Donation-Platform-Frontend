import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeviewComponent } from './homeview/homeview.component';
import { AboutComponent } from './about/about.component';
import { CharitiesComponent } from './charities/charities.component';
import { CharitiesDetailsComponent } from './charities-details/charities-details.component';
import { DonationsComponent } from './donations/donations.component';







const routes: Routes = [
  { path:'', component:HomeviewComponent },
  { path:'about', component:AboutComponent },
  { path:'charities', component:CharitiesComponent },
  { path:'charities-details', component:CharitiesDetailsComponent },
  { path:'donations', component:DonationsComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
