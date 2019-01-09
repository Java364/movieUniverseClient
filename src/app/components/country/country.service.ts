import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CountryService {
    constructor(private httpClient: HttpClient) {
    }
  
    public getAll(callback: Function) {
        this.httpClient.get('http://localhost:8080/country').subscribe(
            (success) => {
                callback(success);
            }
        );
    }
}