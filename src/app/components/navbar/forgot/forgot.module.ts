<<<<<<< HEAD
import { AuthService } from '../../../core/auth.service';
import { ForgotComponent } from './forgot.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
=======
import {AuthService} from '../../../core/auth.service';
import {ForgotComponent} from './forgot.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
>>>>>>> 9a0e8d2e6959ac5b2a1f1142743f78b94eb31a35
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
