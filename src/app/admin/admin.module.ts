import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AdminComponent } from './admin-component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { BannerListComponent } from './banner-list/banner-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SearchFilterPipe } from '../pipe/filter.pipe';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AddBannerComponent } from './add-banner/add-banner.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    CollapseModule.forRoot(),
    FlashMessagesModule.forRoot()

  ],
  declarations: [
    LoginComponent,
    ProductListComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    EditProductComponent,
    BannerListComponent,
    AddProductComponent,
    SearchFilterPipe,
    AddBannerComponent
  ]
})
export class AdminModule {}
