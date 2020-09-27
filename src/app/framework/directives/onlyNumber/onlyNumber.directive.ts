import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[onlyNumber]'
})
export class OnlyNumberDirective {

  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', '-', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];

  constructor(private el: ElementRef) {
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    if (this.specialKeys.indexOf(e.key) !== -1) {
      return;
    }

    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  }
}
