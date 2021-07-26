import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduct } from '../../../interfaces/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  getProductResponseInfo!: {
    product: IProduct,
    currentLoggedUserId: string;
  }

  getEdittedProductResponseInfo!: {
    product: IProduct,
    hasError: boolean,
    message: string;
  }

  productId: string = this.activatedRoute.snapshot.params.productId;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.getProduct(this.productId)
      .subscribe(
        response => this.getProductResponseInfo = response,
        error => console.error(error),
        () => console.log('Stream has been closed!')
      );
  }

  editProductHandler(args: Array<any>): void {
    args[0].preventDefault();

    args[1].value;
    args[2].value;
    args[3].value;
    Number(args[4].value);

    this.productService.editProduct(
      args[1].value,
      args[2].value,
      args[3].value,
      Number(args[4].value),
      this.productId
    ).subscribe(
      response => this.getEdittedProductResponseInfo = response,
      error => console.error(error),
      () => console.log('Stream has been closed')
    )

    args[1].value = '';
    args[2].value = '';
    args[3].value = '';
    args[4].value = '';
  }
}
