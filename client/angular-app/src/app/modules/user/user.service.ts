import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from "src/environments/environment";

const apiURL = environment.apiURL;

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

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
  getCurrentUserName(): string {
    return localStorage.getItem('user') ? JSON.parse(String(localStorage.getItem('user'))).USERNAME : '';
  }

  // РАБОТИ
  getCurrentUserToken(): string {
    return localStorage.getItem('user') ? JSON.parse(String(localStorage.getItem('user'))).TOKEN : '';
  }

  // ГОТОВ
  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  getCurrentUserInfo(username: string): Observable<any> {
    return this.http.get<any>(apiURL + `/user/${username}/profile`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `${this.getCurrentUserToken()}`,
      }
    });
  }
}
