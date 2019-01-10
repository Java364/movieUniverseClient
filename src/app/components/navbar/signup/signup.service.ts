import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {User} from "./user";
import {Router} from "@angular/router";


@Injectable()
export class SignupService {
  constructor( private router: Router,
               private httpClient: HttpClient) {
  }

  public registrate(user: User, callback: Function) {
    this.httpClient.post('http://localhost:8080/users/registration', user).subscribe(
      (success) => {
        callback(success);
      }
    );
  }
  signup(firstName: string,lastName: string, email: string, password: string): void {

    this.httpClient.post<any>(`http://localhost:8080/users/registration`, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,

    }).subscribe();
    this.router.navigate(['/']);
  }

}
