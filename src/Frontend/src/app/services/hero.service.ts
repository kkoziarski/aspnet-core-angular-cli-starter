import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { BaseService } from './base.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';

import { Hero } from '../heroes/hero';

@Injectable()
export class HeroService extends BaseService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: Http) {
      super();
  }

  getHeroes(): Observable<Hero[]> {
    return this.http
        .get(this.heroesUrl)
        .map(resp => this.extractData<Hero[]>(resp))
        .catch(this.handleError);
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .map(resp => this.extractData<Hero>(resp))
      .catch(this.handleError);
  }

  delete(id: number): Observable<Response> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http
      .delete(url, {headers: this.headers})
      .catch(this.handleError);
  }

  create(name: string): Observable<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .map(resp => this.extractData<Hero>(resp))
      .catch(this.handleError);
  }

  update(hero: Hero): Observable<any> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .catch(this.handleError);
  }

  // private handleErrorX(error: any): Promise<any> {
  //   console.error('An error occurred', error); // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }
}
