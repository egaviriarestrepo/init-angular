import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

  constructor( private auth: AuthService,
               private router: Router) {

  }

  canActivate(): boolean {
    // return true;
   if (this.auth.IsAutenticated()) {
     return true;
   } else {
     return true;
    //  this.router.navigateByUrl('/login');
   }
  }

}
