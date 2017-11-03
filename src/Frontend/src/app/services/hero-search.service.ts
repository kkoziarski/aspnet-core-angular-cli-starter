import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';

import { Hero } from '../heroes/hero';
import { BaseService } from './base.service';

@Injectable()
export class HeroSearchService extends BaseService {

  private heroesUrl = `${environment.backend_server_url}/api/heroes`;  // URL to web api

  constructor(private http: HttpClient) {
    super();
  }

  search(term: string): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(`${this.heroesUrl}/search/?name=${term}`)
      .catch(this.handleError);
  }
}
