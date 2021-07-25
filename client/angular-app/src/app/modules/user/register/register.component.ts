import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output()
  serverResponseEmitter: EventEmitter<{}> = new EventEmitter();

  // unsub!: Subscription;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  signUpHandler(args: Array<any>): void {
    args[0].preventDefault();

    if (args[3].value !== args[4].value) {
      throw Error('Passwords do not match!');
    }

    // this.unsub = 
    this.userService
      .registerUser(
        args[1].value,
        args[2].value,
        args[3].value,
        args[4].value,
      ).pipe(
        tap(response => console.log(response)),
      )
      .subscribe(
        // for notification message
        response => this.serverResponseEmitter.emit(response),
        error => console.error(error),
        () => console.log('Stream has been closed!')
      );

    args[1].value = '';
    args[2].value = '';
    args[3].value = '';
    args[4].value = '';
  }

  // ngOnDestroy(): void {
  //   this.unsub.unsubscribe();
  // }
}
