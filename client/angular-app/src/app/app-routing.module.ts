import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActive } from './modules/core/guards/auth.activate';

import { HomeViewGuestComponent } from './modules/shared/home-view-guest/home-view-guest.component';
import { HomeViewLoggedInComponent } from './modules/shared/home-view-logged-in/home-view-logged-in.component';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeViewGuestComponent,
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
