import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeViewGuestComponent } from './home-view-guest/home-view-guest.component';
import { HomeViewLoggedInComponent } from './home-view-logged-in/home-view-logged-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product-routes/product-routes.service';
import { ProductModule } from '../product/product.module';


@NgModule({
  declarations: [
    HomeViewGuestComponent,
    HomeViewLoggedInComponent,
    PageNotFoundComponent,
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
    PageNotFoundComponent,
  ],
  providers: [
    ProductService
  ]
})
export class SharedModule { }
