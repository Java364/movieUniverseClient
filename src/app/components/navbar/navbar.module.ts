import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavbarService } from './navbar.service';
import { HttpClientModule } from '@angular/common/http';
import {SignupComponent} from "./signup/regist/signup.component";


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    NavbarService
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
