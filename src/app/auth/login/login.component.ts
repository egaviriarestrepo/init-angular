import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare let $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})
export class LoginComponent implements OnInit {

  constructor(private readonly route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
  //  this.router.navigateByUrl('/pages/administracion');
  }


  }
