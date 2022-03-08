import { Component, OnInit } from '@angular/core';
import { ProductService } from  'src/app/@services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  products:any=[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(res => {
      this.products = res;
    },
    error=> {
      alert(error.message);
    });
  }
}
