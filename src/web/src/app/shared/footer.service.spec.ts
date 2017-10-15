import { async, getTestBed, inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http, RequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs/Rx';

import { environment } from '../../environments/environment';
import { Footer } from './footer';
import { FooterService } from './footer.service';

describe('FooterService', () => {
  let queryParams: Subject<Params>;
  let connections: number;
  let lastConnection: MockConnection;

  beforeEach(() => {
    queryParams = new Subject<Params>();

    TestBed.configureTestingModule({
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { queryParams: queryParams } }
        },
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

  describe('getPage', () => {
    it('should set page number', inject([FooterService], (service: FooterService) => {
      const pageNumber = 3;
      queryParams['page'] = pageNumber;
      expect(service.getPage().number).toEqual(pageNumber);
    }));

    for (const data of [
      { page: 3, topage: 5, last: false },
      { page: 5, topage: 5, last: true }
    ]) {
      it(`should set last to ${data.last}`, inject([FooterService], (service: FooterService) => {
        queryParams['page'] = data.page;
        queryParams['topage'] = data.topage;
        expect(service.getPage().last).toEqual(data.last);
      }));
    }
  });

  describe('getFooter', () => {
    it('should fetch data only when no cache', async(inject([FooterService], (service: FooterService) => {
      expect(connections).toEqual(0);
      expect(lastConnection).toBeUndefined();
      service.getFooter().subscribe(() => {
        expect(connections).toEqual(1);
        service.getFooter().subscribe(() => {
          expect(connections).toEqual(1);
          expect(lastConnection).toBeDefined();
          expect(lastConnection.request.url).toEqual(environment.apiUrl + 'footer.json');
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
