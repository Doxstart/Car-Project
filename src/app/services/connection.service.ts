import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICarDealer, ICars } from '../models/car.models';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private readonly API_URL = 'https://localhost:44320/api/Concessionario/';

  constructor(private readonly http: HttpClient) { }
  getCars(): Observable<ICarDealer[]> {
    return this.http.get<ICarDealer[]>(this.API_URL)
    .pipe(
      map((data: ICarDealer[]) => data)
    );
  }

  postCars(record: ICarDealer) {
    return this.http.post<ICarDealer>(this.API_URL, record);
  }

  deleteCar(id: ICars): Observable<ICars> {
    return this.http.delete<ICars>(`this.API_URL/${id}`);
  }

}
