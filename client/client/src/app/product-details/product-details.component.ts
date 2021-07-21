import { Component, Input } from '@angular/core';
import { IProduct } from '../interfaces/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input()
  currentProduct!: IProduct;
  constructor() { }
}
