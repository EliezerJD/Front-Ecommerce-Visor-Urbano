import { Component, OnInit } from '@angular/core';
import { DeliveryService } from  'src/app/@services/delivery/delivery.service';

@Component({
  selector: 'app-user-adm',
  templateUrl: './user-adm.component.html',
  styleUrls: ['./user-adm.component.css']
})
export class UserAdmComponent implements OnInit {
  users:any=[];
  constructor(private deliveryService: DeliveryService) { }

  ngOnInit(): void {
    var user = JSON.parse(sessionStorage.getItem('user'));
    this.deliveryService.init(user.apiToken);
    this.getAllUsers();
  }

  getAllUsers(){
    this.deliveryService.getAllUsers().subscribe(res => {
      this.users = res;
    },
    error=> {
      alert(error.message);
    });
  }

}
