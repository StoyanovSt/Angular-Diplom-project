import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../../interfaces/product';
import { IUser } from '../../../interfaces/user';
import { ProductService } from '../product.service';
import { map, tap } from 'rxjs/operators';

let currentLoggedUserUsername = '';

if (localStorage.getItem('user')) {
  currentLoggedUserUsername = JSON.parse(String(localStorage.getItem('user'))).USERNAME;
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input()
  currentProduct!: IProduct;
  @Input()
  seller!: IUser;

  currentLoggedUser: string = currentLoggedUserUsername;

  constructor(private productService: ProductService) { }

  likeProductHandler(): void {
    this.productService.likeProduct(1)
      .pipe(
        map((response) => response['product']),
        tap((response) => console.log(response)
        )
      )
      .subscribe(
        response => this.currentProduct = response,
        error => console.error(error),
        () => ('Stream has been closed!')
      )
  }

  ngOnInit(): void {
    console.log(this.seller);
    console.log(this.currentProduct);

  }
}
