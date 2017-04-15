import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../heroes/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-ngnco-lazy-heroes',
  template: `
    <div class="row">
      <div class="col-md-12">
        <ul class="list-group heroes">
            <li class="list-group-item" *ngFor="let hero of heroes">
                <span class="badge pull-left">{{hero.id}}</span>
                <a [routerLink]="['/heroes', hero.id]">{{hero.name}}</a>
            </li>
        </ul>  
      </div>
    </div>
  `,
  styles: [`
  `]
})
export class LazyHeroesListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router) { }

  getHeroes(): void {
    this.heroService
        .getHeroes()
        .subscribe(
          heroes => this.heroes = heroes,
          error => console.log(error));
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
