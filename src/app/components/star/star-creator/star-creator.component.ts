import { Component, OnInit } from '@angular/core';
import { Star } from '../star';
import { StarService } from '../star.service';

@Component({
  selector: 'app-star-creator',
  templateUrl: './star-creator.component.html',
  styleUrls: ['./star-creator.component.css']
})
export class StarCreatorComponent implements OnInit {
  public star: Star;

  constructor(private starService: StarService) {
    this.star = new Star();
  }

  ngOnInit() {
  }

  createNew = () => {
    this.star = new Star();
  }
  createStar = () => {
    this.starService.createStar(this.star, (success) => {
      this.star = <Star>success;
    });
  }

}
