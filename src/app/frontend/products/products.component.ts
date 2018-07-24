import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../modal/product.modal';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

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
    });
  }
  onChange(brand: string, isChecked: boolean) {
    const brandFormArray = <FormArray>this.filterBrand.controls.brandChecked;

    if (isChecked) {
      brandFormArray.push(new FormControl(brand));
    } else {
      const index = brandFormArray.controls.findIndex(x => x.value === brand);
      brandFormArray.removeAt(index);
    }
  }
  onSubmit(value, valid) {
    console.log(this.filterBrand.value);
    // console.log(this.filterBrand);
    this.productsList.filter(x => {
      // x == this.filterBrand.value.brand;
    });
  }
}
