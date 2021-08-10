import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from '../services/user.service';

@Injectable()
export class JwtInterceptorService implements HttpInterceptor{

  constructor(private userService: UserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // clone the outgoing request first
    let request = req.clone({
      setHeaders: {
        'content-type': 'application/json',
        'authorization': `${this.userService.getCurrentUserToken()}`
      }
    });

    return next.handle(request);
  }
}
