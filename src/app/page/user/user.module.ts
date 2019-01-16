import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main/main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from 'src/app/components/components.module';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { SignupPageComponent } from '../auth/signup-page/signup-page.component';
import { StarPageComponent } from './star-page/star-page.component';
import { StarListPageComponent } from './star-list/star-list-page.component';
import { CoreModule } from 'src/app/core/core.module';
import { StarUserModule } from 'src/app/components/starUser/star-user.module';


const appRoutes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'star/:id', component: StarPageComponent },
  { path: 'star-list', component: StarListPageComponent }
];

@NgModule({

  declarations: [MainPageComponent, MoviePageComponent, StarPageComponent, StarListPageComponent],

  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    CommonModule,
    ComponentsModule,
    CoreModule,
    StarUserModule
  ],
  exports: [
    MainPageComponent,
    StarPageComponent,
    StarListPageComponent,
    NavbarComponent,
    RouterModule
  ]
})
export class UserModule { }
