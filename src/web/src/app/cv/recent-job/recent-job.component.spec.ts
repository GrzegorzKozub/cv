import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { cvFake } from '../../core/cv.fake';
import { CvService } from '../../core/cv.service';
import { cvServiceSpy } from '../../core/cv.service.spy';
import { expectModelInView, getView } from '../../core/test-helpers';
import { RecentJobComponent } from './recent-job.component';

describe('RecentJobComponent', () => {
  let component: RecentJobComponent;
  let fixture: ComponentFixture<RecentJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: CvService, useValue: cvServiceSpy }],
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
      expect(cvServiceSpy.getRecentJob).toHaveBeenCalled();
    });

    it('should populate model', async(() => {
      component.model.subscribe(m => expect(m).toEqual(cvFake.recentJob));
      component.ngOnInit();
    }));

    it('should populate view', async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const view = getView(fixture, '#recent-job');
        expectModelInView(cvFake.recentJob.company, view);
        expectModelInView(cvFake.recentJob.titles[0], view);
        expect(view).toContain(cvFake.recentJob.titles[0].roles[0]);
      });
      component.ngOnInit();
    }));
  });
});
