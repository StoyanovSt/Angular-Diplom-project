import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
    {
        path: 'product',
        children: [
            {
                path: 'create',
                component: ProductCreateComponent
            },
            {
                path: ':productId/details',
                component: ProductDetailsComponent
            },
            {
                path: 'productId/edit',
                component: ProductEditComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
