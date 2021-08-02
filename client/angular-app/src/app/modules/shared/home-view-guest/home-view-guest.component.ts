import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  @ViewChild('form')
  htmlForm!: NgForm;
  mostRecentOfferts!: IProduct[];
  searchedProducts!: IProduct[];
  unsubForGettingMostLikedProducts!: Subscription;
  unsubForGettingAllSearchedProducts!: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.unsubForGettingMostLikedProducts = this.productService.getMostLikedProducts()
      .subscribe(
        response => this.mostRecentOfferts = response,
        error => console.error(error),
        () => console.log('Stream has been closed!')
      )
  }

  searchHandler(formData: any): void {
    this.unsubForGettingAllSearchedProducts = this.productService.getAllSearchedProducts(formData.search)
      .pipe(
        map(response => this.searchedProducts = response)
      )
      .subscribe(
        response => { },
        error => console.error(error),
        () => console.log('Stream has been closed!')
      )

    this.htmlForm.reset();
  }

  ngOnDestroy(): void {
    this.unsubForGettingMostLikedProducts?.unsubscribe();
    this.unsubForGettingAllSearchedProducts?.unsubscribe();
  }
}
