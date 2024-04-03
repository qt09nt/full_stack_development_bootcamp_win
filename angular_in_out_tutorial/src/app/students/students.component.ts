import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  @Input() websiteTitle: string='';
  @Input() childPerson!: object;
  //@Input() childPerson!: object = {};
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(val:string){
    console.log(val);
    this.newItemEvent.emit(val);
  
  }
}

