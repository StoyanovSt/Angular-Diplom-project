import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('form')
  htmlForm!: NgForm;
  
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  signInHandler(formData: any): void {
    this.userService
      .loginUser(
        formData.username,
        formData.password
      ).pipe(
        tap(response => console.log(response)),
      )
      .subscribe(
        response => {
          localStorage.setItem('user', JSON.stringify({ TOKEN: response.token, USERNAME: response.username })),
            this.router.navigate(['/home'])
        },
        error => console.error(error),
        () => console.log('Stream has been closed!')
      );

      this.htmlForm.reset();
  }
}
