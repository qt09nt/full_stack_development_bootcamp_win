import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeesServiceService } from './employees-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular_http_service';

  employeeService: EmployeeServiceService = inject(EmployeesServiceService);
  employees: any;

  constructor(){
    this.employeeService.getEmployees().subscribe((result:any) => {
      this.employees = result.employees;
      console.log(result);
    })

  }
}
//     this.employeeService.getEmployeesById().subscribe((result:any) => {
//       console.log('Single Employee == ', result);
//     })
//   }
// }
