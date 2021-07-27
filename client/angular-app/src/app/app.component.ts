import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverResponseInfo!: {
    hasError: boolean,
    message: string
  };

  constructor() { }

  serverResponseHandler(event: any): void {
    this.serverResponseInfo = event;    
  }
}
