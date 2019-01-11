import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Router} from "@angular/router";

@Injectable()
export class LoginService {

  constructor( private router: Router,
               private httpClient: HttpClient) {


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

  public login(email: string, password: string) {

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.httpClient.post(`http://localhost:8080/auth/login`, {
      email: email,
      password: password
    }, { responseType: 'text' }).subscribe(
      (success) => {
        this.setToken(success);
        alert( this.setToken(success));
        this.router.navigate(['/']);
      }
    );

  }
  public setToken(token: string) {
    localStorage.setItem('token', token);
  }

}
