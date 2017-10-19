import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../environments/environment';
import { Cv, Header, Job } from './cv';

@Injectable()
export class CvService {
  private cache: Cv;

  constructor(private http: Http) { }

  getHeader(): Observable<Header> {
    return this.getCv().map(cv => cv.header);
  }

  getRecentJob(): Observable<Job> {
    return this.getCv().map(cv => cv.recentJob);
  }

  private getCv(): Observable<Cv> {
    if (this.cache) {
      return Observable.of(this.cache);
    } else {
      return this.http
        .get(environment.apiUrl + 'cv.json')
        .map((response: Response) => response.json())
        .do((cv: Cv) => this.cache = cv);
    }
  }
}
