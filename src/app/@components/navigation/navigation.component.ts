import { Component, OnInit, NgZone} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  admin:boolean = false;
  constructor() { }

  ngOnInit(): void {
    
  }
  
  logout(){
  	//agreagar la peticion al back para resetear el apiToken
    this.admin=false;
    sessionStorage.clear();
  }

  isAuth(){
    if(sessionStorage.getItem("user") !== null){
      var user = JSON.parse(sessionStorage.getItem('user'));
      if(user.role_id==1){
        this.admin=true;
      }
      return true;
    }
    return false;
  }


  

}
