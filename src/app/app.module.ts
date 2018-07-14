import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { FooterComponent } from './admin/shared/footer/footer.component';
import { ProductListComponent } from './admin/product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
