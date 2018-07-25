import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../modal/product.modal';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productsList: Product[];
  product: any;
  loading: boolean;

  reviews = [
      {
        'name': 'Mac',
        'img': 'ábc.jpg',
        'description': 'asdjandjk ad adald aldjalkdjal dalk ',
        'rating': 4,
      }
    ];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.loading = true;
    const key = this.route.snapshot.paramMap.get('key');
    const x = this.productService.getProductsList();
    x.snapshotChanges().subscribe(item => {
      this.productsList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.productsList.push(y as Product);
      });
      this.productsList = this.productsList.filter(obj => {
        return obj.slung === key;
      });
      this.loading = false;
    });
  }

  goBack() {
    this.location.back();
  }

  
}
