import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

import { AdalService } from 'ng2-adal/core';
import { AdalConfigService } from './services/adal-config.service';

@Component({
    selector: 'app-root-ngnco',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    title = 'Hello from AppComponent';
    copyYear: number;

    constructor(
        private adalService: AdalService,
        private adalConfigService: AdalConfigService,
        private router: Router
    ) {
        const today = new Date();
        this.copyYear = today.getFullYear();

        this.adalService.init(this.adalConfigService.adalConfig);
        this.adalService.handleWindowCallback();
    }

    public logIn() {
        this.adalService.login();
    }
}
