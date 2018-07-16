import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private location: Location
  ) {}



  brands: any = [
    { name: 'Apple' },
    { name: 'Samsung' },
    { name: 'MI' },
    { name: 'Micromax' },
    { name: 'LG' }
  ];
  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    const key = this.route.snapshot.paramMap.get('key');
    console.log(key);
    this.productService
      .getProductsList()
      .valueChanges()
      .subscribe(products => {
        this.productsList = products;
        console.log(this.productsList);
        // this.productsList = this.productsList.filter(h => h !== key);
        this.productsList = this.productsList.filter(obj => {
          return obj.slung === key;
        });
        console.log(this.productsList);
      });
  }

  goBack() {
    this.location.back();
  }

  onSubmit(f) {
    const updatedkey = this.route.snapshot.paramMap.get('key');
    console.log(this.productsList);
    console.log(f.value.key);
    const key = f.value.key;
    const name = f.value.name;
    const brand = f.value.brand;
    const featured = f.value.featured;
    const img = f.value.img;
    const description = f.value.description;

     this.productService.updateProduct(this.product.updatedkey, { name: f.value.name });

  }
}
