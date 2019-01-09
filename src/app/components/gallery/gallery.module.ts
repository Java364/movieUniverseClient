import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryEditorComponent } from './gallery-editor/gallery-editor.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    GalleryEditorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    GalleryEditorComponent
  ]
})
export class GalleryModule { }
