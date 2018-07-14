import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './router/app.router'
import { AdminModule } from './admin/admin.module';
import { TooltipModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
// import { LoginComponent } from './admin/login/login.component';
// import { FooterComponent } from './admin/shared/footer/footer.component';
// import { ProductListComponent } from './admin/product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
   // LoginComponent,
    //FooterComponent,
    //ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
