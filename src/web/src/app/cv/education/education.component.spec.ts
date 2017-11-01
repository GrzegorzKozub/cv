import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Education } from '../../shared/cv';
import { CvService } from '../../shared/cv.service';
import { testCv } from '../../shared/test-data';
import { expectModelInView, getView } from '../../shared/test-helpers';
import { testCvService } from '../../shared/test-services';
import { EducationComponent } from './education.component';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;
  let education: Education[];
  let cvService: CvService;

  beforeEach(async(() => {
    education = testCv.education;
    cvService = testCvService;

    TestBed.configureTestingModule({
      providers: [{ provide: CvService, useValue: cvService }],
      declarations: [EducationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call getEducation', () => {
      expect(cvService.getEducation).toHaveBeenCalled();
    });

    it('should populate model', async(() => {
      component.model.subscribe(m => expect(m).toEqual(education));
      component.ngOnInit();
    }));

    it('should populate view', async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const view = getView(fixture, '#education');
        expectModelInView(education[0].school, view);
        expectModelInView(education[0].studies[0], view);
      });
      component.ngOnInit();
    }));
  });
});
