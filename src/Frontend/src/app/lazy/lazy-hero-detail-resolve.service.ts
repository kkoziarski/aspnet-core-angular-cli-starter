import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Hero } from '../heroes/hero';
import { HeroService } from '../services/hero.service';

@Injectable()
export class LazyHeroDetailResolve implements Resolve<any> {
    constructor(private heroService: HeroService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> | boolean {
        const id = route.params['id'];
        return this.heroService
            .getHero(id)
            .map(hero => {
                if (hero && hero.id) {
                    return hero;
                } else { // id not found
                    this.router.navigate(['/lazy-heroes']);
                    return false;
                }
            })
            .first();
    }
}
