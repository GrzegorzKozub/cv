import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { environment } from '../../../environments/environment';
import { Footer } from './footer';
import { Page } from './page';

@Injectable()
export class FooterService {
  private cache: Subject<Footer>;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  getPage(): Page {
    const params = this.activatedRoute.snapshot.queryParams;
    return <Page>{
      number: params.page,
      last: params.page && params.topage && params.page === params.topage,
      version: environment.version
    };
  }

  getFooter(): Observable<Footer> {
    if (this.cache) {
      return this.cache;
    } else {
      this.cache = new Subject<Footer>();
      return <Observable<Footer>>this.http
        .get(environment.apiUrl + 'footer')
        .do((footer: Footer) => this.cache.next(footer));
    }
  }
}
