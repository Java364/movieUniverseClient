import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http.service';
import { Genre } from './genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpService: HttpService) { }
  public getAll(url :string, callback: Function) {
    this.httpService.get<Genre[]>(url).subscribe(
        (success) => {
            callback(success);
        }
    );
}
}
