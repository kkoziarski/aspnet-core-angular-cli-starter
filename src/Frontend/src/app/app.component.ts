import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

import { AdalService } from 'ng2-adal/core';
import { AdalConfigService } from './services/adal-config.service';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root-ngnco',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    title = 'Hello from AppComponent';
    copyYear: number;
    _user: any;
    isLoggedIn: boolean;


    constructor(
        private adalService: AdalService,
        private adalConfigService: AdalConfigService,
        private authService: AuthService,
        private router: Router
    ) {
        this.isLoggedIn = false;
        const today = new Date();
        this.copyYear = today.getFullYear();

        this.adalService.init(this.adalConfigService.adalConfig);
        this.adalService.handleWindowCallback();
    }

    ngOnInit() {
        this.authService.userLoadededEvent
            .subscribe(user => {
                this._user = user;
                this.isLoggedIn = this.authService.loggedIn;
            });
        this.authService.getUser();
    }

    public logIn() {
        this.adalService.login();
        return false;
    }
    
    public logOut() {
        this.adalService.logOut();
        return false;
    }
}
