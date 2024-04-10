import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  @InputDeviceInfo() isEditing: Boolean = true;
  @Input()
}

AddEmployee = () => {
  this.isAdding = true;
}

EditEmployee = (id: number) => {
  this.isEditing = true;
  
}