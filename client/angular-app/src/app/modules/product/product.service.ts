import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from "src/environments/environment";
import { IProduct } from 'src/app/interfaces/product';
import { UserService } from '../user/user.service';

const apiURL = environment.apiURL;

@Injectable()
export class ProductService {

  constructor(
    private http: HttpClient,
    private userService: UserService) { }

  // ГОТОВ
  storeProduct(
    product: string,
    description: string,
    imageUrl: string,
    price: number
  ): Observable<any> {
    return this.http.post<any>(`${apiURL}/product/create`, {
      product,
      description,
      imageUrl,
      price
    }, {
      headers: {
        'content-type': 'application/json',
        'authorization': `${this.userService.getCurrentUserToken()}`,
      }
    });
  }

  editProduct(product: IProduct): Observable<any> {
    return this.http.post<any>(`${apiURL}/product/60f6a6a9d329e82ea0c43d25/edit`, product, {
      headers: {
        'content-type': 'application/json',
        'authorization': `${this.userService.getCurrentUserToken()}`,
      }
    })
  }

  deleteProduct(): Observable<any> {
    return this.http.get<any>(apiURL + `/product/60f7b0433772d73c04879030/delete`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `${this.userService.getCurrentUserToken()}`,
      }
    });
  }

  getProduct(): Observable<IProduct> {
    return this.http.get<IProduct>(apiURL + `/product/60f6a6a9d329e82ea0c43d25/details`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `${this.userService.getCurrentUserToken()}`,
      }
    });
  }

  likeProduct(countOfLikes: number): Observable<any> {
    return this.http.patch<any>(apiURL + `/product/60f6a70dd329e82ea0c43d26`, {
      countOfLikes,
      currentUser: this.userService.getCurrentUserName()
    }, {
      headers: {
        'content-type': 'application/json',
        'authorization': `${this.userService.getCurrentUserToken()}`,
      }
    });
  }

  getMostLikedProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(apiURL + `/`, {
      headers: {
        'content-type': 'application/json'
      }
    })
  }
}
