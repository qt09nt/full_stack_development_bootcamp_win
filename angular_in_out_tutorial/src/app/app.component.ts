//Add new Professor when a button is clicked
//There should be 3 there by default
//Do it using Output (Sending data from Child to Parent)

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_in_out_tutorial';

  //create one object and send it data to child
  person = { name: 'Harsh', age: 28 }

  students = ["Harsh", "Sam", "Test"]

  addstudents(student:string){
    this.students.push(student);
  }

 

}

