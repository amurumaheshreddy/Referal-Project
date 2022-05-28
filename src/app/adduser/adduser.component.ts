import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  user:User=new User();
  constructor(private serve:UserServiceService,private route:Router) { }

  ngOnInit(): void {
  }
add()
{
  this.serve.adduser(this.user).subscribe(
    user=>{this.user=user
      window.alert("added Successfull")
      console.log(user)
      this.route.navigateByUrl("/users")
    },
    error=>{alert("error")}

  )
}
}
