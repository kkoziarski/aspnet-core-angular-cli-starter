import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ScratchpadComponent } from './scratchpad/scratchpad.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { RestrictedComponent } from './restricted/restricted.component';

import { AuthService } from './services/auth.service';
import { AuthenticationGuard } from './services/authentication.guard';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'scratchpad',
    component: ScratchpadComponent
  },
  {
    path: 'lazy-heroes',
    loadChildren: 'app/lazy/lazy-heroes.module#LazyHeroesModule'
  },
  {
    path: 'auth-callback',
    component: AuthCallbackComponent
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent
  },
  {
    path: 'restricted',
    component: RestrictedComponent,
    canActivate: [ AuthenticationGuard ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
