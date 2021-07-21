import { Component } from '@angular/core';
import { IProduct } from './interfaces/product';
import { IUser } from './interfaces/user';
import { GetCurrentUserService } from './services/get-current-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private getCurrentUserService: GetCurrentUserService) { }
  // serverResponseInfo!: {};

  // eventEmitterHandler(event: Event): void {
  //   this.serverResponseInfo = event;
  // }

  product!: IProduct;
  productSellerId!: string;
  productSeller!: IUser;

  eventEmitterHandler(event: any): void {
    this.product = event.product;
    this.productSellerId = event.currentLoggedUserId;
    this.getCurrentUserService.getProductSeller(this.productSellerId).subscribe(
      response => this.productSeller = response,
      error => console.error(error),
      () => console.log('Stream has been closed!')
    );
  }

}
