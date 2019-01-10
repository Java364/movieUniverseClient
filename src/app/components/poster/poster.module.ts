import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterComponent } from './poster.component';
import { PosterService } from './poster.service';

@NgModule({
  declarations: [PosterComponent],
  imports: [
    CommonModule
  ],
    exports: [PosterComponent],
    providers: [PosterService]
})
export class PosterModule { }
