import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-ngnco-heroes',
  templateUrl: 'heroes-list.component.html',
  styleUrls:  ['heroes-list.component.less']
})
export class HeroesListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router) { }

  getHeroes(): void {
    this.heroService
        .getHeroes()
        .subscribe(heroes => this.heroes = heroes,
        error => console.log(error));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }

    this.heroService.create(name)
      .subscribe(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      },
      error => console.log(error));
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .subscribe(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        },
        error => console.log(error));
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/heroes', this.selectedHero.id]);
  }
}
