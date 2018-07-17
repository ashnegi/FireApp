import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../modal/product.modal';
// import * as firebase from 'firebase';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productsList: Product[];
  product: Product;

  constructor(private productService: ProductService, private router: Router) {}

  private brands: any = [
    { name: 'Apple' },
    { name: 'Samsung' },
    { name: 'MI' },
    { name: 'Micromax' },
    { name: 'LG' }
  ];
  ngOnInit() {
    this.product = {};
  }
  onSubmit(f) {
    const slung = f.value.slung;
    const name = f.value.name;
    const brand = f.value.brand;
    const featured = f.value.featured;
    const img = f.value.img;
    const description = f.value.description;

    this.productService.createProduct(this.product);
    // console.log(this.product);
    f.reset();
    this.router.navigate(['/product-list']);
  }
}
