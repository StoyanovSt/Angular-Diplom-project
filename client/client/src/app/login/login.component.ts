import { Component } from '@angular/core';
import { IUser } from '../interfaces/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: IUser = {
    username: '',
    eMail: '',
    password: '',
    rePassword: '',
  }

  constructor(private loginService: LoginService) { }

  signInHandler(args: Array<any>): void {
    args[0].preventDefault();
    this.user.username = args[1].value;
    this.user.password = args[2].value;

    this.loginService
      .loginUser(this.user)
      .subscribe(
        error => console.error(error),
        () => console.log('Stream has been closed!')
      );

      args[1].value = '';
      args[2].value = '';
  }
}
