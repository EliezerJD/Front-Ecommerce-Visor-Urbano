import { Component, OnInit } from '@angular/core';
import { ProductService } from  'src/app/@services/product/product.service';

@Component({
  selector: 'app-product-adm',
  templateUrl: './product-adm.component.html',
  styleUrls: ['./product-adm.component.css']
})
export class ProductAdmComponent implements OnInit {
  products:any=[];
  productAdd:any=[];
  view=0;
  index=0;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    var user = JSON.parse(sessionStorage.getItem('user'));
    this.productService.init(user.apiToken);
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

  add(){
    this.productService.addProduct(this.productAdd).subscribe(res => {
      this.getAllProducts();
      this.view=0;
      alert("Producto agregado correctamente");
    },
    error=> {
      alert(error.message);
    });
  }

  update(){
    this.productService.updateProduct(this.productAdd, this.index).subscribe(res => {
      this.getAllProducts();
      this.view=0;
      alert("Producto actualizado correctamente");
    },
    error=> {
      alert(error.message);
    });
  }

  updateAux(id:number, index:number){
    this.index=id;
    this.view=2;
    this.productAdd.name = this.products[index].name;
    this.productAdd.description = this.products[index].description;
    this.productAdd.price = this.products[index].price;
    this.productAdd.amount = this.products[index].amount;
  }

  delete(id:number, index:number){
    this.productService.deleteProduct(id).subscribe(res => {
      this.products.splice(index,1);
      alert("Producto eliminado");
    },
    error=> {
      alert(error.message);
    });
  }

  changeView(value:number){
    this.view = value;
    this.productAdd=[];
  }



}
