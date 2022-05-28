import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-userid',
  templateUrl: './userid.component.html',
  styleUrls: ['./userid.component.css']
})
export class UseridComponent implements OnInit {

  user:User=new User();
  constructor(private serve:UserServiceService,private route:Router) { }

  ngOnInit(): void {
  }
  view(user_id:number)
  {
    this.route.navigate(['/viewname',user_id]);
  }

}
