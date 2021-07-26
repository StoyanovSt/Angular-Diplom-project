import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUserUsername!: string;

  constructor(private userService: UserService) { }

  logoutHandler(): void {
    this.userService.logout();
  }

  ngOnInit(): void {
    this.currentUserUsername = this.userService.getCurrentUserName();
  }
}
