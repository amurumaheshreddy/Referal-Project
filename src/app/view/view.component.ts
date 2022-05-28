import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  arr:User[]=[];
  user_id!: number;
  user:User=new User();
  constructor(private serve:UserServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
  this.user_id=this.route.snapshot.params['user_id'];
  this.serve.getone(this.user_id).subscribe(
user=>{this.user=user;}
  )
  this.serve.all().subscribe(
    arr=>{this.arr=arr
    console.log(arr)},
    error=>{console.log("errror")}
  )
  }

  


}
