import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryEditorComponent } from './gallery-editor/gallery-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryOfStarComponent } from './gallery-of-star/gallery-of-star.component';
import { CoreModule } from 'src/app/core/core.module';
import { GalleryService } from './gallery.service';

@NgModule({
  declarations: [
    GalleryEditorComponent,
    GalleryOfStarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModule
  ],
  exports: [
    GalleryEditorComponent,
    GalleryOfStarComponent
  ],
  providers: [
    GalleryService
  ]
})
export class GalleryModule { }
