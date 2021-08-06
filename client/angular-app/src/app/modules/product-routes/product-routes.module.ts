import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ProductRoutesRoutingModule } from './product-routes-routing.module';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductService } from './product-routes.service';
import { FormsModule } from '@angular/forms';
import { ImageUrlValidationDirective } from './image-url-validation.directive';
import { NotificationsModule } from '../notifications/notifications.module';


@NgModule({
  declarations: [
    ProductCreateComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    ImageUrlValidationDirective,
  ],
  imports: [
    CommonModule,
    ProductRoutesRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NotificationsModule,
  ],
  exports: [
    ProductCreateComponent,
    ProductDetailsComponent,
    ProductEditComponent,
  ],
  providers: [
    ProductService
  ]
})
export class ProductRoutesModule { }
