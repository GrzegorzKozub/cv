import { async, getTestBed, inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http, RequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { environment } from '../../environments/environment';
import { CvService } from './cv.service';
import { testCv } from './test-data';

describe('CvService', () => {
  let connections: number;
  let lastConnection: MockConnection;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ConnectionBackend, useClass: MockBackend },
        { provide: RequestOptions, useClass: BaseRequestOptions },
        Http,
        CvService
      ]
    });

    connections = 0;
    lastConnection = undefined;

    const mockBackend = getTestBed().get(ConnectionBackend) as MockBackend;
    mockBackend.connections.subscribe((connection: MockConnection) => {
      connections++;
      lastConnection = connection;
      lastConnection.mockRespond(new Response(new ResponseOptions({
        body: testCv
      })));
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

  describe('getCv', () => {
    it('should fetch data only when no cache', async(inject([CvService], (service: CvService) => {
      expect(connections).toEqual(0);
      expect(lastConnection).toBeUndefined();
      service.getCv().subscribe(() => {
        expect(connections).toEqual(1);
        service.getCv().subscribe(() => {
          expect(connections).toEqual(1);
          expect(lastConnection).toBeDefined();
          expect(lastConnection.request.url).toEqual(environment.apiUrl + 'cv.json');
        });
      });
    })));
  });
});
