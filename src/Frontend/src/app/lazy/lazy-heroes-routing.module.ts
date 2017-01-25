import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LazyHeroesComponent } from './lazy-heroes.component';
import { LazyHeroesListComponent } from './lazy-heroes-list.component';
import { LazyHeroDetailComponent } from './lazy-hero-detail.component';

import { LazyHeroDetailResolve } from './lazy-hero-detail-resolve.service';

const heroesRoutes: Routes = [
    {
        path: '',
        component: LazyHeroesComponent,
        children: [
            {
                path: '',
                component: LazyHeroesListComponent
            },
            {
                path: ':id',
                component: LazyHeroDetailComponent,
                resolve: {
                    hero: LazyHeroDetailResolve
                }
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(heroesRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        LazyHeroDetailResolve
    ]
})
export class LazyHeroesRoutingModule { }
