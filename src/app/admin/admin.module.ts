import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
    imports :[
        CommonModule,
        AdminRoutingModule
    ],
    declarations:[
        LoginComponent
    ]

})

export class AdminModule{

}