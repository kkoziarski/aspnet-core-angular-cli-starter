import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import { CommonModule } from '@angular/common';
import './rxjs-extensions';
import { AdalService, OAuthData, AuthHttp } from 'ng2-adal/core';

import { AdalConfigService } from './services/adal-config.service';
import { AuthService } from './services/auth.service';
import { AuthenticationGuard } from './services/authentication.guard';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

import { ScratchpadComponent } from './scratchpad/scratchpad.component';
import { DataService } from './services/dataService';
import { Configuration } from './app.constants';

import { HeroesModule } from './heroes/heroes.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        HeroesModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ScratchpadComponent,
        AuthCallbackComponent,
        UnauthorizedComponent
    ],
    providers: [
        DataService,
        Configuration,
        AuthService,
        AdalConfigService,
        AuthenticationGuard,
        AdalService,
        AuthHttp
    ],
    entryComponents: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
