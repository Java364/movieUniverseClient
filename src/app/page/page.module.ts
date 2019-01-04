import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'country', component: AdminModule}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminModule
  ]
})
export class PageModule { }
