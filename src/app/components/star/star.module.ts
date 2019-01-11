import { NgModule } from '@angular/core';
import { StarEditorComponent } from './star-editor/star-editor.component';
import { CommonModule } from '@angular/common';
import { StarService } from './star.service';
import { LinkModule } from '../link/link.module';
import { GalleryModule } from '../gallery/gallery.module';
import { StarCreatorComponent } from './star-creator/star-creator.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { CountryModule } from '../country/country.module';
import { AvatarModule } from '../avatar/avatar.module';

@NgModule({
    declarations: [
        StarEditorComponent,
        StarCreatorComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        LinkModule,
        GalleryModule,
        CoreModule,
        CountryModule,
        AvatarModule

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
