import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../environments/environment';
import { Cv, Education, Header, Job, NotableProject, SkillsByCategory } from './cv';

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

  getPastJobs(): Observable<Job[]> {
    return this.getCv().map(cv => cv.pastJobs);
  }

  getNotableProjects(): Observable<NotableProject[]> {
    return this.getCv().map(cv => cv.notableProjects);
  }

  getSkills(): Observable<SkillsByCategory[]> {
    return this.getCv().map(cv => cv.skills);
  }

  getEducation(): Observable<Education[]> {
    return this.getCv().map(cv => cv.education);
  }

  getCv(): Observable<Cv> {
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
