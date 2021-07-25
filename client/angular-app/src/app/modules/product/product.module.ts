import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductComponent } from './product/product.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductService } from './product.service';
import { ProductRoutingModule } from './product-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductComponent,
    ProductCreateComponent,
    ProductDetailsComponent,
    ProductEditComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    RouterModule
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
