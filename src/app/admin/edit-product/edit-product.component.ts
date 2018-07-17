import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../modal/product.modal';

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
    private location: Location,
    private router: Router
  ) {}

  private brands: any = [
    { name: 'Apple' },
    { name: 'Samsung' },
    { name: 'MI' },
    { name: 'Micromax' },
    { name: 'LG' }
  ];
  // private basePath = 'uploads/';
  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    const key = this.route.snapshot.paramMap.get('key');
    let x = this.productService.getProductsList();
    x.snapshotChanges().subscribe(item => {
      this.productsList = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        y['$key'] = element.key;
        this.productsList.push(y as Product);
      });
      this.productsList = this.productsList.filter(obj => {
        return obj.slung === key;
      });
    });
  }

  goBack() {
    this.location.back();
  }

  onSubmit(f) {
    const $key = this.route.snapshot.paramMap.get('key');
    console.log($key);
    const slung = f.value.slung;
    const name = f.value.name;
    const brand = f.value.brand;
    const featured = f.value.featured;
    const img = f.value.img;
    const description = f.value.description;
    console.log(this.productsList[0]);
    console.log(this.productsList[0].$key);
    this.productService.updateProduct(this.productsList[0].$key, {
      slung: f.value.slung,
      name: f.value.name,
      brand: f.value.brand,
      featured: f.value.featured || false,
      img: f.value.img,
      description: f.value.description
    });
    f.reset();
    this.router.navigate(['/product-list']);
  }

  // handleFileInput(e) {
  //   // const file = 'C:\fakepath\banner.png';
  //   // console.log(file);
  //   // const storageRef = firebase.storage().ref('uploads/' + file);
  //   // storageRef.put(file);
  // }
}
