import { Component, inject } from '@angular/core';
import {Router } from '@angular/router';
import { AuthdataService} from '../authdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  router: Router = inject(Router);

  auth:AuthdataService = inject(AuthdataService);

  logout(){
    localStorage.removeItem('token');
    //localStorage.clear();
    this.router.navigate(['signin']);
  }


  verifyUser(){
    if(!this.auth.isAuthenticated()){
      return false;
    }
    return true;
  }
 
  loggedInUser: boolean = !this.auth.isAuthenticated() ? false : true;

}
