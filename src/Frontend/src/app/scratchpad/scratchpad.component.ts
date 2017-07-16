import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValuesService } from '../services/values.service';

@Component({
    selector: 'app-ngnco-scratchpad',
    templateUrl: 'scratchpad.component.html',
    styleUrls:  ['scratchpad.component.less'],
    providers: [
        ValuesService
    ]
})

export class ScratchpadComponent implements OnInit {

    public message: string;
    public values: any[];

    constructor(
        private router: Router,
        private valuesService: ValuesService
        ) {

        this.values = [];
        this.message = 'Hello from ScratchpadComponent ctor';
    }

    ngOnInit(): void {
        this.valuesService
        .GetAll()
        .subscribe(data => this.values = data,
                error => console.log(error),
                () => console.log('Get all complete'));
    }
}
