import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AuthService} from "./auth.service";
import {HttpService} from "./http.service";
import {MatSnackBarModule} from "@angular/material";


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ],
  exports: [
  ],
  providers: [
    AuthService,
    HttpService,
    MatSnackBarModule
  ]
})
export class CoreModule { }
