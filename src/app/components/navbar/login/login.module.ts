import {LoginComponent} from './infLogin/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material';
import {AuthService} from '../../../core/auth.service';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    AuthService
  ]
})
export class LoginModule {
}
