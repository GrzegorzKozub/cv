import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Job } from '../../shared/cv';
import { CvService } from '../../shared/cv.service';
import { testCv } from '../../shared/test-data';
import { expectModelInView, getView } from '../../shared/test-helpers';
import { testCvService } from '../../shared/test-services';
import { RecentJobComponent } from './recent-job.component';

describe('RecentJobComponent', () => {
  let component: RecentJobComponent;
  let fixture: ComponentFixture<RecentJobComponent>;
  let recentJob: Job;
  let cvService: CvService;

  beforeEach(async(() => {
    recentJob = testCv.recentJob;
    cvService = testCvService;

    TestBed.configureTestingModule({
      providers: [{ provide: CvService, useValue: cvService }],
      declarations: [RecentJobComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call getRecentJob', () => {
      expect(cvService.getRecentJob).toHaveBeenCalled();
    });

    it('should populate model', async(() => {
      component.model.subscribe(m => expect(m).toEqual(recentJob));
      component.ngOnInit();
    }));

    it('should populate view', async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const view = getView(fixture, '#recent-job');
        expectModelInView(recentJob.company, view);
        expectModelInView(recentJob.titles[0], view);
        expect(view).toContain(recentJob.titles[0].roles[0]);
      });
      component.ngOnInit();
    }));
  });
});
