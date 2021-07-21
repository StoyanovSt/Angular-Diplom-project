import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from '@angular/core';
import { IProduct } from "../interfaces/product";
import { Observable } from "rxjs";

const apiURL = environment.apiURL;
let token = '';

if (localStorage.getItem('user')) {
  token = JSON.parse(String(localStorage.getItem('user'))).TOKEN;
}

@Injectable()
export class ProductDetailsService {

  constructor(private http: HttpClient) { }

  getProduct(): Observable<IProduct> {
    return this.http.get<IProduct>(apiURL + `/product/60f6a6a9d329e82ea0c43d25/details`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `${token}`,
      }
    });
  }
}
