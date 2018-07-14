import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const adminRoutes: Routes = [
    { path: 'admin',  component: LoginComponent },
];
  

@NgModule({
    imports:[
       RouterModule.forChild(adminRoutes)
    ],
    exports:[RouterModule]
})

export class AdminRoutingModule {}