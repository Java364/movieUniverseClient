import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie/movie';
import { GenreService } from './genre.service';
import { Genre } from './genre';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  @Input() movie: Movie;
  public genre: Genre;
  public genres: Genre[];
  constructor(private route: ActivatedRoute, private genreService: GenreService) { this.genre = new Genre(); }
  ngOnInit() {
    this.showGenres(this.movie.genres);
  }
  showGenres = (url: string) => {
    this.genreService.getAll(url, (success) => {
      this.genres = <Genre[]>success;
    });
  }

}
