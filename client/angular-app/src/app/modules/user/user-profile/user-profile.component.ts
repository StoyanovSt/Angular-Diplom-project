import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userInfo!: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getProductSeller('60f69cb5c4ad992264187200')
      .subscribe(
        response => this.userInfo = response,
        error => console.error(error),
        () => (console.log(this.userInfo)
        )
      );
  }
}
