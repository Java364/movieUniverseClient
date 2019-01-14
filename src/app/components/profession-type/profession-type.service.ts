import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http.service';
import { ProfessionType } from './profession-type';

@Injectable({
  providedIn: 'root'
})
export class ProfessionTypeService {

  constructor(private httpService: HttpService) {

  }

  public getProfession(id: number, callback: Function) {
    this.httpService.get('http://localhost:8080/profession/profession/' + id).subscribe(
      (success) => {
        callback(success);
      }
    );
  }
  public deleteProfession(id: number, callback: Function) {
    this.httpService.delete('http://localhost:8080/profession/delete/' + id).subscribe(
      (success) => {
        callback(success);
      }
    );
  }

  public getAllProfession(callback: Function) {
    this.httpService.get<ProfessionType[]>('http://localhost:8080/profession').subscribe(
      (success) => {
        callback(success);
      }
    );
  }

  public createProfession(profession: ProfessionType, callback: Function) {
    this.httpService.post('http://localhost:8080/profession/createProfession', profession).subscribe(
      (success) => {
        callback(success);
      }
    );
  }
  public showAll(callback: Function) {
    this.httpService.get('http://localhost:8080/profession/listAll').subscribe(
      (success) => {
        callback(success);
      }
    );
  }

  public updateProfession(id: number, profession: ProfessionType, callback: Function) {
    this.httpService.put('http://localhost:8080/profession/profession/' + id, profession).subscribe(
      (success) => {
        callback(success);
      }
    );
  }
}
