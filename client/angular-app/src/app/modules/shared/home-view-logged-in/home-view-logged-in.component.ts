import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { IProduct } from '../../../interfaces/product';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-home-view-logged-in',
  templateUrl: './home-view-logged-in.component.html',
  styleUrls: ['./home-view-logged-in.component.css']
})
export class HomeViewLoggedInComponent implements OnInit, OnDestroy {
  products!: IProduct[];
  unsub!: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.unsub = this.productService.getAllProducts()
      .subscribe(
        response => this.products = response,
        error => console.error(error),
        () => console.log('Stream has been closed!')
      )
  }
  ngOnDestroy(): void {
    this.unsub.unsubscribe();
  }
}
