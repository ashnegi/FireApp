import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../modal/product.modal';
import { NavItem } from '../../modal/nav.modal';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}
  loading: boolean;
  productsList: Product[];
  product: Product;
  navItem: NavItem;
  ngOnInit() {
    this.getProductsList();
  }

  getProductsList() {
    this.loading = true;
    const x = this.productService.getProductsList();
    x.snapshotChanges().subscribe(item => {
      this.productsList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.productsList.push(y as Product);
        this.loading = false;
      });
    });
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product.$key);
  }
}
