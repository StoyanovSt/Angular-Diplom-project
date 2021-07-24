import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiURL = environment.apiURL;
let currentUser = 'Ivan';
let token = '';

if (localStorage.getItem('user')) {
  // currentUser = JSON.parse(String(localStorage.getItem('user'))).USERNAME;
  // token = JSON.parse(String(localStorage.getItem('user'))).TOKEN;
}

@Injectable()
export class LikeProductService {

  constructor(private http: HttpClient) { }

  likeProduct(countOfLikes: number): Observable<any> {
    return this.http.patch<any>(apiURL + `/product/60f6a70dd329e82ea0c43d26`, { countOfLikes, currentUser }, {
      headers: {
        'content-type': 'application/json',
        'authorization': `${token}`,
      }
    });
  }
}
