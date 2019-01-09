import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.css']
})
export class CountrySelectorComponent implements OnInit {
  public countries: Country[] = [];
  public selectedCountries: number[] = [];

  constructor(private countryService: CountryService) { }

  public getSelectedCountries() {
    return this.selectedCountries;
}

public setSelectedCountries(countries: number[]) {
    this.selectedCountries = countries;
}
public getSelectedCountriesDto() {
  return this.countries.filter(country => this.selectedCountries.indexOf(country.id) > 0);
}

ngOnInit() {
  this.countryService.getAll((success) => {
      console.log(success);
      this.countries = <Country[]>success;
  });
}
}
