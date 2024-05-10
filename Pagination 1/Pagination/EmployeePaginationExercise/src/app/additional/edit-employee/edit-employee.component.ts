import { Component, Input, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent implements OnInit {
  @Input() isEditing: Boolean = true;
  @Input() Id: Number = 0;
  Name: String = '';
  Department: String = '';
  employeeService: EmployeeService = inject(EmployeeService);
  selectedEmployee: any;

  ngOnInit(): void {
      this.GetEmployeeById(this.Id);
      this.Name = this.selectedEmployee.name;
      this.Department = this.selectedEmployee.department_name;
  }
  GetEmployeeById = (id: Number) => {
    this.selectedEmployee = this.employeeService.GetEmployee(id).subscribe((result: any) => {
      this.selectedEmployee = result.employees[0];
      return this.selectedEmployee;
    });
  }
  EditEmployee = () => {
    if(!this.Name) this.Name = this.selectedEmployee.name;
    if(!this.Department) this.Department = this.selectedEmployee.department_name;
    const employee = {id: this.Id, name: this.Name, department: this.Department};
    this.employeeService.EditEmployee(employee).subscribe((result: any) => {
      console.log(result);
    });
    this.isEditing = false;
    window.location.reload();
  }
}
