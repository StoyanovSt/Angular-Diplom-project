import { Component, Input } from '@angular/core';

import { IProduct } from '../../shared/interfaces/product';
import { UserService } from '../../core/services/user.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  product!: IProduct;

  constructor(private userService: UserService) { }
  
  get isLogged(): boolean {
    return this.userService.isLogged();
  }
}
