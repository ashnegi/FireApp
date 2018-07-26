import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../modal/product.modal';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Review } from '../../modal/review.modal';
import { ReviewService } from '../../services/reviews.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productsList: Product[];
  product: any;
  loading: boolean;
  reviewLoading: boolean;
  reviews: Review[];

  reviewForm: FormGroup;
  review: Review = {
    name: '',
    rating: 0,
    review: ''
  };
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
    private router: Router,
    private fb: FormBuilder,
    private reviewService: ReviewService,
    private flashMessagesService: FlashMessagesService
  ) {}

  ngOnInit() {
    this.getProduct();
    this.reviewForm = this.fb.group({
      name: ['', Validators.required],
      rating: ['', Validators.required],
      review: ['', Validators.required],
      productName: [],
      productSlung: []
    });
    this.getAllReviews();
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
  arrayOne(n: number): any[] {
    return Array(n);
  }

  getAllReviews() {
    this.reviewLoading = true;
    const key = this.route.snapshot.paramMap.get('key');
    const x = this.reviewService.getReviewList();
    x.snapshotChanges().subscribe(item => {
      this.reviews = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.reviews.push(y as Review);
        this.reviews = this.reviews.filter(obj => {
          return obj.productSlung === key;
        });
        this.reviewLoading = false;
      });
    });
  }

  onSubmit({ value, valid }: { value: Review; valid: boolean }) {
    this.reviewForm.value.rating = +this.reviewForm.value.rating;
    this.reviewForm.value.productName = this.productsList[0].name;
    this.reviewForm.value.productSlung = this.productsList[0].slung;
    if (valid) {
      // console.log(this.reviewForm.value);
      this.reviewService.createReview(this.reviewForm.value);
      this.reviewForm.reset();
      this.flashMessagesService.show('New Review Added', {
        cssClass: 'alert-success',
        timeout: 2000
      });
    }
  }

  resetForm() {
    this.reviewForm.reset();
  }
}
