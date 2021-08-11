import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthActive } from './guards/auth.activate';
import { ProductService } from './services/product-routes.service';
import { UserService } from './services/user.service';
import { JwtInterceptorService } from './interceptors/jwt-interceptor.service';


@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,    
  ],
  exports: [
    PageNotFoundComponent,
  ],
  providers: [
    AuthActive,
    ProductService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    }
  ]
})
export class SharedModule { }
