import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main/main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from 'src/app/components/components.module';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

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
    CommonModule,
    ComponentsModule
  ],
  exports: [
    MainPageComponent,
    NavbarComponent,
    RouterModule
  ]
})
export class UserModule { }
