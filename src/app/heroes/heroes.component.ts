import { Component, OnInit } from '@angular/core';
import { HEROES } from '../data/data';
import { Hero } from '../interface/hero';
import { HeroesService } from '../service/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  data!: Hero[];

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService.getHeores().subscribe((heroes) => (this.data = heroes));
  }
}
