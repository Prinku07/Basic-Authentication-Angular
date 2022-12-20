import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { };

  canActivate(): boolean {

    const user = localStorage.getItem('token');
    if (user) {
      return true;
    }
    this.router.navigate(['/login'])
    return false;
  }
}
