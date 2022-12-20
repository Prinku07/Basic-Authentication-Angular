import { HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, tap, finalize } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class Interceptor {

  token: any;
  public isloading = false;

  constructor(
    private toastrService: ToastrService,
    private authservice: AuthService,
    private router: Router) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.isloading = true
    this.token = this.authservice.getToken()
    if (this.token) {
      req = req.clone({
        setHeaders: {
          Authorization: "Bearer " + this.token
        }
      });
    }
    return next.handle(req).pipe(tap(event => {
      if (event instanceof HttpResponse) {
        if (event.body.status) {
          if (event.body.status == 401) {
            this.authservice.logout();
            this.router.navigate(['/login'])
          }
          if (event.body.status !== 200) {
            console.log(event.body.message)
            this.toastrService.error(event.body.message)
          }
        }
      }
    }))
  }
}
