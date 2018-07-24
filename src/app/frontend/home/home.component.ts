import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BannerService } from '../../services/banner.service';
import { ProductService } from '../../services/product.service';
import { Banner } from '../../modal/banner.modal';
import { Product } from '../../modal/product.modal';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  constructor(
    private bannerService: BannerService,
    private productService: ProductService
  ) {}
  bannerList: Banner[];
  productsList: Product[];
  bannerLoading: boolean;
  loading: boolean;
  ngOnInit() {
    this.getBanner();
    this.getProductsList();
  }

  getBanner() {
    this.bannerLoading = true;
    const banner = this.bannerService.getBanneerList();
    banner.snapshotChanges().subscribe(data => {
      this.bannerList = [];
      data.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.bannerList.push(y as Banner);
        this.bannerLoading = false;
        setTimeout(() => {
          this.banner();
        }, 400);
      });
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
        setTimeout(() => {
          if (this.productsList.length === 3) {
            return;
          } else {
            this.productsList.push(y as Product);
          }
          this.loading = false;
        }, 1000);
      });
    });
  }

  // Main Banner
  private banner() {
    $('.main-banner')
      .not('.slick-initialized')
      .slick({
        infinite: true,
        dots: true,
        nav: false,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: '<i class="fas fa-angle-right slick-next"></i>',
        prevArrow: '<i class="fas fa-angle-left slick-prev"></i>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              dots: false
            }
          }
        ]
      });
  }
}
