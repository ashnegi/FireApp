import { Component, OnInit } from '@angular/core';
import { BannerService } from '../../services/banner.service';
import { Banner } from '../../modal/banner.modal';


@Component({
  selector: 'app-banner-list',
  templateUrl: './banner-list.component.html',
  styleUrls: ['./banner-list.component.css']
})
export class BannerListComponent implements OnInit {
  pageTitle = 'Admin - Banner';
  title = 'Banner';
  bannerList:Banner[];
  constructor( private bannerService: BannerService) { }

  ngOnInit() {
      this.getBannerList();
  }
  getBannerList() {
    this.bannerService.getBanneerList()
    .valueChanges()
      .subscribe(banners => {
        this.bannerList = banners;
        console.log(this.bannerList);
      });
  }
}
