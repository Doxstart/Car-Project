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

  getDealersById(dealerId: number){
    return this.http.get<ICarDealer[]>(`${this.API_URL}/${dealerId}`);
  }

  postDealer(newDealer: ICarDealer){
    return this.http.post(`${this.API_URL}`, newDealer);
  }

  postCars(dealerId: number, newCar: ICars) {
    return this.http.post<ICarDealer>(`${this.API_URL}/${dealerId}`, newCar);
  }

  putDealer(dealerId: number, updatedDealer: ICarDealer){
    return this.http.put(`${this.API_URL}/${dealerId}`, updatedDealer);
  }

  putCar(id: string, updatedCar: ICars){
    return this.http.put(`${this.API_URL}/${id}`, updatedCar)
  }

  deleteCar(id: ICars): Observable<ICars> {
    return this.http.delete<ICars>(`this.API_URL/${id}`);
  }

}
