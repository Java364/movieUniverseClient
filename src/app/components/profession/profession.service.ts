import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http.service';
import { Profession } from './profession';

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {

  constructor(private httpService: HttpService) { }

  public showStarsProfessions(link: string, callback: Function) {
    this.httpService.get<Profession[]>(link).subscribe(
      (success) => {
        callback(success);
      }
    );
  }

  public createProfessionForStar(link: string, starProfession: Profession, callback: Function) {
    this.httpService.post(link, starProfession).subscribe(
      (success) => {
        callback(success);
      }
    );
  }

  public deleteProfessionForStar(id: number, callback: Function) {
    this.httpService.delete('http://localhost:8080/starProfession/' + id).subscribe(
        (success) => {
            callback(success);
        }
    );
}
}
