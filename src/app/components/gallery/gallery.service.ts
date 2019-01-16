import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http.service';
import { Gallery } from './gallery';

@Injectable()
export class GalleryService {
    constructor(private httpService: HttpService) {
    }

    public showStarsGallery(link: string, callback: Function) {
        this.httpService.get<Gallery>(link).subscribe(
            (success) => {
                callback(success);
            }
        );
    }
}