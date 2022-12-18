import { Component, OnInit } from '@angular/core';
import { Hero } from '../interface/hero';
import { HeroesService } from '../service/heroes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  data!: Hero[];

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService
      .getHeores()
      .subscribe((heroes) => (this.data = heroes.slice(1, 5)));
  }
}
