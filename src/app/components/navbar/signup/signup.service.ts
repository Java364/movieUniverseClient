import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {User} from "./user";


@Injectable()
export class SignupService {
  constructor(private httpClient: HttpClient) {
  }

  public create(user: User, callback: Function) {
    this.httpClient.post('http://localhost:8080/users/registration', user).subscribe(
      (success) => {
        callback(success);
      }
    );
  }


}
