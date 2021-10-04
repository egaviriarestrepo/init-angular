import {A, Z } from '@angular/cdk/keycodes';
import { Directive, ElementRef, forwardRef, HostListener, OnInit, Renderer2, Self } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appUppercase]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UppercaseDirective),
      multi: true,
    },
  ],
})
export class UppercaseDirective implements ControlValueAccessor {
  /** implements ControlValueAccessorInterface */
  _onChange: (_: any) => void;

  /** implements ControlValueAccessorInterface */
  _touched: () => void;

  constructor( @Self() private el: ElementRef, private renderer: Renderer2) { }

  /** Trata as teclas */
  @HostListener('keyup', ['$event'])
  onKeyDown(evt: KeyboardEvent) {
    const keyCode = evt.keyCode;
    const key = evt.key;
    // console.log(evt)
    if (keyCode >= A && keyCode <= Z) {
      const value = this.el.nativeElement.value.toUpperCase();
      this.renderer.setProperty(this.el.nativeElement, 'value', value);
      this._onChange(value);
      evt.preventDefault();
    }
  }

  @HostListener('blur', ['$event'])
  onBlur() {
    this._touched();
  }

  writeValue(value: any): void {
    this.renderer.setProperty(this.el.nativeElement, 'value', value);
  }

  registerOnChange(fn: (_: any) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._touched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.renderer.setProperty(this.el.nativeElement, 'disabled', isDisabled);
  }
}
