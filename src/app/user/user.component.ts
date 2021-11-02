import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users!: User[];
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {

   // getUsers(){
    this.userService.getUsers().subscribe((data: User[])=>
    {
      console.log(data);
      this.users = data;
    });
    }
  //}
    updateUserById(id: number){
      return this.router.navigate(['update-user', id]);
     }

     deleteUser(id: number){

     this.userService.deleteUser(id).subscribe((data: User[])=>
    {
      
      this.userService.getUsers().subscribe((data: User[])=>
      {
        console.log(data);
        this.users = data;
      });
    });
    }

    // updateUser(users){
    //   console.log(users)
    //  return this.router.navigate(['update-user']);
    // }

}
