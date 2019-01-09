import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkEditorComponent } from './link-editor/link-editor.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LinkEditorComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [
    LinkEditorComponent
  ]
})
export class LinkModule { }
