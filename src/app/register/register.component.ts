import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerform: FormGroup | any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerform = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', Validators.required],
      age: ['', Validators.required]
    })

  }


  submit() {
    let controls = this.registerform.controls
    if (this.registerform.invalid) {
      return controls.markallAsToched;
    }
    let params = {
      "full_name": controls.userName.value,
      "user_name": controls.userFullName.value,
      "email": controls.email.value,
    };
    //   this.authservice.register(params).subscribe((res: any) => {
    //     if (res.status == 200) {
    //       this.toastr.success(res.message)
    //       this.router.navigate(['/create-password'], { state: { Component: 'Create a', } })
    //     } else {
    //       this.toastr.error(res.message)
    //     }
    //   })
  }
}
