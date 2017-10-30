import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Job } from '../../shared/cv';
import { CvService } from '../../shared/cv.service';
import { testCv } from '../../shared/test-data';
import { expectModelInView, getView } from '../../shared/test-helpers';
import { testCvService } from '../../shared/test-services';
import { PastJobsComponent } from './past-jobs.component';

describe('PastJobsComponent', () => {
  let component: PastJobsComponent;
  let fixture: ComponentFixture<PastJobsComponent>;
  let pastJobs: Job[];
  let cvService: CvService;

  beforeEach(async(() => {
    pastJobs = testCv.pastJobs;
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
      component.model.subscribe(m => expect(m).toEqual(pastJobs));
      component.ngOnInit();
    }));

    it('should populate view', async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const view = getView(fixture, '#past-jobs');
        expectModelInView(pastJobs[0].company, view);
        expectModelInView(pastJobs[0].titles[0], view);
        expect(view).toContain(pastJobs[0].titles[0].roles[0]);
      });
      component.ngOnInit();
    }));
  });
});
