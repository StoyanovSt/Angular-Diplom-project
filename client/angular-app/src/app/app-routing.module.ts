import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthActive } from './modules/shared/guards/auth.activate';

import { HomeViewGuestComponent } from './modules/home-routes/home-view-guest/home-view-guest.component';
import { HomeViewLoggedInComponent } from './modules/home-routes/home-view-logged-in/home-view-logged-in.component';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeViewGuestComponent,
  },
  {
    path: 'product',
    loadChildren: () => import('./modules/product-routes/product-routes.module').then(m => m.ProductRoutesModule)
  },
  {
    path: 'home',
    component: HomeViewLoggedInComponent,
    canActivate: [AuthActive],
    data: {
      authRequired: true,
      authFailureRedirectUrl: '/login'
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
