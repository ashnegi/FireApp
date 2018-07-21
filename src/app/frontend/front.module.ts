import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FrontRoutingModule } from './front-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { LoginComponent } from './login/login.component';
import { FrontComponent } from './front.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CollapseModule.forRoot(),
    FrontRoutingModule
  ],
  declarations: [HeaderComponent, FooterComponent, LoginComponent, FrontComponent]
})
export class FrontModule {}
