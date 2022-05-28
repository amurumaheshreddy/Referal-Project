import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UseridComponent } from './userid/userid.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ViewComponent } from './view/view.component';
import { ViewnameComponent } from './viewname/viewname.component';

const routes: Routes = [
  {path:"users",component:UserlistComponent},
  {path:"add",component:AdduserComponent},
  {path:"userid",component:UseridComponent},
  {path:"view/:user_id",component:ViewComponent},
  {path:"viewname/:user_id",component:ViewnameComponent},
  {path:"update",component:UpdateuserComponent},
  {path:"",redirectTo:"/add",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
