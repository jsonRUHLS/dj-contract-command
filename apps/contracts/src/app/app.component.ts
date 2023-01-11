import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'contracts';
  contract = '';

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{ message: string}>('http://localhost:8003/api')
    .pipe(take(1), map(cur => cur.message))
    .subscribe(res => this.contract = res)
  }
}
