import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGaurd implements CanActivate {
  constructor(private router: Router, public afauth: AngularFireAuth) {}

    canActivate(): Observable<boolean> {
    return this.afauth.authState.map(auth => {
      if (!auth) {
        this.router.navigate(['/admin-login']);
        return false;
      } else {
        return true;
      }
    });
  }
}
