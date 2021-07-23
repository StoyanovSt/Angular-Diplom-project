import { HttpClient } from "@angular/common/http";
import { IProduct } from "../interfaces/product";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

const apiURL = environment.apiURL;
let token = '';

if (localStorage.getItem('user')) {
  token = JSON.parse(String(localStorage.getItem('user'))).TOKEN;
}

@Injectable()
export class EditOffertService {

  constructor(private http: HttpClient) { }

  editProduct(product: IProduct): Observable<any> {
    return this.http.post<any>(`${apiURL}/product/60f6a6a9d329e82ea0c43d25/edit`, product, {
      headers: {
        'content-type': 'application/json',
        'authorization': `${token}`,
      }
    })
  }
}
