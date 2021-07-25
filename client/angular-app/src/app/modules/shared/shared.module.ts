import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuccessComponent } from './notifications/success/success.component';
import { ErrorComponent } from './notifications/error/error.component';


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
export class SharedModule { }
