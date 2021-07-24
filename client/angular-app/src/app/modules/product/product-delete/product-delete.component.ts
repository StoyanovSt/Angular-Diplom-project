import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.deleteProduct()
      .subscribe(
        error => console.log(error),
        () => ('Stream has been closed!')
      );
  }
}
