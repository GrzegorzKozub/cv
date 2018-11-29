import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, inject, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';

import { FooterService } from './footer.service';

describe('FooterService', () => {
  let queryParams: Subject<Params>;

  beforeEach(() => {
    queryParams = new Subject<Params>();

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { queryParams: queryParams } }
        },
        FooterService
      ]
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
    it('should return footer', async(inject([FooterService], (service: FooterService) => {
      service.getFooter().subscribe(footer => expect(footer).toBeDefined());
    })));
  });
});
