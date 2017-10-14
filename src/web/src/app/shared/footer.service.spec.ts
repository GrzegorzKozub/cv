import { async, getTestBed, inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http, RequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { Footer } from './footer';
import { FooterService } from './footer.service';

describe('FooterService', () => {
  let connections: number;
  let lastConnection: MockConnection;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ConnectionBackend, useClass: MockBackend },
        { provide: RequestOptions, useClass: BaseRequestOptions },
        Http,
        FooterService
      ]
    });

    connections = 0;
    lastConnection = undefined;

    const mockBackend = getTestBed().get(ConnectionBackend) as MockBackend;
    mockBackend.connections.subscribe((connection: MockConnection) => {
      connections++;
      lastConnection = connection;
      lastConnection.mockRespond(new Response(new ResponseOptions({
        body: <Footer>{}
      })));
    });
  });

  it('should create', inject([FooterService], (service: FooterService) => {
    expect(service).toBeTruthy();
  }));

  describe('getFooter', () => {
    it('should fetch data only when no cache', async(inject([FooterService], (service: FooterService) => {
      expect(connections).toEqual(0);
      expect(lastConnection).toBeUndefined();
      service.getFooter().subscribe(() => {
        expect(connections).toEqual(1);
        service.getFooter().subscribe(() => {
          expect(connections).toEqual(1);
          expect(lastConnection).toBeDefined();
          expect(lastConnection.request.url).toEqual('/assets/footer.json');
        });
      });
    })));

    it('should return footer', async(inject([FooterService], (service: FooterService) => {
      service.getFooter().subscribe((footer) => {
        expect(footer).toBeDefined();
      });
    })));
  });
});
