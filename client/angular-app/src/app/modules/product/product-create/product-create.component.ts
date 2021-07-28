import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  @ViewChild('form')
  htmlForm!: NgForm;

  constructor(
    private router: Router,
    private productService: ProductService,
    private userService: UserService
  ) { }

  createOffertHandler(formData: any): void {
    this.productService.storeProduct(
      formData.product,
      formData.description,
      formData.imageUrl,
      Number(formData.price))
      .pipe(
        tap(response => console.log(response))
      )
      .subscribe(
        response => this.router.navigate([`/user/${this.userService.getCurrentUserName()}/profile`]),
        error => console.error(error),
        () => console.log('Stream has been closed!')
      );

    this.htmlForm.reset();
  }
}
