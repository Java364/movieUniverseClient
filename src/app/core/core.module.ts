import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AuthService} from "./auth.service";
import { HttpService } from './http.service';

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
    HttpService
  ]
})
export class CoreModule { }
