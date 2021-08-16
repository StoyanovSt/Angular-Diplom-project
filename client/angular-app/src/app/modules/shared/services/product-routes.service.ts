import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from './user.service';
import { IProduct } from '../interfaces/product';
import { IUser } from '../interfaces/user';

import { environment } from "../../../../environments/environment";

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
    }>(apiURLProduct + `/${productId}/details`);
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
    }>(apiURLProduct + `/${productId}/edit`);
  }

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(apiURL + `/home`);
  }

  getAllSearchedProducts(searchedCriteria: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(apiURL + `/${searchedCriteria}`);
  }

  getMostLikedProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(apiURL + '/');
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
    });
  }

  deleteProduct(productId: string): Observable<{
    message: string,
    hasError: boolean
  }> {
    return this.http.get<{
      message: string,
      hasError: boolean
    }>(apiURLProduct + `/${productId}/delete`);
  }

  likeProduct(productId: string, countOfLikes: number): Observable<{
    product: IProduct
  }> {
    return this.http.patch<{
      product: IProduct
    }>(apiURLProduct + `/${productId}/like`, {
      countOfLikes,
      currentUser: this.userService.getCurrentUserName()
    });
  }

}
