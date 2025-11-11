import { Pipe, PipeTransform } from '@angular/core';
import { MuscleCar } from '../models/muscle-car';

@Pipe({
  name: 'carTitle'
})
export class CarTitlePipe implements PipeTransform {
  transform(car: MuscleCar): string {
    return `${car.year} ${car.make} ${car.model}`;
  }
}
