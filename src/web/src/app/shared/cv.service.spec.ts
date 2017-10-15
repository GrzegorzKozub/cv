import { async, getTestBed, inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http, RequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { environment } from '../../environments/environment';
import { Cv, Header } from './cv';
import { CvService } from './cv.service';

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
        body: <Cv>{ header: <Header>{} }
      })));
    });
  });

  it('should create', inject([CvService], (service: CvService) => {
    expect(service).toBeTruthy();
  }));

  describe('getHeader', () => {
    it('should fetch data only when no cache', async(inject([CvService], (service: CvService) => {
      expect(connections).toEqual(0);
      expect(lastConnection).toBeUndefined();
      service.getHeader().subscribe(() => {
        expect(connections).toEqual(1);
        service.getHeader().subscribe(() => {
          expect(connections).toEqual(1);
          expect(lastConnection).toBeDefined();
          expect(lastConnection.request.url).toEqual(environment.apiUrl + 'cv.json');
        });
      });
    })));

    it('should return header', async(inject([CvService], (service: CvService) => {
      service.getHeader().subscribe((header) => {
        expect(header).toBeDefined();
      });
    })));
  });
});
