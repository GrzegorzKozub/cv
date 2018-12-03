import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { environment } from '../../../environments/environment';
import { cvFake } from './cv.fake';
import { CvService } from './cv.service';

describe('CvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CvService]
    });
  });

  it('should create', inject([CvService], (service: CvService) => {
    expect(service).toBeTruthy();
  }));

  describe('http', () => {
    describe('getHeader', () => {
      it('should return header', inject([CvService], (service: CvService) => {
        service.getHeader().subscribe(actual => expect(actual).toEqual(cvFake.header));
      }));

      it('should use cache', inject([CvService], (service: CvService) => {
        service.getHeader().subscribe();
        service.getHeader().subscribe();
        expect().nothing();
      }));
    });

    describe('getRecentJob', () => {
      it('should return recent job', inject([CvService], (service: CvService) => {
        service.getRecentJob().subscribe(actual => expect(actual).toEqual(cvFake.recentJob));
      }));

      it('should use cache', inject([CvService], (service: CvService) => {
        service.getRecentJob().subscribe();
        service.getRecentJob().subscribe();
        expect().nothing();
      }));
    });

    describe('getPastJobs', () => {
      it('should return past jobs', inject([CvService], (service: CvService) => {
        service.getPastJobs().subscribe(actual => expect(actual).toEqual(cvFake.pastJobs));
      }));

      it('should use cache', inject([CvService], (service: CvService) => {
        service.getPastJobs().subscribe();
        service.getPastJobs().subscribe();
        expect().nothing();
      }));
    });

    describe('getNotableProjects', () => {
      it('should return notable projects', inject([CvService], (service: CvService) => {
        service.getNotableProjects().subscribe(actual => expect(actual).toEqual(cvFake.notableProjects));
      }));

      it('should use cache', inject([CvService], (service: CvService) => {
        service.getNotableProjects().subscribe();
        service.getNotableProjects().subscribe();
        expect().nothing();
      }));
    });

    describe('getSkills', () => {
      it('should return skills', inject([CvService], (service: CvService) => {
        service.getSkills().subscribe(actual => expect(actual).toEqual(cvFake.skills));
      }));

      it('should use cache', inject([CvService], (service: CvService) => {
        service.getSkills().subscribe();
        service.getSkills().subscribe();
        expect().nothing();
      }));
    });

    describe('getEducation', () => {
      it('should return education', inject([CvService], (service: CvService) => {
        service.getEducation().subscribe(actual => expect(actual).toEqual(cvFake.education));
      }));

      it('should use cache', inject([CvService], (service: CvService) => {
        service.getEducation().subscribe();
        service.getEducation().subscribe();
        expect().nothing();
      }));
    });

    afterEach(inject([HttpTestingController], (http: HttpTestingController) => {
      http.expectOne(environment.apiUrl + 'cv').flush(cvFake);
      http.verify();
    }));
  });
});
