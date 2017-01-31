import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Hero }        from './hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'ngnco-heroes-dashboard',
  templateUrl: 'heroes-dashboard.component.html',
  styleUrls: ['heroes-dashboard.component.less']
})
export class HeroesDashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero): void {
    let link = ['/heroes', hero.id];
    this.router.navigate(link);
  }
}
