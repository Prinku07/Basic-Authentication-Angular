import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { ReverseGuard } from './guard/reverse.guard';

const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent,
    canActivate : [ReverseGuard]
  },
  {
    path : 'register',
    component : RegisterComponent,
    canActivate : [ReverseGuard]
  },
  {
    path : 'dashboard',
    component : DashboardComponent,
    canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
