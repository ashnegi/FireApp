import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AdminComponent } from './admin-component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';

const adminRoutes: Routes = [
  // { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/product-list', pathMatch: 'full' },
  { path: 'admin-login', component: LoginComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product/:key', component: AddEditProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
