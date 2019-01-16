import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http.service';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(private httpService: HttpService) { }

  public showStarsAvatar(link: string, callback: Function) {
    this.httpService.get<AvatarService>(link).subscribe(
        (success) => {
            callback(success);
        }
    );
}
}
