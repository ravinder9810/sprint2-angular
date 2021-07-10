import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';
import { RegistrationLoginLogoutService } from '../registration-Login-Logoutservice.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = new Login();
  // @Output() isLoginSuccessfull=false;
  message = '';
  userData = new User();
  isLoginSuccessfull=false;
  constructor(
    private registration_service: RegistrationLoginLogoutService,
    private router: Router // here ROUTER (NOT ROUTE)
  ) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.registration_service.loginUserFromRemote(this.loginData).subscribe(
      data => {
        console.log("response recieved");
        console.log(this.userData);

          this.isLoginSuccessfull=true;
        sessionStorage.setItem('Login', this.loginData.emailId)
        this.userDetails(this.loginData.emailId);
        // this.router.navigate(['/user-services']);
      },
      error => {
        console.log("exception occured");
        this.message = error.error;
        this.isLoginSuccessfull=false;
        //   this.message="BAD Credentials, please enter valid emailId and password"
      }
    );
  }


  // isUserLoghedIn(){
  //   let variable=sessionStorage.getItem('emailId');
  //   console.log(!(variable===null))
  //   return !(variable===null)
  // }

  isLoggedIn():boolean{
    if(this.isLoginSuccessfull){
      return true;
    }
    return false;
    
  }

  gotoRegitration() {
    this.router.navigate(['/registration'])

  }


  userDetails(emailId: String) {
    this.router.navigate([`/user-services`, emailId])

  }


}
