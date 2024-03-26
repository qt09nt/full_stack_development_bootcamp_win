import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EmployeesServiceService {

  http:HttpClient = inject(HttpClient);

  getEmployees() {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'})
    const options = {headers: headers};
  
    return this.http.get('http://localhost:30000/employees/', options);
  }

  //create a service to get employeesbyid
  //change the url to same as your nodejs application to get employeeid

  export class EmployeesServiceById {

    http:HttpClient = inject(HttpClient);

    getEmployees() {
      
    }
  }

  constructor() { }
}
