import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {SignupComponent} from "./regist/signup.component";

import {SignupService} from "./signup.service";
import {MatFormFieldModule} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports: [
    SignupComponent
  ],
  providers: [
    SignupService
  ]
})

export class SignUpModule {
}
