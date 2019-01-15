import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http.service';
import { Links } from './link';

@Injectable()
export class LinksService {
    constructor(private httpService: HttpService) { }

    public createLink(urlLink: string, link: Links, callback: Function) {
        this.httpService.post(urlLink, link).subscribe(
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

    public updateLinks(id: number, links: Links, callback: Function) {
        this.httpService.put('http://localhost:8080/links/link/' + id, links).subscribe(
            (success) => {
                callback(success);
            }
        );
    }

    public getLink(id: number, callback: Function) {
        this.httpService.get('http://localhost:8080/links/link/' + id).subscribe(
            (success) => {
                callback(success);
            }
        );
    }

    public deleteLinks(id: number, callback: Function) {
        this.httpService.delete('http://localhost:8080/links/delete/' + id).subscribe(
            (success) => {
                callback(success);
            }
        );
    }
}