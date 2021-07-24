import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductService } from './product.service';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    ProductComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
    ProductDetailsComponent,
    ProductEditComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports: [
    ProductComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
    ProductDetailsComponent,
    ProductEditComponent,
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
