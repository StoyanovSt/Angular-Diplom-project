import { Component, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  @ViewChild('form')
  htmlForm!: NgForm;

  serverResponseInfo!: {
    hasError: boolean,
    message: string
  };

  unsub!: Subscription;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  signInHandler(formData: {
    username: string,
    password: string,
  }): void {        
    this.unsub = this.userService
      .loginUser(
        formData.username,
        formData.password
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

    this.htmlForm.reset();
  }

  ngOnDestroy(): void {
    this.unsub?.unsubscribe();
  }
}
