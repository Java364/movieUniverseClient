import { Component, OnInit, Input } from '@angular/core';
import { Star } from 'src/app/components/star/star';
import { ActivatedRoute } from '@angular/router';
import { StarService } from 'src/app/components/star/star.service';

@Component({
  selector: 'app-star-list-page',
  templateUrl: './star-list-page.component.html',
  styleUrls: ['./star-list-page.component.css']
})
export class StarListPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private starService: StarService) { }

  public stars: Star[] = [];

  ngOnInit() {
    this.stars.push(
      new Star()
    );
    this.stars.push(
      new Star()
    );
    this.stars.push(
      new Star()
    );
    this.stars.push(
      new Star()
    );
    this.stars.push(
      new Star()
    );
  }

}
