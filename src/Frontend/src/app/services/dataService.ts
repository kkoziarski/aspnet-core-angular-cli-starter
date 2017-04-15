import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../app.constants';

import 'rxjs/add/operator/map';

import { BaseService } from "./base.service";

@Injectable()
export class DataService extends BaseService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {
        super();

        this.actionUrl = _configuration.ServerWithApiUrl + 'values/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetAll = (): Observable<any> => {
        return this._http
            .get(this.actionUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public GetSingle = (id: number): Observable<Response> => {
        return this._http
            .get(this.actionUrl + id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public Add = (itemName: string): Observable<Response> => {
        const toAdd = JSON.stringify({ ItemName: itemName });

        return this._http
            .post(this.actionUrl, toAdd, { headers: this.headers })
            .map(res => this.extractData(res))
            .catch(this.handleError);
    }

    public Update = (id: number, itemToUpdate: any): Observable<Response> => {
        return this._http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers })
            .map(res => this.extractData(res))
            .catch(this.handleError);
    }

    public Delete = (id: number): Observable<Response> => {
        return this._http
            .delete(this.actionUrl + id)
            .catch(this.handleError);
    }
}
