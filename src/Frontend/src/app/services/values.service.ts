import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

import { BaseService } from './base.service';

@Injectable()
export class ValuesService extends BaseService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http) {
        super();

        this.actionUrl = `${environment.backend_server_url}/api/values/`;

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public getAll = (): Observable<any> => {
        const options = new RequestOptions({ headers: this.headers, body: '' });
        return this._http
            .get(this.actionUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public getSingle = (id: number): Observable<Response> => {
        return this._http
            .get(this.actionUrl + id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public add = (itemName: string): Observable<Response> => {
        const toAdd = JSON.stringify({ ItemName: itemName });

        return this._http
            .post(this.actionUrl, toAdd, { headers: this.headers })
            .map(res => this.extractData(res))
            .catch(this.handleError);
    }

    public update = (id: number, itemToUpdate: any): Observable<Response> => {
        return this._http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers })
            .map(res => this.extractData(res))
            .catch(this.handleError);
    }

    public delete = (id: number): Observable<Response> => {
        return this._http
            .delete(this.actionUrl + id)
            .catch(this.handleError);
    }
}
