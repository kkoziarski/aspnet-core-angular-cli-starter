import { EventEmitter } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import * as adalLib from 'adal-angular';
import User = adalLib.User;

export class AuthServiceStub {
  public userLoadedEvent: EventEmitter<User> = new EventEmitter<User>();
  public currentUser: User;
  public loggedIn = false;

  private createEmptyResponse(): HttpResponse<Object> {
    return new HttpResponse({ body: '' });
  }

  clearCache() { }

  getUser() { }

  isLoggedIn(): Observable<boolean> {
    return Observable.of(false);
  }

  acquireToken(): Observable<string> {
    return Observable.of('token stub');
  }

  callSecretApi(): Observable<HttpResponse<Object>> {
    return Observable.of(this.createEmptyResponse());
  }

  callClaimsApi(): Observable<HttpResponse<Object>> {
    return Observable.of(this.createEmptyResponse());
  }

  callValuesApi(): Observable<HttpResponse<Object>> {
    return Observable.of(this.createEmptyResponse());
  }

  callApi(url: string): Observable<HttpResponse<Object>> {
    return Observable.of(this.createEmptyResponse());
  }

  authGet(url: string, headers?: HttpHeaders): Observable<HttpResponse<Object>> {
    return Observable.of(this.createEmptyResponse());
  }

  authPut(url: string, data: any, headers?: HttpHeaders): Observable<HttpResponse<Object>> {
    return Observable.of(this.createEmptyResponse());
  }

  authDelete(url: string, headers?: HttpHeaders): Observable<HttpResponse<Object>> {
    return Observable.of(this.createEmptyResponse());
  }

  authPost(url: string, data: any, headers?: HttpHeaders): Observable<HttpResponse<Object>> {
    return Observable.of(this.createEmptyResponse());
  }
}
