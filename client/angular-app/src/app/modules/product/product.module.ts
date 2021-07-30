import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductService } from './product.service';
import { FormsModule } from '@angular/forms';
import { ImageUrlValidationDirective } from './image-url-validation.directive';
import { NotificationsModule } from '../notifications/notifications.module';


@NgModule({
  declarations: [
    ProductComponent,
    ProductCreateComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    ImageUrlValidationDirective,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NotificationsModule
  ],
  exports: [
    ProductComponent,
    ProductCreateComponent,
    ProductDetailsComponent,
    ProductEditComponent,
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
