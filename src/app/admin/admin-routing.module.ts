import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AdminComponent } from './admin-component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { BannerListComponent } from './banner-list/banner-list.component';
import {AuthGaurd} from '../gaurds/auth.gaurd';
import { AddProductComponent } from './add-product/add-product.component';
import { AddBannerComponent } from './add-banner/add-banner.component';
import { ReviewListComponent } from './reviews/reviews.component';

const adminRoutes: Routes = [
  // { path: 'admin', component: AdminComponent },
  // { path: '', redirectTo: '/admin-login', pathMatch: 'full' },
  { path: 'admin-login', component: LoginComponent },
  { path: '', component: AdminComponent, canActivate: [AuthGaurd], children: [
    { path: '', redirectTo: 'product-list', pathMatch: 'full' },
    { path: 'product-list', component: ProductListComponent },
    { path: 'product/:key', component: EditProductComponent },
    { path: 'add-product', component: AddProductComponent },
    { path: 'banner-list', component: BannerListComponent },
    { path: 'add-banner', component: AddBannerComponent },
    { path: 'reviews-list', component: ReviewListComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
