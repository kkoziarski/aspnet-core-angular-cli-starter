import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import './rxjs-extensions';
import { AdalService, OAuthData } from 'ng2-adal/dist/core';

import { AdalConfigService } from './services/adal-config.service';
import { AuthService } from './services/auth.service';
import { AuthenticationGuard } from './services/authentication.guard';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ScratchpadComponent } from './scratchpad/scratchpad.component';
import { RestrictedComponent } from './restricted/restricted.component';

import { ValuesService } from './services/values.service';

import { HeroesModule } from './heroes/heroes.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        HeroesModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ScratchpadComponent,
        AuthCallbackComponent,
        UnauthorizedComponent,
        RestrictedComponent
    ],
    providers: [
        ValuesService,
        AuthService,
        AdalConfigService,
        AuthenticationGuard,
        AdalService
    ],
    entryComponents: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
