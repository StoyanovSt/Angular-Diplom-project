import { Component, EventEmitter, Output } from '@angular/core';
import { ProductDetailsService } from '../services/product-details.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Output()
  serverResponseEmitter: EventEmitter<any> = new EventEmitter();

  constructor(private productDetailsService: ProductDetailsService) { }

  productDetailsHandler(event: Event): void {
    this.productDetailsService.getProduct().subscribe(
      response => this.serverResponseEmitter.emit(response),
      error => console.error(error),
      () => console.log('Stream has been closed!')
    )
  }
}
