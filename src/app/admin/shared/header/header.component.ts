import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
// import { AuthService } from '../../../services/auth.service';
import { NavigationService } from '../../../services/navigation.service';
import { NavItem } from '../../../modal/nav.modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed: Boolean = true;
  loggedinUser: string;
  navItemList: NavItem[];
  navItem: NavItem;
  constructor(public afauth: AngularFireAuth, private router: Router, private navService: NavigationService) {}

  ngOnInit() {
    this.afauth.authState.subscribe(auth => {
      if (auth) {
        this.loggedinUser = auth.email;
      } else {
        this.loggedinUser = 'error';
      }
    });
    this.getNavList();
  }

  getNavList() {
    const x = this.navService.getNavList();
    x.snapshotChanges().subscribe(item => {
      this.navItemList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.navItemList.push(y as NavItem);
      });
    });
  }


  logout() {
    this.afauth.auth.signOut();
    this.router.navigate(['/admin-login']);
  }
}
