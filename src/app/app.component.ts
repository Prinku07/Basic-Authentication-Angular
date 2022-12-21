import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client-Task';

  subMenu:boolean = false;
  path:any;
  ComponentName: string = '';



  constructor(public authservice: AuthService,
    private route: Router,
   // private headerService: HeaderService,
    private router : ActivatedRoute) {}

  ngOnInit() {
    // this.headerService.subMenu.subscribe(
    //   res=>{
    //     if(res.length > 0){
    //       this.subMenu = true;
    //       this.path= res;
    //     }
    //     this.setHeader();
    //   }
    // )
}

  setHeader() {
    if(!this.subMenu){
      this.path = this.route.url.split('/');
      this.ComponentName = decodeURIComponent(this.path[this.path.length -1]);
    }else{
      this.ComponentName = decodeURIComponent(this.path[this.path.length -1]);
    }
    this.subMenu = false
  }
}
