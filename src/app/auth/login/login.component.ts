import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { AuthService } from '../../core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup | any;

  constructor(private fb: FormBuilder, private authservice: AuthService, private router: Router, private toaster: ToastrService) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    })

  }

  submit() {
    const controls = this.loginform.controls;
    if (this.loginform.invalid) {
      return;
    }
    this.authservice.login(controls['emailId'].value, controls['password'].value)
      .pipe(map((user: any) => {
        let base64Url = user.token.split('.')[1];
        let jsonPayload = JSON.parse(decodeURIComponent(window.atob(base64Url)));
        localStorage.setItem('token', user.token)
        localStorage.setItem('user', jsonPayload.UserId)
        this.toaster.success("login successfully")
        this.router.navigate(['/dashboard']);
      })
      ).subscribe()
  }
}
