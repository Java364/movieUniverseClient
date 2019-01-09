import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class StarService {
  constructor(private httpClient: HttpClient) {
  }

public getAll(callback: Function) {
    this.httpClient.get('http://localhost:8080/stars/list').subscribe(
      (success) => {
        callback(success);
      }
    );
  }
}