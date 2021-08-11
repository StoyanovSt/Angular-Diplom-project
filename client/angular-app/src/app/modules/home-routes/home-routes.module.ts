import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProductModule } from '../product/product.module';
import { HomeViewGuestComponent } from '../home-routes/home-view-guest/home-view-guest.component';
import { HomeViewLoggedInComponent } from '../home-routes/home-view-logged-in/home-view-logged-in.component';


@NgModule({
  declarations: [
    HomeViewGuestComponent,
    HomeViewLoggedInComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ProductModule
  ],
  exports: [
    HomeViewGuestComponent,
    HomeViewLoggedInComponent,
  ],
})
export class HomeRoutesModule { }
