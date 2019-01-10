import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {SignupComponent} from "./regist/signup.component";
import {FormsModule} from "@angular/forms";
import {SignupService} from "./signup.service";
@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule
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
