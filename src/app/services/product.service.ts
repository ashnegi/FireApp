import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from 'angularfire2/database';
import { Observable } from 'rxjs/observable';
import { Product } from '../modal/product.modal';
import { QueryFn } from 'angularfire2/database/interfaces';
@Injectable()
export class ProductService {
  private dbPath = "/products";
  productsRef: AngularFireList<Product> = null;

  // products: AngularFireList<any[]>;
  // product: AngularFireObject<any>;

  constructor(public afd: AngularFireDatabase) {
    this.productsRef = afd.list(this.dbPath);
  }

  createProduct(product: Product): void {
    this.productsRef.push(product);
  }

  updateProduct($key: string, value: any): void {
    this.productsRef.update($key, value).catch(error => this.handleError(error));
  }

  deleteProduct($key: string): void {
    this.productsRef.remove($key).catch(error => this.handleError(error));
  }

  getProductsList(): AngularFireList<Product> {
    return this.productsRef;
  }

  deleteAll(): void {
    this.productsRef.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
