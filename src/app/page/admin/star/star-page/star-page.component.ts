import { Component, OnInit } from '@angular/core';
import { Star } from 'src/app/components/star/star';
import { StarService } from 'src/app/components/star/star.service';

@Component({
  selector: 'app-star-page',
  templateUrl: './star-page.component.html',
  styleUrls: ['./star-page.component.css']
})
export class StarPageComponent implements OnInit {

  public stars: Star[] = [];

  constructor(private starService: StarService) { }

  ngOnInit() {
    this.showAllStars();
  }

  showAllStars = () => {
    this.starService.getAll((success) => {
      this.stars = <Star[]>success;
    });
  }

}
