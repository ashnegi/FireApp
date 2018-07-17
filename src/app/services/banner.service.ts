import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from 'angularfire2/database';
// import { Observable } from 'rxjs/Observable';
import { Banner } from '../modal/banner.modal';
// import { QueryFn } from 'angularfire2/database/interfaces';
@Injectable()
export class BannerService {
  private dbPath = '/banner';
  bannerRef: AngularFireList<Banner> = null;
  constructor(public afd: AngularFireDatabase) {
    this.bannerRef = afd.list(this.dbPath);
  }
  getBanneerList(): AngularFireList<Banner> {
    return this.bannerRef;
  }
  private handleError(error) {
    console.log(error);
  }
}
