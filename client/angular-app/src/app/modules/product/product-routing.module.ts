import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
    {
        path: 'product/create',   
        component: ProductCreateComponent
    },
    {
        path: 'product/:productId/details',
        component: ProductDetailsComponent
    },
    {
        path: 'product/:productId/edit',
        component: ProductEditComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
