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
        if (!this.refreshTokenInProgress) {
          this.refreshTokenInProgress = true;
          this.auth.refreshAccessToken();

          // TODO отловить ошибку рефреша

          // .subscribe({
          //   next: (res) => {
          //     console.log('1');
          //     setTimeout(() => {
          //       console.log('3000');
          //       this.auth.setToken(res);
          //       this.refreshTokenInProgress = false;
          //       this.refreshTokenSubject.next(true);
          //     }, 3000);
          //   },
          //   error: (err) => {
          //     console.log(err);
          //     this.auth.logOut();
          //   },
          //   complete: () => {
          //     console.log('complite');
          //   },
          // });
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
