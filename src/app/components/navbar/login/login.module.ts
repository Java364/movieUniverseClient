

import {LoginService} from "./login.service";
import {LoginComponent} from "./infLogin/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material";
import {AuthService} from "../../../core/auth.service";
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule
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
