import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrailerComponent } from './trailer.component';
import { TrailerService } from './trailer.service';

@NgModule({
    declarations: [TrailerComponent],
    imports: [
        CommonModule
    ],
    exports: [TrailerComponent],
    providers: [TrailerService]
})
export class TrailerModule { }
