import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarService } from './star-user.service';
import { LinkModule } from '../link/link.module';
import { GalleryModule } from '../gallery/gallery.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { StarListComponent } from './star-list/star-list.component';
import { RouterModule } from '@angular/router';
import { AvatarModule } from '../avatar/avatar.module';

@NgModule({
    declarations: [
        StarListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        LinkModule,
        GalleryModule,
        CoreModule,
        RouterModule,
        AvatarModule
    ],
    exports: [
        StarListComponent
    ],
    providers: [
        StarService
    ]
})

export class StarUserModule {
}
