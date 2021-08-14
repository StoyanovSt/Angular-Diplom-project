import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { NotificationsModule } from '../notifications/notifications.module';
import { ProductModule } from '../product/product.module';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductModule,
    NotificationsModule,
    UserRoutingModule,
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    UserProfileComponent
  ],
})
export class UserModule { }
