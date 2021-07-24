import { Component, OnInit } from '@angular/core';
import { GetUserProductsService } from '../../services/get-user-products.service';
import { map } from 'rxjs/operators';
import { IProduct } from '../../interfaces/product';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userInfo!: any;

  constructor(private getUserProductsService: GetUserProductsService) { }

  ngOnInit(): void {
    this.getUserProductsService.getProductSeller('60f69cb5c4ad992264187200')
      .subscribe(
        response => this.userInfo = response,
        error => console.error(error),
        () => (console.log(this.userInfo)
        )
      );
  }
}
