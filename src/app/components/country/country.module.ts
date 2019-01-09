import { NgModule } from "@angular/core";
import { CountrySelectorComponent } from './country-selector/country-selector.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CountryService } from './country.service';

@NgModule({
    declarations:[
        CountrySelectorComponent
    ],
    imports:[
        HttpClientModule,
        CommonModule
    ],
    exports:[
        CountrySelectorComponent
    ],
    providers:[
        CountryService
    ]
})

export class CountryModule {
}