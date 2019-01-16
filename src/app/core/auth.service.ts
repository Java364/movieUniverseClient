import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AuthService {

  constructor(private router: Router,
    private http: HttpClient,
    private snackBar: MatSnackBar) {
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

  public forgotPass(email: string): Observable<any> {
    this.router.navigate(['/login']);
    return this.http.get<String>('http://localhost:8080/auth/forgotPass/' + email);
  }

  public login(email: string, password: string) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.http.post(`http://localhost:8080/auth/login`, {
      email: email,
      password: password
    }, { responseType: 'text' }).subscribe(
      (success) => {
        this.setToken(JSON.parse(success)['accessToken']);
        console.log(success);
        this.router.navigate(['/']);
      }
      , (error) => {
        if (error instanceof HttpErrorResponse) {
          alert('Sorry, you can`t login! Try again or registrate');
        }
      }
    );
  }

  public hasToken(): boolean {
    return this.getToken() != null;
  }

  public refreshToken(): Observable<string> {

    return this.http.post<string>('', this.getToken());
  }

}
