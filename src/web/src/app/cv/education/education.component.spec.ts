import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { cvFake } from '../../core/cv/cv.fake';
import { CvService } from '../../core/cv/cv.service';
import { cvServiceSpy } from '../../core/cv/cv.service.spy';
import { SharedModule } from '../../shared/shared.module';
import { expectModelInView, getView } from '../../shared/test-helpers';
import { EducationComponent } from './education.component';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [{ provide: CvService, useValue: cvServiceSpy }],
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
      expect(cvServiceSpy.getEducation).toHaveBeenCalled();
    });

    it('should populate model', async(() => {
      component.model.subscribe(m => expect(m).toEqual(cvFake.education));
      component.ngOnInit();
    }));

    it('should populate view', async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const view = getView(fixture, '#education');
        expectModelInView(cvFake.education[0].school, view);
        expectModelInView(cvFake.education[0].studies[0], view);
      });
      component.ngOnInit();
    }));
  });
});
