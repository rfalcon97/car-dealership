import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brend: 'BMW',
      model: 'X5',
    },
    {
      id: 2,
      brend: 'Mercedes',
      model: 'G-Class',
    },
    {
      id: 3,
      brend: 'Audi',
      model: 'Q7',
    },
    {
      id: 4,
      brend: 'Toyota',
      model: 'Land Cruiser',
    },
    {
      id: 5,
      brend: 'Lexus',
      model: 'LX570',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }
  
  createCar(){

  }
}
