export interface MuscleCar {
  id: number;
  make: string;
  model: string;
  year: number;
  horsepower: number;
  topSpeed: number;
  isClassic?: boolean;
  image?: string;
  addedDate?: Date;
  price?: number;
}
