import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../modal/product.modal';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsList: Product[];
  productsListModified: Product[];
  product: Product;
  loading: boolean;
  filterBrand: FormGroup;
  brandsLength = [];
  brandsLengthModifed = [];
  // brandList = [
  //   { name: 'Apple', count: 0 },
  //   { name: 'Micromax', count: 0 },
  //   { name: 'Samsung', count: 0 },
  //   { name: 'Micromax', count: 0 },
  //   { name: 'MI', count: 0 },
  //   { name: 'LG', count: 0 }
  // ];
  constructor(
    private productService: ProductService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.getProductsList();
    this.filterBrand = this.fb.group({
      brandChecked: this.fb.array([])
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
      this.productsListModified = [...this.productsList];
      // console.log(this.productsListModified);

      this.productsListModified.forEach(ele => {
        this.brandsLength.push(ele.brand);
      });
      this.brandsLength.sort();
      let current = null;
      let cnt = 0;
      for (let i = 0; i < this.brandsLength.length; i++) {
        if (this.brandsLength[i] !== current) {
          if (cnt > 0) {
            this.brandsLengthModifed.push({ current, cnt });
          }
          current = this.brandsLength[i];
          cnt = 1;
        } else {
          cnt++;
        }
      }
      if (cnt > 0) {
        this.brandsLengthModifed.push({ current, cnt });
      }
      // console.log(this.brandsLengthModifed);
    });
  }
  onChange(brand: string, isChecked: boolean) {
    const brandFormArray = <FormArray>this.filterBrand.controls.brandChecked;

    if (isChecked) {
      brandFormArray.push(new FormControl(brand));
    } else {
      const index = brandFormArray.controls.findIndex(x => x.value === brand);
      console.log(index);
      brandFormArray.removeAt(index);
    }
  }
  onSubmit() {
    const filters = this.filterBrand.get('brandChecked');
    const arrayFilter = filters.value;
    this.productsListModified = this.productsList.filter(function(item) {
      return arrayFilter.includes(item.brand);
    });
  }
  resetForm() {
    this.filterBrand = this.fb.group({
      brandChecked: this.fb.array([])
    });
    this.getProductsList();
  }
}
