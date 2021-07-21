import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { IProduct } from "../interfaces/product";

const apiURL = environment.apiURL;

@Injectable()
export class GetAllProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(apiURL + `/`, {
      headers: {
        'content-type': 'application/json'
      }
    })
  }
}
