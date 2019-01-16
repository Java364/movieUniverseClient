import { Component, OnInit } from '@angular/core';
import { StarService } from '../star-user.service';
import { Star } from '../../star/star';

@Component({
    selector: 'app-star-list',
    templateUrl: './star-list.component.html',
    styleUrls: ['./star-list.component.css']
})
export class StarListComponent implements OnInit {

    public stars:Star[] = [];

    constructor(private starService: StarService) {

    }

    ngOnInit() {
        this.starService.getAll((stars: Star[]) => {
            this.stars = stars;
        });
    }

}
