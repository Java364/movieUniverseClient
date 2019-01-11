import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProfessionEditComponent } from './profession-edit/profession-edit.component';
import { ProfessionsOfStarComponent } from './professions-of-star/professions-of-star.component';
import { ProfessionService } from './profession.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfessionEditComponent,
    ProfessionsOfStarComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    ProfessionEditComponent,
    ProfessionsOfStarComponent
  ],
  providers: [
    ProfessionService
  ]
})
export class ProfessionModule { }
