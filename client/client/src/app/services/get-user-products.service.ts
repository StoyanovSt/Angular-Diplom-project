import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { IProduct } from "../interfaces/product";

const apiURL = environment.apiURL;
let token = '';

if (localStorage.getItem('user')) {
  token = JSON.parse(String(localStorage.getItem('user'))).TOKEN;
}

@Injectable()
export class GetUserProductsService {

  constructor(private http: HttpClient) { }

  getProductSeller(userId: string): Observable<any> {
    return this.http.get<any>(apiURL + `/user/${userId}/profile`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `${token}`,
      }
    });
  }
}

