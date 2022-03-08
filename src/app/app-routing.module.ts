import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './@components/login/login.component';
import { RegisterComponent } from './@components/register/register.component';
import { HomeComponent } from './@components/home/home.component';
import { AdminComponent } from './@components/admin/admin.component';
import { UserComponent } from './@components/user/user.component';
import { UserAdmComponent } from './@components/user-adm/user-adm.component';
import { ProductAdmComponent } from './@components/product-adm/product-adm.component';
import { LoginGuard } from './guards/login.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
},
{
   path: 'home',
   component: HomeComponent
},
{
   path: 'login',
   component: LoginComponent,
   canActivate: [LoginGuard]
},
{
   path: 'register',
   component: RegisterComponent
},
{
   path: 'admin',
   component: AdminComponent,
   canActivate: [AdminGuard],
   children: [
      {
         path: 'product',
         component: ProductAdmComponent
      },
      {
         path: 'user',
         component: UserAdmComponent,
      },
   ]
},
{
   path: 'user',
   component: UserComponent
},
{ 
  path: '**', 
  redirectTo: 'home', 
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }