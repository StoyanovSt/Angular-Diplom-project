import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../../interfaces/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  product!: IProduct;
  @Input()
  productInfo!: IProduct;
  
  @Output()
  serverResponseEmitter: EventEmitter<any> = new EventEmitter();

  constructor(private productService: ProductService) { }

  productDetailsHandler(event: MouseEvent): void {
    this.productService.getProduct('60fd5cfd329c281ee4f8ca90').subscribe(
      response => this.serverResponseEmitter.emit(response),
      error => console.error(error),
      () => console.log('Stream has been closed!')
    )
  }

  ngOnInit():void {
    
  }
}
