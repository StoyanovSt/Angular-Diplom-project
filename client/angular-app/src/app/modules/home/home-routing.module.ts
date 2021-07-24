import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewGuestComponent } from './home-view-guest/home-view-guest.component';
import { HomeViewLoggedInComponent } from './home-view-logged-in/home-view-logged-in.component';



const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeViewGuestComponent
    },
    {
        path: 'home',
        component: HomeViewLoggedInComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
