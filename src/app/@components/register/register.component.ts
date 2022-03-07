import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from  'src/app/@services/auth/auth.service';
import { Router } from  "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private  authService:  AuthService, private router:  Router) { }

  ngOnInit(): void {
  	
  }

}
