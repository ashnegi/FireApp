import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../modal/product.modal';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsList: Product[];
  product: Product;
  loading: boolean;
  fiterBrand: FormGroup;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProductsList();
    this.fiterBrand = new FormGroup({
      'brand': new FormControl('Samsung')
    });
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
  onSubmit() {
    console.log(this.fiterBrand);
    this.productsList.filter(x => {
       // x == this.fiterBrand.value.brand;
    });
  }



}
