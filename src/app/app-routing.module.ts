import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './core/guard/auth.guard';
import { ReverseGuard } from './core/guard/reverse.guard';

const routes: Routes = [ 
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    //canActivate : [ReverseGuard]  
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
