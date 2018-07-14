import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  productsList = [
    {
      'name': 'Product 1',
      'brand': 'Sony',
      'img': 'abc.jpg',
      'desc': 'abcd'
    },
    {
      'name': 'Product 2',
      'brand': 'Sony',
      'img': 'abc.jpg',
      'desc': 'abcd'
    }
  ];

  ngOnInit() {
  }

}
