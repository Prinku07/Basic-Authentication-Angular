import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../core/service/user.service';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { AddUserDetailsComponent } from './add-user-details/add-user-details.component';

const ELEMENT_DATA = [
  { id: 1, name: 'Hydrogen', emailId: 1.0079, department: 'H', empCode: '123', location: 'Pune', reportingPerson: 'xyz' },
  { id: 2, name: 'Helium', emailId: 4.0026, department: 'He', empCode: '123', location: 'Pune', reportingPerson: 'xyz' },
  { id: 3, name: 'Lithium', emailId: 6.941, department: 'Li', empCode: '123', location: 'Pune', reportingPerson: 'xyz' },
  { id: 4, name: 'Beryllium', emailId: 9.0122, department: 'Be', empCode: '123', location: 'Pune', reportingPerson: 'xyz' },
  { id: 5, name: 'Boron', emailId: 10.811, department: 'B', empCode: '123', location: 'Pune', reportingPerson: 'xyz' },
  { id: 6, name: 'Carbon', emailId: 12.0107, department: 'C', empCode: '123', location: 'Pune', reportingPerson: 'xyz' },
  { id: 7, name: 'Nitrogen', emailId: 14.0067, department: 'N', empCode: '123', location: 'Pune', reportingPerson: 'xyz' },
  { id: 8, name: 'Oxygen', emailId: 15.9994, department: 'O', empCode: '123', location: 'Pune', reportingPerson: 'xyz' },
  { id: 9, name: 'Fluorine', emailId: 18.9984, department: 'F', empCode: '123', location: 'Pune', reportingPerson: 'xyz' },
  { id: 10, name: 'Neon', emailId: 20.1797, department: 'Ne', empCode: '123', location: 'Pune', reportingPerson: 'xyz' }
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userDetails: any;
  displayedColumns: string[] = ['id', 'AssignedUser', 'Userlogin', 'Department', 'EmpCode', 'Location', 'ReportingPerson', 'Action'];
  dataSource = ELEMENT_DATA
  isLoadingResults = false;

  constructor(private userservice: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    // this.userservice.getUserDetails().subscribe(res => {
    //     this.userDetails = res;
    // })
  }

//   ngAfterViewInit(){
//     this.isLoadingResults = true;
//   this.userservice.getUserDetails().subscribe(res => {
//     this.isLoadingResults = false;
//    this.dataSource = res
//  })
//   }

  edit(row: any, action : any) {
    console.log(row)

    const dialogRef = this.dialog.open(AddAssetComponent, {
      width: '800px',
      data : {userdetails : row, action : action}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  adduser(action : any, row? : any) {
    const dialogRef = this.dialog.open(AddUserDetailsComponent, {
      width: '800px',
      data : {action : action, userdetails : row,}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  deleteUser(id : any){
    const dialogRef1 =  this.userservice.confirmDialog(
    {title: 'Delete User',
    message: 'Are you sure you want to delete?'
  });
   
    dialogRef1.afterClosed().subscribe(result => {
      console.log(result);
      if(result == true){
         this.userservice.deleteUser(id).subscribe();
      }
    });
  }

  addAsset(){
    const dialogRef = this.dialog.open(AddAssetComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}