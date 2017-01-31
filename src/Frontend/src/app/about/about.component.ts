import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ngnco-about',
    templateUrl: 'about.component.html'
})

export class AboutComponent implements OnInit {

    public message: string;

    constructor() {
        this.message = 'Hello from AboutComponent ctor';
    }

    ngOnInit(): void {
    }
}
