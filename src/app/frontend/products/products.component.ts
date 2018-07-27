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
  brandList = [
    { name: 'Apple', id: 1 },
    { name: 'Micromax', id: 2 },
    { name: 'Samsung', id: 3 },
    { name: 'Micromax', id: 4 },
    { name: 'MI', id: 5 },
    { name: 'LG', id: 6 }
  ];
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
