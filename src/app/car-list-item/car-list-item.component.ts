import { Component, Input } from '@angular/core';
import { MuscleCar } from '../models/muscle-car';
import { CurrencyPipe, DatePipe, NgIf} from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-car-list-item',
  standalone: true,
  templateUrl: './car-list-item.component.html',
  imports: [
    NgIf,
    DatePipe,
    CurrencyPipe,
    MatCardModule,
    MatIconModule,
  ],
  styleUrls: ['./car-list-item.component.css']
})
export class CarListItemComponent {
  @Input() car?: MuscleCar;
  @Input() isEven: boolean = false;
}
