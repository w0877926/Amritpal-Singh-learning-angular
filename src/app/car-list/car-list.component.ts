import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { MuscleCar } from '../models/muscle-car';
import { MuscleCarService } from '../services/muscle-car.service';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CarListItemComponent } from '../car-list-item/car-list-item.component';
import {HoverHighlightDirective} from '../directives/hover-highlight.directive';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [
    HoverHighlightDirective,
    CommonModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    CarListItemComponent
  ],
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

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars() {
    this.carService.getCars().subscribe({
      next: cars => this.cars = cars || [],
      error: err => {
        this.errorMessage = 'Failed to load muscle cars';
        console.error(err);
      }
    });
  }

  onEdit(id: number) {
    this.router.navigate(['/modify', id]);
  }

  onDelete(id: number) {
    this.carService.deleteCar(id).subscribe({
      next: () => this.cars = this.cars.filter(c => c.id !== id),
      error: err => console.error(err)
    });
  }
}
