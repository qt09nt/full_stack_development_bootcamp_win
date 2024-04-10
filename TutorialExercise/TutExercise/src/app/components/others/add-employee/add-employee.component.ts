import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  Name: string ='';
  Department: string ='';
  employeeServivce: EmployeeService = inject(EmployeeService);
  @Input() isAdding: Boolean = true;

  AddEmployee = () => {
    const employee = {'name': this.Name, 'department': this.Department};
    this.employeeServivce.AddEmployee(employee).subscribe((result: any) => {
      console.log(result);
    });
    this.isAdding = false;
    window.location.reload();

  }


}

function inject(EmployeeService: typeof EmployeeService): EmployeeService {
  throw new Error('Function not implemented.');
}

