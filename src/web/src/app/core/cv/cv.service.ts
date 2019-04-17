import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Cv, Education, Header, Job, ProjectsByCompany, Skill } from './cv';

@Injectable()
export class CvService {
  private cache: Subject<Cv>;

  constructor(private http: HttpClient) { }

  getHeader(): Observable<Header> {
    return this.getCv().pipe(map(cv => cv.header));
  }

  getSkills(): Observable<Skill[]> {
    return this.getCv().pipe(map(cv => cv.skills));
  }

  getRecentJob(): Observable<Job> {
    return this.getCv().pipe(map(cv => cv.recentJob));
  }

  getPastJobs(): Observable<Job[]> {
    return this.getCv().pipe(map(cv => cv.pastJobs));
  }

  getNotableProjects(): Observable<ProjectsByCompany[]> {
    return this.getCv().pipe(map(cv => cv.notableProjects));
  }

  getEducation(): Observable<Education[]> {
    return this.getCv().pipe(map(cv => cv.education));
  }

  getCv(): Observable<Cv> {
    if (this.cache) {
      return this.cache;
    } else {
      this.cache = new Subject<Cv>();
      return <Observable<Cv>>this.http
        .get(environment.apiUrl + 'cv')
        .pipe(tap((cv: Cv) => this.cache.next(cv)));
    }
  }
}
