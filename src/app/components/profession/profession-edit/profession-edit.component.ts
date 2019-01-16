import { Component, OnInit, Input } from '@angular/core';
import { Profession } from '../profession';
import { ProfessionService } from '../profession.service';

@Component({
  selector: 'app-profession-edit',
  templateUrl: './profession-edit.component.html',
  styleUrls: ['./profession-edit.component.css']
})
export class ProfessionEditComponent implements OnInit {

  public starProfession: Profession;
  @Input() professionCreateLink: string;

  constructor(private professionService: ProfessionService) {
    this.starProfession = new Profession();
  }

  createNewProfession = (link: string) => {
    this.starProfession = new Profession();
  }

  createProfessionForStar = (link: string) => {

    this.professionService.createProfessionForStar(link, this.starProfession, (success) => {
      this.starProfession = <Profession>success;
    });
  }

  ngOnInit() {
  }

}
