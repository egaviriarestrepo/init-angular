import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private toastr: ToastrService,
              private router: Router) { }

  onlyNumber($event: any) {
   if(!$event.key) {
     return;
   }
    const arrayCodes = [8, 9, 37, 39];
    if (arrayCodes.includes($event.keyCode)) {
          return;
       } else if (arrayCodes.indexOf($event.keyCode) === -1 && $event.key.search(/\d\b/) === -1) {
          $event.preventDefault();
    }
  }

  currencyInputChanged(value: any) {
    if (!value) {
      return;
    }
    const num = value.replace(/[\$,\. ]/g, '');
    return Number(num);
  }

  markForm(form?: NgForm, toast?: boolean, time?: number, textToast?: string) {
    const timeOut = time || 12000;
    const markForm = form.form.controls;
    const message = textToast || 'Los campos marcados con rojo son obligatorios.';

    setTimeout(() => {
          Object.keys(markForm).forEach((control, index) => {
          form.form.controls[control].markAsTouched(); });
          if (toast) {
            this.toastr.warning(message, null, {
              timeOut,
              positionClass: 'toast-bottom-right'
           });
          }
    }, 500);
  }

  trackByFn(index: any, item: any) {
      return index;
  }

  logOut() {
    this.router.navigateByUrl('/login');
    localStorage.clear();
  }

}
