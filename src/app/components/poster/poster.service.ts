import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http.service';
import { Poster } from './poster';
import { MovieService } from '../movie/movie.service';
import { Movie } from '../movie/movie';
import { MovieComponent } from '../movie/movie.component';

@Injectable({
  providedIn: 'root'
})
export class PosterService {

  constructor(private httpService: HttpService, private movieComponent: MovieComponent, private movie: Movie) { }

  public get(movie: Movie, callback: Function) {
    this.httpService.get<Poster>(movie.poster).subscribe(
      (success) => {
        callback(success);
      }
    );
  }
}
