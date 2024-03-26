import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  console.log('check')

  onSubmit(form:any){
    if(form.valid){
      console.log('Form Data', form)
    }
  }
}
