import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from './movie.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Movie;
  movieId: number;
  constructor(private route: ActivatedRoute, private movieService: MovieService) { this.movie = new Movie(); }

  ngOnInit() {
  this.movieId = +this.route.snapshot.paramMap.get('id');
  this.GetMovie(this.movieId);
  }
  GetMovie(id:number) {
    this.movieService.get(id, (success) => {
      this.movie=<Movie>success;
    });
  }
}
