import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { CreateEmployeeComponent } from '../additional/create-employee/create-employee.component';
import { EditEmployeeComponent } from '../additional/edit-employee/edit-employee.component';
import { FormsModule } from '@angular/forms';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, CreateEmployeeComponent, EditEmployeeComponent, FormsModule],
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
  pageSize: number = 10;
  page: Number = 1;
  PageSizes: Array<Number> = [5, 10, 25, 50, 100];
  numberOfPages: Array<number> = [];

  async ngOnInit(): Promise<void> {
    await this.GetAllEmployees();
    this.numberOfPages = Array(Math.ceil(this.EmployeesList.length / this.pageSize)).fill(0).map((x,i)=>i+1);
    console.log(this.EmployeesList)
  }
  GetAllEmployees = async () => {
    const response: any = await lastValueFrom(this.employeeService.GetEmployees());
    this.EmployeesList = response.employees;
    /*this.employeeService.GetEmployees().subscribe((result: any) => {
      this.EmployeesList = result.employees;
      this.numberOfPages =  Array(Math.ceil(this.EmployeesList.length / this.pageSize)).fill(0).map((x,i)=>i+1);
    });*/
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

