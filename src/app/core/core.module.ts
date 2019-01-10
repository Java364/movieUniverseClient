import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './http.service';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ],
  providers: [
    HttpService,
    AuthService
  ]
})
export class CoreModule { }
