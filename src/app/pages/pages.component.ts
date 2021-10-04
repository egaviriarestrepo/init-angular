import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../services/modal.service';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  navigation = [
    { alt: 'Administración', path: '/pages/administracion' },
    { alt: 'Page 1', path: '/pages/one' },
    { alt: 'Page 2', path: '/pages/two' },
    { alt: 'Page 3', path: '/pages/three' },
    { alt: 'Page 4', path: '/pages/four' },
    { alt: 'Page 5', path: '/pages/five' },
  ];

  constructor(private modal: ModalService,
              private helper: HelperService) { }

  ngOnInit() {
  }

  showModalLogOut() {
      this.modal.show('logOut');
  }

}
