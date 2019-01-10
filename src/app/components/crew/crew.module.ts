import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewComponent } from './crew.component';
import { CrewService } from './crew.service';

@NgModule({
    declarations: [CrewComponent],
    imports: [
        CommonModule
    ],
    exports: [CrewComponent],
    providers: [CrewService]
})
export class CrewModule { }
