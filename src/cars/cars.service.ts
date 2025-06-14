import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { updateCarDto } from './dto/update-car.dto';
@Injectable()
export class CarsService {
  private cars: Car[] = [
    /*  {
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
    }, */
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(car);
    return car;
  }

  update(id: string, updateCarDto: updateCarDto) {
    let carDB = this.findOneById(id);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...updateCarDto,
          id,
        };
        return carDB;
      }
      return car;
    });

    return carDB;
  }

  delete(id: string) {
    const car = this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }
  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
