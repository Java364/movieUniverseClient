import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

    constructor(private router: Router,
      private http: HttpClient) {
    }

    public getToken(): string {
        return localStorage.getItem('token');
    }

    public setToken(token: string) {
        localStorage.setItem('token', token);
    }

    public removeToken() {
        localStorage.removeItem('token');
    }

    public isAuthenticated(): boolean {
        const token = this.getToken();
        if (token === undefined || token === null || token.trim() === '') {
            return false;
        }
        return true;
    }


  /*  public authorize(login: string, password: string, callback: Function) {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        this.http.post('api/auth/signin', {
            email: login,
            password: password
        }, { responseType: 'text' }).subscribe(
            (success) => {
                this.setToken(success);
                callback.call(this);
            }
        );
    }*/
  public login(email: string, password: string) {

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.http.post(`http://localhost:8080/auth/login`, {
      email: email,
      password: password
    }, { responseType: 'text' }).subscribe(
      (success) => {
        this.setToken(success);
        console.log(success);
        console.log("sddsdsds");
        console.log("get token -- " +this.getToken());
        this.router.navigate(['/main']);

      }
    );

  }
  public hasToken(): boolean {
    return this.getToken() != null;
  }
    public refreshToken(): Observable<string> {
        return this.http.post<string>('api/auth/refresh', this.getToken());
    }
}
