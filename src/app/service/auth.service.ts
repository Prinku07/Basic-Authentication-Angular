import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient, private router : Router) { }

  logout() {
    localStorage.removeItem('user');
     localStorage.removeItem("token");
     this.router.navigate(['/login'])
   }

  getToken() {
    return localStorage.getItem('token')
  }

  login(email: string, password: string) {
    return this.http.post('/api/login', { email, password });
  }

  register(params: any) {
    return this.http.post('/api/register', params)
  }
}
