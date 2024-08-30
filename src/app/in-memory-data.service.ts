import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Матичак Петро Євгенович' },
      { id: 13, name: 'Матичак Андрій Петрович' },
      { id: 14, name: 'Фуштор Владислав Миколайович' },
      { id: 15, name: 'Сидоренко Михайло Васильович' },
      { id: 16, name: 'Коваленко Юрій Сергійович' },
      { id: 17, name: 'Захарченко Ірина Олександрівна' },
      { id: 18, name: 'Мельник Вікторія Олексіївна' },
      { id: 19, name: 'Дорошенко Тарас Володимирович' },
      { id: 20, name: 'Гаврилюк Ольга Іванівна' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}