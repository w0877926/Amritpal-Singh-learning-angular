import { Component, OnInit } from '@angular/core';
import { MuscleCar } from './models/muscle-car';
import { NgIf } from '@angular/common';
import { CarListComponent } from './car-list/car-list.component';
import { CarListItemComponent } from './car-list-item/car-list-item.component';
import { MuscleCarService } from './services/muscle-car.service';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, CarListComponent, CarListItemComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  title: string = 'Muscle Car Showcase';
  featured?: MuscleCar;

  constructor(private carService: MuscleCarService) {}

  ngOnInit(): void {
    this.carService.getCarById(1).subscribe(car => this.featured = car);
  }
}
