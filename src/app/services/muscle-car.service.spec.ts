import { TestBed } from '@angular/core/testing';
import { MuscleCarService } from './muscle-car.service';
import { MuscleCar } from '../models/muscle-car';

describe('MuscleCarService (CRUD)', () => {
  let service: MuscleCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuscleCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all cars from getCars()', (done) => {
    service.getCars().subscribe(cars => {
      expect(cars.length).toBeGreaterThan(0);
      expect(cars[0].make).toBeDefined();
      done();
    });
  });

  it('should return a single car by id', (done) => {
    service.getCarById(0).subscribe(car => {
      expect(car).toBeTruthy();
      expect(car?.make).toBeDefined();
      done();
    });
  });

  it('should add a new car when createCar() is called', (done) => {
    const newCar: MuscleCar = {
      make: 'Shelby',
      model: 'GT500',
      year: 1967,
      horsepower: 355,
      topSpeed: 120,
      isClassic: true,
      id: 0
    };

    service.createCar(newCar).subscribe(cars => {
      const found = cars.find(c => c.make === 'Shelby' && c.model === 'GT500');
      expect(found).toBeTruthy();
      done();
    });
  });

  it('should update an existing car when updateCar() is called', (done) => {
    const updated: MuscleCar = {
      make: 'Ford',
      model: 'Mustang Boss 429',
      year: 1969,
      horsepower: 400,
      topSpeed: 125,
      isClassic: true,
      id: 0
    };

    service.updateCar(updated).subscribe(cars => {
      const found = cars.find(c => c.make === 'Ford' && c.model === 'Mustang Boss 429');
      expect(found?.horsepower).toBe(400);
      done();
    });
  });

  it('should delete a car by id', (done) => {
    service.deleteCar(0).subscribe(removed => {
      expect(removed).toBeTruthy();
      expect(removed?.make).toBeDefined();
      done();
    });
  });
});
