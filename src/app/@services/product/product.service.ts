import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const urlApi = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpOptions;
  constructor(private http: HttpClient) { }


  //Productos
  getAllProducts(){
    return this.http.get(urlApi + '/api/productos');
  }

  addProduct(data:any){
    return this.http.post(urlApi + '/api/productos/register', {name:data.name, description:data.description, price:data.price, amount:data.amount, image:'image.jpg'}, this.httpOptions);
  }

  updateProduct(data:any, id:number){
    return this.http.put(urlApi + '/api/productos/update/'+id, {name:data.name, description:data.description, price:data.price, amount:data.amount}, this.httpOptions);
  }

  deleteProduct(id:number){
    return this.http.delete(urlApi + '/api/productos/delete/'+id, this.httpOptions);
  }


  

  init(token:string){
    this.httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer `+ token
      })
    };
  }
}
