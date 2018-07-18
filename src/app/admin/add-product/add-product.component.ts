import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../modal/product.modal';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  product: Product = {
    slung: '',
    name: '',
    brand: '',
    img: '',
    description: '',
    featured: false
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private flashMessagesService: FlashMessagesService,
    private storage: AngularFireStorage
  ) {}

  private brands: any = [
    { name: 'Apple' },
    { name: 'Samsung' },
    { name: 'MI' },
    { name: 'Micromax' },
    { name: 'LG' }
  ];
  ngOnInit() {}
  onSubmit({ value, valid }: { value: Product; valid: boolean }) {
    if (valid) {
      console.log(this.product);
      this.flashMessagesService.show('New client added', {
        cssClass: 'alert-success',
        timeout: 2000
      });
      this.productService.createProduct(this.product);
      setTimeout(() => {
        this.router.navigate(['/product-list']);
      }, 2001);
    }
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
