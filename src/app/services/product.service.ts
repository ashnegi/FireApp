import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from 'angularfire2/database';
// import { Observable } from 'rxjs/Observable';
import { Product } from '../modal/product.modal';
// import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {
  private dbPath = '/products';
  productsRef: AngularFireList<Product> = null;

  constructor(public afd: AngularFireDatabase) {
    this.productsRef = this.afd.list(this.dbPath);
  }

  createProduct(product: Product): void {
    console.log(product)
    this.productsRef.push(product);
  }

  updateProduct($key: string, value: any): void {
    this.productsRef.update($key, value).catch(error => this.handleError(error));
  }

  deleteProduct($key: string): void {
    this.productsRef.remove($key).catch(error => this.handleError(error));
    console.log($key);
  }
  getProductsList() {
    this.productsRef = this.afd.list(this.dbPath);
    return this.productsRef;
  }

  // getProduct($key): AngularFireList<Product> {
  //   const product = this.afd.list(this.dbPath + '/' + $key);
  //   console.log(product);
  //   return product;
  // }

  deleteAll(): void {
    this.productsRef.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
