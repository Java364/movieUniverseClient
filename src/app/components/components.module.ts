import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { StarModule } from './star/star.module';
import { CountryModule } from './country/country.module';
import { MainModule } from './main/main.module';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
    exports: [
        StarModule,
        MainModule,
        NavbarModule,
        CountryModule
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        StarModule,
        MainModule,
        NavbarModule,
        CountryModule
    ],
    declarations: []
})

export class ComponentsModule {
}
