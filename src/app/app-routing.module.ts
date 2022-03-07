import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './@components/login/login.component';
import { RegisterComponent } from './@components/register/register.component';
import { HomeComponent } from './@components/home/home.component';
import { AdminComponent } from './@components/admin/admin.component';
import { UserComponent } from './@components/user/user.component';

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
   component: LoginComponent
},
{
   path: 'register',
   component: RegisterComponent
},
{
   path: 'admin',
   component: AdminComponent
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