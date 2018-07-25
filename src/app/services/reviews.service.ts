import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Review } from '../modal/review.modal';


@Injectable()
export class ReviewService {

    private dbPath = '/reviews';
    reviewRef: AngularFireList<Review> = null;

    constructor(public afd: AngularFireDatabase) {
        this.reviewRef = this.afd.list(this.dbPath);
    }

    createReview(review: Review): void {
        this.reviewRef.push(review);
    }

    deleteReview($key: string): void {
        this.reviewRef.remove($key).catch(error => this.handleError(error));
        console.log($key);
    }
    getReviewList() {
        this.reviewRef = this.afd.list(this.dbPath);
        return this.reviewRef;
    }
    private handleError(error) {
        console.log(error);
    }

}
