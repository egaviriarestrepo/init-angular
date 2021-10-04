import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public modal = {
    transactionConfirm: false,
    logOut: false,
    fileUpload: false,
  };

  get propModal() {
    return this.modal;
  }

  show(modalName: string) {
    console.log(modalName);
    if (!modalName) { return; }
    this.modal[modalName] = true;
  }

  close() {
    for (const property in this.modal) {
      if (property) {
         this.modal[property] = false;
      }
    }

  }

}
