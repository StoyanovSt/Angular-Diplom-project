import { Component } from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private userService: UserService) { }

  get isLogged(): boolean {
    return this.userService.isLogged();
  }

  get loggedUserUsername(): string {
    return this.userService.getCurrentUserName();
  }
}
