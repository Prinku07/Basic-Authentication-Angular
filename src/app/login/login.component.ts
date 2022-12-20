import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup | any;

  constructor(private fb : FormBuilder, private authservice : AuthService, private router : Router, private toaster : ToastrService) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    }) 
  }

  submit() {
    const controls = this.loginform.controls;
    if (this.loginform.invalid) {
      return;
    }
    console.log(controls['email'].value, controls['password'].value)
    // this.authservice.login(controls['email'].value, controls['password'].value)
    //   .pipe(map((user: any) => {
    //     if (user.status == 200) {
          localStorage.setItem('token', "user Info")
          localStorage.setItem('user',JSON.stringify("priyanka"))
          this.toaster.success("login successfully")
          this.router.navigate(['/dashboard']);
        }
    //   })
    //  ).subscribe()
  } 
