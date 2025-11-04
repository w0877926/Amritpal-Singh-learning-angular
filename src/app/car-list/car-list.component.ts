import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListItemComponent } from '../car-list-item/car-list-item.component';
import { MuscleCar } from '../models/muscle-car';
import { MuscleCarService } from '../services/muscle-car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, CarListItemComponent],
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: MuscleCar[] = [];
  errorMessage = '';

  constructor(
    private carService: MuscleCarService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadCars();
  }

  loadCars() {
    this.carService.getCars().subscribe({
      next: cars => {
        this.cars = cars || [];
        this.errorMessage = '';
      },
      error: err => {
        this.errorMessage = 'Failed to load muscle cars.';
        console.error('loadCars error', err);
      }
    });
  }

  onEdit(id: number) {
    this.router.navigate(['/modify', id]);
  }

  onDelete(id: number) {
    this.carService.deleteCar(id).subscribe({
      next: () => {
        this.cars = this.cars.filter(car => car.id !== id);
        this.errorMessage = '';
      },
      error: err => {
        this.errorMessage = 'Delete failed.';
        console.error(err);
      }
    });
  }
}
