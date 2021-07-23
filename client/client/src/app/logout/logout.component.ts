import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../services/logout.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private logoutService: LogoutService) {
  }

  ngOnInit(): void {
    this.logoutService.logout();
  }
}
