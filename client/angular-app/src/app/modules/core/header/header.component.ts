import { Component } from '@angular/core';
import { UserService } from '../../shared/services/user.service';


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
  
  get loggedUserUsername(): string {
    return this.userService.getCurrentUserName();
  } 
  
  logoutHandler(): void {
    this.userService.logout();
  }
}
