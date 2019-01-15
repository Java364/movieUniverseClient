import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterComponent } from './poster.component';
import { PosterService } from './poster.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [PosterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
    exports: [PosterComponent],
    providers: [PosterService]
})
export class PosterModule { }
