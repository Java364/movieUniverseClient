import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { StarModule } from './star/star.module';
import { MainComponent } from './main/main.component';
import { CountrySelectorComponent } from './country/country-selector/country-selector.component';
import { CountryModule } from './country/country.module';

@NgModule({
    exports: [
        StarModule,
        CountryModule
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        StarModule,
        CountryModule
    ],
    declarations: [MainComponent]
})

export class ComponentsModule {
}
