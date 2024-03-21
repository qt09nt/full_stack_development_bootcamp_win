import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { CollegeModule } from './college/college.module';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrl: './college.component.css'
})
export class CollegeComponent {

}
