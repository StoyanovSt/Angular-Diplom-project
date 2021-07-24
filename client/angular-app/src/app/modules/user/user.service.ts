import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from "src/environments/environment";
import { IUser } from '../../interfaces/user';

const apiURL = environment.apiURL;
let token = '';

if (localStorage.getItem('user')) {
  token = JSON.parse(String(localStorage.getItem('user'))).TOKEN;
}

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(user: IUser): Observable<any> {
    return this.http.post<any>(`${apiURL}/register`, user, {
      headers: {
        'content-type': 'application/json'
      }
    })
  } 

  loginUser(user: IUser): Observable<any> {
    return this.http.post<any>(`${apiURL}/login`, user, {
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  getProductSeller(userId: string): Observable<IUser> {
    return this.http.get<IUser>(apiURL + `/user/:${userId}`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `${token}`,
      }
    });
  }

  getAllUserProducts(userId: string): Observable<any> {
    return this.http.get<any>(apiURL + `/user/${userId}/profile`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `${token}`,
      }
    });
  }
  
}
