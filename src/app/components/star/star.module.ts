import { NgModule } from '@angular/core';
import { StarEditorComponent } from './star-editor/star-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StarService } from './star.service';
import { LinkModule } from '../link/link.module';

@NgModule({
    declarations: [
        StarEditorComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        LinkModule
    ],
    exports: [
        StarEditorComponent
    ],
    providers: [
        StarService
    ]
})

export class StarModule {
}