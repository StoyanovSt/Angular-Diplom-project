import { Component } from '@angular/core';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  constructor(private userService: UserService) { }

  get isLogged(): boolean {
    return this.userService.isLogged();
  }

  logoutHandler(): void {
    this.userService.logout();
  }

  get loggedUserUsername(): string {
    return this.userService.getCurrentUserName();
  } 
}
