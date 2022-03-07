import { Component, OnInit } from '@angular/core';
import { DeliveryService } from  'src/app/@services/delivery/delivery.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  products:any=[];
  constructor(private deliveryService: DeliveryService) { }

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
