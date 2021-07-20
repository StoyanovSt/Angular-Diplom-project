import { Component } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { CreateOffertService } from '../services/create-offert.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  product: IProduct = {
    product: '',
    description: '',
    imageUrl: '',
    price: 0,
  }

  constructor(private createOffertService: CreateOffertService) { }

  createOffertHandler(args: Array<any>): void {
    args[0].preventDefault();
    this.product.product = args[1].value;
    this.product.description = args[2].value;
    this.product.imageUrl = args[3].value;
    this.product.price = Number(args[4].value);

    this.createOffertService
      .storeProduct(this.product)
      .subscribe(
        error => console.error(error),
        () => console.log('Stream has been closed!')
      );

    args[1].value = '';
    args[2].value = '';
    args[3].value = '';
    args[4].value = '';
  }
}
