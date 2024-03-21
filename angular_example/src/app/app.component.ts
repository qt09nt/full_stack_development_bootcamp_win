import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Person } from './person';
import { ItemComponent } from './item/item.component';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';

<div *ngIf="person">
  <p>Custom Person ID: {{person.id}}</p>
  <p>Custom Person Name: {{personalbar.name}}</p>
</div>


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ItemComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title:string = 'angular_example';

  //person: Person = {id:number, name:string } = {id:1, name: "Harsh"};

  person: Person = {id:1, name: "Harsh"};

  persons:Person[] = [];
  personService: DataService = inject(DataService);

  // persons:Person[] = [
  //   { id:1, name: "Harsh" },
  //   { id:2, name: "Queen" },
  //   { id:3, name: "Elona" },
  //   { id:5, name: "David" },
  //   { id:6, name: "Renan" },
  //   { id:7, name: "Prosper" },
  // ];

  constructor(){
    this.persons = this.personService.getAllPersons();
  }

  <input [(ngModel)]="title">

  <input ([ngModel])="title">

  Value: {{ title }}


  imageUrl:string ="https://buffer.com/library/content/images/2023/10/free-images.jpg";

  isDisabled: boolean = true;

  color_yellow:string="yellow";
  var color_yellow = "yellow";

  styleClass:string="color:green; font-size: 30px;"

  clearImage(){
    this.imageUrl = " ";
  } 

  //Add another button and show the Image
  showImage(){
    this.imageUrl='https://buffer.com/library/content/images/2023/10/free-images.jpg';
  }


