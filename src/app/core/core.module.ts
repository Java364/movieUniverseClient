import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    HttpService
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
