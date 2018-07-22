import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {FrontComponent} from './front.component';
import { AuthGaurd } from '../gaurds/auth.gaurd';


const adminRoutes: Routes = [
    // { path: 'admin', component: AdminComponent },
    // { path: '', redirectTo: '/admin-login', pathMatch: 'full' },
    { path: 'front-login', component: LoginComponent },
    {
        path: '', component: FrontComponent, canActivate: [AuthGaurd], children: []
    }
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class FrontRoutingModule { }
