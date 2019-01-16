import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http.service';
import { Country } from './country';

@Injectable()
export class CountryService {
    constructor(private httpService: HttpService) {
    }
  
    public getAll(callback: Function) {
        this.httpService.get('http://localhost:8080/country').subscribe(
            (success) => {
                callback(success);
            }
        );
    }

    public showStarsCountries(id: number, callback: Function) {
        this.httpService.get<Country[]>('http://localhost:8080/stars/' + id + '/countries').subscribe(
            (success) => {
                callback(success);
            }
        );
    }
}