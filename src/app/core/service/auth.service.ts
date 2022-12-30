import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient, private router : Router) { }

 currentuser = localStorage.getItem('user');

  logout() {
    localStorage.removeItem('user');
     localStorage.removeItem("token");
     this.router.navigate(['/login'])
   }

   isLoggedIn() {
    return !!localStorage.getItem('user');
  }

  getToken() {
    return localStorage.getItem('token')
  }

  login(email: string, password: string) {
    return this.http.post('/api/Account/Login?emailId='+ email + '&password=' + password, { });
  }

  register(params: any) {
    return this.http.post('/api/Account/Register', params)
  }
}
