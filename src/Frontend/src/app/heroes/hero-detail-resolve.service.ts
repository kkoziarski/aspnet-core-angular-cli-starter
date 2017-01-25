import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from '../services/hero.service';

@Injectable()
export class HeroDetailResolve implements Resolve<Hero> {
    constructor(private heroService: HeroService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Promise<Hero> {
        let id = route.params['id'];
        return this.heroService
            .getHero(id)
            .then(hero => {
                if (hero) {
                    return hero;
                } else { // id not found
                    this.router.navigate(['/heroes']);
                    return null;
                }
            });
    }
}
