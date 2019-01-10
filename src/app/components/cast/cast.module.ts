import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CastComponent } from './cast.component';
import { CastService } from './cast.service';

@NgModule({
    declarations: [CastComponent],
    imports: [
        CommonModule
    ],
    exports: [CastComponent],
    providers : [CastService]

})
export class CastModule { }
