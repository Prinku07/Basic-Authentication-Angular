import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberDirective } from './directive/numbers-only.directive';
import { AuthGuard } from './guard/auth.guard';
import { ReverseGuard } from './guard/reverse.guard';
import { AuthService } from './service/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './service/interceptor.service';

@NgModule({
  declarations: [
    NumberDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AuthGuard,
    ReverseGuard,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ]
})
export class CoreModule { }
