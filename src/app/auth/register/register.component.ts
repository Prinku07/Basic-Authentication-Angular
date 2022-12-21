import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerform: FormGroup | any;

  constructor(private fb: FormBuilder, private authservice : AuthService, private router : Router, private toastr : ToastrService) { }

  ngOnInit(): void {
    this.registerform = this.fb.group({
      userName: ['priyanka', Validators.required],
      email: ['priyankagohil10@gmail.com', [Validators.required, Validators.email]],
      mobileNumber: ['7977664042', [Validators.required, Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')]], // Validators.minLength(10), Validators.maxLength(10)
      age: ['5', Validators.required],
      password : ['Priyanka@07', [Validators.required, Validators.minLength(8)]]
    })
  }

  submit() {
   let controls = this.registerform.controls
    // if (this.registerform.invalid) {
    //   return controls.markallAsToched;
    // }
    let params = {
      "name": controls.userName.value,
      "mobileNumber": controls.mobileNumber.value,
      "emailId": controls.email.value,
      "age": controls.age.value,
      "password" : controls.password.value

    };
      this.authservice.register(params).subscribe((res: any) => {
        console.log('123')
        if (res.status == 200) {
          this.toastr.success('User Register Succesfully')
          this.router.navigate(['/login'])
  }})
  }
}
