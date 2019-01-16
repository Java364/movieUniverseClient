import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarService } from './star-user.service';
import { LinkModule } from '../link/link.module';
import { GalleryModule } from '../gallery/gallery.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
    declarations: [
    
    ],
    imports: [
        CommonModule,
        FormsModule,
        LinkModule,
        GalleryModule,
        CoreModule,

    ],
    exports: [
      
    ],
    providers: [
        StarService
    ]
})

export class StarUserModule {
}
