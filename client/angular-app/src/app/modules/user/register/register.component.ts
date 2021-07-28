import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
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
  // @Output()
  // serverResponseEmitter: EventEmitter<{}> = new EventEmitter();

  // serverResponse!: {};
  // unsub!: Subscription;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  signUpHandler(formData: {}): void {
    console.log(formData);

  }

  // signUpHandler(args: Array<any>): void {
  //   args[0].preventDefault();

  //   if (args[3].value !== args[4].value) {
  //     throw Error('Passwords do not match!');
  //   }

  //   // this.unsub = 
  //   this.userService
  //     .registerUser(
  //       args[1].value,
  //       args[2].value,
  //       args[3].value,
  //       args[4].value,
  //     ).pipe(
  //       // map(response => this.serverResponse = response),
  //       // tap(response => this.serverResponseEmitter.emit(this.serverResponse))
  //     )
  //     .subscribe(       
  //       response => this.router.navigate(['/login']),
  //       error => console.error(error),
  //       () => console.log('Stream has been closed!')
  //     );

  //   args[1].value = '';
  //   args[2].value = '';
  //   args[3].value = '';
  //   args[4].value = '';
  // }

  // ngOnDestroy(): void {
  //   this.unsub.unsubscribe();
  // }
}
