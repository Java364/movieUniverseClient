import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie'
@Injectable()

export class MovieService {

  constructor(private httpClient: HttpClient, private Movie:Movie) {
  }
  public get(id: number, callback: Function) {
    this.httpClient.get('http://localhost:8080/movies/' + id).subscribe(
        (success) => {
            callback(success);
        }
    );
}

}
