import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { ProductService } from '../product.service';
import { UserService } from '../../user/user.service';
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
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private userService: UserService
  ) { }

  get isCurrentLoggedUserOwnerOfProduct(): boolean {
    return this.userService.isCurrentLoggedUserOwnerOfProduct(this.user.username, this.userService.getCurrentUserName());
  }

  get isCurrentLoggedUserAdmin():boolean {
    return this.userService.getCurrentUserName() === 'ADMIN';
  }

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

  productDeleteHandler(): void {
    this.productService.deleteProduct(this.product._id)
      .subscribe(
        // ЗА НОТИФИКАЦИЯ ЩЕ МИ ТРЯБВА RESPONSA ОТ БАЗАТА
        error => console.log(error),
        () => console.log('Stream has been closed!')
      );
  }

  likeProductHandler(): void {
    this.productService.likeProduct(this.product._id, this.product.likes + 1)
      .pipe(
        map((response) => this.product = response['product']),
      )
      .subscribe(
        error => console.error(error),
        () => console.log('Stream has been closed!')
      );
  }
}
