import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { MuscleCar } from '../models/muscle-car';
import { MUSCLE_CARS } from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cars: MuscleCar[] = [...MUSCLE_CARS];
    return { cars };
  }
}
