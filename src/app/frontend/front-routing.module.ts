import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {FrontComponent} from './front.component';
import {HomeComponent} from './home/home.component';
import { AuthGaurd } from '../gaurds/auth.gaurd';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const frontRoutes: Routes = [
  {
    path: '',
    component: FrontComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/:key', component: ProductDetailsComponent }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(frontRoutes)],
    exports: [RouterModule]
})
export class FrontRoutingModule { }
