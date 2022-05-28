import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl="http://localhost:8080/user";
  constructor(private http:HttpClient) { }
  getall():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/getall`); 
  }
  adduser(user:User):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/add`,user); 
  }
  updateuser(user:User):Observable<any>
  {
    return this.http.put(`${this.baseUrl}/update`,user); 
  }
  deleteById(user_id:number):Observable<any>
  {
    return this.http.delete(`${this.baseUrl}/delete/${user_id}`,{ responseType: 'text' }); 
  }
   viewById(user_id:number):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/getid/${user_id}`); 
  }
  getone(user_id:number):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/one/${user_id}`);
  }
  all():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/all`);
  }
}
