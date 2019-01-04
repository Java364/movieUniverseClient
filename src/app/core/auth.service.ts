import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {
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

    public authorize(login: string, password: string, callback: Function) {
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
    }

    public refreshToken(): Observable<string> {
        return this.http.post<string>('api/auth/refresh', this.getToken());
    }
}
