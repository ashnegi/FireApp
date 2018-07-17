import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../modal/product.modal';
import * as firebase from 'firebase';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productsList: Product[];
  product: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}

  private brands: any = [
    { name: 'Apple' },
    { name: 'Samsung' },
    { name: 'MI' },
    { name: 'Micromax' },
    { name: 'LG' }
  ];
  private basePath = 'uploads/';
  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    const key = this.route.snapshot.paramMap.get('key');
    this.productService
      .getProductsList()
      .valueChanges()
      .subscribe(products => {
        this.productsList = products;
        // this.productsList = this.productsList.filter(h => h !== key);
        this.productsList = this.productsList.filter(obj => {
          return obj.slung === key;
        });
      });
  }

  goBack() {
    this.location.back();
  }

  onSubmit(f) {
    const slung = f.value.slung;
    const name = f.value.name;
    const brand = f.value.brand;
    const featured = f.value.featured;
    const img = f.value.img;
    const description = f.value.description;
    console.log(this.productsList[0].key);
    this.productService.updateProduct(this.productsList[0].key, {
      slung: f.value.slung
    });
    this.productService.updateProduct(this.productsList[0].key, {
      name: f.value.name
    });
    this.productService.updateProduct(this.productsList[0].key, {
      brand: f.value.brand
    });
    this.productService.updateProduct(this.productsList[0].key, {
      featured: f.value.featured
    });
    this.productService.updateProduct(this.productsList[0].key, {
      img: f.value.img
    });
    this.productService.updateProduct(this.productsList[0].key, {
      description: f.value.description
    });
  }

  handleFileInput(e) {
    // const file = 'C:\fakepath\banner.png';
    // console.log(file);
    // const storageRef = firebase.storage().ref('uploads/' + file);
    // storageRef.put(file);
  }
}




