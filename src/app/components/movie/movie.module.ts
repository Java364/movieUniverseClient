import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkModule } from '../link/link.module';
import { HttpClientModule } from '@angular/common/http';
import { CountryModule } from '../country/country.module';
import { MovieService } from './movie.service';
import { MovieComponent } from './movie.component';

@NgModule({
    declarations: [MovieComponent],
    imports: [
        HttpClientModule,
        CommonModule,
        LinkModule,
        CountryModule
    ],
    providers: [MovieService]


})
export class MovieModule { }
