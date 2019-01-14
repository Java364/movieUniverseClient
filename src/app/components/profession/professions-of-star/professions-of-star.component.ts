import { Component, OnInit, Input } from '@angular/core';
import { Profession } from '../profession';
import { ProfessionService } from '../profession.service';

@Component({
  selector: 'app-professions-of-star',
  templateUrl: './professions-of-star.component.html',
  styleUrls: ['./professions-of-star.component.css']
})
export class ProfessionsOfStarComponent implements OnInit {

  public professions: Profession[] = [];
  @Input() professionsLink: string;

  constructor(private professionService: ProfessionService) { }

  ngOnInit() {
    this.showAllStarsProfessions(this.professionsLink);
  }

  showAllStarsProfessions = (professionLink: string) => {
    this.professionService.showStarsProfessions(professionLink, (success) => {
      this.professions = <Profession[]>success;
    });
  }

}
