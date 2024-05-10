import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesServiceService } from '../employees-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  employeeService: EmployeesServiceService = inject(EmployeesServiceService);
  selected_employee: any;
  name: any;
  derpartment: any;
  @Input() isEditing: Boolean = true;
  @Input() Id: Number = 0;
  ngOnInit(): void {
    this.getEmployee(this.Id)
    console.log(this.selected_employee)
  }
  constructor() {
  }
  getEmployee = (id: Number) => {
    this.employeeService.getEmployeesById(id).subscribe((result:any) => {
      this.selected_employee = result.employees[0];
    });
    //return this.selected_employee;
  }
  editEmployee = () => {
    const employee = {'id': this.Id, 'name': this.name, 'department': this.derpartment};
    this.employeeService.editEmployee(employee).subscribe((result: any) => {
      console.log(result);
    });
    this.isEditing = false;
  }
}
