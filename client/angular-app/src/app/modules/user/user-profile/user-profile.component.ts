import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { IProduct } from '../../shared/interfaces/product';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  username!: string;
  allUserProductsAvailable!: IProduct[];
  unsub = new Subscription();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.unsub.add(this.userService.getCurrentUserInfo(`${this.userService.getCurrentUserName()}`)
      .pipe(
        map(response => {
          this.username = response['username'];
          this.allUserProductsAvailable = response['products'];
        })
      )
      .subscribe(
        response => { },
        error => console.error(error),
        () => console.log('Stream has been closed!')));
  }

  ngOnDestroy(): void {
    this.unsub?.unsubscribe();
  }
}
