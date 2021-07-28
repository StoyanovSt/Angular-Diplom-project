import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { IProduct } from '../../../interfaces/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @ViewChild('form')
  htmlForm!: NgForm;

  getProductResponseInfo!: {
    product: IProduct,
    currentLoggedUserId: string;
  }

  productId: string = this.activatedRoute.snapshot.params.productId;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.productService.getProduct(this.productId)
      .subscribe(
        response => this.getProductResponseInfo = response,
        error => console.error(error),
        () => console.log('Stream has been closed!')
      );
  }

  editProductHandler(formData: any): void {
    this.productService.editProduct(
      formData.product,
      formData.description,
      formData.imageUrl,
      Number(formData.price),
      this.productId
    ).pipe(
      map(response => {
        this.getProductResponseInfo.product = response['product'];
      })
    )
      .subscribe(
        response => this.router.navigate([`/product/${this.productId}/details`]),
        error => console.error(error),
        () => console.log('Stream has been closed')
      )

    this.htmlForm.reset();
  }
}
