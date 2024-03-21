import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeesServiceService } from './employees-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular_http_service';

  employeeService: EmployeeServiceService = inject(EmployeesServiceService);
  employees: any;

  constructor(){
    this.employeeService.getEmployees().subscribe((result:any) => {
      console.log(result);
    })
  }
}
