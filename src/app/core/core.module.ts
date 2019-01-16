import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { HttpService } from './http.service';
import { MatSnackBarModule } from '@angular/material';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [
    AuthService,
    HttpService,
    MatSnackBarModule
  ]
})
export class CoreModule { }
