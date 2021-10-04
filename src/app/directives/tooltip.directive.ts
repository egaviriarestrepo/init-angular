import { Directive, Input, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectService } from '../services/subject.service';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  // @Input('tooltip') tooltipTitle: string;
  @Input() placement: string;
  @Input() message: string;
  @Input() delay: any;
  tooltip: HTMLElement;

  subscriptionSearch: Subscription;

  offset = 10;


  constructor(private el: ElementRef, private renderer: Renderer2, private subject: SubjectService) {

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.subscriptionSearch = this.subject.eventSelectedError$.subscribe(message => {
      this.message = message;
      if (this.message) { this.show(); }
  });
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.subscriptionSearch = this.subject.eventSelectedError$.subscribe(message => {
      this.message = message;
      if (this.tooltip) { this.hide(); }
  });

  }

  show() {
    this.create();
    this.setPosition();
    this.renderer.addClass(this.tooltip, 'ng-tooltip-show');
  }

  hide() {
      this.renderer.removeClass(this.tooltip, 'ng-tooltip-show');

      this.renderer.removeChild(document.body, this.tooltip);
      this.tooltip = null;
  }

  create() {
    this.tooltip = this.renderer.createElement('span');

    this.renderer.appendChild(
      this.tooltip,
      this.renderer.createText(this.message) // textNode
    );

    this.renderer.appendChild(document.body, this.tooltip);
    // this.renderer.appendChild(this.el.nativeElement, this.tooltip);

    this.renderer.addClass(this.tooltip, 'ng-tooltip');
    this.renderer.addClass(this.tooltip, `ng-tooltip-${this.placement}`);

    // delay 설정
    this.renderer.setStyle(this.tooltip, '-webkit-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, '-moz-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, '-o-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, 'transition', `opacity ${this.delay}ms`);
  }

  setPosition() {

    const hostPos = this.el.nativeElement.getBoundingClientRect();

    const tooltipPos = this.tooltip.getBoundingClientRect();

    // window의 scroll top
    // getBoundingClientRect viewport
    // tooltip top
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    let top, left;

    if (this.placement === 'top') {
      top = hostPos.top - tooltipPos.height - this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    }

    if (this.placement === 'bottom') {
      top = hostPos.bottom + this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    }

    if (this.placement === 'left') {
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.left - tooltipPos.width - this.offset;
    }

    if (this.placement === 'right') {
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.right + this.offset;
    }

    // tooltip top
    this.renderer.setStyle(this.tooltip, 'top', `${top + scrollPos}px`);
    this.renderer.setStyle(this.tooltip, 'left', `${left}px`);
  }
}
