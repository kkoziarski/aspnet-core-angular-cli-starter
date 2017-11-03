import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { AdalService } from 'ng2-adal/dist/core';

import { environment } from '../../environments/environment';

@Component({
    selector: 'app-restricted',
    templateUrl: 'restricted.component.html'
})

export class RestrictedComponent implements OnInit {
    public user: any;
    public apiValues: any;
    public isLoggedIn: boolean;
    public apiType: string;
    public message: string;

    constructor(
        private location: Location,
        private authService: AuthService,
        private adalService: AdalService) {

        this.apiType = 'secrets';
        this.message = 'Hello from RestrictedComponent';
    }

    ngOnInit() {
        this.authService.userLoadedEvent
            .subscribe(user => {
                this.user = user;
            });
        this.authService.isLoggedIn().subscribe(u => this.isLoggedIn = u);
    }

    clearCache() {
        this.authService.clearCache();
    }

    getUser() {
        this.authService.getUser();
    }

    callApi() {
        const url = `${environment.backend_server_url}/api/${this.apiType}`;
        this.authService
            .callApi(url)
            .subscribe(result => {
                this.apiValues = result;
            },
            error => console.log(error));
    }

    acquireToken() {
        this.authService.acquireToken()
            .subscribe(p => {
                console.log('Acquired token = ' + p);
                // then you could set Authorization Bearer header and call microsft graph api
            },
            (error => {
                console.log(error);
            }));
    }

    public logOut() {
        this.adalService.logOut();
    }
}
