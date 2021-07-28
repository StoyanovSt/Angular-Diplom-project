import { Component, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @ViewChild('form')
  htmlForm!: NgForm;
  // @Output()
  // serverResponseEmitter: EventEmitter<{}> = new EventEmitter();

  // serverResponse!: {};
  // unsub!: Subscription;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  signUpHandler(formData: any): void {
    // this.unsub = 
    this.userService
      .registerUser(
        formData.username,
        formData.Email,
        formData.password,
        formData.rePassword,
      ).pipe(
        // map(response => this.serverResponse = response),
        // tap(response => this.serverResponseEmitter.emit(this.serverResponse))
      )
      .subscribe(       
        response => this.router.navigate(['/login']),
        error => console.error(error),
        () => console.log('Stream has been closed!')
      );

      this.htmlForm.reset();
  }

  // ngOnDestroy(): void {
  //   this.unsub.unsubscribe();
  // }
}
