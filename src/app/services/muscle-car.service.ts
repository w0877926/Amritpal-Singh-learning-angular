import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MuscleCar } from '../models/muscle-car';
import { MUSCLE_CARS } from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class MuscleCarService {

  private cars: MuscleCar[] = [...MUSCLE_CARS];

  getCars(): Observable<MuscleCar[]> {
    return of(this.cars);
  }

  getCarById(id: number): Observable<MuscleCar | undefined> {
    return of(this.cars.find(c => c.id === id));
  }

  createCar(car: MuscleCar): Observable<MuscleCar[]> {
    this.cars.push(car);
    return of(this.cars);
  }

  updateCar(car: MuscleCar): Observable<MuscleCar[]> {
    const index = this.cars.findIndex(c => c.id === car.id);
    if (index !== -1) this.cars[index] = car;
    return of(this.cars);
  }

  deleteCar(id: number): Observable<MuscleCar | undefined> {
    const index = this.cars.findIndex(c => c.id === id);
    if (index !== -1) {
      const removed = this.cars.splice(index, 1)[0];
      return of(removed);
    }
    return of(undefined);
  }
}
