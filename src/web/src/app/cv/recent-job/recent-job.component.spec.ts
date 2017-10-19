import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';

import { Job } from '../../shared/cv';
import { CvService } from '../../shared/cv.service';
import { testCv } from '../../shared/test-data';
import { RecentJobComponent } from './recent-job.component';

describe('RecentJobComponent', () => {
  let component: RecentJobComponent;
  let fixture: ComponentFixture<RecentJobComponent>;
  let recentJob: Job;
  let cvService: CvService;

  beforeEach(async(() => {
    recentJob = testCv.recentJob;

    cvService = jasmine.createSpyObj<CvService>('CvService', {
      'getRecentJob': Observable.of(recentJob)
    });

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
        const view = fixture
          .debugElement.query(By.css('#recent-job'))
          .nativeElement.textContent;
        Object.keys(recentJob.company).forEach(prop => {
          expect(view).toContain(recentJob.company[prop]);
        });
        Object.keys(recentJob.titles[0]).forEach(prop => {
          expect(view).toContain(recentJob.titles[0][prop]);
        });
        expect(view).toContain(recentJob.titles[0].roles[0]);
      });
      component.ngOnInit();
    }));
  });
});
