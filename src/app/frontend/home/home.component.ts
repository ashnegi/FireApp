import { Component, OnInit } from '@angular/core';
import { BannerService } from '../../services/banner.service';
import {Banner} from '../../modal/banner.modal';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private bannerService: BannerService) {}
  bannerList: Banner[];
  bannerLoading: boolean;
  ngOnInit() {
    this.getBanner();

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

  // Main Banner
  private banner() {
    $('.main-banner').not('.slick-initialized').slick({
      infinite: true,
      dots: true,
      nav: false,
      autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: '<i class="fas fa-angle-right slick-next"></i>',
      prevArrow: '<i class="fas fa-angle-left slick-prev"></i>',
      responsive: [{
        breakpoint: 1024,
        settings: {
          dots: false,
        }
      }]
    });
  }
}
