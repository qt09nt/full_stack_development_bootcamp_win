import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { CreateEmployeeComponent } from '../additional/create-employee/create-employee.component';
import { EditEmployeeComponent } from '../additional/edit-employee/edit-employee.component';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, CreateEmployeeComponent, EditEmployeeComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  HeadersList: Array<String> = ['ID', 'Name', 'Department'];
  employeeService: EmployeeService = inject(EmployeeService);
  EmployeesList: Array<any> = [];
  isAdding: Boolean = false;
  isEditing: Boolean = false;
  selectedEmployee: Number = 0;

  ngOnInit(): void {
    this.GetAllEmployees();
  }
  GetAllEmployees = () => {
    this.employeeService.GetEmployees().subscribe((result: any) => {
      this.EmployeesList = result.employees;
    });
  }
  AddEmployee = () => {
    this.isAdding = true;
  }
  EditEmployee = (id: Number) => {
    this.isEditing = true;
    this.selectedEmployee = id;
  }
  DeleteEmployee = (id: Number) => {
    this.employeeService.DeleteEmployee(id).subscribe((result: any) => {
      console.log(result);
    });
    window.location.reload();
  }
}

