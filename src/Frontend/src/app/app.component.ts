import { Component }          from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ngnco-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    title = 'Hello from AppComponent';
    copyYear: number;

    constructor() {
        let today = new Date();
        this.copyYear = today.getFullYear();
    }
}
