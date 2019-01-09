import { Component, OnInit } from '@angular/core';
import { StarService } from '../star.service';
import { Star } from '../star';

@Component({
  selector: 'app-star-editor',
  templateUrl: './star-editor.component.html',
  styleUrls: ['./star-editor.component.css']
})
export class StarEditorComponent implements OnInit {

  public star: Star;
  public stars: Star[] = [];

  constructor(private starService: StarService) {
    this.star = new Star();
   }

  ngOnInit() {
    this.showAllStars();
  }

  showAllStars = () => {
    this.starService.getAll((success) => {
      this.stars = <Star[]>success;
    });
  }
}
