import { HttpClient } from "@angular/common/http";
import { IUser } from "../interfaces/user";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

const apiURL = environment.apiURL;

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerUser(user: IUser): Observable<any> {
    return this.http.post<any>(`${apiURL}/register`, user, {
      headers: {
        'content-type': 'application/json'
      }
    })
  }
}
