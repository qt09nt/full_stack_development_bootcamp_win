import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  http: HttpClient = inject(HttpClient);

  constructor() { }
  GetEmployees() {
    const headers = new HttpHeaders({'Content-Type':'application/json', 'Accept':'application/json'});
    const options = {headers: headers};
    return this.http.get('http://localhost:3000/employees/', options);
  }
  GetEmployee(id: Number) {
    const headers = new HttpHeaders({'Content-Type':'application/json', 'Accept':'application/json'});
    const options = {headers: headers};
    return this.http.get(`http://localhost:3000/employees/${id}`, options);
  }
  AddEmployee(employee: any) {
    const headers = new HttpHeaders({'Content-Type':'application/json', 'Accept':'application/json'});
    const options = {headers: headers, name: employee.name, department: employee.department};
    return this.http.post(`http://localhost:3000/employees/`, options);
  }
  EditEmployee(employee: any) {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'});
    const options = {headers: headers, name: employee.name, department: employee.department};
    return this.http.put(`http://localhost:3000/employees/${employee.id}`, options);
  }
  DeleteEmployee(id: Number) {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'});
    const options = {headers: headers};
    return this.http.delete(`http://localhost:3000/employees/${id}`, options);
  }
}
