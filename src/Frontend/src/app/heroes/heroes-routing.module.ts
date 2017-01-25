import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { HeroesListComponent } from './heroes-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesDashboardComponent } from './heroes-dashboard.component';

import { HeroDetailResolve } from './hero-detail-resolve.service';

const heroesRoutes: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent,
        children: [
            {
                path: '',
                component: HeroesListComponent
            },
            {
                path: 'dashboard',
                component: HeroesDashboardComponent
            },
            {
                path: ':id',
                component: HeroDetailComponent,
                resolve: {
                    hero: HeroDetailResolve
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
        HeroDetailResolve
    ]
})
export class HeroesRoutingModule { }
