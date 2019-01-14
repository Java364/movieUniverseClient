import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-countries-of-star',
  templateUrl: './countries-of-star.component.html',
  styleUrls: ['./countries-of-star.component.css']
})
export class CountriesOfStarComponent implements OnInit {

  public coutries: Country[] = [];
  @Input() starId: number;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.showAllStarsCountries(this.starId);
  }

  showAllStarsCountries = (id: number) => {
    this.countryService.showStarsCountries(id, (success) => {
      this.coutries = <Country[]>success;
    });
  }

}
