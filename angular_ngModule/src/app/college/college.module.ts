import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollegeComponent } from '../college/college.component';

@NgModule({
  declarations: [

    CollegeComponent
  ],
  imports: [
    
    CommonModule
  ],
   exports: [
    CollegeComponent
   ]
})
export class CollegeModule { }
