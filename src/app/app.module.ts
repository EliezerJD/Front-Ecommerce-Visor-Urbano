import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './@components/navigation/navigation.component';
import { FooterComponent } from './@components/footer/footer.component';
import { RegisterComponent } from './@components/register/register.component';
import { LoginComponent } from './@components/login/login.component';
import { HomeComponent } from './@components/home/home.component';

import { environment } from 'src/environments/environment';
import { AdminComponent } from './@components/admin/admin.component';
import { UserComponent } from './@components/user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent,
    AdminComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){}
}
