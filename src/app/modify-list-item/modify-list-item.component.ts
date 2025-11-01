import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MuscleCarService } from '../services/muscle-car.service';
import { MuscleCar } from '../models/muscle-car';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modify-list-item.component.html',
  styleUrls: ['./modify-list-item.component.css']
})
export class ModifyListItemComponent implements OnInit {
  carForm!: FormGroup;
  editingCarId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private carService: MuscleCarService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.carForm = this.fb.group({
      id: [null],
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      horsepower: ['', Validators.required],
      topSpeed: ['', Validators.required],
      isClassic: [false],
      image: ['']
    });

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.editingCarId = id;
      this.carService.getCarById(id).subscribe(car => {
        if (car) this.carForm.patchValue(car);
      });
    }
  }

  onSubmit() {
    if (this.carForm.valid) {
      const formValue: MuscleCar = this.carForm.value;

      if (this.editingCarId !== null) {
        this.carService.updateCar(formValue).subscribe(() => {
          alert('Car updated successfully!');
          this.router.navigate(['/']);
        });
      } else {
        this.carService.getCars().subscribe(cars => {
          formValue.id = cars.length > 0 ? cars[cars.length - 1].id + 1 : 1;
          this.carService.createCar(formValue).subscribe(() => {
            alert('New car added successfully!');
            this.router.navigate(['/']);
          });
        });
      }

      this.carForm.reset();
      this.editingCarId = null;
    }
  }

  onReset() {
    this.carForm.reset();
    this.editingCarId = null;
  }
}
