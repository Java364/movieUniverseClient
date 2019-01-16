import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "./user";
import {Router} from "@angular/router";

const baseUrl = 'http://localhost:8080/auth/';

@Injectable()
export class SignupService {

  constructor( private router: Router,
               private httpClient: HttpClient) {
  }

   signup(firstName: string,lastName: string, email: string, password: string) {
    this.httpClient.post(baseUrl + 'signup', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    }, { responseType: 'text' }).subscribe(
      (success) => {

        this.router.navigate(['/login']);
      }
    );
  }



}
