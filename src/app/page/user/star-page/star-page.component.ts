import { Component, OnInit, Input } from '@angular/core';
import { Star } from 'src/app/components/star/star';
import { ActivatedRoute } from '@angular/router';
import { StarService } from 'src/app/components/star/star.service';

@Component({
  selector: 'app-star-page',
  templateUrl: './star-page.component.html',
  styleUrls: ['./star-page.component.css']
})
export class StarPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private starService: StarService) { }
  star: Star;
  starId: number;

  ngOnInit() {
    this.starId = + this.route.snapshot.paramMap.get('id');
    this.GetStar(this.starId);
  }
  GetStar(id: number) {
    this.starService.getStar(id, (success) => {
      this.star = <Star>success;
    });
  }
}
