import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-modal-logout',
  templateUrl: './modal-logout.component.html',
  styleUrls: ['./modal-logout.component.scss']
})
export class ModalLogoutComponent implements OnInit, OnDestroy {

  constructor(public modal: ModalService,
              public helper: HelperService,
              private router: Router) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.modal.close();
  }

 logOut() {
    this.helper.logOut();
 }

}
