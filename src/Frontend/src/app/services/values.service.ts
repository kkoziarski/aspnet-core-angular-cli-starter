import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

import { BaseService } from './base.service';

@Injectable()
export class ValuesService extends BaseService {

    private actionUrl: string;
    private headers: HttpHeaders;

    constructor(private _http: HttpClient) {
        super();

        this.actionUrl = `${environment.backend_server_url}/api/values/`;

        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
        this.headers = this.headers.set('Accept', 'application/json');
    }

    public getAll = (): Observable<any> => {
        return this._http
            .get(this.actionUrl)
            .catch(this.handleError);
    }

    public getSingle = (id: number): Observable<HttpResponse<Object>> => {
        return this._http
            .get(this.actionUrl + id)
            .catch(this.handleError);
    }

    public add = (itemName: string): Observable<HttpResponse<Object>> => {
        const toAdd = JSON.stringify({ ItemName: itemName });

        return this._http
            .post(this.actionUrl, toAdd, { headers: this.headers })
            .catch(this.handleError);
    }

    public update = (id: number, itemToUpdate: any): Observable<Object> => {
        return this._http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers })
            // .map(res => this.extractData(res))
            .catch(this.handleError);
    }

    public delete = (id: number): Observable<Object> => {
        return this._http
            .delete(this.actionUrl + id)
            .catch(this.handleError);
    }
}
