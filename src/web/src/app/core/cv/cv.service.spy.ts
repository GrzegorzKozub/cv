import 'rxjs/add/observable/of';

import { Observable } from 'rxjs/Observable';

import { cvFake } from './cv.fake';
import { CvService } from './cv.service';

const cvServiceSpy = jasmine.createSpyObj<CvService>('CvService', {
  'getHeader': Observable.of(cvFake.header),
  'getRecentJob': Observable.of(cvFake.recentJob),
  'getPastJobs': Observable.of(cvFake.pastJobs),
  'getNotableProjects': Observable.of(cvFake.notableProjects),
  'getSkills': Observable.of(cvFake.skills),
  'getEducation': Observable.of(cvFake.education)
});

export { cvServiceSpy };
