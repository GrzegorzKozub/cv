import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { cvFake } from '../../core/cv/cv.fake';
import { CvService } from '../../core/cv/cv.service';
import { cvServiceSpy } from '../../core/cv/cv.service.spy';
import { SharedModule } from '../../shared/shared.module';
import { expectModelInView, getView } from '../../shared/test-helpers';
import { PastJobsComponent } from './past-jobs.component';

describe('PastJobsComponent', () => {
  let component: PastJobsComponent;
  let fixture: ComponentFixture<PastJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [{ provide: CvService, useValue: cvServiceSpy }],
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
      expect(cvServiceSpy.getPastJobs).toHaveBeenCalled();
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
