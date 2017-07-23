import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';

import { Hero } from '../heroes/hero';
import { BaseService } from './base.service';

@Injectable()
export class HeroSearchService extends BaseService {

  private heroesUrl = `${environment.backend_server_url}/api/heroes`;  // URL to web api

  constructor(private http: Http) {
    super();
  }

  search(term: string): Observable<Hero[]> {
    return this.http
      .get(`${this.heroesUrl}/search/?name=${term}`)
      .map(resp => this.extractData<Hero[]>(resp))
      .catch(this.handleError);
  }
}
