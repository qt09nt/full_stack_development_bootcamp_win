import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
  @Input() isAdding: Boolean = true;
  employeeService: EmployeeService = inject(EmployeeService);
  Name: String = '';
  Department: String = '';

  AddEmployee = () => {
    const employee = {name: this.Name, department: this.Department};
    this.employeeService.AddEmployee(employee).subscribe((result: any) => {
      console.log(result);
    });
    this.isAdding = false;
    window.location.reload();
  }
}
