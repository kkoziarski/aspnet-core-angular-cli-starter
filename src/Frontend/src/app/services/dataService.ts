import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../app.constants';
import { OidcSecurityService } from '../auth/services/oidc.security.service';

import 'rxjs/add/operator/map';

import { BaseService } from "./base.service";

@Injectable()
export class DataService extends BaseService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration, private _securityService: OidcSecurityService) {
        super();

        this.actionUrl = _configuration.ServerWithApiUrl + 'values/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }


    private setHeaders() {

        console.log('setHeaders started');

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');

        let token = this._securityService.GetToken();
        if (token && token !== '') {
            let tokenValue = 'Bearer ' + token;
            console.log('tokenValue:' + tokenValue);
            this.headers.append('Authorization', tokenValue);
        }
    }   

    public GetAll = (): Observable<any> => {
        // this.setHeaders();        
        let options = new RequestOptions({ headers: this.headers, body: '' });
        return this._http
            .get(this.actionUrl, options)
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
