import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent implements OnInit{
  // userService: any;


  // constructor(userService: UserService) {}
  //   this.userService = UserService;
  //   this.userService.getUsers());

  //   console.log(this.userService.getUser());

  //   userService: UserService = inject(UserService);

  // ngOnInit(): void;

  users:any;

  constructor(private userService:UserService){
    
    this.users = userService.getUsers();

    console.log(this.users);
  }

}

