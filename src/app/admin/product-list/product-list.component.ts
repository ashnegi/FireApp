import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../modal/product.modal';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}

  productsList: Product[];
  product: Product;
  ngOnInit() {
    this.getProductsList();
  }

  getProductsList() {
    let x = this.productService.getProductsList();
    x.snapshotChanges().subscribe(item => {
      this.productsList = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        y['$key'] = element.key;
        this.productsList.push(y as Product);
      });
    });
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product.$key);
  }
}
