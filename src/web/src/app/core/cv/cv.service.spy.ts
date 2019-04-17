import { of } from 'rxjs';

import { cvFake } from './cv.fake';
import { CvService } from './cv.service';

const cvServiceSpy = jasmine.createSpyObj<CvService>('CvService', {
  'getHeader': of(cvFake.header),
  'getSkills': of(cvFake.skills),
  'getRecentJob': of(cvFake.recentJob),
  'getPastJobs': of(cvFake.pastJobs),
  'getNotableProjects': of(cvFake.notableProjects),
  'getEducation': of(cvFake.education)
});

export { cvServiceSpy };
