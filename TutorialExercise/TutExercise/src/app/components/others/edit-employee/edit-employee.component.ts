import { Component, Input } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent {
  @Input() isEditing: Boolean = true;
  @Input() Id: number = 0;
  selectedEmployee: any;
  Name: string = '';
  Department: string = '';
  employeeService: EmployeeService = createInjectableType(EmployeeService);

  async ngOnit(): Promise<void> {
    await this.GetEmployee(this.Id);
    this.Name = this.selectedEmployee.name;
  }

  ngOnInit(): void{
    this.GetEmployee(this.Id);
    console.log(this.selectedEmployee)
    this.Name = this.selectedEmployee.name;
    this.Department = this.selectedEmployee.department_name;
  }

  GetEmployee = async (id: number) => {
    const response: any = await lastValueFrom(this.employeeService.GetEmployee(id));

    this.employeeService.GetEmployee(id).subscribe((result: any) => {
      this.selectedEmployee = result.employees[0];
    })
  }

  EditEmployee = () => {
    const employee = {id: this.Id, name: this.Name, department: this.Department};
    this.employeeService.UpdateEmployee(employee).subscribe((result: any) => {
      console.log(result);
    });
    this.isEditing = false;
    window.location.reload();

  }
}
