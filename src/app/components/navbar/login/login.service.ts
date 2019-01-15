import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Router} from "@angular/router";
import {HttpService} from "../../../core/http.service";


@Injectable()
export class LoginService {

  constructor( private router: Router,
               private http: HttpService) {


     }
 /* login(usernameOrEmail: string, password: string) {

    const headers = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

    return this.httpClient.post<any>(`http://localhost:8080/auth/login`, {
      usernameOrEmail: usernameOrEmail,
      password: password
    }, headers)
     .subscribe(token => {
        localStorage.setItem('jwtToken', token.accessToken);

        this.router.navigate(['/']);
        return token;
      });
  }*/


/*  public login(email: string, password: string) {

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.http.post(`http://localhost:8080/auth/login`, {
      email: email,
      password: password
    }, { responseType: 'text' }).subscribe(
      (success) => {
        this.setToken(success);
        console.log(success);

        this.router.navigate(['/']);


      }
    );

  }*/

  public getToken(): string {
    return localStorage.getItem('token');
  }


  public setToken(token: string) {
    localStorage.setItem('token', token);
  }

}

