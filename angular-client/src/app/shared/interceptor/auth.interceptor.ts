import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { catchError, filter, map, switchMap, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private refreshTokenInProgress = false;
  private refreshTokenSubject = new Subject<any>();

  constructor(private auth: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err, obs) => {
        if (err.url.includes('refreshtoken')) {
          this.auth.logOut();
        }

        if (!this.refreshTokenInProgress) {
          this.refreshTokenInProgress = true;
          this.auth.refreshAccessToken().subscribe((res) => {
            this.auth.setToken(res);
            this.refreshTokenInProgress = false;
            this.refreshTokenSubject.next(true);
          });
        }

        return this.refreshTokenSubject.pipe(
          switchMap(() => {
            console.log(request);
            return next.handle(request);
          })
        );
      })
    );
  }
}
