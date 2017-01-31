import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeroService } from '../services/hero.service';
import { Configuration } from '../app.constants';

import { LazyHeroesComponent } from './lazy-heroes.component';
import { LazyHeroesListComponent } from './lazy-heroes-list.component';
import { LazyHeroDetailComponent } from './lazy-hero-detail.component';

import { LazyHeroesRoutingModule } from './lazy-heroes-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LazyHeroesRoutingModule
    ],
    exports: [],
    declarations: [
        LazyHeroesComponent,
        LazyHeroesListComponent,
        LazyHeroDetailComponent
    ],
    providers: [
        HeroService,
        Configuration
    ],
})
export class LazyHeroesModule { }
