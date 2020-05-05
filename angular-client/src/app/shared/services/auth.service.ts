import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Auth {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string = localStorage.getItem('token') || null;

  constructor(private http: HttpClient, private router: Router) {}

  auth(data) {
    this.http.post('http://localhost:5001/login', { ...data }).subscribe({
      next: (res: Auth) => {
        this.setToken(res.token);
      },
      error: (error) => console.log('err', error),
    });
  }

  isAuth() {
    // this.router.navigate(['/workers']);
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem('token', token);
  }
}
