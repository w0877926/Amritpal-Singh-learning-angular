import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { MuscleCar } from '../models/muscle-car';

@Injectable({
  providedIn: 'root'
})
export class MuscleCarService {
  private apiUrl = 'api/cars';

  constructor(private http: HttpClient) {}

  getCars(): Observable<MuscleCar[]> {
    return this.http.get<MuscleCar[]>(this.apiUrl)
      .pipe(
        catchError(err => {
          console.error('getCars failed', err);
          return of([] as MuscleCar[]);
        })
      );
  }

  getCarById(id: number): Observable<MuscleCar | undefined> {
    return this.http.get<MuscleCar>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(err => {
          console.error(`getCarById ${id} failed`, err);
          return of(undefined);
        })
      );
  }

  createCar(car: MuscleCar): Observable<MuscleCar> {
    return this.http.post<MuscleCar>(this.apiUrl, car)
      .pipe(
        catchError(err => {
          console.error('createCar failed', err);
          return of(car);
        })
      );
  }

  updateCar(car: MuscleCar): Observable<MuscleCar> {
    const url = `${this.apiUrl}/${car.id}`;
    return this.http.put<MuscleCar>(url, car)
      .pipe(
        catchError(err => {
          console.error('updateCar failed', err);
          return of(car);
        })
      );
  }

  deleteCar(id: number): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url)
      .pipe(
        catchError(err => {
          console.error('deleteCar failed', err);
          return of({});
        })
      );
  }
}
