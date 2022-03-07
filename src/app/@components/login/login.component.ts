import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from  'src/app/@services/auth/auth.service';

declare function validationLogin(): any;
declare function resetPassword(): any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    
  }

  login(){
    this.authService.login(this.email, this.password).subscribe(res => {
      if(res!=null){
        sessionStorage.setItem('user', JSON.stringify(res));
        window.location.replace('/home');
      }else{
        alert("Credenciales incorrectas");
      }
      
    },
    error=> {
      console.log(error);
    });
  }

  
}
