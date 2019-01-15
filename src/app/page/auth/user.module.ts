import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {ComponentsModule} from "src/app/components/components.module";
import {NavbarComponent} from "src/app/components/navbar/navbar.component";
import {SignupPageComponent} from "./signup-page/signup-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {ForgotPageComponent} from "./forgot/forgot-page.component";


const appRoutes: Routes = [

  { path: 'signup', component: SignupPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'login/forgot', component: ForgotPageComponent }
];

@NgModule({

  declarations: [SignupPageComponent, LoginPageComponent, ForgotPageComponent],

  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    CommonModule,
    ComponentsModule,
  ],
  exports: [

    NavbarComponent,
    RouterModule,

  ]
})
export class AuthModule { }
