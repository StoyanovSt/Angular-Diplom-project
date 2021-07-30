import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  serverResponseInfo!: {
    hasError: boolean,
    message: string
  };

  unsub!: Subscription;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  signInHandler(args: Array<any>): void {
    args[0].preventDefault();

    this.unsub = this.userService
      .loginUser(
        args[1].value,
        args[2].value
      ).pipe(
        map(response => this.serverResponseInfo = response),
      )
      .subscribe(
        response => {
          localStorage.setItem('user', JSON.stringify({ TOKEN: response.token, USERNAME: response.username }));
          setTimeout(() => {
            if (this.serverResponseInfo.hasError === false) {
              this.router.navigate(['/home']);
            }
          }, 3000);
        },
        error => {
          this.serverResponseInfo = error.error;
        },
        () => console.log('Stream has been closed!')
      );

    args[1].value = '';
    args[2].value = '';
  }

  ngOnDestroy(): void {
    this.unsub?.unsubscribe();
  }
}
