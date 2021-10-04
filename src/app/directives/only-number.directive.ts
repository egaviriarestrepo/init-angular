import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumber]'
})
export class OnlyNumberDirective {

  public arrayCodes = [8, 9, 37, 39];
  constructor( private el: ElementRef) {}

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // console.log('key press');

    if (this.arrayCodes.indexOf(event.keyCode) === -1 && event.key.search(/\d\b/) === -1) {
      event.preventDefault();
  }

}

}
