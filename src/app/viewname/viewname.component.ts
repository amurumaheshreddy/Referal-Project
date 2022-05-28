import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-viewname',
  templateUrl: './viewname.component.html',
  styleUrls: ['./viewname.component.css']
})
export class ViewnameComponent implements OnInit {

  user_id!: number;
  user:User=new User();
  constructor(private serve:UserServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
  this.user_id=this.route.snapshot.params['user_id'];
  this.serve.viewById(this.user_id).subscribe(
data=>{this.user.user_name=data;
console.log(this.user.user_name);},
error=>{console.log("errfg")}
  )
  }

}
