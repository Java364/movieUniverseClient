import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LinksService {
    constructor(private httpClient: HttpClient) {

    }
}