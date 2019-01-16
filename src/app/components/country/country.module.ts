import { NgModule } from "@angular/core";
import { CountrySelectorComponent } from './country-selector/country-selector.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CountryService } from './country.service';
import { FormsModule } from '@angular/forms';
import { CountriesOfStarComponent } from './countries-of-star/countries-of-star.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
    declarations: [
        CountrySelectorComponent,
        CountriesOfStarComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
        CoreModule
    ],
    exports: [
        CountrySelectorComponent,
        CountriesOfStarComponent
    ],
    providers: [
        CountryService
    ]
})

export class CountryModule {
}