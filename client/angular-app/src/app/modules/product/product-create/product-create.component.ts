import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  constructor(private productService: ProductService) { }

  createOffertHandler(args: Array<any>): void {
    args[0].preventDefault();

    this.productService.storeProduct(
      args[1].value,
      args[2].value,
      args[3].value,
      Number(args[4].value))
      .pipe(
        tap(response => console.log(response)
        )
      )
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
