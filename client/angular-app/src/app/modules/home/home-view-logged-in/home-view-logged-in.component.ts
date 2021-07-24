import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProduct } from '../../shared/interfaces/product';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-home-view-logged-in',
  templateUrl: './home-view-logged-in.component.html',
  styleUrls: ['./home-view-logged-in.component.css']
})
export class HomeViewLoggedInComponent implements OnInit {
  @Output()
  serverResponseEmitter: EventEmitter<any> = new EventEmitter();

  products!: IProduct[];

  constructor(private userService: UserService) { }

  eventEmitterHandler(event: Event): void {
    this.serverResponseEmitter.emit(event);
  }

  ngOnInit(): void {
    this.userService.getAllUserProducts('60f69cb5c4ad992264187200')
      .subscribe(
        response => this.products = response,
        error => console.error(error),
        () => console.log(this.products)
      );
  }
}
