
import { MovieComponent } from 'src/app/components/movie/movie.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MainPageComponent} from "./main/main-page/main-page.component";
import {RouterModule, Routes} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {ComponentsModule} from "src/app/components/components.module";
import {NavbarComponent} from "src/app/components/navbar/navbar.component";
import {SignupPageComponent} from "./signup-page/signup-page.component";
import {MoviePageComponent} from "./movie-page/movie-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {ForgotPageComponent} from "./forgot/forgot-page.component";


const appRoutes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'catalog', component: CatalogPageComponent },
  { path: 'movie/:id', component: MoviePageComponent },
  { path: 'login/forgot', component: ForgotPageComponent }
];

@NgModule({

  declarations: [MainPageComponent, SignupPageComponent,MoviePageComponent, LoginPageComponent, ForgotPageComponent, CatalogPageComponent],

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
    MainPageComponent,
    NavbarComponent,
    RouterModule,
    MoviePageComponent,
    CatalogPageComponent
  ]
})
export class UserModule { }
