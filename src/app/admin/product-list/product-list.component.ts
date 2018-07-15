import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../modal/product.modal';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}
  productsList: Product[];
  product: Product;

  ngOnInit() {
    this.getProductsList();
  }

  getProductsList() {
    // Use snapshotChanges().map() to store the key
    this.productService
      .getProductsList()
      .valueChanges()
      .subscribe(products => {
        this.productsList = products;
      });
  }

  deleteProduct() {
    console.log(this.product.$key);
    // this.productService.deleteProduct(this.product.$key);
  }
}
