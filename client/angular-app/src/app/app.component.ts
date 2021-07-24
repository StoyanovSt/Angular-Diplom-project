import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';

import { IProduct } from './interfaces/product';
import { IUser } from './interfaces/user';
import { UserService } from './modules/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService) { }
  // register
  // serverResponseInfo!: {};

  // eventEmitterHandler(event: Event): void {
  //   this.serverResponseInfo = event;
  // }

  product!: IProduct;
  productSellerId!: string;
  productSeller!: IUser;

  //product details
  eventEmitterHandler(event: any): void {
    this.product = event.product;
    this.productSellerId = event.currentLoggedUserId;
    this.userService.getProductSeller(this.productSellerId)
      .pipe(
        tap((response) => console.log(response))
      )
      .subscribe(
        response => this.productSeller = response,
        error => console.error(error),
        () => console.log('Stream has been closed!')
      );
  }

}
