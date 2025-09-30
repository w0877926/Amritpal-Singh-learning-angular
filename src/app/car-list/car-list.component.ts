import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListItemComponent } from '../car-list-item/car-list-item.component';
import { MuscleCar } from '../models/muscle-car';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, CarListItemComponent],
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {

  cars: MuscleCar[] = [
    { make: 'Ford', model: 'Mustang Boss 429', year: 1969, horsepower: 375, topSpeed: 118, isClassic: true },
    { make: 'Chevrolet', model: 'Camaro Z/28', year: 1969, horsepower: 290, topSpeed: 120, isClassic: true },
    { make: 'Dodge', model: 'Charger R/T', year: 1970, horsepower: 375, topSpeed: 127, isClassic: true },
    { make: 'Pontiac', model: 'GTO Judge', year: 1970, horsepower: 370, topSpeed: 115, isClassic: true }
  ];
}
