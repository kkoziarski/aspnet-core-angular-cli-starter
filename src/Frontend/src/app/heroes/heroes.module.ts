import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeroService } from '../services/hero.service';

import { HeroesComponent } from './heroes.component';
import { HeroesListComponent } from './heroes-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesDashboardComponent } from './heroes-dashboard.component';
import { HeroSearchComponent } from './hero-search.component';

import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HeroesRoutingModule
    ],
    exports: [],
    declarations: [
        HeroesComponent,
        HeroesListComponent,
        HeroDetailComponent,
        HeroesDashboardComponent,
        HeroSearchComponent
    ],
    providers: [
        HeroService
    ],
})
export class HeroesModule { }
