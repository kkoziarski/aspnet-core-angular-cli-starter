import { EventEmitter } from '@angular/core';
import { RequestOptions, ResponseOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import * as adalLib from 'adal-angular';
import User = adalLib.User;

export class AuthServiceStub {
  public userLoadedEvent: EventEmitter<User> = new EventEmitter<User>();
  public currentUser: User;
  public loggedIn = false;

  private createEmptyResponse(): Response {
    return new Response(new ResponseOptions({ body: '' }));
  }

  clearCache() { }

  getUser() { }

  isLoggedIn(): Observable<boolean> {
    return Observable.of(false);
  }

  acquireToken(): Observable<string> {
    return Observable.of('token stub');
  }

  callSecretApi(): Observable<Response> {
    return Observable.of(this.createEmptyResponse());
  }

  callClaimsApi(): Observable<Response> {
    return Observable.of(this.createEmptyResponse());
  }

  callValuesApi(): Observable<Response> {
    return Observable.of(this.createEmptyResponse());
  }

  callApi(url: string): Observable<Response> {
    return Observable.of(this.createEmptyResponse());
  }

  authGet(url: string, options?: RequestOptions): Observable<Response> {
    return Observable.of(this.createEmptyResponse());
  }

  authPut(url: string, data: any, options?: RequestOptions): Observable<Response> {
    return Observable.of(this.createEmptyResponse());
  }

  authDelete(url: string, options?: RequestOptions): Observable<Response> {
    return Observable.of(this.createEmptyResponse());
  }

  authPost(url: string, data: any, options?: RequestOptions): Observable<Response> {
    return Observable.of(this.createEmptyResponse());
  }
}
