import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../modal/product.modal';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productsList: Product[];
  product: any;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
    private router: Router,
    private storage: AngularFireStorage
  ) {}

  private brands: any = [
    { name: 'Apple' },
    { name: 'Samsung' },
    { name: 'MI' },
    { name: 'Micromax' },
    { name: 'LG' }
  ];
  // private basePath = 'uploads/';
  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    const key = this.route.snapshot.paramMap.get('key');
    let x = this.productService.getProductsList();
    x.snapshotChanges().subscribe(item => {
      this.productsList = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        y['$key'] = element.key;
        this.productsList.push(y as Product);
      });
      this.productsList = this.productsList.filter(obj => {
        return obj.slung === key;
      });
    });
  }

  goBack() {
    this.location.back();
  }

  onSubmit(f) {
    const $key = this.route.snapshot.paramMap.get('key');
    // console.log($key);
    // console.log(this.productsList[0]);
    // console.log(this.productsList[0].$key);
    this.productService.updateProduct(this.productsList[0].$key, {
      slung: f.value.slung,
      name: f.value.name,
      brand: f.value.brand,
      featured: f.value.featured || false,
      img: f.value.img,
      description: f.value.description
    });
    f.reset();
    this.router.navigate(['/product-list']);
  }
  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'products/' + file.name;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = fileRef.getDownloadURL())
    ).subscribe();
  }
}
