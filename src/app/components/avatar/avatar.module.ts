import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarEditorComponent } from './avatar-editor/avatar-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { AvatarService } from './avatar.service';

@NgModule({
  declarations: [
    AvatarEditorComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [
    AvatarEditorComponent
  ],
  providers: [
    AvatarService
  ]
})
export class AvatarModule { }
