import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customers = [
    {id: 1, name: "Marian"},
    {id: 2, name: "Janette"},
    {id: 3, name: "Dany"}
  ];
}
