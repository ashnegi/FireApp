import { Component, OnInit , TemplateRef} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { NavigationService } from '../../../services/navigation.service';
import { NavItem } from '../../../modal/nav.modal';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navItemList: NavItem[];
  navItem: NavItem;
  modalRef: BsModalRef;
  constructor(public afauth: AngularFireAuth, private router: Router, private navService: NavigationService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.getNavList();
  }
  getNavList() {
    const x = this.navService.getNavListFront();
    x.snapshotChanges().subscribe(item => {
      this.navItemList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.navItemList.push(y as NavItem);
      });
    });
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
