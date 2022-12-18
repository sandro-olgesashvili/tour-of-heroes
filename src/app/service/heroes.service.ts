import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { HEROES } from '../data/data';
import { Hero } from '../interface/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor() {}

  heroes: Observable<Hero[]> = of(HEROES);

  getHeores(): Observable<Hero[]> {
    return this.heroes;
  }

  updateHeores(id: number, text: string): Observable<Hero[]> {
    return this.heroes = this.heroes.pipe(
      map(items => items.map(item => item.id === id ? {...item, name:text} : item)
    ))
  }
}
