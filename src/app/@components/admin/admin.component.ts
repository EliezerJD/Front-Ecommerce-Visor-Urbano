import { Component, OnInit, NgZone} from '@angular/core';
import { AdminService } from  'src/app/@services/admin/admin.service';
import { DeliveryService } from  'src/app/@services/delivery/delivery.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  products:any=[];
  constructor(private adminService: AdminService, private deliveryService: DeliveryService) { }
  
  ngOnInit(): void { 
    this.getAllProducts();
  }

  getAllProducts(){
    this.deliveryService.getAllProducts().subscribe(res => {
      this.products = res;
    },
    error=> {
      alert(error.message);
    });
  }


}
