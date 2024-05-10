import { Component } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

}

export class EditComponent 
@Input() isEditing: Boolean = true;
@Input() Id: Number = 0;