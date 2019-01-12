import { throwError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpEvent } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class HttpService {


    constructor(private http: HttpClient,
        private authService: AuthService) {
    }

    public buildUrl(url: string) {
        return url;
    }

    public get<T>(url: string) {
        return this.doGet<T>(url, this.getHeaderOptions()).source;
    }

    public post<T>(url: string, params: any) {
        return this.doPost<T>(url, params, this.getHeaderOptions()).source;
    }

    public put<T>(url: string, params: any) {
        return this.doPut<T>(url, params, this.getHeaderOptions()).source;
    }

    public delete<T>(url: string) {
        return this.doDelete<T>(url, this.getHeaderOptions()).source;
    }



    private doGet<T>(url: string, options: any) {
        return this.process(this.http.get<T>(url, options));
    }

    private doPost<T>(url: string, params: any, options: any) {
        return this.process(this.http.post<T>(url, params, options));
    }

    private doPut<T>(url: string, params: any, options: any) {
        return this.process(this.http.put<T>(url, params, options));
    }

    private doDelete<T>(url: string, options: any) {
        return this.process(this.http.delete<T>(url, options));
    }

    private process<T>(request: Observable<HttpEvent<T>>) {
        return request.pipe(
            map(res => {
                return res;
            }),
            tap(res => {
            })
        );
    }

    private getHeaderOptions() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.authService.getToken()
            })
        };
        return {};
    }
}

