import { NgModule } from "@angular/core";
import { CountrySelectorComponent } from './country-selector/country-selector.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CountryService } from './country.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[
        CountrySelectorComponent
    ],
    imports:[
        HttpClientModule,
        CommonModule,
        FormsModule
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