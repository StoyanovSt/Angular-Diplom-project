import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy{  
  unsub!: Subscription;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  signInHandler(args: Array<any>): void {
    args[0].preventDefault();
    
    this.unsub = this.userService
      .loginUser(
        args[1].value,
        args[2].value
      )
      .subscribe(
        response => {
          localStorage.setItem('user', JSON.stringify({ TOKEN: response.token, USERNAME: response.username })),
            this.router.navigate(['/home'])
        },
        error => console.error(error),
        () => console.log('Stream has been closed!')
      );

      args[1].value = '';
      args[2].value = '';
  }

  ngOnDestroy(): void {
    this.unsub?.unsubscribe();    
  }
}
