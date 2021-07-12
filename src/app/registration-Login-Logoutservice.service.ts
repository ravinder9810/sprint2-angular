import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationLoginLogoutService {

  constructor(
    private httpClient:HttpClient
    ) 
  { }

  // for login 
  public loginUserFromRemote(login:Login):Observable<any>{

   return this.httpClient.post<any>("http://localhost:8083/registration/login",login)

  }
  //for registration using httpClient instance to post User data into server and we are casting http response into "any" type because the reponse is no need to cast for a particular format 
  public registerUser(user:User):Observable<any>{

    return this.httpClient.post<any>("http://localhost:8083/registration/registration",user)

  }

  //for fetching of user type we are casting asynchronous http response into User type 
  getByEmailId(emailId:String):Observable<User>{
   
    return this.httpClient.get<User>(`http://localhost:8083/registration/user/${emailId}`);
  }

  // deleteAccount(id:number):Observable<any>{
  //   return this.httpClient.delete<any>(`http://localhost:8083/registration/delete/${id}`)
  // }

}
