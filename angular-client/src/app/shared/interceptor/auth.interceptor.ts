import { Injectable } from '@angular/core';
import {
  tap,
  take,
  catchError,
  switchMap,
  switchMapTo,
  map,
  filter,
  finalize,
} from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, BehaviorSubject, AsyncSubject } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private refreshTokenInProgress = false;
  private refreshToken$: AsyncSubject<any> = new AsyncSubject();
  private refreshTokenSubject = new BehaviorSubject<any>(null);

  constructor(private auth: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(this.addAuthenticationToken(request)).pipe(
      catchError((err) => {
        if (this.refreshTokenInProgress) {
          return this.refreshTokenSubject.pipe(
            switchMap(() => next.handle(this.addAuthenticationToken(request)))
          );
        } else {
          this.refreshTokenInProgress = true;
          return this.auth.refreshAccessToken().pipe(
            catchError((err, caught) => {
              if (err) {
                this.refreshTokenInProgress = false;
                this.auth.logOut();
              } else {
                return caught;
              }
            }),
            filter((result) => {
              console.log('result', result);
              return result !== null;
            }),
            take(1),
            map((res) => {
              this.auth.setToken(res);
              this.refreshTokenSubject.next(true);
              this.refreshTokenInProgress = false;
              return res;
            }),
            switchMap(() => next.handle(this.addAuthenticationToken(request)))
          );
        }
      })
    );
  }

  addAuthenticationToken(request) {
    const accessToken = this.auth.getAccessToken();

    if (request.url.includes('refreshtoken')) {
      return request;
    }

    if (!accessToken) {
      return request;
    }

    if (this.refreshTokenInProgress) {
      return request;
    }

    const requestHeaderSet = request.clone({
      headers: request.headers.set('authorization', accessToken),
    });

    return requestHeaderSet;
  }
}
