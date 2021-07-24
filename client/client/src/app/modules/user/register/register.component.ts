import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from '../../interfaces/user';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output()
  serverResponseEmitter: EventEmitter<any> = new EventEmitter();

  // за ръчен unsubscribe!
  //unsub!: Subscription;

  user: IUser = {
    username: '',
    eMail: '',
    password: '',
    rePassword: '',
  }

  constructor(private registerService: RegisterService) { }

  signUpHandler(args: Array<any>): void {
    args[0].preventDefault();

    if (args[3].value !== args[4].value) {
      throw Error('Passwords do not match!');
    }

    this.user.username = args[1].value;
    this.user.eMail = args[2].value;
    this.user.password = args[3].value;
    this.user.rePassword = args[4].value;

    args[1].value = '';
    args[2].value = '';
    args[3].value = '';
    args[4].value = '';

    //this.unsub = 
    this.registerService
      .registerUser(this.user)
      .subscribe(
        response => this.serverResponseEmitter.emit(response),
        error => console.error(error),
        () => console.log('Stream has been closed!')
      );
  }

  //   ngOnDestroy(): void {
  //     this.unsub.unsubscribe();
  //   }
}
