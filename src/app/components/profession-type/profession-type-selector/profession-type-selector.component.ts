import { Component, OnInit } from '@angular/core';
import { ProfessionType } from '../profession-type';
import { ProfessionTypeService } from '../profession-type.service';

@Component({
  selector: 'app-profession-type-selector',
  templateUrl: './profession-type-selector.component.html',
  styleUrls: ['./profession-type-selector.component.css']
})
export class ProfessionTypeSelectorComponent implements OnInit {


  public professionTypes: ProfessionType[] = [];
  public selectedProfessions: number[] = [];

  public getSelectedProfessions() {
    return this.selectedProfessions;
  }

  public setSelectedProfessions(professions: number[]) {
    this.selectedProfessions = professions;
  }

  constructor(private professionTypeService: ProfessionTypeService) {
  }

  public getSelectedProfessionsDto() {
    return this.professionTypes.filter(profession => this.selectedProfessions.indexOf(profession.id) > 0);
  }

  ngOnInit() {
    this.professionTypeService.getAllProfession((success) => {
      console.log(success);
      this.professionTypes = <ProfessionType[]>success;
    });
  }

}
