import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const urlApi = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get(urlApi + '/api/productos');
  }
}
