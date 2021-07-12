import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { RegistrationComponent } from './registration/registration.component';
import { UserServicesComponent } from './user-services/user-services.component';

const routes: Routes = [

  { path: 'registration', component: RegistrationComponent },
  { path: '', component: LoginComponent },
  { path: 'user-services/:emailId', component: UserServicesComponent },
  { path: 'logoutComponent', component: LogoutComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
