import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import {CountryPageComponent} from './admin/country/country-page/country-page.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: 'country', component: CountryPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    CommonModule,
    AdminModule
  ],
  exports: [
    AdminModule
  ]
})
export class PageModule { }
