import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvComponent } from './cv.component';
import { HeaderComponent } from './header/header.component';
import { RecentJobComponent } from './recent-job/recent-job.component';
import { PastJobsComponent } from './past-jobs/past-jobs.component';
import { NotableProjectsComponent } from './notable-projects/notable-projects.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';

describe('CvComponent', () => {
  let component: CvComponent;
  let fixture: ComponentFixture<CvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CvComponent,
        HeaderComponent,
        RecentJobComponent,
        PastJobsComponent,
        NotableProjectsComponent,
        SkillsComponent,
        EducationComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
