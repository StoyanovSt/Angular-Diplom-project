import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserModule } from './modules/user/user.module';
import { CoreModule } from './modules/core/core.module';
import { HomeModule } from './modules/home/home.module';
import { ProductModule } from './modules/product/product.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
    CoreModule,
    HomeModule,
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
