import { Component } from '@angular/core';

@Component({
    selector: 'app-root-ngnco',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    title = 'Hello from AppComponent';
    copyYear: number;

    constructor() {
        const today = new Date();
        this.copyYear = today.getFullYear();
    }
}
