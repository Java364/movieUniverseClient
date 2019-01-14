import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Star } from 'src/app/components/star/star';
import { StarService } from 'src/app/components/star/star.service';

@Component({
  selector: 'app-star-page-by-id',
  templateUrl: './star-page-by-id.component.html',
  styleUrls: ['./star-page-by-id.component.css']
})
export class StarPageByIdComponent implements OnInit {

  star: Star;
  starId: number;

  constructor(private route: ActivatedRoute, private starService: StarService) { }


  ngOnInit() {
    this.starId = + this.route.snapshot.paramMap.get('id');
    this.GetMovie(this.starId);
  }
  GetMovie(id: number) {
    this.starService.getStar(id, (success) => {
      this.star = <Star>success;
    });
  }



}
