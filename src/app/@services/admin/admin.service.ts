import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';



declare function success(ok): any;

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  constructor(private http: HttpClient) { }
  
}
