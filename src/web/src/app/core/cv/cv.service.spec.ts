import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, inject, TestBed } from '@angular/core/testing';

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

  describe('getHeader', () => {
    it('should return header', async(inject([CvService], (service: CvService) => {
      service.getHeader().subscribe(header => expect(header).toBeDefined());
    })));
  });

  describe('getRecentJob', () => {
    it('should return recent job', async(inject([CvService], (service: CvService) => {
      service.getRecentJob().subscribe(recentJob => expect(recentJob).toBeDefined());
    })));
  });

  describe('getPastJobs', () => {
    it('should return past jobs', async(inject([CvService], (service: CvService) => {
      service.getPastJobs().subscribe(pastJobs => expect(pastJobs).toBeDefined());
    })));
  });

  describe('getNotableProjects', () => {
    it('should return notable projects', async(inject([CvService], (service: CvService) => {
      service.getNotableProjects().subscribe(notableProjects => expect(notableProjects).toBeDefined());
    })));
  });

  describe('getSkills', () => {
    it('should return skills', async(inject([CvService], (service: CvService) => {
      service.getSkills().subscribe(skills => expect(skills).toBeDefined());
    })));
  });

  describe('getEducation', () => {
    it('should return education', async(inject([CvService], (service: CvService) => {
      service.getEducation().subscribe(education => expect(education).toBeDefined());
    })));
  });
});
