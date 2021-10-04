import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appAlertColor]'
})
export class AlertColorDirective implements AfterViewInit {
  @Input() value: any;


  constructor( private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.color(this.value);
  }

  color(text: any) {
    const success = 'rgba(28, 190, 81, 1)';
    const danger = 'rgba(253, 73, 64, 1)';

    switch (text) {
      case '3 horas':
      this.el.nativeElement.style.color = danger;
      break;

      case '20 horas':
      this.el.nativeElement.style.color = danger;
      break;

      case '1 días':
      this.el.nativeElement.style.color = danger;
      break;

      case '3 días':
      this.el.nativeElement.style.color = success;
      break;

      case '5 días':
      this.el.nativeElement.style.color = success;
      break;

      default:
        break;
    }
  }

}
