import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from '../heroes/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'ngnco-lazy-hero-detail',
  template: `
    <h2>Lazy {{hero.name}} details!</h2>
  `,
  styles: [`
    label {
      color: #607D8B;
      font-weight: bold;
    }
  `]
})
export class LazyHeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { hero: Hero }) => {
        this.hero = data.hero;
      });
  }

  goBack(): void {
    window.history.back();
  }
}
