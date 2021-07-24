import { Component, OnInit } from '@angular/core';
import { ProductDeleteService } from '../services/product-delete.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(private productDeleteService: ProductDeleteService) { }

  ngOnInit(): void {
    this.productDeleteService.deleteProduct()
      .subscribe(
        error => console.log(error),
        () => ('Stream has been closed!')
      );
  }
}
