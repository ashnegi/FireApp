import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/reviews.service';
import { Review } from '../../modal/review.modal';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewListComponent implements OnInit {
  constructor(private reviewService: ReviewService, private route: ActivatedRoute) {}
  loading: boolean;
  reviewList: Review[];
  review: Review;
  ngOnInit() {
    this.getReviewsList();
  }

  getReviewsList() {
    this.loading = true;
    const x = this.reviewService.getReviewList();
    x.snapshotChanges().subscribe(item => {
      this.reviewList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.reviewList.push(y as Review);
        this.loading = false;
      });
    });
  }

  deleteReview(review: Review) {
    this.reviewService.deleteReview(review.key);
  }
}
