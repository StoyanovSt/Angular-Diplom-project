import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuccessComponent } from './success/success.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    SuccessComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SuccessComponent,
    ErrorComponent
  ]
})
export class NotificationsModule { }
