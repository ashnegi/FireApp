import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AdminComponent } from './admin-component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { BannerListComponent } from './banner-list/banner-list.component';
import {AuthGaurd} from '../gaurds/auth.gaurd';

const adminRoutes: Routes = [
  // { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/admin-login', pathMatch: 'full' },
  { path: 'admin-login', component: LoginComponent },
  { path: 'product-list', component: ProductListComponent, canActivate: [AuthGaurd] },
  { path: 'product/:key', component: EditProductComponent, canActivate: [AuthGaurd] },
  { path: 'banner-list', component: BannerListComponent, canActivate: [AuthGaurd] }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
