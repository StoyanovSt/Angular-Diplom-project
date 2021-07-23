import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiURL = environment.apiURL;
let token = '';

if (localStorage.getItem('user')) {
  token = JSON.parse(String(localStorage.getItem('user'))).TOKEN;
}

@Injectable()
export class ProductDeleteService {

  constructor(private http: HttpClient) { }

  deleteProduct(): Observable<any> {
    return this.http.get<any>(apiURL + `/product/60f7b0433772d73c04879030/delete`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `${token}`,
      }
    });
  }
}
