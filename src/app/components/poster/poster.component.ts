import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie/movie.service';
import { PosterService } from './poster.service';
import { Poster } from './poster';
import { Movie } from '../movie/movie';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {
  movieId: number;
  public poster: Poster;
  constructor(private route: ActivatedRoute, private posterService: PosterService) { this.poster = new Poster(); }

  ngOnInit() {
    this.movieId = +this.route.snapshot.paramMap.get('id');
  
  }

  
}
