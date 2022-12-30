import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReverseGuard implements CanActivate {

    constructor(private router: Router) {};

    canActivate() {
      const user = (localStorage.getItem('token'));
      if (!user) {
        return true;
      }
      this.router.navigate(['/dashboard'])
      return false;
    }
  }