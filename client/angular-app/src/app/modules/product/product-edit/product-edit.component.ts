import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { IProduct } from '../../../interfaces/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product!: IProduct;

  edittedProduct: IProduct = {
    
    product: '',
    description: '',
    imageUrl: '',
    price: 0,
    
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProduct()
      .pipe(
        map((response) => Object(response.product)),
        tap(response => console.log(response)
        )
      )
      .subscribe(
        (product) => this.product = product,
        error => console.error(error),
        () => console.log('Stream has been closed!')
      );
  }

  editProductEventHandler(args: Array<any>): void {
    args[0].preventDefault();

    this.edittedProduct.product = args[1].value;
    this.edittedProduct.description = args[2].value;
    this.edittedProduct.imageUrl = args[3].value;
    this.edittedProduct.price = args[4].value;

    this.productService.editProduct(this.edittedProduct)
      .subscribe(
        error => console.error(error),
        () => console.log('Stream has been closed')
      )

    args[1].value = '';
    args[2].value = '';
    args[3].value = '';
    args[4].value = '';
  }

}
