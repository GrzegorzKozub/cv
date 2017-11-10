import { Observable } from 'rxjs/Rx';

import { cvFake } from './cv.fake';
import { CvService } from './cv.service';
import { footerFake } from './footer.fake';
import { FooterService } from './footer.service';
import { pageFake } from './page.fake';

const testCvService = jasmine.createSpyObj<CvService>('CvService', {
  'getHeader': Observable.of(cvFake.header),
  'getRecentJob': Observable.of(cvFake.recentJob),
  'getPastJobs': Observable.of(cvFake.pastJobs),
  'getNotableProjects': Observable.of(cvFake.notableProjects),
  'getSkills': Observable.of(cvFake.skills),
  'getEducation': Observable.of(cvFake.education)
});

const testFooterService = jasmine.createSpyObj<FooterService>('FooterService', {
  'getPage': pageFake,
  'getFooter': Observable.of(footerFake)
});

export { testCvService, testFooterService };
