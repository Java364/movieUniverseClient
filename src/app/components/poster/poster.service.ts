import { Injectable, Input } from '@angular/core';
import { HttpService } from 'src/app/core/http.service';
import { Poster } from './poster';
import { MovieService } from '../movie/movie.service';
import { Movie } from '../movie/movie';


@Injectable({
  providedIn: 'root'
})
export class PosterService {


  constructor(private httpService: HttpService) { }

  public getPoster(url: string, callback: Function) {
    this.httpService.get<Poster>(url).subscribe(
      (success) => {
        callback(success);
      }
    );
  }
}

