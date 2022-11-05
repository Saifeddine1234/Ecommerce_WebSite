import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../app/user';
import {Assistance} from '../app/assistance';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient:HttpClient) { }

  add_user(user: User){
    console.log(user);
    return this.httpclient.post<any>('http://localhost:3001/users/add_user', user);
  }

  add_assistance(assistance: Assistance){
    console.log(assistance);
    return this.httpclient.post<any>('http://localhost:3001/users/add_assistance', assistance);
  }

  getUser(){
    return this.httpclient.get<any>('http://localhost:3001/users/get_user');
  }
  getBytelephone(tel: String) {
    console.log(tel);
    return this.httpclient.get<any>('http://localhost:3001/users/get_by_telephone/'+tel)
  }
  
  getAssistanceByEmail(email: String) {
    console.log(email);
    return this.httpclient.get<any>('http://localhost:3001/users/get_assistance_byEmail/'+email)
  }
  getAssistance(){
    return this.httpclient.get<any>('http://localhost:3001/users/get_assistance');
  }
  login(login : any){
    return this.httpclient.post<any>('http://localhost:3001/users/login', login);
  }
  goto(token : any){
    console.log(token)
    const headers = new HttpHeaders(
      {
        'Content-type' : 'application/json',
        'Authorization' :  `${token}`
      } )
      console.log(headers)
    return this.httpclient.get<any>('http://localhost:3001/users/adminP', {headers : headers });
  }
}
