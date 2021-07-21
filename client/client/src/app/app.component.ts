import { Component } from '@angular/core';
import { IProduct } from './interfaces/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // serverResponseInfo!: {};

  // eventEmitterHandler(event: Event): void {
  //   this.serverResponseInfo = event;
  // }

  product!: IProduct;

  eventEmitterHandler(event: any): void {
    this.product = event.product;    
  }
}
