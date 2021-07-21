import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { IUser } from '../interfaces/user';

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

  constructor() { }

  ngOnInit(): void {
    console.log(this.seller);
    console.log(this.currentProduct);
    
    
  }
}
