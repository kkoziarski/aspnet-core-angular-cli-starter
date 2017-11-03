import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first'

import { Hero } from './hero';
import { HeroService } from '../services/hero.service';

@Injectable()
export class HeroDetailResolve implements Resolve<any> {
    constructor(private heroService: HeroService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Hero> {
        const id = route.params['id'];
        return this.heroService
            .getHero(id)
            .map(hero => {
                if (hero && hero.id) {
                    return hero;
                } else { // id not found
                    this.router.navigate(['/heroes']);
                    return null;
                }
            })
            .first();
    }
}
