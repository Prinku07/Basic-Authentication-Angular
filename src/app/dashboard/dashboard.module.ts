import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AddUserDetailsComponent } from './add-user-details/add-user-details.component';
import { DashboardComponent } from './dashboard.component';
import { AddAssetComponent } from './add-asset/add-asset.component';

const routes = [
  {
    path : '',
    component : DashboardComponent
  },
  {
    path : 'add-user-details', 
    component : AddUserDetailsComponent
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
    AddUserDetailsComponent,
    AddAssetComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DashboardModule { }
