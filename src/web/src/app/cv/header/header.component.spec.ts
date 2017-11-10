import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from '../../core/cv';
import { CvService } from '../../core/cv.service';
import { testCv } from '../../core/test-data';
import { expectModelInView, getView } from '../../core/test-helpers';
import { testCvService } from '../../core/test-services';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let header: Header;
  let cvService: CvService;

  beforeEach(async(() => {
    header = testCv.header;
    cvService = testCvService;

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
        expectModelInView(header, getView(fixture, '#header'));
      });
      component.ngOnInit();
    }));
  });
});
