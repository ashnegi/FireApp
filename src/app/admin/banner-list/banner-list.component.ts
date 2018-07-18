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
  bannerList: Banner[];
  constructor( private bannerService: BannerService) { }

  ngOnInit() {
      this.getBannerList();
  }
  getBannerList() {
    const banner = this.bannerService.getBanneerList();
    banner.snapshotChanges().subscribe(data => {
      console.log(data);
      this.bannerList = [];
      data.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        console.log(y);
        this.bannerList.push(y as Banner);
        console.log(this.bannerList);
      });
  });
}

deleteBanner(banner: Banner) {
  this.bannerService.deleteBanner(banner.$key);
}

}
