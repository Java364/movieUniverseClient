import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreComponent } from './genre.component';
import { FormsModule } from '@angular/forms';
import { GenreService } from './genre.service';
@NgModule({
  declarations: [GenreComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [GenreComponent],
    providers: [GenreService]
})
export class GenreModule { }
