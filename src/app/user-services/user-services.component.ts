import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../login';
import { RegistrationLoginLogoutService } from '../registration-Login-Logoutservice.service';
import { User } from '../user';

@Component({
  selector: 'app-user-services',
  templateUrl: './user-services.component.html',
  styleUrls: ['./user-services.component.css']
})
export class UserServicesComponent implements OnInit {
  id: number;
  // emailId:String;
  //login: Login = new Login();
  emailId: string
  user: User = new User();

  constructor(
    private service: RegistrationLoginLogoutService,
    private activateRoute: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.emailId = this.activateRoute.snapshot.params['emailId'];
    this.service.getByEmailId(this.emailId)
      .subscribe(data => {
        console.log(this.emailId);

        this.user = data;
        console.log(data);
      },
        error => console.log(error));
  }


  logout() {
        this.router.navigate(['/logoutconponent'])
  }

  deleteMyAccount(id: number) {
    this.service.deleteAccount(id).subscribe(
      data => {
        console.log(data),
          alert("user Account Successfullt Deleted Kindly Re-Register to Continue the Services :"),
          this.router.navigate([''])

      },
      error => console.log(error)

    )

  }
}
