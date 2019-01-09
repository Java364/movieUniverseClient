import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { StarModule } from './star/star.module';
import { CountryModule } from './country/country.module';
import { MainModule } from './main/main.module';

@NgModule({
    exports: [
        StarModule,
        CountryModule,
        MainModule
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        StarModule,
        CountryModule,
        MainModule
    ],
    declarations: []
})

export class ComponentsModule {
}
