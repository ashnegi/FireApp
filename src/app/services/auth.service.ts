import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';
// import { Observable } from 'rxjs/Observable';



@Injectable()
export class AuthService {

  constructor(private firebaseAuth: AngularFireAuth) { }

  login(email: string, password: string) {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  getToken() {
    return this.firebaseAuth.auth.currentUser.getIdToken();
  }
}
