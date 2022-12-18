import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../interface/hero';
import { HeroesService } from '../service/heroes.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  items!: Hero[];

  itemId!: number;

  text!: string;

  constructor(
    private route: ActivatedRoute,
    private heoresService: HeroesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.itemId = +param['id'];
    });

    this.heoresService
      .getHeores()
      .subscribe(
        (heores) =>
          (this.items = heores.filter((item) => item.id === this.itemId))
      );

    this.text = this.items[0].name;
  }

  onUpdate(id: number, text: string) {
    this.heoresService.updateHeores(id, text).subscribe();
  }
}
