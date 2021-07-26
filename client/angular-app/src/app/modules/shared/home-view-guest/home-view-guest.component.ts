import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-home-view-guest',
  templateUrl: './home-view-guest.component.html',
  styleUrls: ['./home-view-guest.component.css']
})
export class HomeViewGuestComponent implements OnInit {
  mostRecentOfferts!: IProduct[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getMostLikedProducts()
      .pipe(
        tap(response => console.log(response))
      )
      .subscribe(
        response => this.mostRecentOfferts = response,
        error => console.error(error),
        () => (console.log('Stream has been closed!'))
      )
  }
}
