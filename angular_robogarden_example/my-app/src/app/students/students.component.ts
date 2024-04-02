import { Component, OnInit } from '@angular/core';
import { myStudents } from '../student-data'; //import the array of students
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-students',
  standalone: true,
  imports: [],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})

export class StudentsComponent implements OnInit {
  studentsArray = myStudents;
  constructor(){}
  ngOnInit(){

  }
}
