import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: IUser = {
    username: '',
    eMail: '',
    password: '',
    rePassword: '',
  }

  constructor(private registerService: RegisterService) {

  }

  signUpHandler(
    $event: MouseEvent,
    usernameInput: HTMLInputElement,
    emailInput: HTMLInputElement,
    passwordInput: HTMLInputElement,
    rePasswordInput: HTMLInputElement,
  ): void {
    $event.preventDefault();

    if (passwordInput.value !== rePasswordInput.value) {
      throw Error('Passwords do not match!');
    }

    this.user.username = usernameInput.value;
    this.user.eMail = emailInput.value;
    this.user.password = passwordInput.value;
    this.user.rePassword = rePasswordInput.value;

    this.registerService
      .registerUser(this.user)
      .subscribe(
        error => console.error(error)
      );

    usernameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
    rePasswordInput.value = '';
  }

  ngOnInit(): void {

  }
}
