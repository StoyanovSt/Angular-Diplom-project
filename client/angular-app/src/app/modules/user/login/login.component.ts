import { Component } from '@angular/core';
import { IUser } from '../../../interfaces/user';
import { UserService } from '../user.service';

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

  constructor(private userService: UserService) { }

  signInHandler(args: Array<any>): void {
    args[0].preventDefault();
    this.user.username = args[1].value;
    this.user.password = args[2].value;

    this.userService
      .loginUser(this.user)
      .subscribe(
        response => localStorage.setItem('user', JSON.stringify({ TOKEN: response.token, USERNAME: response.username })),
        error => console.error(error),
        () => console.log('Stream has been closed!')
      );

      args[1].value = '';
      args[2].value = '';
  }
}
