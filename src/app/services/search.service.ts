import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Search } from '../modal/search.modal';

@Injectable()
export class SearchService {
  private dbPath = '/products';
  productsRef: AngularFireList<Search> = null;

  constructor(public afd: AngularFireDatabase) {
    this.productsRef = this.afd.list(this.dbPath);
  }

  getProductsList() {
    this.productsRef = this.afd.list(this.dbPath);
    return this.productsRef;
  }

  private handleError(error) {
    console.log(error);
  }
}
