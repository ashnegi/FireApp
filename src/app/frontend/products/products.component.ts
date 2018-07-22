import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../modal/product.modal';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsList: Product[];
  product: Product;
  loading: boolean;
  constructor(private productService: ProductService) { }

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
        setTimeout(() => {
          this.productsList.push(y as Product);
          this.loading = false;
        }, 1000);
        console.log(this.productsList);
      });
    });
  }
}
