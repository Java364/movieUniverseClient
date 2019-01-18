import { Component, OnInit, Input } from '@angular/core';
import { ProfessionService } from '../profession.service';
import { Profession } from '../profession';

@Component({
    selector: 'app-profession-view',
    templateUrl: './profession-view.component.html',
    styleUrls: ['./profession-view.component.css']
})
export class ProfessionViewComponent implements OnInit {
    
    public professions: Profession[] = [];

    @Input('professionLink') professionLink;

    constructor(private professionService: ProfessionService) {

    }
 
    ngOnInit(): void {
        this.professionService.showStarsProfessions(this.professionLink, (professions: Profession[])=>{
            this.professions = professions;
        })
    }
}
