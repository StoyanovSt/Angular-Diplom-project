import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IProduct } from '../../shared/interfaces/product';

@Component({
  selector: 'app-home-view-guest',
  templateUrl: './home-view-guest.component.html',
  styleUrls: ['./home-view-guest.component.css']
})
export class HomeViewGuestComponent implements OnInit {
  @Input()
  currentProduct!: IProduct;
 
  @Output()
  serverResponseEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  eventEmitterHandler(event: Event): void {
    this.serverResponseEmitter.emit(event);
  }

}
