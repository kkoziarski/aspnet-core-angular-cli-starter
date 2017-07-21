import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Hero } from '../heroes/hero';
import { BaseService } from './base.service';

@Injectable()
export class HeroSearchService extends BaseService {

  constructor(private http: Http) {
    super();
  }

  search(term: string): Observable<Hero[]> {
    return this.http
      .get(`api/heroes/search/?name=${term}`)
      .map(resp => this.extractData<Hero[]>(resp))
      .catch(this.handleError);
  }
}
