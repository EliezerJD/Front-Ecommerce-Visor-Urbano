import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from  'src/app/@services/auth/auth.service';
import { Router } from  "@angular/router";

declare function validationLogin(): any;
declare function resetPassword(): any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    
  }

  
}
