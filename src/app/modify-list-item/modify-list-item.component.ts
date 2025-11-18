import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MuscleCarService } from '../services/muscle-car.service';
import { MuscleCar } from '../models/muscle-car';
import {HighlightOnFocusDirective} from '../directives/highlight-on-focus.directive';
import {HoverHighlightDirective} from '../directives/hover-highlight.directive';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HighlightOnFocusDirective, HoverHighlightDirective],
  templateUrl: './modify-list-item.component.html',
  styleUrls: ['./modify-list-item.component.css']
})
export class ModifyListItemComponent implements OnInit {

  carForm!: FormGroup;
  editingCarId: number | null = null;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private carService: MuscleCarService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.carForm = this.fb.group({
      id: [''],
      make: [''],
      model: [''],
      year: [''],
      horsepower: [''],
      topSpeed: [''],
      isClassic: [false],
      image: [''],
      addedDate: [''],
      price: ['']
    });

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.editingCarId = id;
      this.carService.getCarById(id).subscribe({
        next: (car: MuscleCar | undefined) => {
          if (car) this.carForm.patchValue(car);
        },
        error: (err) => console.error('Error fetching car:', err)
      });
    }
  }

  onSubmit(): void {
    if (this.carForm.valid) {
      const formValue = this.carForm.value as MuscleCar;

      if (this.editingCarId !== null) {
        formValue.id = this.editingCarId;
        this.carService.updateCar(formValue).subscribe({
          next: () => {
            alert('Car updated successfully!');
            this.router.navigate(['/']);
          },
          error: (err) => console.error('Error updating car:', err)
        });
      } else {
        this.carService.getCars().subscribe({
          next: (cars: MuscleCar[]) => {
            let maxId = 0;
            for (let c of cars) {
              if (c.id && c.id > maxId) {
                maxId = c.id;
              }
            }
            formValue.id = maxId + 1;

            this.carService.createCar(formValue).subscribe({
              next: () => {
                alert('New car added successfully!');
                this.router.navigate(['/']);
              },
              error: (err) => console.error('Error creating car:', err)
            });
          },
          error: (err) => console.error('Error loading cars:', err)
        });
      }


      this.carForm.reset();
      this.editingCarId = null;
    }
  }

  onReset(): void {
    this.carForm.reset();
    this.editingCarId = null;
  }
}
