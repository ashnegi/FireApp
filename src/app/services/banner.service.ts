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

  }
  createBanner(banner: Banner): void {
    console.log(banner);
    this.bannerRef.push(banner);
  }

  getBanneerList(): AngularFireList<Banner> {
    this.bannerRef = this.afd.list(this.dbPath);
    return this.bannerRef;
  }
  deleteBanner($key: string): void {
    this.bannerRef.remove($key).catch(error => this.handleError(error));
    console.log($key);
  }
  private handleError(error) {
    console.log(error);
  }
}
