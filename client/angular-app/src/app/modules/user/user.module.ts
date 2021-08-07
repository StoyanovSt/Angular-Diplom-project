import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { NotificationsModule } from '../notifications/notifications.module';
import { ProductModule } from '../product/product.module';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    UserRoutingModule,
    HttpClientModule,
    FormsModule,
    ProductModule,
    NotificationsModule,
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    UserProfileComponent
  ],
})
export class UserModule { }
