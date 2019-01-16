import { Component, OnInit, Input } from '@angular/core';
import { Star } from 'src/app/components/star/star';
import { ActivatedRoute, Router } from '@angular/router';
import { StarService } from 'src/app/components/star/star.service';

@Component({
  selector: 'app-star-page',
  templateUrl: './star-page.component.html',
  styleUrls: ['./star-page.component.css']
})
export class StarPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router, private starService: StarService) { }
  star: Star;
  starId: number;

  ngOnInit() {
    this.starId = + this.route.snapshot.paramMap.get('id');
    this.starService.getStar(this.starId, (star:Star) => {
      this.star = star;
    });
  }

}
