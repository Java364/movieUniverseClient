import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkEditorComponent } from './link-editor/link-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from 'src/app/core/core.module';
import { LinksService } from './link.service';
import { FormsModule } from '@angular/forms';
import { LinkOfStarComponent } from './link-of-star/link-of-star.component';

@NgModule({
  declarations: [
    LinkEditorComponent,
    LinkOfStarComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    CoreModule,
    FormsModule
  ],
  exports: [
    LinkEditorComponent,
    LinkOfStarComponent
  ],
  providers: [
    LinksService
  ]
})
export class LinkModule { }
