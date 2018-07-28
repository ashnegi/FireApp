import { Component, OnInit , TemplateRef} from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';
import { NavItem } from '../../../modal/nav.modal';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from '../../../modal/product.modal';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navItemList: NavItem[];
  navItem: NavItem;
  modalRef: BsModalRef;
  searchForm: FormGroup;
  productsList: Product[];
  resultList: any[];

  constructor( private navService: NavigationService,
    private modalService: BsModalService, private prodService: ProductService) { }

  ngOnInit() {
    this.getNavList();
    this.searchForm = new FormGroup({
        'search' : new FormControl(null)
    });
    this.onChanges();
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
    this.modalRef = this.modalService.show(template,
     Object.assign({}, { class: 'search-custom-dialog' })
    );
  }

  onChanges(): void {
    this.searchForm.get('search').valueChanges.subscribe(val => {
      if (val != null) {
        const searchText = val.toLowerCase();
        console.log(searchText);
        const x = this.prodService.getProductsList();
        x.snapshotChanges().subscribe(item => {
          this.productsList = [];
          item.forEach(element => {
            const y = element.payload.toJSON();
            y['$key'] = element.key;
            this.productsList.push(y as Product);
            this.resultList = this.productsList.filter(data => {
                const matchCase = data.name || data.brand;
                return searchText === matchCase.toLowerCase();
           });
           console.log(this.resultList);
          });
        });
      }
    });
  }


}
