import { InjectionToken } from '@angular/core';

export const TITLE = new InjectionToken<string>('title');

import { Component, OnInit, Inject } from '@angular/core';

@Component({
    selector: 'app-ngnco-home',
    templateUrl: 'home.component.html',
    providers: [
        { provide: TITLE, useValue: 'Hello from HomeComponent title' },
    ]
})

export class HomeComponent implements OnInit {

    constructor(@Inject(TITLE) public message: string) {
    }

    ngOnInit(): void {
    }
}
