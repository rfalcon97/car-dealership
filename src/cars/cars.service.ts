import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brend: 'BMW',
      model: 'X5',
    },
    {
      id: uuid(),
      brend: 'Mercedes',
      model: 'G-Class',
    },
    {
      id: uuid(),
      brend: 'Audi',
      model: 'Q7',
    },
    {
      id: uuid(),
      brend: 'Toyota',
      model: 'Land Cruiser',
    },
    {
      id: uuid(),
      brend: 'Lexus',
      model: 'LX570',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }

  createCar() {}
}
