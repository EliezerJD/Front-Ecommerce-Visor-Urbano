import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const urlApi = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions;
  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get(urlApi + '/api/usuarios', this.httpOptions);
  }

  addUser(data:any){
    return this.http.post(urlApi + '/api/usuarios/register', {name:data.name, email:data.email, password:data.password, confirm_password:data.confirm_password, role_id:data.role_id}, this.httpOptions);
  }

  updateUser(data:any, id:number){

    if(data.password!=null && data.confirm_password!=null){
      return this.http.put(urlApi + '/api/usuarios/update/'+id, {name:data.name, email:data.email, password:data.password, confirm_password:data.confirm_password, role_id:data.role_id}, this.httpOptions);
    }else{
      return this.http.put(urlApi + '/api/usuarios/update/'+id, {name:data.name, email:data.email, role_id:data.role_id}, this.httpOptions);
    }
  }

  deleteUser(id:number){
    return this.http.delete(urlApi + '/api/usuarios/delete/'+id, this.httpOptions);
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
