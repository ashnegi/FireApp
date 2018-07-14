import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
    imports :[
        CommonModule,
        AdminRoutingModule,
        FormsModule
    ],
    declarations:[
        LoginComponent,
        ProductListComponent
    ]

})

export class AdminModule{

}