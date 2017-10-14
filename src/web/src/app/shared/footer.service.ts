import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Footer } from './footer';

@Injectable()
export class FooterService {
  private cache: Footer;

  constructor(private http: Http) { }

  public getFooter(): Observable<Footer> {
    if (this.cache) {
      return Observable.of(this.cache);
    } else {
      return this.http
        .get('/assets/footer.json')
        .map((response: Response) => response.json())
        .do((footer: Footer) => this.cache = footer);
    }
  }
}
