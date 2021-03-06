import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthActive } from '../shared/guards/auth.activate';
import { EditActive } from '../shared/guards/edit.activate';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'create',
                component: ProductCreateComponent,
                canActivate: [AuthActive],
                data: {
                    authRequired: true,
                    authFailureRedirectUrl: '/login'
                }
            },
            {
                path: ':productId/details',
                component: ProductDetailsComponent,
                canActivate: [AuthActive],
                data: {
                    authRequired: true,
                    authFailureRedirectUrl: '/login',                    
                }
            },
            {
                path: ':productId/edit',
                component: ProductEditComponent,
                canActivate: [AuthActive, EditActive],
                data: {
                    authRequired: true,
                    authFailureRedirectUrl: '/login',
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutesRoutingModule { }
