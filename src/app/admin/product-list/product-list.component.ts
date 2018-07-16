import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../modal/product.modal';

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
    // Use snapshotChanges().map() to store the key
    this.productService
      .getProductsList()
      .valueChanges()
      .subscribe(products => {
        this.productsList = products;
        console.log(this.productsList)
      });
  }

  deleteProduct(product: Product) {
    this.productsList = this.productsList.filter(h => h !== product);
    console.log(this.productsList);
     this.productService.deleteProduct(product.key);
    }
}
