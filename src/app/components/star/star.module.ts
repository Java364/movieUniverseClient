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
import { ProfessionModule } from '../profession/profession.module';
import { ProfessionTypeModule } from '../profession-type/profession-type.module';
import { StarListComponent } from './star-list-editor/star-list.component';

@NgModule({
    declarations: [
        StarEditorComponent,
        StarCreatorComponent,
        StarListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        LinkModule,
        GalleryModule,
        CoreModule,
        CountryModule,
        AvatarModule,
        ProfessionModule,
        ProfessionTypeModule

    ],
    exports: [
        StarEditorComponent,
        StarCreatorComponent,
        StarListComponent
    ],
    providers: [
        StarService
    ]
})

export class StarModule {
}
