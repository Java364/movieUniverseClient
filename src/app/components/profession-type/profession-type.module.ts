import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionTypeEditorComponent } from './profession-type-editor/profession-type-editor.component';
import { ProfessionTypeSelectorComponent } from './profession-type-selector/profession-type-selector.component';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule } from '@angular/forms';
import { ProfessionTypeService } from './profession-type.service';

@NgModule({
  declarations: [
    ProfessionTypeEditorComponent,
    ProfessionTypeSelectorComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule
  ],
  exports: [
    ProfessionTypeEditorComponent,
    ProfessionTypeSelectorComponent
  ],
  providers: [
    ProfessionTypeService
  ]
})
export class ProfessionTypeModule { }
