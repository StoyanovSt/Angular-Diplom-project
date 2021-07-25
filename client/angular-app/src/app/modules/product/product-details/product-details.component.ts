import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { ProductService } from '../product.service';
import { IProduct } from 'src/app/interfaces/product';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product!: IProduct;
  user!: IUser;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.productService.getProduct(this.activatedRoute.snapshot.params.productId)
      .pipe(
        map(response => {
          this.product = response['product'];
          this.user = response['user'];
        })
      )
      .subscribe(
        error => console.error(error),
        () => console.log('Stream has been closed!')
      );
  }

  likeProductHandler(): void {
    // this.productService.likeProduct(1)
    //   .pipe(
    //     map((response) => response['product']),
    //     tap((response) => console.log(response)
    //     )
    //   )
    //   .subscribe(
    //     response => this.currentProduct = response,
    //     error => console.error(error),
    //     () => ('Stream has been closed!')
    //   )
  }

  productDeleteHandler(): void {
    // this.productService.deleteProduct()
    //   .subscribe(
    //     error => console.log(error),
    //     () => ('Stream has been closed!')
    //   );
  }

}
