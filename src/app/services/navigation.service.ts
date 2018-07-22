import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from 'angularfire2/database';
import { NavItem } from '../modal/nav.modal';


@Injectable()
export class NavigationService {
  private dbPath = '/menu';
  menuRef: AngularFireList<NavItem> = null;

  constructor(public afd: AngularFireDatabase) {
    this.menuRef = this.afd.list(this.dbPath);
  }

  getNavList() {
    this.menuRef = this.afd.list(this.dbPath);
    return this.menuRef;
  }

}
