import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppRoutingModule } from './router/app.router';
import { AdminModule } from './admin/admin.module';
import { FrontModule } from './frontend/front.module';
import { TooltipModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductService } from './services/product.service';
import { BannerService } from './services/banner.service';
import { AuthService } from './services/auth.service';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AuthGaurd} from './gaurds/auth.gaurd';
import { NavigationService } from './services/navigation.service';
import { ReviewService } from './services/reviews.service';
import { ModalModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdminModule,
    FrontModule,
    TooltipModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    CollapseModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [ProductService, BannerService, AuthService, NavigationService, AuthGaurd, ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule {}
