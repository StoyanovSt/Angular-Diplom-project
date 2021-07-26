import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { IProduct } from 'src/app/interfaces/product';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  username!: string;
  allUserProductsAvailable!: IProduct[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getCurrentUserInfo(`${this.userService.getCurrentUserName()}`)
      .pipe(
        tap(response => console.log(response)),
        map(response => {
          this.username = response['username'];
          this.allUserProductsAvailable = response['products'];
        })
      )
      .subscribe(
        error => console.error(error),
        () => console.log('Stream has been closed!'))
  }
}
