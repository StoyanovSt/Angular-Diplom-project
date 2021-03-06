import { Component, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserService } from '../../shared/services/user.service';
import { ProductService } from '../../shared/services/product-routes.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnDestroy{
  @ViewChild('form')
  htmlForm!: NgForm;

  serverResponseInfo!: {
    hasError: boolean,
    message: string
  };
  
  choosenQuantityType!: string;
  unsub = new Subscription();

  constructor(
    private router: Router,
    private productService: ProductService,
    private userService: UserService
  ) { }

  createOffertHandler(formData: {
    product: string,
    description: string,
    imageUrl: string,
    price: string,
    units: string
  }): void {
    this.choosenQuantityType = formData.units;           
    this.unsub.add(this.productService.storeProduct(
      formData.product,
      formData.description,
      formData.imageUrl,
      Number(formData.price))
      .pipe(
        map(response => this.serverResponseInfo = response),
      )
      .subscribe(
        response => {
          setTimeout(() => {
            if (this.serverResponseInfo.hasError === false) {
              this.router.navigate([`/user/${this.userService.getCurrentUserName()}/profile`]);
            }
          }, 3000);
        },
        error => {
          this.serverResponseInfo = error.error;
        },
        () => console.log('Stream has been closed!')
      ));

    this.htmlForm.reset();
  }

  ngOnDestroy(): void {
    this.unsub?.unsubscribe();    
  }
}
