import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Product } from '../modal/product.modal';

@Injectable()
export class SearchService {
  private dbPath = '/products';
  productsRef: AngularFireList<Product> = null;

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
