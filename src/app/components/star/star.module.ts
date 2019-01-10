import { NgModule } from '@angular/core';
import { StarEditorComponent } from './star-editor/star-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StarService } from './star.service';
import { LinkModule } from '../link/link.module';
import { GalleryModule } from '../gallery/gallery.module';
import { StarCreatorComponent } from './star-creator/star-creator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        StarEditorComponent,
        StarCreatorComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
        LinkModule,
        GalleryModule
    ],
    exports: [
        StarEditorComponent,
        StarCreatorComponent
    ],
    providers: [
        StarService
    ]
})

export class StarModule {
}