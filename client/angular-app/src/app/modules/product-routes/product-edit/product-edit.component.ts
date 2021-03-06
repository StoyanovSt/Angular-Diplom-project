import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProductService } from '../../shared/services/product-routes.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnDestroy {
  @ViewChild('form')
  htmlForm!: NgForm;

  serverResponseInfo!: {
    hasError: boolean,
    message: string,
  };

  getProductResponseInfo!: {
    product: string,
    description: string,
    imageUrl: string,
    price: number
  }

  unsub = new Subscription();
  productId: string = this.activatedRoute.snapshot.params.productId;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.unsub.add(this.productService.getProductForEdditingPurpose(this.productId)
      .subscribe(response => {
        this.getProductResponseInfo = response['product'];
        this.serverResponseInfo = response['notification'];
      },
        error => {
          this.serverResponseInfo = error.error;
        },
        () => console.log('Stream has been closed!')
    ));
  }

  editProductHandler(formData: {
    product: string,
    description: string,
    imageUrl: string,
    price: string
  }): void {
    this.unsub.add(this.productService.editProduct(
      formData.product,
      formData.description,
      formData.imageUrl,
      Number(formData.price),
      this.productId
    )
      .subscribe(response => {
        this.getProductResponseInfo = response['product'];
        this.serverResponseInfo = response['notification'];

        setTimeout(() => {
          if (this.serverResponseInfo.hasError === false) {
            this.router.navigate([`/product/${this.productId}/details`]);
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
