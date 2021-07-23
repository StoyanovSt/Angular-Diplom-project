import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { HomeViewGuestComponent } from './home-view-guest/home-view-guest.component';
import { HomeViewLoggedInComponent } from './home-view-logged-in/home-view-logged-in.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegisterService } from './services/register.service';
import { SuccessComponent } from './notifications/success/success.component';
import { ErrorComponent } from './notifications/error/error.component';
import { LoginService } from './services/login.service';
import { CreateOffertService } from './services/create-offert.service';
import { ProductDetailsService } from './services/product-details.service';
import { GetCurrentUserService } from './services/get-current-user.service';
import { GetAllProductsService } from './services/get-all-products.service';
import { EditOffertService } from './services/edit-offert.service';
import { LogoutComponent } from './logout/logout.component';
import { LogoutService } from './services/logout.service';
import { ProductDeleteService } from './services/product-delete.service';
import { ProductDeleteComponent } from './product-delete/product-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductCreateComponent,
    ProductEditComponent,
    HomeViewGuestComponent,
    HomeViewLoggedInComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    ProductComponent,
    UserProfileComponent,
    SuccessComponent,
    ErrorComponent,
    LogoutComponent,
    ProductDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RegisterService,
    LoginService,
    CreateOffertService,
    ProductDetailsService,
    GetCurrentUserService,
    GetAllProductsService,
    EditOffertService,
    LogoutService,
    ProductDeleteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
