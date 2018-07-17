import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  constructor(public afauth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.afauth.auth.signOut();
    this.router.navigate(['/admin-login']);
  }
}
