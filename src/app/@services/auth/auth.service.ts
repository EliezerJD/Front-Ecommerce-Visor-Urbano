import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { HttpClient, HttpHeaders} from '@angular/common/http';

const urlApi = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

	login(email:string, password:string) {
		return this.http.post(urlApi + '/api/login', {email:email, password:password});
	}

	register() {
	    
	}
	
}
