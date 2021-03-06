import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { IProduct } from '../../shared/interfaces/product';
import { ProductService } from '../../shared/services/product-routes.service';

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
  unsub = new Subscription();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.unsub.add(this.productService.getMostLikedProducts()
        .subscribe(
          response => this.mostRecentOfferts = response,
          error => console.error(error),
          () => console.log('Stream has been closed!')
        ));
  }

  searchHandler(formData: any): void {
    this.unsub.add(this.productService.getAllSearchedProducts(formData.search)
        .subscribe(
          response => this.searchedProducts = response,
          error => console.error(error),
          () => console.log('Stream has been closed!')
        ));

    this.htmlForm.reset();
  }

  ngOnDestroy(): void {
    this.unsub?.unsubscribe();
  }
}
