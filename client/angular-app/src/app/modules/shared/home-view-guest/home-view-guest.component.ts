import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-home-view-guest',
  templateUrl: './home-view-guest.component.html',
  styleUrls: ['./home-view-guest.component.css']
})
export class HomeViewGuestComponent implements OnInit, OnDestroy {
  mostRecentOfferts!: IProduct[];
  searchedProducts!: IProduct[];
  unsub!: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.unsub = this.productService.getMostLikedProducts()
      .subscribe(
        response => this.mostRecentOfferts = response,
        error => console.error(error),
        () => console.log('Stream has been closed!')
      )
  }

  searchHandler(event: MouseEvent, searchedCriteria: HTMLInputElement): void {
    event.preventDefault();

    this.unsub = this.productService.getAllSearchedProducts(searchedCriteria.value)
      .pipe(
        map(response => this.searchedProducts = response)
      )
      .subscribe(
        response => { },
        error => console.error(error),
        () => console.log('Stream has been closed!')
      )

    searchedCriteria.value = '';
  }

  ngOnDestroy(): void {
    this.unsub?.unsubscribe();
  }
}
