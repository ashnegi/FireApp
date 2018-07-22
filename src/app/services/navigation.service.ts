import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from 'angularfire2/database';
import { NavItem } from '../modal/nav.modal';


@Injectable()
export class NavigationService {
  private dbPath = '/menu';
  private dbPathFront = '/front-menu';
  menuRef: AngularFireList<NavItem> = null;
  menuFront: AngularFireList<NavItem> = null;

  constructor(public afd: AngularFireDatabase) {
    this.menuRef = this.afd.list(this.dbPath);
    this.menuFront = this.afd.list(this.dbPathFront);
  }

  getNavList() {
    this.menuRef = this.afd.list(this.dbPath);
    return this.menuRef;
  }

  getNavListFront() {
    this.menuFront = this.afd.list(this.dbPathFront);
    return this.menuFront;
  }
}
