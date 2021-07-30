import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductModule } from '../product/product.module';
import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { NotificationsModule } from '../notifications/notifications.module';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    ProductModule,
    FormsModule,
    NotificationsModule
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    UserProfileComponent
  ],
  providers: [
    UserService,
  ]
})
export class UserModule { }
