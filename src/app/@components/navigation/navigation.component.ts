import { Component, OnInit, NgZone} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  logued:boolean = false;
  admin:boolean = false;
  email:string = '';
  constructor() { }

  ngOnInit(): void {
    this.isAuth();
  }
  
  logout(){
  	//agreagar la peticion al back para resetear el apiToken
    this.resetData();
    sessionStorage.clear();
    window.location.replace('/home');
  }

  isAuth(){
    if(sessionStorage.getItem("user") !== null){
      var user = JSON.parse(sessionStorage.getItem('user'));
      this.email = user.email;
      if(user.role_id==1){
        this.admin=true;
      }
      this.logued=true;
    } 
  }

  resetData(){
    this.logued=false;
    this.admin=false;
    this.email='';
  }
}
