import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup | any;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
    
  }

  submit() {
    const controls = this.loginform.controls;
    if (this.loginform.invalid) {
      return this.loginform.markAllAsTouched();
    }
  //  this.isLoading = true;
    // this.authservice.login(controls['email'].value, controls['password'].value)
    //   .pipe(map((user: any) => {
    //     this.isLoading = false;
    //     if (user.status == 200) {
    //       localStorage.setItem('token', user.token)
    //       localStorage.setItem('user',JSON.stringify(user.data))
    //       this.toastr.success("login successfully")
    //       this.router.navigate(['home']);
    //     }
    //   })
     // ).subscribe()
  } 

}
