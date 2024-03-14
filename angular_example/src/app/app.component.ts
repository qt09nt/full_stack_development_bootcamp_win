import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Person } from './person';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'angular_example';

  //person: Person = {id:number, name:string } = {id:1, name: "Harsh"};

  person: Person = {id:1, name: "Harsh"};



  persons:Person[] = [
    { id:1, name: "Harsh" },
    { id:2, name: "Queen" },
    { id:3, name: "Elona" },
    { id:5, name: "David" },
    { id:6, name: "Renan" },
    { id:7, name: "Prosper" },
  ];
}


