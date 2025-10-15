import { Component, Input } from '@angular/core';
import { MuscleCar } from '../models/muscle-car';
import {NgClass, NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-car-list-item',
  standalone: true,
  templateUrl: './car-list-item.component.html',
  imports: [
    NgClass,
    NgIf,
    NgOptimizedImage
  ],
  styleUrls: ['./car-list-item.component.css']
})
export class CarListItemComponent {
  @Input() car?: MuscleCar;
  @Input() isEven: boolean = false;
}
