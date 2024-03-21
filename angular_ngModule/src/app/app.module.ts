import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { CollegeModule } from './college/college.module';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
  ],
  imports: [
    BrowserModule,
    CollegeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
