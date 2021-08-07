import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product';
import { IUser } from 'src/app/interfaces/user';

import { environment } from "src/environments/environment";
import { UserService } from '../services/user.service';

const apiURL = environment.apiURL;
const apiURLProduct = environment.apiURL + '/product';

@Injectable()
export class ProductService {

  constructor(
    private http: HttpClient,
    private userService: UserService) { }

  getProduct(productId: string): Observable<{
    product: IProduct,
    user: IUser
  }> {
    return this.http.get<{
      product: IProduct,
      user: IUser
    }>(apiURLProduct + `/${productId}/details`, {
      headers: {
        'content-type': 'application/json',
      }
    });
  }

  getProductForEdditingPurpose(productId: string): Observable<{
    product: IProduct,
    notification: {
      hasError: boolean,
      message: string,
    }
  }> {
    return this.http.get<{
      product: IProduct,
      notification: {
        hasError: boolean,
        message: string,
      }
    }>(apiURLProduct + `/${productId}/edit`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `${this.userService.getCurrentUserToken()}`
      }
    });
  }

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(apiURL + `/home`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `${this.userService.getCurrentUserToken()}`,
      }
    });
  }

  getAllSearchedProducts(searchedCriteria: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(apiURL + `/${searchedCriteria}`, {
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
  ): Observable<{
    hasError: boolean,
    message: string,
  }> {
    return this.http.post<{
      hasError: boolean,
      message: string,
    }>(`${apiURLProduct}/create`, {
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
  ): Observable<{
    product: IProduct,
    notification: {
      hasError: boolean,
      message: string,
    }
  }> {
    return this.http.post<{
      product: IProduct,
      notification: {
        hasError: boolean,
        message: string,
      }
    }>(`${apiURLProduct}/${productId}/edit`, {
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

  deleteProduct(productId: string): Observable<{
    message: string,
    hasError: boolean
  }> {
    return this.http.get<{
      message: string,
      hasError: boolean
    }>(apiURLProduct + `/${productId}/delete`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `${this.userService.getCurrentUserToken()}`,
      }
    });
  }

  likeProduct(productId: string, countOfLikes: number): Observable<{
    product: IProduct
  }> {
    return this.http.patch<{
      product: IProduct
    }>(apiURLProduct + `/${productId}/like`, {
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
    return this.http.get<IProduct[]>(apiURL + '/', {
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
