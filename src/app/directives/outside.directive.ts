import { Directive, ElementRef, Input, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOutside]'
})
export class OutsideDirective {
  @Input('appOutside') searchVisible: boolean;

  constructor( private el: ElementRef, private rendered: Renderer2) {  }
  @HostListener('mouseenter') mouseIn() {
  //  console.log('mouse dentro');
  }

  @HostListener('mouseleave') mouseOut() {
  // console.log('mouse fuera');
   }
}
