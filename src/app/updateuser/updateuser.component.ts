import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  user:User=new User();
  constructor(private serve:UserServiceService,private route:Router) { }

  ngOnInit(): void {
  }

add()
{
  this.serve.adduser(this.user).subscribe(
    user=>{this.user=user
      window.alert("updated Successfull")
      console.log(user)
      this.route.navigateByUrl("/users")
    },
    error=>{alert("error")}

  )
}
}
