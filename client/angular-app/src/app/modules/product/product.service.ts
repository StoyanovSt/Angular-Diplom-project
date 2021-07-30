import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from "src/environments/environment";
import { UserService } from '../user/user.service';

const apiURL = environment.apiURL;
const apiURLProduct = environment.apiURL + '/product';

@Injectable()
export class ProductService {

  constructor(
    private http: HttpClient,
    private userService: UserService) { }

  getProduct(productId: string): Observable<any> {
    return this.http.get<any>(apiURLProduct + `/${productId}/details`, {
      headers: {
        'content-type': 'application/json',
      }
    });
  }

  getProductForEdditingPurpose(productId: string): Observable<any> {
    return this.http.get<any>(apiURLProduct + `/${productId}/edit`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `${this.userService.getCurrentUserToken()}`
      }
    });
  }

  getAllProducts(): Observable<any> {
    return this.http.get<any>(apiURL + `/home`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `${this.userService.getCurrentUserToken()}`,
      }
    });
  }

  getAllSearchedProducts(searchedCriteria: string): Observable<any> {
    return this.http.get<any>(apiURL + `/${searchedCriteria}`, {
      headers: {
        'content-type': 'application/json',
      }
    });
  }

  storeProduct(
    product: string,
    description: string,
    imageUrl: string,
    price: number
  ): Observable<any> {
    return this.http.post<any>(`${apiURLProduct}/create`, {
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

  editProduct(
    product: string,
    description: string,
    imageUrl: string,
    price: number,
    productId: string
  ): Observable<any> {
    return this.http.post<any>(`${apiURLProduct}/${productId}/edit`, {
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

  deleteProduct(productId: string): Observable<any> {
    return this.http.get<any>(apiURLProduct + `/${productId}/delete`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `${this.userService.getCurrentUserToken()}`,
      }
    });
  }

  likeProduct(productId: string, countOfLikes: number): Observable<any> {
    return this.http.patch<any>(apiURLProduct + `/${productId}/like`, {
      countOfLikes,
      currentUser: this.userService.getCurrentUserName()
    }, {
      headers: {
        'content-type': 'application/json',
        'authorization': `${this.userService.getCurrentUserToken()}`,
      }
    });
  }

  getMostLikedProducts(): Observable<any> {
    return this.http.get<any>(apiURL + '/', {
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
