import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private readonly API_URL = 'https://localhost:44320/api/Concessionario';

  constructor(private readonly http: HttpClient) { }
  getCars(): Observable<any> {
    return this.http.get<any>(this.API_URL)
    .pipe(
      map((data: any) => data)
    );
  }
}
