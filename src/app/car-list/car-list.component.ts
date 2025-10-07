import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListItemComponent } from '../car-list-item/car-list-item.component';
import { MuscleCar } from '../models/muscle-car';
import { MuscleCarService } from '../services/muscle-car.service';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, CarListItemComponent],
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: MuscleCar[] = [];

  constructor(private carService: MuscleCarService) {}

  ngOnInit() {
    this.carService.getCars().subscribe(cars => this.cars = cars);
  }
}
