import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authservice : AuthService) { }

  ngOnInit(): void {
  }
  
  logout(){
    this.authservice.logout();
    }

}
