import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'BMW',
    model: 'X5',
  },
  {
    id: uuid(),
    brand: 'Mercedes',
    model: 'G-Class',
  },
  {
    id: uuid(),
    brand: 'Audi',
    model: 'Q7',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Land Cruiser',
  },
  {
    id: uuid(),
    brand: 'Lexus',
    model: 'LX570',
  },
];
