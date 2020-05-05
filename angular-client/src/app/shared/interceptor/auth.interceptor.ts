import { Injectable } from '@angular/core';
import { tap, take } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private refreshTokenInProgress = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  constructor(private auth: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(this.addAuthenticationToken(request)).pipe(
      tap(
        (event) => {},
        (event) => {
          if (event instanceof HttpErrorResponse) {
            console.log('Server error', event);
            if (event.status !== 401) {
              return Observable.throw(event.error);
            }

            if (this.refreshTokenInProgress) {
              return this.refreshTokenSubject
                .pipe(take(1))
                .subscribe((token) => {
                  return next.handle(this.addAuthenticationToken(token));
                });
            } else {
              this.refreshTokenSubject.next(null);

              return this.auth.refreshAccessToken().subscribe({
                next: (res) => {
                  this.refreshTokenInProgress = false;

                  console.log('res iterceptor hendler', res);

                  // this.refreshTokenSubject.next(res);

                  return next.handle(this.addAuthenticationToken(request));
                },
                error: (err) => console.log('err 1', err),
              });
            }
          }
        }
      )
    );
  }

  addAuthenticationToken(request) {
    const accessToken = this.auth.getAccessToken();

    if (!accessToken || this.refreshTokenInProgress) {
      return request;
    }
    return request.clone({
      headers: request.headers.set('authorization', accessToken),
    });
  }
}
