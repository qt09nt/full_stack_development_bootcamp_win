import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  employees = [
    {id: 1, name:"Harsh" },
    {id: 2, name:"Nora"},
    {id: 3, name:"David"},
    {id: 4, name:"Queen"},
    {id: 5, name:"Elona"},
  ]

  getUser(){
    return this.users;
  
  }

  constructor() { }
}
