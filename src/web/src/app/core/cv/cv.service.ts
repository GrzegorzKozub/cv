import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { environment } from '../../../environments/environment';
import { Cv, Education, Header, Job, ProjectsByCompany, SkillsByCategory } from './cv';

@Injectable()
export class CvService {
  private cache: Subject<Cv>;

  constructor(private http: HttpClient) { }

  getHeader(): Observable<Header> {
    return this.getCv().map(cv => cv.header);
  }

  getRecentJob(): Observable<Job> {
    return this.getCv().map(cv => cv.recentJob);
  }

  getPastJobs(): Observable<Job[]> {
    return this.getCv().map(cv => cv.pastJobs);
  }

  getNotableProjects(): Observable<ProjectsByCompany[]> {
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
      return this.cache;
    } else {
      this.cache = new Subject<Cv>();
      return <Observable<Cv>>this.http
        .get(environment.apiUrl + 'cv')
        .do((cv: Cv) => this.cache.next(cv));
    }
  }
}
