import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { GetAllProductsService } from '../services/get-all-products.service';

@Component({
  selector: 'app-home-view-logged-in',
  templateUrl: './home-view-logged-in.component.html',
  styleUrls: ['./home-view-logged-in.component.css']
})
export class HomeViewLoggedInComponent implements OnInit {
  @Output()
  serverResponseEmitter: EventEmitter<any> = new EventEmitter();

  products!: IProduct[];

  constructor(private getAllProductsService: GetAllProductsService) { }

  eventEmitterHandler(event: Event): void {
    this.serverResponseEmitter.emit(event);
  }

  ngOnInit(): void {
    this.getAllProductsService.getAllProducts()
      .subscribe(
        response => this.products = response,
        error => console.error(error),
        () => console.log(this.products)
      );
  }
}
