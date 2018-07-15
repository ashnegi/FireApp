import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AdminComponent } from './admin-component';

const adminRoutes: Routes = [
    // { path: 'admin', component: AdminComponent },
    { path: 'admin-login',  component: LoginComponent },
    { path: 'product-list', component: ProductListComponent },
];

@NgModule({
    imports: [
       RouterModule.forChild(adminRoutes)
    ],
    exports: [RouterModule]
})

export class AdminRoutingModule { }