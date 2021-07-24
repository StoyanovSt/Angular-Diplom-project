import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from "src/environments/environment";
import { IProduct } from 'src/app/modules/shared/interfaces/product';

const apiURL = environment.apiURL;
let currentUser = 'Ivan';
let token = '';

if (localStorage.getItem('user')) {
  token = JSON.parse(String(localStorage.getItem('user'))).TOKEN;
  // currentUser = JSON.parse(String(localStorage.getItem('user'))).USERNAME;
}

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  storeProduct(product: IProduct): Observable<any> {
    return this.http.post<any>(`${apiURL}/product/create`, product, {
      headers: {
        'content-type': 'application/json',
        'authorization': `${token}`,
      }
    })
  }

  editProduct(product: IProduct): Observable<any> {
    return this.http.post<any>(`${apiURL}/product/60f6a6a9d329e82ea0c43d25/edit`, product, {
      headers: {
        'content-type': 'application/json',
        'authorization': `${token}`,
      }
    })
  }

  deleteProduct(): Observable<any> {
    return this.http.get<any>(apiURL + `/product/60f7b0433772d73c04879030/delete`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `${token}`,
      }
    });
  }

  getProduct(): Observable<IProduct> {
    return this.http.get<IProduct>(apiURL + `/product/60f6a6a9d329e82ea0c43d25/details`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `${token}`,
      }
    });
  }

  likeProduct(countOfLikes: number): Observable<any> {
    return this.http.patch<any>(apiURL + `/product/60f6a70dd329e82ea0c43d26`, { countOfLikes, currentUser }, {
      headers: {
        'content-type': 'application/json',
        'authorization': `${token}`,
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
