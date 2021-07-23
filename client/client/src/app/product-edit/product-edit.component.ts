import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { ProductDetailsService } from '../services/product-details.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product!: IProduct;

  constructor(private productDetailsService: ProductDetailsService) { }

  ngOnInit(): void {
    this.productDetailsService.getProduct()
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

}
