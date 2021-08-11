import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProductRoutesRoutingModule } from './product-routes-routing.module';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
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
    RouterModule,
    FormsModule,
    NotificationsModule,
    ProductRoutesRoutingModule,
  ],
  exports: [
    ProductCreateComponent,
    ProductDetailsComponent,
    ProductEditComponent,
  ],
})
export class ProductRoutesModule { }
