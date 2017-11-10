import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { cvFake } from '../../core/cv.fake';
import { CvService } from '../../core/cv.service';
import { expectModelInView, getView } from '../../core/test-helpers';
import { testCvService } from '../../core/test-services';
import { PastJobsComponent } from './past-jobs.component';

describe('PastJobsComponent', () => {
  let component: PastJobsComponent;
  let fixture: ComponentFixture<PastJobsComponent>;
  let cvService: CvService;

  beforeEach(async(() => {
    cvService = testCvService;

    TestBed.configureTestingModule({
      providers: [{ provide: CvService, useValue: cvService }],
      declarations: [PastJobsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call getPastJobs', () => {
      expect(cvService.getPastJobs).toHaveBeenCalled();
    });

    it('should populate model', async(() => {
      component.model.subscribe(m => expect(m).toEqual(cvFake.pastJobs));
      component.ngOnInit();
    }));

    it('should populate view', async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const view = getView(fixture, '#past-jobs');
        expectModelInView(cvFake.pastJobs[0].company, view);
        expectModelInView(cvFake.pastJobs[0].titles[0], view);
        expect(view).toContain(cvFake.pastJobs[0].titles[0].roles[0]);
      });
      component.ngOnInit();
    }));
  });
});
