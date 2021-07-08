import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';
import { RegistrationServiceService } from '../registration-service.service';
import { User } from '../user';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerUserData = new User();
  errorMessage: User;
  isSuccessful = false;
  isSignUpFailed = false;

hide=true;
hide1=true;

  constructor(
    private registerService: RegistrationServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.registerService.registerUser(this.registerUserData).subscribe(
      data => {
        console.log(this.registerUserData);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        alert("successfully registered::");
        if (this.isSuccessful) {
          this.router.navigate([''])
        }
      },
      error => {
        console.log("error exist");
        this.errorMessage = error.error;
        this.isSignUpFailed = true;
      }
    )
  }
}
