import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Interceptor } from '../core/service/interceptor.service';
import {MatTableModule} from '@angular/material/table';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

const material = [
  CommonModule,
  HttpClientModule,
  ReactiveFormsModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatExpansionModule,
  MatListModule,
  MatSidenavModule,
  MatTableModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatProgressSpinnerModule
]

@NgModule({
  declarations: [
    HeaderComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    ...material,
    RouterModule
  ],
  exports : [
    ...material,
    HeaderComponent,
    ConfirmationDialogComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ]
})
export class SharedModule { }
