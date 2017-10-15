import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';

import { Footer } from '../shared/footer';
import { FooterService } from '../shared/footer.service';
import { Page } from '../shared/page';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let page: Page;
  let footer: Footer;
  let footerService: FooterService;

  beforeEach(async(() => {
    page = <Page>{ number: 3, last: true };
    footer = <Footer>{ disclaimer: 'disclaimer' };

    footerService = jasmine.createSpyObj<FooterService>('FooterService', {
      'getPage': page,
      'getFooter': Observable.of(footer)
    });

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

    it('should display page number', async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(
          fixture
            .debugElement.query(By.css(`.page-number`))
            .nativeElement.textContent
        ).toContain(page.number);
      });
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
              .debugElement.query(By.css(`.disclaimer`))
              .styles['visibility']
          ).toEqual(data.visibility);
        });
        component.ngOnInit();
      }));
    }

    it('should populate view', async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(
          fixture
            .debugElement.query(By.css(`.disclaimer`))
            .nativeElement.textContent
        ).toContain(footer.disclaimer);
      });
      component.ngOnInit();
    }));
  });
});
