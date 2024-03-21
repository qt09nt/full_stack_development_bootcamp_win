import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EmployeesServiceService {

  http:HttpClient = inject(HttpClient);

  getEmployees() {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'})
    const options = {headers: headers};
  
    return this.http.get('url', options);
  }

  constructor() { }
}
