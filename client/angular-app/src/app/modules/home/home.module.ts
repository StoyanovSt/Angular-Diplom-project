import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeViewGuestComponent } from './home-view-guest/home-view-guest.component';
import { HomeViewLoggedInComponent } from './home-view-logged-in/home-view-logged-in.component';
import { HomeService } from './home.service';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeViewGuestComponent,
    HomeViewLoggedInComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ],
  exports: [
    HomeViewGuestComponent,
    HomeViewLoggedInComponent
  ],
  providers: [
    HomeService
  ]
})

export class HomeModule { }
