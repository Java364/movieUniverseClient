import { Injectable } from '@angular/core';
import { Star } from './star';
import { HttpService } from "../../core/http.service";

@Injectable()
export class StarService {
  constructor(private httpService: HttpService) {
  }

  public getAll(callback: Function) {
    this.httpService.get<Star[]>('http://localhost:8080/stars/list').subscribe(
      (success) => {
        callback(success);
      }
    );
  }
  public createStar(star: Star, callback: Function) {
    this.httpService.post('http://localhost:8080/stars/create', star).subscribe(
      (success) => {
        callback(success);
      }
    );
  }
  public getStar(id: number, callback: Function) {
    this.httpService.get('http://localhost:8080/stars/' + id).subscribe(
      (success) => {
        callback(success);
      }
    );
  }
  public updateStar(id: number, star: Star, callback: Function) {
    this.httpService.put('http://localhost:8080/stars/update/' + id, star).subscribe(
      (success) => {
        callback(success);
      }
    );
  }
  public deleteStar(id: number, callback: Function) {
    this.httpService.delete('http://localhost:8080/stars/' + id).subscribe(
      (success) => {
        callback(success);
      }
    );
  }
}
