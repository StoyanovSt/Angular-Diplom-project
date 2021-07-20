import { HttpClient } from "@angular/common/http";
import { IUser } from "../interfaces/user";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

const apiURL = environment.apiURL;

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUser(user: IUser): Observable<any> {
    return this.http.post<any>(`${apiURL}/login`, user, {
      headers: {
        'content-type': 'application/json'
      }
    })
  }
}
