import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthdataService {

  constructor() { }
  jwtHelper: JwtHelperService = inject(JwtHelperService);

  http: HttpClient = inject(HttpClient);

  signIn(data: {}){
    return this.http.post('http://localhost:3000/login', data);
  }

  signUp(data: {}){
    return this.http.post('http://localhost:3000/register/', data);
  }

  isAuthenticated(){

    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getToken(){
    return localStorage.getItem('token'); true
  }
}
