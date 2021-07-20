import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: IUser = {
    username: '',
    eMail: '',
    password: '',
    rePassword: '',
  }

  serverResponse!: {};

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  signInHandler(args: Array<any>): void {
    args[0].preventDefault();
    this.user.username = args[1].value;
    this.user.password = args[2].value;

    this.loginService
      .loginUser(this.user)
      .subscribe(
        response => this.serverResponse = response,
        error => console.error(error),
        () => console.log(this.serverResponse)
      );

      args[1].value = '';
      args[2].value = '';
  }

}
