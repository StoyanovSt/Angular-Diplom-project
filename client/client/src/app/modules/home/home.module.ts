import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeViewGuestComponent } from './home-view-guest/home-view-guest.component';
import { HomeViewLoggedInComponent } from './home-view-logged-in/home-view-logged-in.component';
import { HomeService } from './home.service';

@NgModule({
  declarations: [
    HomeViewGuestComponent,
    HomeViewLoggedInComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    HomeService
  ]
})

export class HomeModule { }
