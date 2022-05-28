import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  @Input() name="Mahesh";

  users: User[] = [];
  constructor(private serve:UserServiceService,private route:Router) { }
  ngOnInit(): void {
    this.getallusers();
  }
  getallusers()
  {
    this.serve.getall().subscribe(
      data=>{this.users=data}
    )
    
  }
  deleted(user_id:number)
  {
    this.serve.deleteById(user_id).subscribe(
      data=>{console.log(data)
        this.route.navigateByUrl("/users")},
      error=>{console.error("error");}
      
      
    )
  }
  view(user_id:number)
  {
    this.route.navigate(['/view',user_id]);
  }
  

}
