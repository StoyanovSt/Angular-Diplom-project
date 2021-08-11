import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map} from 'rxjs/operators';

import { UserService } from '../../shared/services/user.service';
import { ProductService } from '../../shared/services/product-routes.service';
import { IProduct } from '../../shared/interfaces/product';
import { IUser } from '../../shared/interfaces/user';

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

  unsub = new Subscription();

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
    this.unsub.add(this.productService.getProduct(this.activatedRoute.snapshot.params.productId)
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
      ));
  }

  productDeleteHandler(): void {
    if (window.confirm("Are you sure that you want to delete this product?")) {
      this.unsub.add(this.productService.deleteProduct(this.product._id)
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
        ));
    }
  }

  productBuyHandler(): void {
    if (window.confirm("Are you sure that you want to buy this product?")) {
      this.unsub.add(this.productService.deleteProduct(this.product._id)
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
        ));
    }
  }

  likeProductHandler(): void {
    this.unsub.add(this.productService.likeProduct(this.product._id, this.product.likes + 1)
      .pipe(
        map((response) => this.product = response['product']),
      )
      .subscribe(
        response => { },
        error => console.error(error),
        () => console.log('Stream has been closed!')
      ));
  }

  ngOnDestroy(): void {
    this.unsub?.unsubscribe();
  }
}
