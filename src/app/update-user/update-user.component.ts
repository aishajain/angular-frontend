import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: User = new User();
  id: number;
  constructor(private usesrService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  onSubmit()
  {
  this.usesrService.updateUser(this.user).subscribe(data =>
    {
    console.log(data);
    this.goToUserList();
   
  },
  error => console.log(error));
 }
  
 goToUserList(){
  this.router.navigate(['/users']);
}

  ngOnInit(): void {
       this.id = this.route.snapshot.params['id'];
     this.usesrService.getUserById( this.id).subscribe(data =>{
       this.user = data;
     }, error => console.log(error));
  }
}

