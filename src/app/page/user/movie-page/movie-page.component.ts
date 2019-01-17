import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/components/movie/movie';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/components/movie/movie.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }
  movie: Movie;
  movieId: number;

  ngOnInit() {
    this.movieId = + this.route.snapshot.paramMap.get('id');
    this.GetMovie(this.movieId);
  }
  GetMovie(id: number) {
    this.movieService.get(id, (success) => {
      this.movie = <Movie>success;
    });
  }
}
