import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient, private dialog: MatDialog) { }

  currentuser = localStorage.getItem('user');

  getUserDetails() : Observable<any>{
    return this.http.get('/api/User/User');
  }

  addUser(data : any, action : any) {
    if(action == 'Edit'){
     return this.http.put('api/User/User', data )
    }else{
      return this.http.post('api/User/User', data)
    }
  }

  deleteUser(id : any){
    return this.http.delete('api/User/User/' + id)
  }

  confirmDialog(data : any) {
   return this.dialog.open(ConfirmationDialogComponent, { data,
    width: '400px',
    disableClose: true,
  })
  }
}
