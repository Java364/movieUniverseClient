import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { HttpService } from 'src/app/core/http.service';

@Injectable()

export class MovieService {

  constructor(private httpService: HttpService) {
  }
  public get(id: number, callback: Function) {
    this.httpService.get<Movie>('http://localhost:8080/movies/' + id).subscribe(
        (success) => {
            callback(success);
        }
    );
}
public getAll(callback: Function) {
    this.httpService.get<Movie[]>('http://localhost:8080/movies').subscribe(
        (success) => {
            callback(success);
        }
    );
}
}
