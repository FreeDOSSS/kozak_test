import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

interface Auth {
  accessToken: string;
  refreshToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string = localStorage.getItem('token') || null;

  constructor(private http: HttpClient, private router: Router) {}

  auth(data) {
    this.http.post('http://localhost:5000/auth', { ...data }).subscribe({
      next: (res: Auth) => {
        this.setToken(res);
        this.router.navigate(['/workers']);
      },
      error: (error) => console.log('err', error),
    });
  }

  setToken(res) {
    // this.token = token;
    localStorage.setItem('access-token', res.accessToken);
    localStorage.setItem('refresh-token', res.refreshToken);
  }

  refreshAccessToken() {
    console.log('refresh');
    this.http
      .post('http://localhost:5000/refreshtoken', null, {
        headers: { Authorization: localStorage.getItem('refresh-token') },
      })
      .subscribe(
        () => {
          console.log('rer req');
        },
        (err) => console.log('err1', err),
        () => {
          console.log('com');
        }
      );
  }

  logOut() {
    localStorage.removeItem('access-token');
    localStorage.removeItem('refresh-token');
    this.router.navigate(['/']);
  }

  getAccessToken(): string {
    return localStorage.getItem('access-token');
  }
}
