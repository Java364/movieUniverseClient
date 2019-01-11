import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http.service';
import { Links } from './link';

@Injectable()
export class LinksService {
    constructor(private httpService: HttpService) { }

    public createLink(id: number, link: Links, callback: Function) {
        this.httpService.post('http://localhost:8080/stars/' + id + '/new-links', link).subscribe(
            (success) => {
                callback(success);
            }
        );
    }

    public showStarsLinks(id: number, callback: Function) {
        this.httpService.get<Links[]>('http://localhost:8080/stars/' + id + '/links').subscribe(
            (success) => {
                callback(success);
            }
        );
    }
}