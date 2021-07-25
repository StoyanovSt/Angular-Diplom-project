import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from "src/environments/environment";
import { IUser } from '../../interfaces/user';

const apiURL = environment.apiURL;
let token = '';

if (localStorage.getItem('user')) {
  token = JSON.parse(String(localStorage.getItem('user'))).TOKEN;
}

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  isLogged(): boolean {
    return localStorage.getItem('user') ? true : false;
  }

  // ГОТОВ
  registerUser(
    username: string,
    eMail: string,
    password: string,
    rePassword: string
  ): Observable<any> {
    return this.http.post<any>(`${apiURL}/register`, {
      username,
      eMail,
      password,
      rePassword
    }, {
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  // ГОТОВ
  loginUser(
    username: string,
    password: string
  ): Observable<any> {
    return this.http.post<any>(`${apiURL}/login`, {
      username,
      password
    }, {
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  // ГОТОВ
  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
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
