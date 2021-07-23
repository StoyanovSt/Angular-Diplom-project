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
export class GetAllProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(apiURL + `/home`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `${token}`,
      }
    })
  }
}
