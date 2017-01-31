import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { HeroSearchService } from '../services/hero-search.service';
import { Hero } from './hero';

@Component({
  selector: 'ngnco-hero-search',
  templateUrl: 'hero-search.component.html',
  styleUrls: ['hero-search.component.less'],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  isEmptyHeroes = true;
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router) {
    this.isEmptyHeroes = true;
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => {   // switch to new observable each time
        if (term) {
          return this.heroSearchService.search(term);
        }
        else {
          return Observable.of<Hero[]>([]);
        }
      })
      .catch(error => {
        // TODO: real error handling
        return Observable.of<Hero[]>([]);
      });

    this.heroes.subscribe((heroes: Hero[]) => {
        this.isEmptyHeroes = heroes.length === 0;
    });
  }

  gotoDetail(hero: Hero): void {
    let link = ['/heroes', hero.id];
    this.router.navigate(link);
  }
}
