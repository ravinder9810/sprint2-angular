import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  constructor(
    private httpClient:HttpClient
    ) 
  { }

  public loginUserFromRemote(login:Login):Observable<any>{


   return this.httpClient.post<any>("http://localhost:8083/registration/login",login)

  }
  public registerUser(user:User):Observable<any>{

    return this.httpClient.post<any>("http://localhost:8083/registration/registration",user)

  }


  getByEmailId(emailId:String):Observable<User>{
   
    return this.httpClient.get<User>(`http://localhost:8083/registration/user/${emailId}`);
  }
  deleteAccount(id:number):Observable<any>{
    return this.httpClient.delete<any>(`http://localhost:8083/registration/delete/${id}`)
  }

}
