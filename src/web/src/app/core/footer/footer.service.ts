import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs/Rx';

import { environment } from '../../../environments/environment';
import { Footer } from './footer';
import { Page } from './page';

@Injectable()
export class FooterService {
  private cache: Subject<Footer>;

  constructor(private activatedRoute: ActivatedRoute, private http: Http) { }

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
      return this.http
        .get(environment.apiUrl + 'footer.json')
        .map((response: Response) => response.json())
        .do((footer: Footer) => this.cache.next(footer));
    }
  }
}
