import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/components/movie/movie';
import { MovieService } from 'src/app/components/movie/movie.service';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css']
})
export class CatalogPageComponent implements OnInit {
  public movie: Movie;
  public movies: Movie[] = [];
 
  constructor(private movieService : MovieService) {
     this.movie = new Movie();
  }

  ngOnInit() {
   this.showAllMovies();
  }
  
  showAllMovies = () => {
    this.movieService.getAll((success) => {
        this.movies = <Movie[]>success;
    });
}
}
