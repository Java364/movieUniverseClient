import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarEditorComponent } from './avatar-editor/avatar-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { AvatarService } from './avatar.service';
import { AvatarOfStarComponent } from './avatar-of-star/avatar-of-star.component';
import { AvatarViewComponent } from './avatar-view/avatar-view.component';

@NgModule({
  declarations: [
    AvatarEditorComponent,
    AvatarOfStarComponent,
    AvatarViewComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [
    AvatarEditorComponent,
    AvatarOfStarComponent,
    AvatarViewComponent
  ],
  providers: [
    AvatarService
  ]
})
export class AvatarModule { }
