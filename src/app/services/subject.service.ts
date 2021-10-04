import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private selectedError = new Subject<any>();
  eventSelectedError$ = this.selectedError.asObservable();

  constructor() { }

  sendText(selected: any) {
    this.selectedError.next(selected);
  }
}
