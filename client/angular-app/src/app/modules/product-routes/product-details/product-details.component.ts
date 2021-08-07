import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map} from 'rxjs/operators';

import { UserService } from '../../core/services/user.service';
import { ProductService } from '../../core/services/product-routes.service';
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
  serverResponseInfo!: {
    hasError: boolean,
    message: string
  };
  unsubForGettingProduct!: Subscription;
  unsubForDeletingProduct!: Subscription;
  unsubForBuyingProduct!: Subscription;
  unsubForLikingProduct!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private userService: UserService
  ) { }

  get isCurrentLoggedUserOwnerOfProduct(): boolean {
    return this.userService.isCurrentLoggedUserOwnerOfProduct(this.user?.username, this.userService.getCurrentUserName());
  }

  get isCurrentLoggedUserAdmin(): boolean {
    return this.userService.getCurrentUserName() === 'ADMIN';
  }

  get isCurrentUserHasAlreadyLikedTheProduct(): boolean {
    return this.product?.peopleLikedProduct.includes(this.userService.getCurrentUserName()) ? true : false;
  }

  ngOnInit(): void {
    this.unsubForGettingProduct = this.productService.getProduct(this.activatedRoute.snapshot.params.productId)
      .pipe(
        map(response => {
          this.product = response['product'];
          this.user = response['user'];
        })
      )
      .subscribe(
        response => { },
        error => console.error(error),
        () => console.log('Stream has been closed!')
      );
  }

  productDeleteHandler(): void {
    if (window.confirm("Are you sure that you want to delete this product?")) {
      this.unsubForDeletingProduct = this.productService.deleteProduct(this.product._id)
        .pipe(
          map(response => this.serverResponseInfo = response),
        )
        .subscribe(
          response => {
            setTimeout(() => {
              if (this.serverResponseInfo.hasError === false) {
                this.router.navigate(['/home']);
              }
            }, 3000);
          },
          error => {
            this.serverResponseInfo = error.error;
          },
          () => console.log('Stream has been closed!')
        );
    }
  }

  productBuyHandler(): void {
    if (window.confirm("Are you sure that you want to buy this product?")) {
      this.unsubForBuyingProduct = this.productService.deleteProduct(this.product._id)
      .pipe(
        map(response => this.serverResponseInfo = response),
      )
        .subscribe(
          response => {
            setTimeout(() => {
              if (this.serverResponseInfo.hasError === false) {
                this.router.navigate(['/home']);
              }
            }, 3000);
          },
          error => {
            this.serverResponseInfo = error.error;
          },
          () => console.log('Stream has been closed!')
        );
    }
  }

  likeProductHandler(): void {
    this.unsubForLikingProduct = this.productService.likeProduct(this.product._id, this.product.likes + 1)
      .pipe(
        map((response) => this.product = response['product']),
      )
      .subscribe(
        response => { },
        error => console.error(error),
        () => console.log('Stream has been closed!')
      );
  }

  ngOnDestroy(): void {
    this.unsubForGettingProduct?.unsubscribe();
    this.unsubForDeletingProduct?.unsubscribe();
    this.unsubForBuyingProduct?.unsubscribe();
    this.unsubForLikingProduct?.unsubscribe();
  }
}
