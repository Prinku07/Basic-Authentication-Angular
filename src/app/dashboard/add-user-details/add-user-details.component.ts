import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/service/user.service';


// export interface user {
//   "name": string,
//   "emailId": string,
//   "password": string,
//   "department": string,
//   "empCode": string,
//   "location": string,
//   "reportingPerson": string
// }

@Component({
  selector: 'app-add-user-details',
  templateUrl: './add-user-details.component.html',
  styleUrls: ['./add-user-details.component.css']
})
export class AddUserDetailsComponent implements OnInit {

  constructor(private fb: FormBuilder, 
    private userservice : UserService,
     private toastr : ToastrService, 
     public dialogRef: MatDialogRef<AddUserDetailsComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,) {
        console.log(data)
      }
    
  submitted = false;
  userDetailsForm: FormGroup | any;
  filteredStates: Observable<any> | any;

  ngOnInit(): void {
    this.userDetailsForm = this.fb.group({
      name: ['', Validators.required],
      userName: ['', Validators.required],
      Department: ['', Validators.required],
      empCode: ['', Validators.required],
      location: ['', Validators.required],
      ReportingPerson: ['', Validators.required]
    })

    if(this.data.action == 'Edit'){
      this.userDetailsForm.patchValue({
        name: this.data.userdetails.name,
        userName:  this.data.userdetails.emailId,
        Department:  this.data.userdetails.department,
        empCode:  this.data.userdetails.empCode,
        location:  this.data.userdetails.location,
        ReportingPerson:  this.data.userdetails.reportingPerson,
      })
    }
  }

  submit() {
    let controls = this.userDetailsForm.controls
    // if (this.userDetailsForm.invalid) {
    //   return this.userDetailsForm.markAllAsTouched();
    // }
    this.submitted = true
    let params = {
      "id" : this.data.id,
      "name": controls['name'].value,
      "emailId": controls['userName'].value,
      "department": controls['Department'].value,
      "empCode": controls['empCode'].value,
      "location": controls['location'].value,
      "reportingPerson": controls['ReportingPerson'].value
    }
 
    this.userservice.addUser(params, this.data.action).subscribe(res =>{
     this.toastr.success('User' + this.data.action + 'Sucsessfully')
     this.dialogRef.close();
    });
  }
}
