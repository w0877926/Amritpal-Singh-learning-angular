import { Component } from '@angular/core';
import { MuscleCar } from './models/muscle-car';
import {NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title: string = 'Muscle Car Showcase';

  muscleCars: MuscleCar[] = [
    { make: 'Ford', model: 'Mustang Boss 429', year: 1969, horsepower: 375, topSpeed: 118, isClassic: true },
    { make: 'Chevrolet', model: 'Camaro Z/28', year: 1969, horsepower: 290, topSpeed: 120, isClassic: true },
    { make: 'Dodge', model: 'Charger R/T', year: 1970, horsepower: 375, topSpeed: 127, isClassic: true },
    { make: 'Plymouth', model: 'Barracuda HEMI', year: 1970, horsepower: 425, topSpeed: 117, isClassic: true },
    { make: 'Pontiac', model: 'GTO Judge', year: 1970, horsepower: 370, topSpeed: 115, isClassic: true },
    { make: 'Chevrolet', model: 'Chevelle SS 454', year: 1970, horsepower: 450, topSpeed: 125, isClassic: true },
    { make: 'Dodge', model: 'Challenger R/T', year: 1970, horsepower: 375, topSpeed: 124, isClassic: true },
    { make: 'AMC', model: 'AMX 390', year: 1969, horsepower: 315, topSpeed: 115 },
    { make: 'Buick', model: 'GSX Stage 1', year: 1970, horsepower: 360, topSpeed: 123 },
    { make: 'Oldsmobile', model: '442 W-30', year: 1970, horsepower: 370, topSpeed: 121 },
  ];
}
