import {AuthService} from '../../../core/auth.service';
import {ForgotComponent} from './forgot.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
@NgModule({
  declarations: [
    ForgotComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports: [
    ForgotComponent
  ],
  providers: [
    AuthService
  ]
})
export class ForgotModule {
}
