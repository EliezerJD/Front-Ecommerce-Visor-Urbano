import { Component, OnInit, NgZone} from '@angular/core';
import { AuthService } from  'src/app/@services/auth/auth.service';
declare function viewDetailOrder(carrito): any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private  authService:  AuthService) { }
  
  ngOnInit(): void {
    
  }

  

}
