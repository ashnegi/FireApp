import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Banner } from '../../modal/banner.modal';
import { BannerService } from '../../services/banner.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-add-banner',
  templateUrl: './add-banner.component.html',
  styleUrls: ['./add-banner.component.css']
})
export class AddBannerComponent implements OnInit {
  banner: Banner = {
    name: '',
    img: ''
  };
  constructor(
    private bannerService: BannerService,
    private router: Router,
    private flashMessagesService: FlashMessagesService,

  ) { }

  ngOnInit() {
  }

  OnSubmit({ value, valid }: { value: Banner; valid: boolean }) {
    if (valid) {
    console.log(this.banner);
    this.flashMessagesService.show('Banner Added Successfully', {
      cssClass: 'alert-success',
      timeout: 2000
    });
    this.bannerService.createBanner(this.banner);
    setTimeout(() => {
      this.router.navigate(['/banner-list']);
    }, 2001);
  }
}

}
