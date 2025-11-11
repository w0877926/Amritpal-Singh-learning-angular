import { Component, Input } from '@angular/core';
import { MuscleCar } from '../models/muscle-car';
import {CurrencyPipe, DatePipe, DecimalPipe, NgClass, NgIf, NgOptimizedImage, UpperCasePipe} from '@angular/common';
import {CarTitlePipe} from '../pipes/car-title.pipe';

@Component({
  selector: 'app-car-list-item',
  standalone: true,
  templateUrl: './car-list-item.component.html',
  imports: [
    NgClass,
    NgIf,
    NgOptimizedImage,
    UpperCasePipe,
    DecimalPipe,
    DatePipe,
    CurrencyPipe,
    CarTitlePipe
  ],
  styleUrls: ['./car-list-item.component.css']
})
export class CarListItemComponent {
  @Input() car?: MuscleCar;
  @Input() isEven: boolean = false;
}
