import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { CountryPageComponent } from './country/country-page/country-page.component';
import { StarPageComponent } from './star/star-page/star-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { StarPageByIdComponent } from './star/star-page-by-id/star-page-by-id.component';

const appRoutes: Routes = [
  {path: 'admin/star', component: StarPageComponent},
  {path: 'country', component: CountryPageComponent},
  {path: 'admin/star/:id', component: StarPageByIdComponent}
];



@NgModule({
  declarations: [CountryPageComponent, StarPageComponent, StarPageByIdComponent],
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
    RouterModule,
    StarPageByIdComponent
  ]

})
export class AdminModule { }
