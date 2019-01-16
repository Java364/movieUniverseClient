import { Component, OnInit } from '@angular/core';
import { StarService } from '../star.service';
import { Star } from '../star';

@Component({
  selector: 'app-star-list-editor',
  templateUrl: './star-list.component.html',
  styleUrls: ['./star-list.component.css']
})
export class StarListComponent implements OnInit {

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
