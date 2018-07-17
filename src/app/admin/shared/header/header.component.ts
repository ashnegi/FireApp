import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
// import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed: Boolean = true;
  loggedinUser: string;
  constructor(public afauth: AngularFireAuth, private router: Router) {}

  ngOnInit() {
    this.afauth.authState.subscribe(auth => {
      if (auth) {
        this.loggedinUser = auth.email;
      } else {
        this.loggedinUser = 'error';
      }
    });
  }

  logout() {
    this.afauth.auth.signOut();
    this.router.navigate(['/admin-login']);
  }
}
