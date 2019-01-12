import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { catchError, switchMap, tap, take, filter, map } from 'rxjs/operators';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    isRefreshingToken: Boolean = false;
    tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

    constructor(private authService: AuthService) {

    }

    addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
        return req.clone({ setHeaders: { Authorization: token } });
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.indexOf('auth/signin') > 0
            || req.url.indexOf('auth/refresh') > 0
            || req.url.indexOf('auth/signup') > 0) {
            return next.handle(req);
        }
        return this.getHandler(req, next);
    }

    private getHandler(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(this.addToken(req, this.authService.getToken())).pipe(
            catchError(
                (error: any) => {
                    if (error instanceof HttpErrorResponse) {
                        switch ((<HttpErrorResponse>error).status) {
                            case 401:
                                return this.handle401Error(req, next);
                        }
                        return throwError(error.error);
                    } else {
                        return Observable.throw(error);
                    }
                }
            ) as any
        );
    }

    handle401Error(req: HttpRequest<any>, next: HttpHandler) {
        if (!this.isRefreshingToken) {
            this.isRefreshingToken = true;
            this.tokenSubject.next(null);
            return this.authService.refreshToken().pipe(
                switchMap((newToken: string) => {
                    if (newToken) {
                        this.tokenSubject.next(newToken);
                        return next.handle(this.addToken(req, newToken));
                    }
                    return this.logoutUser();
                }),
                catchError(error => {
                    return this.logoutUser();
                }),
                tap(() => {
                    this.isRefreshingToken = false;
                })
            ).source;
        } else {
            return this.tokenSubject.pipe(
                filter(token => token != null),
                take(1),
                switchMap(token => {
                    return next.handle(this.addToken(req, token));
                })
            );
        }
    }

    logoutUser() {
        this.authService.removeToken();
        return throwError('');
    }
}
