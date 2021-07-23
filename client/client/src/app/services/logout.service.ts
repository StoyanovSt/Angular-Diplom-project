import { Injectable } from '@angular/core';

@Injectable()
export class LogoutService {

  constructor() { }

  logout(): void {
    localStorage.removeItem('user');
  }
}
