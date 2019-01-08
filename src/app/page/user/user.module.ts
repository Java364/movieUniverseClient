import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main/main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

const appRoutes: Routes = [
  { path: 'main', component: MainPageComponent }
];

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    CommonModule
  ],
  exports: [
    MainPageComponent,
    RouterModule
  ]
})
export class UserModule { }
