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


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    CollapseModule.forRoot()
  ],
  declarations: [
    LoginComponent,
    ProductListComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    EditProductComponent
  ]
})
export class AdminModule {}
