import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  customers = [
    {id: 1, name: "Marian"},
    {id: 2, name: "Janette"},
    {id: 3, name: "Dany"}
  ];
}
