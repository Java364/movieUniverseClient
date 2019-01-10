import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProfessionEditComponent } from './profession-edit/profession-edit.component';

@NgModule({
  declarations: [
    ProfessionEditComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [
    ProfessionEditComponent
  ]
})
export class ProfessionModule { }
