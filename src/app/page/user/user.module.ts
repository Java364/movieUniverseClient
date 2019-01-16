
import { MovieComponent } from 'src/app/components/movie/movie.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main/main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from 'src/app/components/components.module';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

import { MoviePageComponent } from './movie-page/movie-page.component';



const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'catalog', component: CatalogPageComponent },
  { path: 'movie/:id', component: MoviePageComponent },


];

@NgModule({


  declarations: [MainPageComponent, MoviePageComponent, CatalogPageComponent],


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
