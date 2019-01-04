import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryPageComponent } from './country/country-page/country-page.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [CountryPageComponent],
  imports: [
    BrowserModule,
    CommonModule
  ]
})
export class AdminModule { }
