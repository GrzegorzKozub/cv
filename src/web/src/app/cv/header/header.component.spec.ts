import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';

import { Header } from '../../shared/cv';
import { CvService } from '../../shared/cv.service';
import { testCv } from '../../shared/test-data';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let header: Header;
  let cvService: CvService;

  beforeEach(async(() => {
    header = testCv.header;

    cvService = jasmine.createSpyObj<CvService>('CvService', {
      'getHeader': Observable.of(header)
    });

    TestBed.configureTestingModule({
      providers: [{ provide: CvService, useValue: cvService }],
      declarations: [HeaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call getHeader', () => {
      expect(cvService.getHeader).toHaveBeenCalled();
    });

    it('should populate model', async(() => {
      component.model.subscribe(m => expect(m).toEqual(header));
      component.ngOnInit();
    }));

    it('should populate view', async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const view = fixture
          .debugElement.query(By.css(`.header`))
          .nativeElement.textContent;
        Object.keys(header).forEach(prop => {
          expect(view).toContain(header[prop]);
        });
      });
      component.ngOnInit();
    }));
  });
});
