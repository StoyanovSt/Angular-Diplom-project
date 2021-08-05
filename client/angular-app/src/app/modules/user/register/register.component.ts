import { Component, OnDestroy, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy {
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

  signUpHandler(formData: {
    username: string,
    Email: string,
    password: string,
    rePassword: string,
  }): void {
    this.unsub = this.userService
      .registerUser(
        formData.username,
        formData.Email,
        formData.password,
        formData.rePassword,
      ).pipe(
        map(response => this.serverResponseInfo = response),
      )
      .subscribe(
        response => {
          setTimeout(() => {
            if (this.serverResponseInfo.hasError === false) {
              this.router.navigate(['/login']);
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
