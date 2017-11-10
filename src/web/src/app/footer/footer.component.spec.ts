import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Footer } from '../core/footer';
import { footerFake } from '../core/footer.fake';
import { FooterService } from '../core/footer.service';
import { Page } from '../core/page';
import { pageFake } from '../core/page.fake';
import { expectModelInView, getView } from '../core/test-helpers';
import { testFooterService } from '../core/test-services';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let page: Page;
  let footer: Footer;
  let footerService: FooterService;

  beforeEach(async(() => {
    page = pageFake;
    footer = footerFake;
    footerService = testFooterService;

    TestBed.configureTestingModule({
      providers: [{ provide: FooterService, useValue: footerService }],
      declarations: [FooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call getPage and getFooter', () => {
      expect(footerService.getPage).toHaveBeenCalled();
      expect(footerService.getFooter).toHaveBeenCalled();
    });

    it('should populate page', () => {
      expect(component.page).toEqual(page);
    });

    it('should populate model', async(() => {
      component.model.subscribe(m => expect(m).toEqual(footer));
      component.ngOnInit();
    }));

    for (const data of [
      { lastPage: false, visibility: 'hidden' },
      { lastPage: true, visibility: 'visible' }
    ]) {
      it(`should make disclaimer ${data.visibility}`, async(() => {
        page.last = data.lastPage;
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(
            fixture
              .debugElement.query(By.css('#footer .disclaimer'))
              .styles['visibility']
          ).toEqual(data.visibility);
        });
        component.ngOnInit();
      }));
    }

    it('should populate view', async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const view = getView(fixture, '#footer');
        expectModelInView(footer, view);
        expect(view).toContain(page.number);
        expect(view).toContain(page.version);
      });
      component.ngOnInit();
    }));
  });
});
