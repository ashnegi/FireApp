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
  product: Product;
  loading: boolean;
  filterBrand: FormGroup;
  brandList = [
    { name: 'Apple',  id: 1 },
    { name: 'Micromax',  id: 2 },
    { name: 'Samsung', id: 3 },
    { name: 'Micromax', id: 4 },
    { name: 'MI', id: 5 },
    { name: 'LG', id: 6 },
  ];
  controls;
  constructor(
    private productService: ProductService,
    private fb: FormBuilder
  ) {
    const controls = this.brandList.map(c => new FormControl(false));
    this.filterBrand = this.fb.group({
      brandList: new FormArray(controls)
    });
  }

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
  // onChange(brand: string, isChecked: boolean) {
  //   const brandFormArray = <FormArray>this.filterBrand.controls.brandChecked;

  //   if (isChecked) {
  //     brandFormArray.push(new FormControl(brand));
  //   } else {
  //     const index = brandFormArray.controls.findIndex(x => x.value === brand);
  //     console.log(index);
  //     brandFormArray.removeAt(index);
  //   }
  // }
  onSubmit() {
   // const filters = this.filterBrand.get('brandChecked').value.toString();
    // console.log(filters);
    // // console.log(this.filterBrand);
    // this.productsList = this.productsList.filter(obj => {
    //   return obj.brand === filters;
    // });
    console.log(this.filterBrand.value.brandList);
    const selectedBrands = this.filterBrand.value.brandList;
    this.productsList.filter(x => {
      return x.brand === selectedBrands;
    });
  }
  resetForm() {
    this.filterBrand = this.fb.group({
      brandChecked: this.fb.array([])
    });
    this.getProductsList();
  }
}
