import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subject } from 'rxjs/Rx';

import { Footer } from '../shared/footer';
import { FooterService } from '../shared/footer.service';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let footer: Footer;
  let footerService: FooterService;
  let queryParams: Subject<Params>;

  beforeEach(async(() => {
    queryParams = new Subject<Params>();
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        FooterService,
        {
          provide: ActivatedRoute,
          useValue: { queryParams: queryParams }
        }
      ],
      declarations: [FooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;

    footer = <Footer>{};
    Object.keys(footer).forEach(prop => footer[prop] = prop);

    footerService = fixture.debugElement.injector.get(FooterService);
    spyOn(footerService, 'getFooter')
      .and.returnValue(Observable.of(footer));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call getFooter', async(() => {
      fixture.whenStable().then(() => {
        expect(footerService.getFooter).toHaveBeenCalled();
      });
      component.ngOnInit();
    }));

    it('should populate model', async(() => {
      component.model.subscribe(m => {
        expect(m).toEqual(footer);
      });
      component.ngOnInit();
    }));

    it('should populate view', async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        Object.keys(footer).forEach(prop => {
          expect(
            fixture
              .debugElement.query(By.css(`.${prop}`))
              .nativeElement.textContent
          ).toEqual(footer[prop]);
        });
      });
      component.ngOnInit();
    }));

    it('should set pageNumber', () => {
      const pageNumber = 1;
      queryParams.next({ page: pageNumber });
      expect(component.pageNumber).toEqual(pageNumber);
    });

    it('should showDisclaimer on last page', () => {
      queryParams.next({ page: 1, topage: 1 });
      expect(component.showDisclaimer).toBeTruthy();
    });

    it('should not showDisclaimer on non-last page', () => {
      queryParams.next({ page: 1, topage: 2 });
      expect(component.showDisclaimer).toBeFalsy();
    });
  });
});
