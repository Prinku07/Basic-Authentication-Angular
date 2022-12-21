import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userDetails: any;

  constructor(private authservice : AuthService) { }

  ngOnInit(): void {
  this.authservice.getUserDetails().subscribe(res => {
    this.userDetails =  res;
  })
  }

  logout(){
  this.authservice.logout();
  }
}