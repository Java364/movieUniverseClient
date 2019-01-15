import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main/main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from 'src/app/components/components.module';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { SignupPageComponent } from '../auth/signup-page/signup-page.component';
import { StarUserComponent } from 'src/app/components/starUser/star-user.component';


const appRoutes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'star', component: StarUserComponent }
];

@NgModule({

  declarations: [MainPageComponent, MoviePageComponent, StarUserComponent],

  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    CommonModule,
    ComponentsModule
  ],
  exports: [
    MainPageComponent,
    StarUserComponent,
    NavbarComponent,
    RouterModule
  ]
})
export class UserModule { }
