import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { CollegeModule } from './college/college.module';
import { DirectComponentRootComponent } from './direct-component-root/direct-component-root.component';
import { DirectorRootComponentComponent } from './director-root-component/director-root-component.component';
import { CustomModuleModule } from './custom-module/custom-module.module';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    DirectComponentRootComponent,
    DirectorRootComponentComponent,
  ],
  imports: [
    BrowserModule,
    CollegeModule,
    CustomModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

