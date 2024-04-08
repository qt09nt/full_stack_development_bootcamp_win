import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
continents = [
	"Africa",
  	"Antarctica",
  	"Asia",
  "Australia",
  "Europe",
  "North America",
  "South America"
];
}
