import { Observable } from 'rxjs/Rx';

import { CvService } from './cv.service';
import { FooterService } from './footer.service';
import { testCv, testFooter, testPage } from './test-data';

const testCvService = jasmine.createSpyObj<CvService>('CvService', {
  'getHeader': Observable.of(testCv.header),
  'getRecentJob': Observable.of(testCv.recentJob),
  'getPastJobs': Observable.of(testCv.pastJobs),
  'getNotableProjects': Observable.of(testCv.notableProjects)
});

const testFooterService = jasmine.createSpyObj<FooterService>('FooterService', {
  'getPage': testPage,
  'getFooter': Observable.of(testFooter)
});

export { testCvService, testFooterService };
