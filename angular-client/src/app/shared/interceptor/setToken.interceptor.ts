import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class SetTokenInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(this.addAuthenticationToken(request));
  }

  addAuthenticationToken(request) {
    const accessToken = this.auth.getAccessToken();

    if (request.url.includes('refreshtoken') || request.url.includes('auth')) {
      return request;
    }
    const requestHeaderSet = request.clone({
      setHeaders: { Authorization: accessToken },
    });
    // const requestHeaderSet = request.clone({
    //   headers: request.headers.set('authorization', accessToken),
    // });

    return requestHeaderSet;
  }
}
