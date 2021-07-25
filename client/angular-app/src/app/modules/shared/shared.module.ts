import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuccessComponent } from './notifications/success/success.component';
import { ErrorComponent } from './notifications/error/error.component';
import { HomeViewGuestComponent } from './home-view-guest/home-view-guest.component';
import { HomeViewLoggedInComponent } from './home-view-logged-in/home-view-logged-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    HomeViewGuestComponent,
    HomeViewLoggedInComponent,
    PageNotFoundComponent,
    SuccessComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SuccessComponent,
    ErrorComponent,
    HomeViewGuestComponent,
    HomeViewLoggedInComponent,
    PageNotFoundComponent,
  ]
})
export class SharedModule { }
