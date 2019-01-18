import { Component, OnInit } from '@angular/core';
import { StarService } from '../star-user.service';
import { Star } from '../../star/star';

declare var $:any;

@Component({
    selector: 'app-star-list',
    templateUrl: './star-list.component.html',
    styleUrls: ['./star-list.component.css']
})
export class StarListComponent implements OnInit {

    public stars: Star[] = [];

    constructor(private starService: StarService) {

    }

    public toggle(event) {
        console.log(event);
        let evement = event.toElement;
        let card = $(evement).parent('.material-card');
        let icon = $(evement).children('i');
        icon.addClass('fa-spin-fast');

        if (card.hasClass('mc-active')) {
            card.removeClass('mc-active');
            setTimeout(() => {
                icon
                    .removeClass('fa-arrow-left')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-bars');

            }, 800);
        } else {
            card.addClass('mc-active');
            setTimeout(() => {
                icon
                    .removeClass('fa-bars')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-arrow-left');

            }, 800);
        }
    }

    ngOnInit() {
        this.starService.getAll((stars: Star[]) => {
            this.stars = stars;
        });
    }

}
