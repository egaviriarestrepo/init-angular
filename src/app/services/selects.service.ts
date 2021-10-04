import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SelectsService implements OnInit {

  constructor( private http: HttpClient ) {
  }

  ngOnInit() {
  }

}
