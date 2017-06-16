import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from '../auth/services/oidc.security.service';

@Component({
    selector: 'app-ngnco-home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

    public message: string;

    constructor(public securityService: OidcSecurityService) {
        this.message = 'Hello from HomeComponent ctor';
    }

    ngOnInit(): void {
    }

    public Login() {
        console.log('Do login logic');
        this.securityService.Authorize();
    }

    public Logout() {
        console.log('Do logout logic');
        this.securityService.Logoff();
    }
}
