import { Component, OnInit } from '@angular/core';
import { MuscleCar } from './models/muscle-car';
import { NgIf, CurrencyPipe, DatePipe } from '@angular/common';
import { MuscleCarService } from './services/muscle-car.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf,
    CurrencyPipe,
    DatePipe,
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
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
