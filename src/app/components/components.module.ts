import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { StarModule } from './star/star.module';
import { CountryModule } from './country/country.module';
import { MainModule } from './main/main.module';
import { NavbarModule } from './navbar/navbar.module';
import { LinkModule } from './link/link.module';
import { GalleryEditorComponent } from './gallery/gallery-editor/gallery-editor.component';
import { GalleryModule } from './gallery/gallery.module';

@NgModule({
    exports: [
        StarModule,
        MainModule,
        NavbarModule,
        CountryModule,
        LinkModule,
        GalleryModule
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        StarModule,
        MainModule,
        NavbarModule,
        CountryModule,
        LinkModule,
        GalleryModule
    ],
    declarations: []
})

export class ComponentsModule {
}
