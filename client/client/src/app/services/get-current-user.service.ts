import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { IUser } from "../interfaces/user";

const apiURL = environment.apiURL;
let token = '';

if (localStorage.getItem('user')) {
  token = JSON.parse(String(localStorage.getItem('user'))).TOKEN;
}

@Injectable()
export class GetCurrentUserService {

  constructor(private http: HttpClient) { }

  getProductSeller(userId: string): Observable<IUser> {
    return this.http.get<IUser>(apiURL + `/user/:${userId}`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `${token}`,
      }
    });
  }
}
