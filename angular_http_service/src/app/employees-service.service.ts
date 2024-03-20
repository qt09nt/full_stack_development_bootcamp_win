import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EmployeesServiceService {

  http:HttpClient = inject(HttpClient);

  getEmployees() {
    const headers = new HttpHeaders({'Content-Type': ''})
  }

  constructor() { }
}
