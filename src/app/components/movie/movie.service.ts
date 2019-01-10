import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie'
@Injectable()

export class MovieService {

  constructor(private httpClient: HttpClient, private Movie:Movie) {
  }

}
