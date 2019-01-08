import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { CountryPageComponent } from './country/country-page/country-page.component';
import { StarPageComponent } from './star/star-page/star-page.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'star', component: StarPageComponent}
];



@NgModule({
  declarations: [CountryPageComponent, StarPageComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserModule,
    CommonModule
  ],
  exports: [
    CountryPageComponent,
    StarPageComponent,
    RouterModule
  ]

})
export class AdminModule { }
