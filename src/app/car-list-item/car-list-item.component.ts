import { Component, Input } from '@angular/core';
import { MuscleCar } from '../models/muscle-car';

@Component({
  selector: 'app-car-list-item',
  standalone: true,
  templateUrl: './car-list-item.component.html',
  styleUrls: ['./car-list-item.component.scss']
})
export class CarListItemComponent {
  @Input() car?: MuscleCar;
}
