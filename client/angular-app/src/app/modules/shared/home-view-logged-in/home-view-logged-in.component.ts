import { Component, OnInit } from '@angular/core';

import { IProduct } from '../../../interfaces/product';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-home-view-logged-in',
  templateUrl: './home-view-logged-in.component.html',
  styleUrls: ['./home-view-logged-in.component.css']
})
export class HomeViewLoggedInComponent implements OnInit {
  products!: IProduct[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts()
      .subscribe(
        response => this.products = response,
        error => console.error(error),
        () => (console.log('Stream has been closed!'))
      )
  }
}
