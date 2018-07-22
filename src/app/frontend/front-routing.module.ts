import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {FrontComponent} from './front.component';
import {HomeComponent} from './home/home.component';
import { AuthGaurd } from '../gaurds/auth.gaurd';


const adminRoutes: Routes = [
    { path: '', component: FrontComponent, children: [
        { path: 'home', component: HomeComponent },
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class FrontRoutingModule { }
