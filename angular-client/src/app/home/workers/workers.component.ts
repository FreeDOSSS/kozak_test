import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss'],
})
export class WorkersComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:5000/workers?num=0').subscribe({
      next: (x) => console.log('x0', x),
      error: (err) => console.log('err req', err),
    });

    this.http.get('http://localhost:5000/workers?num=1').subscribe({
      next: (x) => console.log('x1', x),
      error: (err) => console.log('err req', err),
    });

    this.http.get('http://localhost:5000/workers?num=2').subscribe({
      next: (x) => console.log('x2', x),
      error: (err) => console.log('err req', err),
    });
  }
}
