import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { UserService } from '../../user/user.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  constructor(
    private router: Router,
    private productService: ProductService,
    private userService: UserService
  ) { }

  createOffertHandler(args: Array<any>): void {
    args[0].preventDefault();

    this.productService.storeProduct(
      args[1].value,
      args[2].value,
      args[3].value,
      Number(args[4].value))
      .pipe(
        tap(response => console.log(response))
      )
      .subscribe(
        response => this.router.navigate([`/user/${this.userService.getCurrentUserName()}/profile`]),
        error => console.error(error),
        () => console.log('Stream has been closed!')
      );

    args[1].value = '';
    args[2].value = '';
    args[3].value = '';
    args[4].value = '';
  }
}
