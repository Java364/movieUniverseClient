import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { CountryPageComponent } from './country/country-page/country-page.component';
import { StarPageComponent } from './star/star-page/star-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

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
    CommonModule,

    ComponentsModule
  ],
  exports: [
    CountryPageComponent,
    StarPageComponent,
    RouterModule
  ]

})
export class AdminModule { }
