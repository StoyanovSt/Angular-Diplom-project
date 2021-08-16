import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';

@Directive({
  selector: '[appImageUrlValidation]'
})
export class ImageUrlValidationDirective {

  constructor(
    private elRef: ElementRef,
    private form: NgForm
  ) { }

  // listens for input event
  @HostListener('input')
  inputHandle() {
    let element: string = this.elRef.nativeElement.value;

    if (!element.startsWith('http')) {
      this.form.control.setErrors({
        'image': true
      });
    } else {
      this.form.control.setErrors(null);
    }
  }
}
