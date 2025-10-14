import { TestBed } from '@angular/core/testing';
import { MuscleCarService } from './muscle-car.service';

describe('MuscleCarService', () => {
  let service: MuscleCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuscleCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
