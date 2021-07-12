import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';
import { RegistrationLoginLogoutService } from '../registration-Login-Logoutservice.service';
import { User } from '../user';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerUserData = new User();    // creating user object to fill the details in the form

  errorMessage: User;         //Using User class for displaying error for particular field

  isSuccessfull = false;    
  isSignUpFailed = false;

 
hide=true;     // hide is used for password visibility 
hide1=true;    // hide is used for confirm password visibility 

  constructor
  (
    private registerService: RegistrationLoginLogoutService,  // injecting RegistrationLoginLogoutService because this class is depending on methods which are in service class
    private router: Router                                    // injecting Router is to route from one component to another component( here after loginSuccefull it will goto Login page )
  ) 
  { }

  ngOnInit(): void {
  }

  registerUser() {
    this.registerService.registerUser(this.registerUserData).subscribe(
      data => {
         console.log(this.registerUserData);
        this.isSuccessfull = true;
        this.isSignUpFailed = false;
        
        if (this.isSuccessfull) {
          alert("successfully registered , Kindly login for further services ");
          this.router.navigate([''])
        }
      },
      error => {
        console.log(error.error);
        this.errorMessage = error.error;
        this.isSignUpFailed = true;
      }
    )
  }
}
