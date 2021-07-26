import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user-routing.module';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserService } from './user.service';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    ProductModule,
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
