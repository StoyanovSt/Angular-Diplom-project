import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from "src/environments/environment";
import { IProduct } from 'src/app/modules/shared/interfaces/product';

const apiURL = environment.apiURL;

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  isLogged(): boolean {
    return localStorage.getItem('user') ? true : false;
  }

  isCurrentLoggedUserOwnerOfProduct(productSellerUsername: string, loggedUserUsername: string): boolean {
    return productSellerUsername === loggedUserUsername;
  }

  registerUser(
    username: string,
    eMail: string,
    password: string,
    rePassword: string
  ): Observable<{
    hasError: boolean,
    message: string
  }> {
    return this.http.post<{
      hasError: boolean,
      message: string
    }>(`${apiURL}/register`, {
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

  loginUser(
    username: string,
    password: string
  ): Observable<{
    message: string,
    token: string,
    username: string,
    hasError: boolean,
  }> {
    return this.http.post<{
      message: string,
      token: string,
      username: string,
      hasError: boolean,
    }>(`${apiURL}/login`, {
      username,
      password
    }, {
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  getCurrentUserName(): string {
    return localStorage.getItem('user') ? JSON.parse(String(localStorage.getItem('user'))).USERNAME : '';
  }

  getCurrentUserToken(): string {
    return localStorage.getItem('user') ? JSON.parse(String(localStorage.getItem('user'))).TOKEN : '';
  }

  getCurrentUserInfo(username: string): Observable<{
    username: string,
    products: IProduct[]
  }> {
    return this.http.get<{
      username: string,
      products: []
    }>(apiURL + `/user/${username}/profile`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `${this.getCurrentUserToken()}`,
      }
    });
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
