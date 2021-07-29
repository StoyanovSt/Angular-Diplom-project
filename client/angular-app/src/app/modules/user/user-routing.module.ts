import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActive } from '../core/guards/auth.activate';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'user/:username/profile',
        component: UserProfileComponent,
        canActivate: [AuthActive],
        data: {
            authRequired: true,
            authFailureRedirectUrl: '/login'
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
